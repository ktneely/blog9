---
created: 1970-01-01 00:00:00+00:00
source_application: cherrytree
tags: []
title: Utilities
updated: 2024-07-02 23:40:55+00:00
---


## Modern Unix Commands
Modernizing the tried-and-true utilities we know and love
[https://github.com/ibraheemdev/](https://github.com/ibraheemdev/modern-unix)**[modern-unix](https://github.com/ibraheemdev/modern-unix)**



## Remote Desktop 
remmina  (built-in)


## Screenshot program
- screenshot
   - Builtin
- Shutter
   - Install shutter:
`sudo add-apt-repository -y ppa:linuxuprising/shutter
sudo apt-get update
sudo apt-get install -y shutter
`   - In 18.04+ it relies upon old packages for editing
   - configure to enable editing <https://itsfoss.com/shutter-edit-button-disabled/>
   - restart shutter, if necessary `sudo killall shutter`
- Flameshot
   - download AppImage

## Networking Tools & Troubleshooting
### Curl
`sudo apt install curl libcurl4`

Dig 
`sudo apt install dnsutils`

### Netstat
`sudo apt install net-tools`

### Traceroute
`sudo apt install inetutils-traceroute`

## VPN