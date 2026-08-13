import Whisper from "main";
import { App, PluginSettingTab, Setting, TFolder } from "obsidian";
import { SettingsManager } from "./SettingsManager";

export class WhisperSettingsTab extends PluginSettingTab {
	private plugin: Whisper;
	private settingsManager: SettingsManager;
	private createNewFileInput: Setting;
	private saveAudioFileInput: Setting;

	constructor(app: App, plugin: Whisper) {
		super(app, plugin);
		this.plugin = plugin;
		this.settingsManager = plugin.settingsManager;
	}

	display(): void {
		const { containerEl } = this;

		containerEl.empty();
		this.createHeader();

		// ----------------------------------
		// BACKEND SELECTOR
		// ----------------------------------
		this.createBackendSelector();

		// ----------------------------------
		// REMOTE API SETTINGS
		// ----------------------------------
		if (this.plugin.settings.backend === "remote") {
			this.createApiKeySetting();
			this.createApiUrlSetting();
			this.createModelSetting();
			this.createPromptSetting();
			this.createLanguageSetting();
		}

		// ----------------------------------
		// LOCAL WHISPER SETTINGS
		// ----------------------------------
		if (this.plugin.settings.backend === "local") {
			this.createLocalModelPathSetting();
			this.createLocalBinaryPathSetting();
			this.createFFmpegPathSetting();
		}

		// ----------------------------------
		// SAVE AUDIO
		// ----------------------------------
		this.createSaveAudioFileToggleSetting();
		this.createSaveAudioFilePathSetting();

		// ----------------------------------
		// SAVE TRANSCRIPTIONS
		// ----------------------------------
		this.createNewFileToggleSetting();
		this.createNewFilePathSetting();

		// ----------------------------------
		// DEBUG MODE
		// ----------------------------------
		this.createDebugModeToggleSetting();
	}

	// ------------------------------------------------------------
	// Helpers
	// ------------------------------------------------------------

	private createHeader(): void {
		this.containerEl.createEl("h2", { text: "Whisper Plugin Settings" });
	}

	private createTextSetting(
		name: string,
		desc: string,
		placeholder: string,
		value: string,
		onChange: (value: string) => Promise<void>
	): void {
		new Setting(this.containerEl)
			.setName(name)
			.setDesc(desc)
			.addText((text) =>
				text
					.setPlaceholder(placeholder)
					.setValue(value)
					.onChange(async (value) => await onChange(value))
			);
	}

	// ------------------------------------------------------------
	// Backend
	// ------------------------------------------------------------

	private createBackendSelector(): void {
		new Setting(this.containerEl)
			.setName("Backend")
			.setDesc("Choose between Remote Whisper API or Local whisper.cpp")
			.addDropdown((dropdown) => {
				dropdown
					.addOption("remote", "Remote Whisper API")
					.addOption("local", "Local whisper.cpp")
					.setValue(this.plugin.settings.backend)
					.onChange(async (value) => {
						this.plugin.settings.backend = value as "remote" | "local";
						await this.settingsManager.saveSettings(this.plugin.settings);
						this.display(); // refresh UI
					});
			});
	}

	// ------------------------------------------------------------
	// Remote Settings
	// ------------------------------------------------------------

	private createApiKeySetting(): void {
		this.createTextSetting(
			"API Key",
			"Enter your OpenAI API key",
			"sk-...xxxx",
			this.plugin.settings.apiKey,
			async (value) => {
				this.plugin.settings.apiKey = value;
				await this.settingsManager.saveSettings(this.plugin.settings);
			}
		);
	}

	private createApiUrlSetting(): void {
		this.createTextSetting(
			"API URL",
			"Specify the Whisper API endpoint",
			"https://api.openai.com/v1/audio/transcriptions",
			this.plugin.settings.apiUrl,
			async (value) => {
				this.plugin.settings.apiUrl = value;
				await this.settingsManager.saveSettings(this.plugin.settings);
			}
		);
	}

	private createModelSetting(): void {
		this.createTextSetting(
			"Model",
			"Remote Whisper model name",
			"whisper-1",
			this.plugin.settings.model,
			async (value) => {
				this.plugin.settings.model = value;
				await this.settingsManager.saveSettings(this.plugin.settings);
			}
		);
	}

	private createPromptSetting(): void {
		this.createTextSetting(
			"Prompt",
			"Optional: Add vocabulary to improve transcription accuracy",
			"Example: Digique Plus, ZyntriQix",
			this.plugin.settings.prompt,
			async (value) => {
				this.plugin.settings.prompt = value;
				await this.settingsManager.saveSettings(this.plugin.settings);
			}
		);
	}

	private createLanguageSetting(): void {
		this.createTextSetting(
			"Language",
			"Language code of the audio",
			"en",
			this.plugin.settings.language,
			async (value) => {
				this.plugin.settings.language = value;
				await this.settingsManager.saveSettings(this.plugin.settings);
			}
		);
	}

	// ------------------------------------------------------------
	// Local Whisper Settings
	// ------------------------------------------------------------

	private createLocalModelPathSetting(): void {
		this.createTextSetting(
			"Local Whisper Model (.bin / .gguf)",
			"Path to your whisper.cpp model file",
			"/Users/you/Library/Application Support/whisper/models/ggml-base.en.bin",
			this.plugin.settings.localModelPath,
			async (value) => {
				this.plugin.settings.localModelPath = value;
				await this.settingsManager.saveSettings(this.plugin.settings);
			}
		);
	}

	private createLocalBinaryPathSetting(): void {
		this.createTextSetting(
			"whisper-cli binary",
			"Path or name of whisper-cli",
			"whisper-cli",
			this.plugin.settings.localWhisperBinaryPath,
			async (value) => {
				this.plugin.settings.localWhisperBinaryPath = value;
				await this.settingsManager.saveSettings(this.plugin.settings);
			}
		);
	}

	private createFFmpegPathSetting(): void {
		this.createTextSetting(
			"ffmpeg binary",
			"Path or name of ffmpeg",
			"ffmpeg",
			this.plugin.settings.ffmpegPath,
			async (value) => {
				this.plugin.settings.ffmpegPath = value;
				await this.settingsManager.saveSettings(this.plugin.settings);
			}
		);
	}

	// ------------------------------------------------------------
	// Save Audio
	// ------------------------------------------------------------

	private createSaveAudioFileToggleSetting(): void {
		new Setting(this.containerEl)
			.setName("Save recording")
			.setDesc("Save the raw audio file into your vault")
			.addToggle((toggle) =>
				toggle
					.setValue(this.plugin.settings.saveAudioFile)
					.onChange(async (value) => {
						this.plugin.settings.saveAudioFile = value;
						if (!value) this.plugin.settings.saveAudioFilePath = "";
						await this.settingsManager.saveSettings(this.plugin.settings);
						this.saveAudioFileInput.setDisabled(!value);
					})
			);
	}

	private createSaveAudioFilePathSetting(): void {
		this.saveAudioFileInput = new Setting(this.containerEl)
			.setName("Recordings folder")
			.setDesc("Vault folder for saved audio")
			.addText((text) =>
				text
					.setPlaceholder("Example: audio")
					.setValue(this.plugin.settings.saveAudioFilePath)
					.onChange(async (value) => {
						this.plugin.settings.saveAudioFilePath = value;
						await this.settingsManager.saveSettings(this.plugin.settings);
					})
			)
			.setDisabled(!this.plugin.settings.saveAudioFile);
	}

	// ------------------------------------------------------------
	// Save Transcriptions
	// ------------------------------------------------------------

	private createNewFileToggleSetting(): void {
		new Setting(this.containerEl)
			.setName("Save transcription")
			.setDesc("Create a new note for each transcript")
			.addToggle((toggle) =>
				toggle
					.setValue(this.plugin.settings.createNewFileAfterRecording)
					.onChange(async (value) => {
						this.plugin.settings.createNewFileAfterRecording = value;
						if (!value) {
							this.plugin.settings.createNewFileAfterRecordingPath = "";
						}
						await this.settingsManager.saveSettings(this.plugin.settings);
						this.createNewFileInput.setDisabled(!value);
					})
			);
	}

	private createNewFilePathSetting(): void {
		this.createNewFileInput = new Setting(this.containerEl)
			.setName("Transcriptions folder")
			.setDesc("Vault folder for new transcript notes")
			.addText((text) =>
				text
					.setPlaceholder("Example: notes/transcriptions")
					.setValue(this.plugin.settings.createNewFileAfterRecordingPath)
					.onChange(async (value) => {
						this.plugin.settings.createNewFileAfterRecordingPath = value;
						await this.settingsManager.saveSettings(this.plugin.settings);
					})
			);
	}

	// ------------------------------------------------------------
	// Debug Mode
	// ------------------------------------------------------------

	private createDebugModeToggleSetting(): void {
		new Setting(this.containerEl)
			.setName("Debug Mode")
			.setDesc("Enable verbose plugin logs for troubleshooting")
			.addToggle((toggle) =>
				toggle
					.setValue(this.plugin.settings.debugMode)
					.onChange(async (value) => {
						this.plugin.settings.debugMode = value;
						await this.settingsManager.saveSettings(this.plugin.settings);
					})
			);
	}
}
