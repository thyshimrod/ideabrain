# Whisper for Obsidian — Remote and Local Transcription

This repository is a fork of the original **Whisper Recorder** plugin by **Nik Danilov**.
The fork preserves the original functionality while adding a complete **local transcription backend** powered by **whisper.cpp** with Metal acceleration on macOS.

The goal is to maintain the same user interface while allowing users to choose between:

* **Remote transcription using OpenAI’s Whisper API**, or
* **Local transcription using whisper.cpp** (offline, private, GPU-accelerated)

Both backends share the same recording features, note-creation logic, and command palette actions.

---

## 1. Overview of Fork Improvements

This fork adds:

### Local whisper.cpp backend

* Integration with `whisper-cli`
* Metal GPU acceleration on Apple Silicon
* Support for ggml/gguf Whisper models

### Backend selector

Choose between:

* OpenAI Whisper API (remote)
* Local whisper.cpp (offline)

### New settings for local mode

* Local model path
* whisper-cli binary path
* ffmpeg binary path

### Refactors

* Unified `AudioHandler` for dual backends
* Improved error handling and temp file management
* Full TypeScript corrections and improved reliability
* Licensing and attribution notes for fork modifications

The rest of the plugin behaves the same as the original project.

---

## 2. Installing This Fork

To install this plugin manually:

1. Clone or download this repository into:

   ```
   <vault>/.obsidian/plugins/local-whisper
   ```
2. Reload community plugins in Obsidian.
3. Open **Settings → Local Whisper** and configure your backend.

You can also symlink during development:

```bash
cd <vault>/.obsidian/plugins
ln -s /Users/<you>/Development/Projects/local-whisper local-whisper
```

---

## 3. Installing a Local Whisper Model (whisper.cpp)

Local transcription requires a Whisper model in **ggml** or **gguf** format
(*not* the PyTorch `.pt` models used by OpenAI’s Python Whisper).

### 3.1 Create a dedicated model directory

Avoid paths with spaces:

```bash
mkdir -p ~/models/whisper
```

### 3.2 Download a model using whisper.cpp’s script (recommended)

```bash
git clone https://github.com/ggml-org/whisper.cpp.git
cd whisper.cpp
sh ./models/download-ggml-model.sh base.en
mv ./models/ggml-base.en.bin ~/models/whisper/ggml-base.en.bin
```

You should see a file roughly **140 MB** in size.

### 3.3 Alternative: HuggingFace direct download

```bash
cd ~/models/whisper
curl -L -o ggml-base.en.bin \
  https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-base.en.bin?download=1
```

If the result is only a few kilobytes, the download failed—use the script method above.

### 3.4 Configure model + binaries in the plugin

In **Settings → Local Whisper Backend**:

**Local Whisper Model Path**

```
/Users/<you>/models/whisper/ggml-base.en.bin
```

**whisper-cli binary**

```
/opt/homebrew/bin/whisper-cli
```

**ffmpeg binary**

```
/opt/homebrew/bin/ffmpeg
```

(Install with `brew install whisper-cpp` and `brew install ffmpeg`.)

### 3.5 Common issues

* Models must be **ggml/gguf**, not `.pt`
* Paths containing spaces may fail under Electron’s process model
* Models must be the correct size (e.g., ~140 MB for base.en)
* MediaRecorder outputs webm/m4a → `ffmpeg` converts to 16 kHz WAV
* Always verify `whisper-cli` works in Terminal before using the plugin

### 3.6 Testing whisper-cli manually

```bash
whisper-cli \
  -m ~/models/whisper/ggml-base.en.bin \
  -f <path-to-wav> \
  -otxt
```

If this succeeds, the local backend is correctly installed.

---

## 4. Using the Plugin

### Start recording

Use the ribbon icon or run the command **Start/Stop Recording**.
Press Stop to transcribe and save.

### Upload existing files

Run **Upload Audio File** from the command palette.

### Note creation

Depending on settings:

* The plugin creates a new note and embeds the audio, or
* Inserts transcript text at the cursor position in the active note.

The experience is identical for local and remote backends.

---

## 5. Remote Whisper API Settings (Original Functionality)

* **API Key**: Required for OpenAI’s Whisper API
* **API URL**: Custom endpoint, defaults to OpenAI
* **Model**: Whisper model name for API requests
* **Language**: Language hint for remote transcription
* **Save recording**: Save audio files to a vault folder
* **Save transcription**: Save each result to a new file

These features are unchanged from the original plugin.

---

## 6. Attribution

* Original Whisper Recorder plugin © 2023 **Nik Danilov**
* whisper.cpp by **ggerganov**
* Local backend architecture, refactoring, TypeScript updates, and enhancements © 2025 **Christopher Diak**, released under MIT
* All code in this fork remains MIT-licensed, preserving all rights granted by the original license

---

## 7. License

This project is released under the **MIT License**.
The original license and copyright
for the upstream plugin are retained verbatim.
A supplemental notice declares the 2025 modifications and affirms that all rights granted in the MIT License apply equally to the original and modified versions.
