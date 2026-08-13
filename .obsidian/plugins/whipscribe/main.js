var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => WhipScribePlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian5 = require("obsidian");

// settings.ts
var import_obsidian = require("obsidian");

// local_whisper.ts
var import_child_process = require("child_process");
var import_fs = require("fs");
var os = __toESM(require("os"));
var path = __toESM(require("path"));
var DEFAULT_BINARY_CANDIDATES = [
  "/opt/homebrew/bin/whisper-cli",
  "/opt/homebrew/bin/whisper-cpp",
  "/usr/local/bin/whisper-cli",
  "/usr/local/bin/whisper-cpp"
];
async function detectWhisperBinary() {
  for (const p of DEFAULT_BINARY_CANDIDATES) {
    try {
      await import_fs.promises.access(p, import_fs.promises.constants.X_OK);
      return p;
    } catch (e) {
    }
  }
  return null;
}
var LocalWhisperError = class extends Error {
  constructor(message, stderr) {
    super(message);
    this.stderr = stderr;
  }
};
var LocalWhisperRunner = class {
  constructor(config) {
    this.config = config;
  }
  async transcribe(audioBuf, onProgress) {
    if (!this.config.binaryPath) {
      throw new LocalWhisperError(
        "whisper.cpp binary path not set \u2014 install via `brew install whisper-cpp` or set the path in settings."
      );
    }
    if (!this.config.modelPath) {
      throw new LocalWhisperError(
        "whisper.cpp model path not set \u2014 download a ggml-*.bin model and point the setting at it."
      );
    }
    try {
      await import_fs.promises.access(this.config.binaryPath, import_fs.promises.constants.X_OK);
    } catch (e) {
      throw new LocalWhisperError(
        `whisper binary not executable at ${this.config.binaryPath}`
      );
    }
    try {
      await import_fs.promises.access(this.config.modelPath, import_fs.promises.constants.R_OK);
    } catch (e) {
      throw new LocalWhisperError(
        `whisper model not readable at ${this.config.modelPath}`
      );
    }
    onProgress == null ? void 0 : onProgress("decoding");
    const wavBytes = await decodeToWav16kMono(audioBuf);
    const tmpBase = await import_fs.promises.mkdtemp(path.join(os.tmpdir(), "whipscribe-"));
    const wavPath = path.join(tmpBase, "input.wav");
    const outPrefix = path.join(tmpBase, "output");
    const jsonPath = `${outPrefix}.json`;
    try {
      await import_fs.promises.writeFile(wavPath, wavBytes);
      const args = [
        "-m",
        this.config.modelPath,
        "-f",
        wavPath,
        "-of",
        outPrefix,
        "-oj",
        "-np"
      ];
      if (this.config.threads > 0) {
        args.push("-t", String(this.config.threads));
      }
      if (this.config.language && this.config.language !== "auto") {
        args.push("-l", this.config.language);
      }
      const extras = this.config.extraArgs.trim();
      if (extras)
        args.push(...tokenize(extras));
      onProgress == null ? void 0 : onProgress("running whisper.cpp");
      await runProcess(this.config.binaryPath, args);
      onProgress == null ? void 0 : onProgress("parsing");
      const raw = await import_fs.promises.readFile(jsonPath, "utf8");
      return parseWhisperJson(raw);
    } finally {
      import_fs.promises.rm(tmpBase, { recursive: true, force: true }).catch(() => {
      });
    }
  }
};
function runProcess(bin, args) {
  return new Promise((resolve, reject) => {
    (0, import_child_process.execFile)(
      bin,
      args,
      { maxBuffer: 64 * 1024 * 1024, timeout: 2 * 60 * 60 * 1e3 },
      (err, _stdout, stderr) => {
        if (err) {
          const tail = (stderr || "").split("\n").slice(-10).join("\n");
          reject(
            new LocalWhisperError(
              `whisper.cpp exited with error: ${err.message}`,
              tail
            )
          );
          return;
        }
        resolve();
      }
    );
  });
}
function parseWhisperJson(raw) {
  const obj = JSON.parse(raw);
  const entries = Array.isArray(obj.transcription) ? obj.transcription : [];
  const segments = entries.map((e) => {
    var _a, _b, _c;
    return {
      start: msFromOffset((_a = e.offsets) == null ? void 0 : _a.from),
      end: msFromOffset((_b = e.offsets) == null ? void 0 : _b.to),
      text: ((_c = e.text) != null ? _c : "").trim(),
      speaker: e.speaker_turn_next ? "Speaker ?" : void 0
    };
  });
  const text = segments.map((s) => s.text).join(" ").trim();
  const duration = segments.length > 0 ? segments[segments.length - 1].end : void 0;
  return {
    text,
    wordCount: text ? text.split(/\s+/).length : 0,
    duration,
    segments: segments.length ? segments : void 0
  };
}
function msFromOffset(ms) {
  return typeof ms === "number" ? ms / 1e3 : 0;
}
function tokenize(s) {
  var _a, _b;
  return (_b = (_a = s.match(/"[^"]*"|\S+/g)) == null ? void 0 : _a.map((t) => t.replace(/^"|"$/g, ""))) != null ? _b : [];
}
async function decodeToWav16kMono(buf) {
  const decodeCtx = new AudioContext();
  let decoded;
  try {
    decoded = await decodeCtx.decodeAudioData(buf.slice(0));
  } finally {
    decodeCtx.close().catch(() => {
    });
  }
  const targetRate = 16e3;
  const frames = Math.max(1, Math.ceil(decoded.duration * targetRate));
  const offline = new OfflineAudioContext(1, frames, targetRate);
  const src = offline.createBufferSource();
  src.buffer = decoded;
  src.connect(offline.destination);
  src.start(0);
  const rendered = await offline.startRendering();
  const pcm = rendered.getChannelData(0);
  return encodeWav16(pcm, targetRate);
}
function encodeWav16(pcm, sampleRate) {
  const byteLength = 44 + pcm.length * 2;
  const buf = new ArrayBuffer(byteLength);
  const view = new DataView(buf);
  writeString(view, 0, "RIFF");
  view.setUint32(4, byteLength - 8, true);
  writeString(view, 8, "WAVE");
  writeString(view, 12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeString(view, 36, "data");
  view.setUint32(40, pcm.length * 2, true);
  for (let i = 0; i < pcm.length; i++) {
    const s = Math.max(-1, Math.min(1, pcm[i]));
    view.setInt16(44 + i * 2, s < 0 ? s * 32768 : s * 32767, true);
  }
  return new Uint8Array(buf);
}
function writeString(view, offset, s) {
  for (let i = 0; i < s.length; i++)
    view.setUint8(offset + i, s.charCodeAt(i));
}

// settings.ts
var DEFAULT_SETTINGS = {
  backend: "cloud",
  apiKey: "",
  defaultFormat: "plain",
  speakerDiarization: false,
  autoInsert: true,
  audioFolder: "Audio",
  localBinaryPath: "",
  localModelPath: "",
  localLanguage: "auto",
  localThreads: 0,
  localExtraArgs: ""
};
var WhipScribeSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    new import_obsidian.Setting(containerEl).setName("Transcription backend").setDesc("Cloud sends audio to whipscribe.com. Local runs whisper.cpp on this machine.").addDropdown(
      (d) => d.addOptions({ cloud: "Cloud", local: "Local (whisper.cpp)" }).setValue(this.plugin.settings.backend).onChange(async (v) => {
        this.plugin.settings.backend = v;
        await this.plugin.saveSettings();
        this.display();
      })
    );
    if (this.plugin.settings.backend === "cloud") {
      this.renderCloud(containerEl);
    } else {
      this.renderLocal(containerEl);
    }
    this.renderOutput(containerEl);
  }
  renderCloud(root) {
    new import_obsidian.Setting(root).setName("Cloud").setHeading();
    new import_obsidian.Setting(root).setName("API key").setDesc("Optional. Anonymous use is supported; a key raises rate limits. Keys start with `ws_`.").addText(
      (t) => t.setPlaceholder("Paste API key").setValue(this.plugin.settings.apiKey).onChange(async (v) => {
        this.plugin.settings.apiKey = v.trim();
        await this.plugin.saveSettings();
      })
    );
  }
  renderLocal(root) {
    new import_obsidian.Setting(root).setName("Local (whisper.cpp)").setHeading();
    const hint = root.createEl("p", {
      text: "Install whisper.cpp (macOS: `brew install whisper-cpp`) and download a ggml-*.bin model from huggingface.co/ggerganov/whisper.cpp."
    });
    hint.addClass("whipscribe-hint");
    new import_obsidian.Setting(root).setName("Binary path").setDesc("Absolute path to the whisper.cpp executable (e.g. `/opt/homebrew/bin/whisper-cli`).").addText(
      (t) => t.setPlaceholder("Absolute path").setValue(this.plugin.settings.localBinaryPath).onChange(async (v) => {
        this.plugin.settings.localBinaryPath = v.trim();
        await this.plugin.saveSettings();
      })
    ).addButton(
      (b) => b.setButtonText("Auto-detect").onClick(async () => {
        const found = await detectWhisperBinary();
        if (!found) {
          new import_obsidian.Notice("No whisper.cpp binary found in common locations.");
          return;
        }
        this.plugin.settings.localBinaryPath = found;
        await this.plugin.saveSettings();
        new import_obsidian.Notice(`Found: ${found}`);
        this.display();
      })
    );
    new import_obsidian.Setting(root).setName("Model path").setDesc("Absolute path to a ggml-*.bin model file.").addText(
      (t) => t.setPlaceholder("~/models/ggml-base.en.bin").setValue(this.plugin.settings.localModelPath).onChange(async (v) => {
        this.plugin.settings.localModelPath = v.trim();
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(root).setName("Language").setDesc("Language code (en, es, fr, ...) or leave blank for auto-detect.").addText(
      (t) => t.setPlaceholder("Language code or blank for auto").setValue(this.plugin.settings.localLanguage).onChange(async (v) => {
        this.plugin.settings.localLanguage = v.trim() || "auto";
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(root).setName("Threads").setDesc("0 = whisper.cpp default (typically 4).").addText(
      (t) => t.setPlaceholder("0").setValue(String(this.plugin.settings.localThreads)).onChange(async (v) => {
        const n = parseInt(v, 10);
        this.plugin.settings.localThreads = Number.isFinite(n) && n >= 0 ? n : 0;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(root).setName("Extra args").setDesc("Passed through to whisper-cli verbatim (advanced). Example: `-tdrz --beam-size 5`.").addText(
      (t) => t.setPlaceholder("").setValue(this.plugin.settings.localExtraArgs).onChange(async (v) => {
        this.plugin.settings.localExtraArgs = v;
        await this.plugin.saveSettings();
      })
    );
  }
  renderOutput(root) {
    new import_obsidian.Setting(root).setName("Output").setHeading();
    new import_obsidian.Setting(root).setName("Default output format").addDropdown(
      (d) => d.addOptions({
        plain: "Plain text",
        bullets: "Bullet list",
        action_items: "Action items",
        chapters: "Timestamped chapters"
      }).setValue(this.plugin.settings.defaultFormat).onChange(async (v) => {
        this.plugin.settings.defaultFormat = v;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(root).setName("Speaker diarization").setDesc(
      "Label speakers when the transcript contains speaker segments. Cloud only; local whisper.cpp diarization needs stereo input or a tinydiarize model."
    ).addToggle(
      (t) => t.setValue(this.plugin.settings.speakerDiarization).onChange(async (v) => {
        this.plugin.settings.speakerDiarization = v;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(root).setName("Insert at cursor").setDesc("Off = create a new note under the transcripts folder for each transcript.").addToggle(
      (t) => t.setValue(this.plugin.settings.autoInsert).onChange(async (v) => {
        this.plugin.settings.autoInsert = v;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(root).setName("Recording folder").setDesc("Where hotkey-recorded audio is saved in the vault.").addText(
      (t) => t.setPlaceholder("Audio").setValue(this.plugin.settings.audioFolder).onChange(async (v) => {
        this.plugin.settings.audioFolder = v.trim() || "Audio";
        await this.plugin.saveSettings();
      })
    );
  }
};

// recorder.ts
var AudioRecorder = class {
  constructor() {
    this.mediaRecorder = null;
    this.chunks = [];
    this.stream = null;
  }
  isRecording() {
    var _a;
    return ((_a = this.mediaRecorder) == null ? void 0 : _a.state) === "recording";
  }
  async start() {
    if (this.isRecording())
      return;
    this.stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mime = preferredMime();
    const rec = mime ? new MediaRecorder(this.stream, { mimeType: mime }) : new MediaRecorder(this.stream);
    this.chunks = [];
    rec.ondataavailable = (e) => {
      if (e.data.size > 0)
        this.chunks.push(e.data);
    };
    rec.start();
    this.mediaRecorder = rec;
  }
  stop() {
    return new Promise((resolve, reject) => {
      const rec = this.mediaRecorder;
      if (!rec)
        return reject(new Error("not recording"));
      rec.onstop = () => {
        var _a;
        const type = rec.mimeType || "audio/webm";
        const blob = new Blob(this.chunks, { type });
        this.chunks = [];
        this.mediaRecorder = null;
        (_a = this.stream) == null ? void 0 : _a.getTracks().forEach((t) => t.stop());
        this.stream = null;
        resolve(blob);
      };
      rec.onerror = (e) => {
        const msg = (e == null ? void 0 : e.message) || "recorder error";
        reject(new Error(msg));
      };
      rec.stop();
    });
  }
};
function preferredMime() {
  const candidates = [
    "audio/webm;codecs=opus",
    "audio/webm",
    "audio/mp4"
  ];
  for (const c of candidates) {
    if (typeof MediaRecorder !== "undefined" && MediaRecorder.isTypeSupported(c)) {
      return c;
    }
  }
  return void 0;
}

// api.ts
var import_obsidian2 = require("obsidian");
var BASE = "https://whipscribe.com/api/v1";
var WhipScribeApi = class {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.claimToken = null;
  }
  async upload(filename, blob) {
    var _a, _b, _c;
    const boundary = "----WhipScribeBoundary" + Math.random().toString(16).slice(2);
    const body = await buildMultipart(boundary, filename, blob);
    const headers = {
      "Content-Type": `multipart/form-data; boundary=${boundary}`,
      "Idempotency-Key": cryptoRandom()
    };
    if (this.apiKey)
      headers["X-API-Key"] = this.apiKey;
    const res = await httpJson({
      url: `${BASE}/transcribe`,
      method: "POST",
      headers,
      body
    });
    const jobId = (_a = res.job_id) != null ? _a : res.id;
    if (!jobId)
      throw new Error("server did not return a job id");
    this.claimToken = (_b = res.claim_token) != null ? _b : null;
    return { jobId, claimToken: (_c = this.claimToken) != null ? _c : void 0 };
  }
  async status(jobId) {
    const res = await httpJson({
      url: `${BASE}/jobs/${encodeURIComponent(jobId)}`,
      method: "GET",
      headers: this.authHeaders()
    });
    return {
      status: res.status,
      progress: typeof res.progress === "number" ? res.progress : void 0,
      error: res.error
    };
  }
  async waitForDone(jobId, onProgress, opts = {}) {
    var _a, _b, _c;
    const interval = (_a = opts.intervalMs) != null ? _a : 2e3;
    const timeout = (_b = opts.timeoutMs) != null ? _b : 30 * 60 * 1e3;
    const start = Date.now();
    let last = "";
    while (true) {
      const s = await this.status(jobId);
      const key = `${s.status}:${(_c = s.progress) != null ? _c : ""}`;
      if (key !== last) {
        onProgress == null ? void 0 : onProgress(s.status, s.progress);
        last = key;
      }
      if (s.status === "done" || s.status === "failed")
        return s;
      if (Date.now() - start > timeout) {
        throw new Error("timed out waiting for transcription");
      }
      await sleep(interval);
    }
  }
  async getResult(jobId) {
    var _a;
    const res = await httpJson({
      url: `${BASE}/jobs/${encodeURIComponent(jobId)}/result?format=json`,
      method: "GET",
      headers: this.authHeaders()
    });
    const text = ((_a = res.text) != null ? _a : "").toString();
    const segments = Array.isArray(res.segments) ? res.segments.map((s) => {
      var _a2;
      return {
        start: Number(s.start) || 0,
        end: Number(s.end) || 0,
        text: ((_a2 = s.text) != null ? _a2 : "").toString().trim(),
        speaker: s.speaker ? String(s.speaker) : void 0
      };
    }) : void 0;
    return {
      text,
      wordCount: text.trim() ? text.trim().split(/\s+/).length : 0,
      duration: typeof res.duration === "number" ? res.duration : void 0,
      segments
    };
  }
  authHeaders() {
    const h = {};
    if (this.apiKey)
      h["X-API-Key"] = this.apiKey;
    if (this.claimToken)
      h["X-Claim-Token"] = this.claimToken;
    return h;
  }
};
async function httpJson(params) {
  const res = await (0, import_obsidian2.requestUrl)({
    url: params.url,
    method: params.method,
    headers: params.headers,
    body: params.body,
    throw: false
  });
  if (res.status >= 200 && res.status < 300) {
    try {
      return res.json;
    } catch (e) {
      return {};
    }
  }
  let message = `HTTP ${res.status}`;
  try {
    const body = res.json;
    if (body == null ? void 0 : body.error)
      message = body.error;
    else if (body == null ? void 0 : body.message)
      message = body.message;
  } catch (e) {
    if (res.text)
      message = `HTTP ${res.status}: ${res.text.slice(0, 200)}`;
  }
  throw new Error(message);
}
async function buildMultipart(boundary, filename, blob) {
  const encoder = new TextEncoder();
  const header = encoder.encode(
    `--${boundary}\r
Content-Disposition: form-data; name="file"; filename="${escapeFilename(
      filename
    )}"\r
Content-Type: ${blob.type || "application/octet-stream"}\r
\r
`
  );
  const footer = encoder.encode(`\r
--${boundary}--\r
`);
  const payload = new Uint8Array(await blob.arrayBuffer());
  const out = new Uint8Array(header.length + payload.length + footer.length);
  out.set(header, 0);
  out.set(payload, header.length);
  out.set(footer, header.length + payload.length);
  return out.buffer;
}
function escapeFilename(name) {
  return name.replace(/["\\\r\n]/g, "_");
}
function cryptoRandom() {
  const arr = new Uint8Array(16);
  crypto.getRandomValues(arr);
  return Array.from(arr).map((b) => b.toString(16).padStart(2, "0")).join("");
}
function sleep(ms) {
  return new Promise((r) => activeWindow.setTimeout(r, ms));
}

// inserter.ts
var import_obsidian3 = require("obsidian");
function formatTranscript(result, opts) {
  const stamp = new Date().toISOString().replace("T", " ").slice(0, 16);
  const header = `## Transcription
*Transcribed from ${opts.sourceName} on ${stamp}*

`;
  if (opts.speakerDiarization && hasSpeakers(result.segments)) {
    return header + renderSpeakers(result.segments);
  }
  switch (opts.format) {
    case "bullets":
      return header + renderBullets(result.text);
    case "action_items":
      return `## Action Items
*Extracted from ${opts.sourceName}*

` + renderActionItems(result.text);
    case "chapters":
      return header + (result.segments && result.segments.length ? renderChapters(result.segments) : result.text.trim() + "\n");
    case "plain":
    default:
      return header + result.text.trim() + "\n";
  }
}
function hasSpeakers(segs) {
  return !!segs && segs.some((s) => !!s.speaker);
}
function renderSpeakers(segs) {
  const lines = [];
  let current = "";
  let buffer = [];
  for (const s of segs) {
    const label = s.speaker || "Speaker ?";
    if (label !== current) {
      if (buffer.length)
        lines.push(`**${current}:** ${buffer.join(" ")}`);
      buffer = [s.text.trim()];
      current = label;
    } else {
      buffer.push(s.text.trim());
    }
  }
  if (buffer.length)
    lines.push(`**${current}:** ${buffer.join(" ")}`);
  return lines.join("\n\n") + "\n";
}
function renderBullets(text) {
  const sentences = splitSentences(text);
  if (!sentences.length)
    return "- (empty transcript)\n";
  return sentences.map((s) => `- ${s}`).join("\n") + "\n";
}
function renderActionItems(text) {
  const sentences = splitSentences(text);
  const cues = /\b(follow up|schedule|review|send|email|call|set up|prepare|draft|finish|ship|fix|update|remind|look into|investigate|assign|share|sync|decide|book|order|need to|should|must|action item|todo)\b/i;
  const items = sentences.filter((s) => cues.test(s));
  if (!items.length) {
    return "- [ ] (No action items detected \u2014 review transcript manually.)\n";
  }
  return items.map((s) => `- [ ] ${s}`).join("\n") + "\n";
}
function renderChapters(segs) {
  const chunkSec = 120;
  let cursor = 0;
  const out = [];
  let buf = [];
  for (const s of segs) {
    if (s.start - cursor >= chunkSec && buf.length) {
      out.push(chapter(cursor, buf.join(" ")));
      cursor = s.start;
      buf = [];
    }
    buf.push(s.text.trim());
  }
  if (buf.length)
    out.push(chapter(cursor, buf.join(" ")));
  return out.join("\n\n") + "\n";
}
function chapter(start, text) {
  return `### ${formatClock(start)}
${text}`;
}
function formatClock(sec) {
  const h = Math.floor(sec / 3600);
  const m = Math.floor(sec % 3600 / 60);
  const s = Math.floor(sec % 60);
  return h > 0 ? `${h}:${pad(m)}:${pad(s)}` : `${pad(m)}:${pad(s)}`;
}
function pad(n) {
  return n.toString().padStart(2, "0");
}
function splitSentences(text) {
  return text.replace(/\s+/g, " ").split(/(?<=[.!?])\s+/).map((s) => s.trim()).filter(Boolean);
}
async function insertTranscript(app, body, opts) {
  if (!opts.createNewNote) {
    const view = app.workspace.getActiveViewOfType(import_obsidian3.MarkdownView);
    if (view) {
      const editor = view.editor;
      editor.replaceRange(body, editor.getCursor());
      return;
    }
    new import_obsidian3.Notice("No active note \u2014 creating a new one.");
  }
  const safeName = opts.sourceName.replace(/\.[^.]+$/, "").replace(/[\\/:*?"<>|]/g, "_");
  const stamp = new Date().toISOString().slice(0, 10);
  const path2 = await uniquePath(app, `Transcripts/${safeName}-${stamp}.md`);
  const file = await app.vault.create(path2, body);
  await app.workspace.getLeaf(true).openFile(file);
}
async function uniquePath(app, desired) {
  const parent = desired.split("/").slice(0, -1).join("/");
  if (parent && !await app.vault.adapter.exists(parent)) {
    await app.vault.createFolder(parent);
  }
  let p = desired;
  let i = 1;
  while (await app.vault.adapter.exists(p)) {
    p = desired.replace(/\.md$/, ` (${i}).md`);
    i++;
  }
  return p;
}

// ui.ts
var import_obsidian4 = require("obsidian");
var StatusBar = class {
  constructor(el) {
    this.el = el;
    el.addClass("whipscribe-statusbar");
  }
  set(text, recording = false) {
    this.el.setText(text);
    this.el.toggleClass("is-recording", recording);
  }
  clear() {
    this.el.setText("");
    this.el.removeClass("is-recording");
  }
};
function progressNotice(initial) {
  const notice = new import_obsidian4.Notice(initial, 0);
  return {
    update: (text) => {
      notice.setMessage(text);
    },
    done: () => {
      notice.hide();
    }
  };
}

// main.ts
var SUPPORTED_EXT = ["mp3", "m4a", "wav", "mp4", "webm", "m4v", "ogg", "flac"];
var MAX_FILE_BYTES = 500 * 1024 * 1024;
var EXT_MIME = {
  mp3: "audio/mpeg",
  m4a: "audio/mp4",
  wav: "audio/wav",
  ogg: "audio/ogg",
  flac: "audio/flac",
  mp4: "video/mp4",
  webm: "video/webm",
  m4v: "video/mp4"
};
var WhipScribePlugin = class extends import_obsidian5.Plugin {
  constructor() {
    super(...arguments);
    this.recorder = new AudioRecorder();
  }
  async onload() {
    await this.loadSettings();
    this.statusBar = new StatusBar(this.addStatusBarItem());
    this.addSettingTab(new WhipScribeSettingTab(this.app, this));
    this.addCommand({
      id: "toggle-recording",
      name: "Start or stop recording",
      callback: () => {
        void this.toggleRecording();
      }
    });
    this.addCommand({
      id: "transcribe-active-file",
      name: "Transcribe the active audio or video file",
      checkCallback: (checking) => {
        const file = this.app.workspace.getActiveFile();
        if (!file || !SUPPORTED_EXT.includes(file.extension))
          return false;
        if (!checking)
          void this.transcribeVaultFile(file);
        return true;
      }
    });
    this.registerEvent(
      this.app.workspace.on("file-menu", (menu, file) => {
        if (!(file instanceof import_obsidian5.TFile))
          return;
        if (!SUPPORTED_EXT.includes(file.extension))
          return;
        menu.addItem((item) => {
          item.setTitle("Transcribe audio or video").setIcon("mic").onClick(() => {
            void this.transcribeVaultFile(file);
          });
        });
      })
    );
  }
  onunload() {
    var _a;
    if (this.recorder.isRecording()) {
      this.recorder.stop().catch(() => {
      });
    }
    (_a = this.statusBar) == null ? void 0 : _a.clear();
  }
  async loadSettings() {
    const data = await this.loadData();
    this.settings = Object.assign({}, DEFAULT_SETTINGS, data != null ? data : {});
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
  async toggleRecording() {
    if (this.recorder.isRecording()) {
      this.statusBar.set("Saving recording...");
      try {
        const blob = await this.recorder.stop();
        this.statusBar.clear();
        const file = await this.saveRecordingBlob(blob);
        await this.transcribeVaultFile(file);
      } catch (err) {
        this.statusBar.clear();
        new import_obsidian5.Notice(`Recording failed \u2014 ${humanErr(err)}`);
      }
      return;
    }
    try {
      await this.recorder.start();
      this.statusBar.set("\u{1F534} Recording \u2014 run the command again to stop", true);
    } catch (err) {
      new import_obsidian5.Notice(`Cannot record \u2014 ${humanErr(err)}`);
    }
  }
  async saveRecordingBlob(blob) {
    const folder = (this.settings.audioFolder || "Audio").replace(/^\/+|\/+$/g, "");
    if (!await this.app.vault.adapter.exists(folder)) {
      await this.app.vault.createFolder(folder);
    }
    const ts = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
    const ext = blob.type.includes("mp4") ? "mp4" : "webm";
    const path2 = `${folder}/whipscribe-${ts}.${ext}`;
    const buf = await blob.arrayBuffer();
    return await this.app.vault.createBinary(path2, buf);
  }
  async transcribeVaultFile(file) {
    if (file.stat.size > MAX_FILE_BYTES) {
      new import_obsidian5.Notice(`${file.name} is larger than 500 MB.`);
      return;
    }
    const progress = progressNotice(`Loading ${file.name}...`);
    try {
      const buf = await this.app.vault.readBinary(file);
      const result = this.settings.backend === "local" ? await this.runLocal(buf, file.name, (s) => progress.update(s)) : await this.runCloud(buf, file.name, (s) => progress.update(s));
      progress.done();
      const body = formatTranscript(result, {
        sourceName: file.name,
        format: this.settings.defaultFormat,
        speakerDiarization: this.settings.speakerDiarization
      });
      await insertTranscript(this.app, body, {
        createNewNote: !this.settings.autoInsert,
        sourceName: file.name
      });
      new import_obsidian5.Notice(`Transcription done \u2014 ${result.wordCount} words`);
    } catch (err) {
      progress.done();
      if (err instanceof LocalWhisperError && err.stderr) {
        console.error("[WhipScribe] whisper.cpp stderr:", err.stderr);
      }
      new import_obsidian5.Notice(`Transcription failed \u2014 ${humanErr(err)}`);
    }
  }
  async runCloud(buf, filename, update) {
    var _a, _b;
    const api = new WhipScribeApi(this.settings.apiKey);
    const ext = (_b = (_a = filename.split(".").pop()) == null ? void 0 : _a.toLowerCase()) != null ? _b : "";
    const mime = EXT_MIME[ext] || "application/octet-stream";
    const blob = new Blob([buf], { type: mime });
    update(`Uploading ${filename}...`);
    const submit = await this.withRetry(() => api.upload(filename, blob));
    update("Queued \u2014 transcribing...");
    const terminal = await api.waitForDone(submit.jobId, (status, pct) => {
      update(`${status}${pct != null ? ` ${pct}%` : ""}`);
    });
    if (terminal.status !== "done") {
      throw new Error(
        `job ${terminal.status}${terminal.error ? ` \u2014 ${terminal.error}` : ""}`
      );
    }
    return await this.withRetry(() => api.getResult(submit.jobId));
  }
  async runLocal(buf, filename, update) {
    const runner = new LocalWhisperRunner({
      binaryPath: this.settings.localBinaryPath,
      modelPath: this.settings.localModelPath,
      language: this.settings.localLanguage,
      threads: this.settings.localThreads,
      extraArgs: this.settings.localExtraArgs
    });
    update(`Decoding ${filename}...`);
    return await runner.transcribe(buf, (stage) => {
      update(`${stage}...`);
    });
  }
  async withRetry(fn, attempts = 3) {
    let last;
    for (let i = 0; i < attempts; i++) {
      try {
        return await fn();
      } catch (err) {
        last = err;
        if (!isTransient(err) || i === attempts - 1)
          throw err;
        await new Promise((r) => activeWindow.setTimeout(r, 500 * Math.pow(2, i)));
      }
    }
    throw last;
  }
};
function isTransient(err) {
  const msg = err instanceof Error ? err.message : String(err);
  return /HTTP 5\d\d|timed out|network|ECONN|ETIMEDOUT/i.test(msg);
}
function humanErr(err) {
  if (err instanceof Error)
    return err.message;
  return String(err);
}
