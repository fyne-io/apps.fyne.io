---
appid: com.bytemystery.vboxssh
title: VBoxSsh
home: https://github.com/bytemystery-com
icon: https://github.com/bytemystery-com/vboxssh/blob/master/assets/icons/icon.png?raw=true

screenshots:
- url: https://github.com/bytemystery-com/vboxssh/blob/master/screenshots/main.jpg?raw=true
- url: https://github.com/bytemystery-com/vboxssh/blob/master/screenshots/snapshot.jpg?raw=true
- url: https://github.com/bytemystery-com/vboxssh/blob/master/screenshots/network.jpg?raw=true


date:      2026-01-17 22:32:08
excerpt:   VBoxSsh is a graphical platform independent front end for managing and administrating VirtualBox instances in your network.
category:  utility
developer: Reiner, Pröls

git: https://github.com/bytemystery-com/vboxssh/
package: github.com/bytemystery-com/vboxssh/
version: v0.2.0



other: Desktop App - at the moment
---

VBoxSsh is a graphical platform independent front end for managing and administrating VirtualBox instances in your network.  
VBoxSsh uses only SSH connections and VBoxManage - no need for a Webserver, additional services and so on.
Yes, I created it due to issues with phpVirtualBox ;-) which requires a webserver, PHP and so on ...
You can also manage your lokal VirtualBox instance.  

VBoxSsh can only do what VBoxManage can do and display.  
For getting the actual status of the virtual machines polling is used.  

VBoxSsh is written in [Go](https://go.dev/) and uses [Fyne](https://fyne.io/) as graphical toolkit.