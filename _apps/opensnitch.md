---
appid: com.github.lucor.opensnitch
requires: linux
title: Fyne OpenSnitch
home: https://github.com/lucor/fyne-opensnitch/
icon: https://github.com/evilsocket/opensnitch/blob/master/ui/opensnitch/res/icon.png?raw=true

screenshots:
- url: https://github.com/lucor/fyne-opensnitch/blob/master/screenshot/ask_rule.png?raw=true

date:      2019-05-13 9:43:42+100
excerpt:   An OpenSnitch UI in Go using Fyne
category:  utility
developer: Luca Corbo

git: https://github.com/lucor/fyne-opensnitch.git
package: github.com/lucor/fyne-opensnitch
version: 
---

An OpenSnitch UI in Go using Fyne

The application is running as a gRPC server on a unix socket and will interact with OpenSnitch daemon.

## Requirements

- OpenSnitch [daemon](https://github.com/evilsocket/opensnitch#daemon) >= v1.0.0b
- Fyne [dependencies](https://github.com/fyne-io/fyne#prerequisites) to compile the application

#### UI Configuration

By default the UI will load its configuration from `~/.opensnitch/ui-config.json` (customizable with the `--config` argument), the default contents of this file are:

```json
{
    "default_timeout": 15,
    "default_action": "allow",
    "default_duration": "until restart",
    "default_operand":"process.path"
}
```

The `default_timeout` is the number of seconds after which the UI will take its
default action, the `default_action` can be `allow` or `deny` and the
`default_duration`, which indicates for how long the default action should be
taken, can be `once`, `until restart` or `always` to persist the action as a new
rule on disk. `default_operand` indicates the operand type to use for
the rule, can be `process.path` (the path of the executable), `user.id`,
`dest.ip`, `dest.host` or `dest.port`.

For more details about rules please refer to the [opensnitch readme](https://github.com/evilsocket/opensnitch/blob/master/README.md#rules).
 
