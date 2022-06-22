---
appid: io.github.jacalz.rymdport
requires: windows,linux,darwin,freebsd
title: Rymdport
home: https://github.com/Jacalz/rymdport
icon: https://raw.githubusercontent.com/Jacalz/rymdport/main/internal/assets/icon/icon-512.png

screenshots:
- url: https://raw.githubusercontent.com/Jacalz/rymdport/main/internal/assets/screenshot1.png
- url: https://raw.githubusercontent.com/Jacalz/rymdport/main/internal/assets/screenshot2.png

date:      2022-03-06 11:27:00-000
excerpt:   Cross-platform application for easy encrypted file, folder, and text sharing between devices.
category:  utility
developer: Jacalz

git: https://github.com/Jacalz/rymdport.git
package: github.com/Jacalz/rymdport/v3
version: 3.0.2

flathub: io.github.jacalz.rymdport
---

Rymdport (formerly wormhole-gui) is a cross-platform application that lets you easily and safely share files, folders, and text between devices.
The data is sent securely with end-to-end encryption using the same protocol as [magic-wormhole](https://github.com/magic-wormhole/magic-wormhole). This means that Rymdport can talk not only to itself, but also to other wormhole clients.

The transfers are implemented using [wormhole-william](https://github.com/psanford/wormhole-william), a native [Go](https://go.dev/) implementation of magic-wormhole. As a result, Rymdport compiles into a native binary with no runtime dependencies while also outperforming the reference implementation of magic-wormhole.
