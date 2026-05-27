---
appid: com.github.abakum.crocson
title: crocson
home: https://vk.ru/crocson
icon: https://github.com/abakum/crocson/blob/main/Icon.png?raw=true
layout: app

screenshots:
- url: https://github.com/abakum/crocson/blob/main/metadata/en-US/images/phoneScreenshots/1.png?raw=true
- url: https://github.com/abakum/crocson/blob/main/metadata/en-US/images/phoneScreenshots/2.png?raw=true
- url: https://github.com/abakum/crocson/blob/main/metadata/en-US/images/phoneScreenshots/4.png?raw=true


date:      2026-05-21 13:31:28
excerpt:   Easily and securely send things from one computer to another
category:  utility
developer: Konstantin Abakumov

git: https://github.com/abakum/crocson
package: github.com/abakum/crocson
version: v1.11.59



other: https://www.rustore.ru/catalog/app/com.github.abakum.crocson
---

croc is a tool that allows any two computers to simply and securely transfer files.

Features
- allows any two computers to transfer data (using a relay)
- provides end-to-end encryption (using PAKE)
- enables easy cross-platform transfers (Windows, Linux, macOS)
- allows multiple file transfers
- local server or port-forwarding not needed
- ipv6-first with ipv4 fallback

This interface allows you to
- use one-time passwords with a secret from the field or from the CROC_SECRET environment variable
- for Windows, Linux, and macOS, use drag-and-drop or the command line in addition to file or directory selection dialogs
- for Android, use the &#34;Share&#34; menu from file managers for one or multiple files or &#34;Open with&#34; in addition to file or directory selection dialogs
- for Android, send files without nested directories, and receive even nested directories, saving them into .zip files
- view the protocol in color, albeit not as fast as in the console
- for Android, view the protocol via `adb logcat -s croc`