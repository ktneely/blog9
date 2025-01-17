---
created: 1970-01-01 00:00:00+00:00
source_application: cherrytree
tags:
  - Linux
title: Utilities
updated: 2024-07-02 23:40:55+00:00
---
## Modern Unix Commands
Modernizing the tried-and-true utilities we know and love
[https://github.com/ibraheemdev/](https://github.com/ibraheemdev/modern-unix)**[modern-unix](https://github.com/ibraheemdev/modern-unix)**



## Remote Desktop 
remmina  (built-in)


## Screenshot program

### screenshot
The builtin option

### Shutter
   - Install shutter:
```
sudo add-apt-repository -y ppa:linuxuprising/shutter
sudo apt-get update
sudo apt-get install -y shutter
```

Notes:
   - In 18.04+ it relies upon old packages for editing
   - Shutter requires an additional [configuration to enable editing](https://itsfoss.com/shutter-edit-button-disabled/) 
   - restart shutter, if necessary `sudo killall shutter`

### Flameshot

Flameshot is a modern screenshotting program with lots of pre- and post-capture options to configure.
   - it is available as an AppImage
   - [Linux installation instructions](https://flameshot.org/docs/installation/installation-linux/)


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
- OpenVPN is the most common VPN client used on Linux systems
- Palo Alto Networks' GlobalProtect does run on Linux in both GUI and CLI modes