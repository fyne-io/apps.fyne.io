---
appid: net.cortassa.dcvix-stats
title: Dcvix Stats
home: https://www.cortassa.net/
icon: https://raw.githubusercontent.com/dcvix/dcvix-stats/master/Icon.png
layout: app

screenshots:
- url: https://raw.githubusercontent.com/dcvix/dcvix-stats/main/assets/screenshot.png

date:      2026-05-18 20:34:31
excerpt:   Graphical user interface to display statistics from a Amazon DCV
category:  utility
developer: Diego Cortassa

git: https://github.com/dcvix/dcvix-stats
package: github.com/dcvix/dcvix-stats
version: 1.4.0



---

Dcvix Stats is a Go application that provides a graphical user interface (GUI) to display statistics from a NICE DCV server log file. It uses the Fyne toolkit for the GUI and the go-charts library to render line charts of various metrics.

The application works by parsing a DCV server log file, extracting statistical data using regular expressions, and then displaying this data in a series of line charts. The user can show or hide them from the &#34;Show&#34; menu.