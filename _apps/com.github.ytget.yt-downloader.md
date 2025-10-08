---
appid: com.github.ytget.yt-downloader
title: YT Downloader
home: https://github.com/romanitalian
icon: https://raw.githubusercontent.com/ytget/yt-downloader/refs/heads/main/yt-downloader.png

screenshots:
- url: https://raw.githubusercontent.com/ytget/yt-downloader/main/screenshots/screen-01-playlist-downloading.jpeg
- url: https://github.com/ytget/yt-downloader/raw/main/screenshots/screen-02-settings.jpeg
- url: https://github.com/ytget/yt-downloader/raw/main/screenshots/screen-04-android-downloading-in-progress.jpg


date:      2025-10-04 08:15:23
excerpt:   Lightweight cross‑platform desktop app to download YouTube videos and playlists
category:  utility
developer: Roman, Romadin

git: https://github.com/ytget/yt-downloader
package: github.com/ytget/yt-downloader
version: v0.3.3



---

yt-downloader is a GUI application written in Go using the Fyne toolkit. It downloads single videos and entire playlists from YouTube, shows live progress, and stores files in your Downloads folder by default.

### Purpose

Provide a simple, reliable, cross‑platform YouTube downloader with a friendly UI.
Handle large playlists quickly using native Go parsing.
Offer sensible defaults with options for power users (quality presets, filename template, parallelism, language, auto-reveal on complete).


### Features

Best‑effort resilient downloads (continue, no-overwrite behavior).
Playlist parsing via native Go engine for speed and stability.
Live progress, speed, ETA; per-item Start/Pause/Stop, Open/Reveal, Copy path, Remove.
Parallel downloads with configurable limit.
File naming template and quality presets (best/medium/audio).
Notifications on completion with quick actions.
Localization: System, English, Русский, Português.
Cross‑platform (macOS, Linux, Windows) using Fyne.