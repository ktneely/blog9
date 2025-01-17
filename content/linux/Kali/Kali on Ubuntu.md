---
created: 2023-09-22 01:33:26+00:00
source_application: cherrytree
tags: []
title: Kali on Ubuntu
updated: 2023-12-15 16:29:16+00:00
---

# Install Kali on a stock Ubuntu system



## Prep the system:
this script will add the Kali repos so you can easily install tools.

```
apt update
apt -y install wget gnupg dirmngr
wget -q -O - https://archive.kali.org/archive-key.asc | gpg --import
gpg --keyserver hkp://keys.gnupg.net --recv-key 44C6513A8E4FB3D30875F758ED444FF07D8D0BF6
echo "deb http://http.kali.org/kali kali-rolling main non-free contrib" >> /etc/apt/sources.list
gpg -a --export ED444FF07D8D0BF6 | sudo apt-key add -
apt update
apt -y upgrade
apt -y dist-upgrade
apt -y autoremove --purge
```

Then, choose one or more metapackages to install the tools.  Look in [[InstallKali]] for a list of metapackages.

- kali-linux-headless is a good option for a remote drop server
- kali-linux-default is good for a desktop environment
- kali-desktop-xfce provides a nice lightweight desktop

e.g.:  `sudo apt install kali-linux-default`