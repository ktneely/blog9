---
date_created: 2022-02-01 00:00:00+00:00
source_application: cherrytree
tags:
  - hacking
  - wifi
  - Kali
  - howto
title: MassInstall
date_updated: 2024-06-28 02:02:49+00:00
---
This script can be used to quickly install a bunch of wifi tools and libraries.  It's meant to work on a [[InstallKali|Kali Installation]] 
 but could work on other Debian distros.

```
#!/bin/sh

# Script to install a number of additional WiFi-related tools on a Kali workstation

# Basics
mkdir ~/tools
sudo apt update && sudo apt -y upgrade
sudo apt install git build-essential byobu htop emacs  zlib1g zlib1g-dev

# Wireless hacking tools
sudo apt install libcurl4.openssl-dev libcurl4 zlib1g-dev libssl-dev hcxtools libpcap-dev build-essential pixiewps libpcap-dev cowpatty firmware-atheros macchanger

## Wifite2
# wifite2
cd ~/tools
git clone https://github.com/derv82/wifite2.git
cd wifite2/
sudo python setup.py install

# hcxdumptool
# A tool to capture packets from WLAN devices
cd ~/tools
git clone https://github.com/ZerBea/hcxdumptool.git
cd hcxdumptool/
make
make install

# reaver
# Reaver is a WPS brute forcing tool
cd ~/tools
git clone https://github.com/t6x/reaver-wps-fork-t6x
cd reaver-wps-fork-t6x*
cd src
./configure && make
sudo make install

# bully
# Bully is a new (circa 2016. implementation of the WPS brute force attack
cd ~/tools
git clone https://github.com/aanarchyy/bully
cd bully*/
cd src/
make
sudo make install


# pyrit   (python 2.7.
cd ~/tools
wget -o /tmp/pyrit.tar.gz https://github.com/JPaulMora/Pyrit/archive/v0.5.0.tar.gz
tar xzf /tmp/pyrit.tar.gz
cd Pyrit*
sudo apt install libpq-dev
python setup.py clean
python setup.py build
sudo python setup.py install
```