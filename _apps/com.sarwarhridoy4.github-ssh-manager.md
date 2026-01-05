---
appid: com.sarwarhridoy4.github-ssh-manager
title: GitHub SSH Manager
home: https://sarwar-hossain-vert.vercel.app
icon: https://raw.githubusercontent.com/Sarwarhridoy4/github-ssh-manager/refs/heads/main/icon.png

screenshots:
- url: https://github.com/Sarwarhridoy4/github-ssh-manager/blob/main/screenshots/Home_Page.png?raw=true
- url: https://github.com/Sarwarhridoy4/github-ssh-manager/blob/main/screenshots/Key_Generate.png?raw=true
- url: https://github.com/Sarwarhridoy4/github-ssh-manager/blob/main/screenshots/User_Instructions.png?raw=true


date:      2025-12-20 06:51:15
excerpt:   A GitHub SSH key manager built with Go and Fyne
category:  utility
developer: Sarwar Hossain

git: https://github.com/Sarwarhridoy4/github-ssh-manager
package: github.com/Sarwarhridoy4/github-ssh-manager
version: 2.0.0



---

A cross-platform GUI tool built with **Go** and **Fyne** that allows you to manage multiple GitHub SSH keys effortlessly. Generate keys, view public keys, upload to GitHub, test SSH connections, and manage your `~/.ssh/config` all from one place.

✨ Features

- Generate SSH Keys – Create ed25519 SSH keys for multiple GitHub accounts
- Show Public Key – View and copy your public key to clipboard
- Upload to GitHub – Upload your public key via a Personal Access Token (PAT)
- Test SSH Connection – Verify SSH connection to GitHub for each account
- View SSH Config – Inspect your ~/.ssh/config in a polished modal
- Activity Logger – Track all operations with timestamps and log levels
- Export Logs – Save activity logs to file for debugging or record-keeping
- Multi-account Support – Manage multiple GitHub accounts using custom labels
- Cross-platform – Works on Linux, macOS, and Windows
- Built-in Help – Step-by-step instructions accessible via the Help button
