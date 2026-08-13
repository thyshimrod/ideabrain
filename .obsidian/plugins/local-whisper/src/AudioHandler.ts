import axios from "axios";
import Whisper from "main";
import { Notice, MarkdownView, TFile } from "obsidian";
import { getBaseFileName } from "./utils";
import { LocalWhisperBackend } from "./LocalWhisperBackend";

export class AudioHandler {
	private plugin: Whisper;
	private localBackend: LocalWhisperBackend;

	constructor(plugin: Whisper) {
		this.plugin = plugin;
		this.localBackend = new LocalWhisperBackend(plugin);
	}

	async sendAudioData(blob: Blob, fileName: string): Promise<void> {
		const settings = this.plugin.settings;
		const baseFileName = getBaseFileName(fileName);

		// Construct audio + note paths
		const audioFilePath = `${
			settings.saveAudioFilePath
				? `${settings.saveAudioFilePath}/`
				: ""
		}${fileName}`;

		const noteFilePath = `${
			settings.createNewFileAfterRecordingPath
				? `${settings.createNewFileAfterRecordingPath}/`
				: ""
		}${baseFileName}.md`;

		// Debug notice
		if (settings.debugMode) {
			new Notice(`Audio size: ${(blob.size / 1000).toFixed(1)} KB`);
		}

		// ------------------------------
		// SAVE AUDIO FILE IF CONFIGURED
		// ------------------------------
		try {
			if (settings.saveAudioFile) {
				const arrayBuffer = await blob.arrayBuffer();
				await this.plugin.app.vault.adapter.writeBinary(
					audioFilePath,
					arrayBuffer
				);
				if (settings.debugMode) new Notice("Audio saved.");
			}
		} catch (err: any) {
			console.error("Error saving audio file:", err);
			new Notice("Error saving audio: " + err.message);
		}

		// ------------------------------
		// CHOOSE BACKEND
		// ------------------------------
		let transcript = "";

		try {
			if (settings.backend === "local") {
				// Use local whisper.cpp backend
				if (settings.debugMode) {
					new Notice("Using local whisper.cpp backend…");
				}
				transcript = await this.localBackend.transcribe(blob, fileName);

			} else {
				// ------------------------------
				// REMOTE BACKEND (existing behavior)
				// ------------------------------

				if (!settings.apiKey) {
					new Notice("API key missing in settings.");
					return;
				}

				if (settings.debugMode) {
					new Notice("Uploading audio to remote API…");
				}

				const formData = new FormData();
				formData.append("file", blob, fileName);
				formData.append("model", settings.model);
				formData.append("language", settings.language);
				if (settings.prompt) formData.append("prompt", settings.prompt);

				const response = await axios.post(settings.apiUrl, formData, {
					headers: {
						"Content-Type": "multipart/form-data",
						Authorization: `Bearer ${settings.apiKey}`,
					},
				});

				// Extract text from API response
				transcript =
					response.data.text ||
					response.data.result ||
					response.data.results?.[0]?.text ||
					"";
			}
		} catch (err: any) {
			console.error("Error transcribing audio:", err);
			new Notice("Error transcribing audio: " + err.message);
			return;
		}

		if (!transcript) {
			new Notice("No transcription returned.");
			return;
		}

		// ------------------------------
		// INSERT TRANSCRIPTION INTO NOTE
		// ------------------------------

		const { app } = this.plugin;
		const { vault, workspace } = app;

		const activeView =
			workspace.getActiveViewOfType(MarkdownView);

		const shouldCreateNewFile =
			settings.createNewFileAfterRecording || !activeView;

		try {
			if (shouldCreateNewFile) {
				// Create new note and embed audio (if saved)
				const contents = settings.saveAudioFile
					? `![[${audioFilePath}]]\n${transcript}`
					: transcript;

				await vault.create(noteFilePath, contents);
				await workspace.openLinkText(noteFilePath, "", true);

			} else {
				// Insert transcription at cursor
				const editor =
					workspace.getActiveViewOfType(MarkdownView)?.editor;

				if (editor) {
					const cursor = editor.getCursor();
					editor.replaceRange(transcript, cursor);

					editor.setCursor({
						line: cursor.line,
						ch: cursor.ch + transcript.length,
					});
				}
			}

			new Notice("Audio parsed successfully.");
		} catch (err: any) {
			console.error("Error inserting transcript:", err);
			new Notice("Error inserting transcript: " + err.message);
		}
	}
}
