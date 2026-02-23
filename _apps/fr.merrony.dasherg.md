---
appid: fr.merrony.dasherg
title: DasherG
home: https://github.com/SMerrony/DasherG
icon: https://github.com/SMerrony/DasherG/blob/b7d7937d19695c0795f72f23673015905cb70309/cmd/DasherG/Icon.png?raw=true

screenshots:
- url: https://github.com/SMerrony/DasherG/blob/master/screenshots/DasherG_v0_16_0.png?raw=true

date:      2026-02-21 07:06:02
excerpt:   DasherG is a free terminal emulator for Data General DASHER series character-based terminals.
category:  utility
developer: Stephen Merrony

git: https://github.com/SMerrony/DasherG
package: github.com/SMerrony/DasherG/cmd/DasherG
version: 0.17.0

---

* DASHER D200 &amp; D210 Emulation
* Serial interface support at 300, 1200, 2400, 4800, 9600 &amp; 19200 baud, 7 or 8 data bits (defaults to 9600, 8, n, 1)
* BREAK key support for serial interface - permits use as master console
* Network Interface (Telnet) support
* May specify -host=host:port on command line
*Reverse video, blinking, dim and underlined characters
* Pixel-for-pixel copy of D410 character set
* 15 (plus Ctrl &amp; Shift) DASHER Function keys, Erase Page, Erase EOL, Hold, Local Print and Break keys
* C1, C2, C3 and C4 DASHER Custom keys
* Loadable function key templates (BROWSE, SED and SMI provided as examples)
* 1000-line terminal history
* Session logging to file
* Various terminal widths, heights and zoom-levels available
* Support for mini-Expect scripts to automate some tasks see Wiki
* Copy and Paste - select region with mouse (it is automatically copied to clipboard) and paste at cursor via Edit menu
* XMODEM-CRC file transfer with short (128) or long (1024) packets