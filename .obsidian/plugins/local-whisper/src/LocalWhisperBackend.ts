// src/LocalWhisperBackend.ts
import type Whisper from "main";
import { execFile } from "child_process";
import { tmpdir } from "os";
import * as fs from "fs/promises";
import * as path from "path";

export class LocalWhisperBackend {
	private plugin: Whisper;

	constructor(plugin: Whisper) {
		this.plugin = plugin;
	}

	private execFilePromise(cmd: string, args: string[]): Promise<{ stdout: string; stderr: string }> {
		return new Promise((resolve, reject) => {
			execFile(cmd, args, (error, stdout, stderr) => {
				if (error) {
					const err = new Error(`Failed to run ${cmd}: ${error.message}\n${stderr}`);
					(err as any).stderr = stderr;
					return reject(err);
				}
				resolve({
					stdout: stdout.toString(),
					stderr: stderr.toString(),
				});
			});
		});
	}

	/**
	 * Transcribe an audio Blob via whisper-cli.
	 * - Always normalizes audio to 16kHz mono WAV via ffmpeg.
	 * - Uses whisper-cli -m <model> -f <wav> -otxt
	 */
	async transcribe(blob: Blob, fileName: string): Promise<string> {
		const settings = this.plugin.settings;

		const whisperBinary = settings.localWhisperBinaryPath || "whisper-cli";
		const modelPath = settings.localModelPath;
		const ffmpegBinary = settings.ffmpegPath || "ffmpeg";

		if (!modelPath) {
			throw new Error("Local Whisper model path is not configured.");
		}

		const tmpBase = await fs.mkdtemp(path.join(tmpdir(), "local-whisper-"));

		// derive extension from filename; fall back to webm
		const originalExt = (fileName.split(".").pop() || "webm").toLowerCase();
		const inputPath = path.join(tmpBase, `input.${originalExt}`);
		const wavPath = path.join(tmpBase, "input.wav");

		try {
			// 1) Write the blob to a temporary file
			const arrayBuffer = await blob.arrayBuffer();
			await fs.writeFile(inputPath, new Uint8Array(arrayBuffer));

			// 2) Normalize to 16kHz mono WAV using ffmpeg
			if (originalExt !== "wav") {
				await this.execFilePromise(ffmpegBinary, [
					"-y",
					"-i",
					inputPath,
					"-ac",
					"1",
					"-ar",
					"16000",
					"-c:a",
					"pcm_s16le",
					wavPath,
				]);
			} else {
				// If already WAV, just move to canonical name
				await fs.rename(inputPath, wavPath);
			}

			// 3) Run whisper-cli
			await this.execFilePromise(whisperBinary, [
				"-m",
				modelPath,
				"-f",
				wavPath,
				"-otxt",
			]);

			// whisper-cli -otxt writes <wav>.txt
			const txtPath = wavPath + ".txt";
			const text = await fs.readFile(txtPath, "utf8");
			return text.trim();
		} finally {
			// Best-effort cleanup
			try {
				await fs.rm(tmpBase, { recursive: true, force: true });
			} catch {
				// ignore
			}
		}
	}
}