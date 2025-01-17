---
created: 1970-01-01 00:00:00+00:00
source_application: cherrytree
tags:
  - linux
  - hacking
title: InstallKali
updated: 2023-12-15 16:27:22+00:00
---


# Installing Kali



Most of the stuff in here assumes you're running or have access to a Kali installation.  There are exceptions, as I like to use Docker containers in many instances, since those are so portable.  However, even where that is the case, I've usually done most of the testing or exploration on a Kali installation.
There are two reasons for this:
1. Kali comes pre-loaded with tons of software, tools, scripts, and other resources that you'd just install anyway, and
2. It's just cool.

## "Bare metal" install on your laptop
### Hardware Requirements
It can be fun to run Kali natively on your laptop, but be forewarned, that you'll often run into issues, incompatibilities, and *quirks* because of how Kali is setup versus a “normal” Linux OS.

The on-board Nvidia chips can cause headaches when installing Linux, so looking for a compatible (and stable!!) distro is very important.

*Don't doubt yourself!*
- When the dock did not work, I assumed it was an incompatibility with the software.  This was a known hardware issue with the T480 and it required a reset.
- One of my monitors went out, and again, I assumed it was a problem with Linux, since it seemed to work sometimes.  I tested the cables, and switched them.  Finally, I switched out the monitor and the new one worked fine.

### Kernel
- 4.15.0.45+ worked fine for the T480

## Software
### Java
openjdk version 1.8.0 or greater is likely needed for some programs you'll want to run, including [[LibreOffice]] if this is the main workstation.

### Basic additional packages

There are some core utilities and tools that are not necessarily included in a default Linux install.  The missing  such as `curl` or even `ping`.  Run this command to 

`sudo apt install openjdk-8-jre gnome-tweaks emacs byobu htop build-essential python3 python3-pip nmap ubuntu-restricted-extras inetutils-ping curl` 


### Metapackages
Sometimes a full install is not required.  This is where [Kali's Metapackages](https://www.kali.org/docs/general-use/metapackages/) come in.  These include packages from the various areas of Kali tools.

#### Tools
- `kali-tools-gpu`: Tools which benefit from having access to GPU hardware
- `kali-tools-hardware`: Hardware hacking tools
- `kali-tools-crypto-stego`: Tools based around Cryptography & Steganography
- `kali-tools-fuzzing`: For fuzzing protocols
- `kali-tools-802-11`: 802.11 (Commonly known as “Wi-Fi”)
- `kali-tools-bluetooth`: For targeting Bluetooth devices
- `kali-tools-rfid`: Radio-Frequency IDentification tools
- `kali-tools-sdr`: Software-Defined Radio tools
- `kali-tools-voip`: Voice over IP tools
- `kali-tools-windows-resources`: Any resources which can be executed on a Windows hosts


#### Menu
- `kali-tools-information-gathering`: Used for Open Source Intelligence (OSINT) & information gathering
- `kali-tools-vulnerability`: Vulnerability assessments tools
- `kali-tools-web`: Designed doing web applications attacks
- `kali-tools-database`: Based around any database attacks
- `kali-tools-passwords`: Helpful for password cracking attacks – Online & offline
- `kali-tools-wireless`: All tools based around Wireless protocols – 802.11, Bluetooth, RFID & SDR
- `kali-tools-reverse-engineering`: For reverse engineering binaries
- `kali-tools-exploitation`: Commonly used for doing exploitation
- `kali-tools-social-engineering`: Aimed for doing social engineering techniques
- `kali-tools-sniffing-spoofing`: Any tools meant for sniffing & spoofing
- `kali-tools-post-exploitation`: Techniques for post exploitation stage
- `kali-tools-forensics`: Forensic tools – Live & Offline
- `kali-tools-reporting`: Reporting tools


#### Others
- `kali-linux-large`: Our previous default tools for amd64/i386 images
- `kali-linux-everything`: Every metapackage and tool listed here
- `kali-tools-top10`: The most commonly used tools
- `kali-desktop-live`: Used during a live session when booted from the image



# Install Kali in Windows Services for Linux  (WSL)
Kali on Windows has a base install “kex” and this can be run in some different modes, such as seamless, in a window, etc.

Install instructions <https://www.kali.org/docs/wsl/win-kex/>

Launch the Kali terminal from the normal Windows start menus

Launch kex with something like, which includes windowed mode and sound support
`kex --win -s`


Seamless mode merges Kali with your Windows environment 
`kex --sl -s`



Build a Kali Hackbox in AWS

Cloud formation template by ehelbig1:  <https://github.com/ehelbig1/hackbox_aws>