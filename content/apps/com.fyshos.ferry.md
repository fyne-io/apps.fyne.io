---
appid: com.fyshos.ferry
requires: linux,darwin

title: Ferry
home: https://github.com/FyshOS/ferry
icon: https://github.com/FyshOS/ferry/blob/main/img/Icon.png?raw=true
screenshots:
- url: https://github.com/FyshOS/ferry/raw/main/img/screenshot.png

date:      2026-07-20 08:50:00+0000
excerpt:   A friendly USB creator that downloads and writes ISO images
category:  system
developer: The FyshOS Team

git: https://github.com/FyshOS/ferry.git
package: github.com/FyshOS/ferry
version: 0.0.1
layout: app

---

Ferry is a friendly USB creator for FyshOS, built with Fyne.
It downloads the latest FyshOS image for your chosen architecture — or writes any ISO you already have — and guides you through picking a removable drive before anything is overwritten.

After writing, Ferry reads the device back and compares its checksum against the source image, so a bad stick is reported straight away rather than discovered at boot.
Writing to USB media is supported on Linux and macOS.
