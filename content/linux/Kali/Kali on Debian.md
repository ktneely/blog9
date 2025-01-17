---
created: 2023-12-15 16:27:22+00:00
source_application: cherrytree
tags: []
title: Kali on Debian
updated: 2023-12-15 16:27:49+00:00
---




Steps to install Kali on a Debian system

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
apt -y install kali-linux-everything
```