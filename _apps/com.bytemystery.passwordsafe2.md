---
appid: com.bytemystery.passwordsafe2
title: PasswordSafe
home: https://github.com/bytemystery-com
icon: https://github.com/bytemystery-com/passwordsafe/blob/master/assets/icons/icon.png?raw=true

screenshots:
- url: https://github.com/bytemystery-com/passwordsafe/blob/master/screenshots/categoryview.jpg?raw=true
- url: https://github.com/bytemystery-com/passwordsafe/blob/master/screenshots/entryview.jpg?raw=true
- url: https://github.com/bytemystery-com/passwordsafe/blob/master/screenshots/entryedit.jpg?raw=true


date:      2026-02-26 23:33:10
excerpt:   PasswordSafe is an app runnig on Anroid, Linux and Windows. It stores you passwords in a SQLite database.
category:  productivity
developer: Reiner Pröls

git: https://github.com/bytemystery-com/passwordsafe
package: github.com/bytemystery-com/passwordsafe
version: v0.3.2



---

PasswordSafe is an app runnig on Anroid, Linux and Windows. It stores you passwords in a SQLite database.
For every entry you give a name (this name is not encrypted and searchable). For every entry you can define fileds (Label and Value) and fill with informations. All this data are stored encrypted.
For encryption AES-256 in conjunction with agon2 is used. The encryption is done with an random masterkey which is stored encrypted in the database. For opening the masterkey a user password is used.
You can have multiple categories to store entries in it.
The database can be exported and imported.

PasswordSafe is written in [Go](https://go.dev/) and uses [Fyne](https://fyne.io/) as graphical toolkit.

Author: Reiner Pröls  
Licence: MIT