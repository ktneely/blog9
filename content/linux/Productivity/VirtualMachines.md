---
created: 1970-01-01 00:00:00+00:00
source_application: cherrytree
tags: []
title: VirtualMachines
updated: 2021-08-29 02:41:49+00:00
---


## **Install Docker**    
### **Add Docker’s official GPG key**

Ubuntu installation instructions: <https://docs.docker.com/engine/install/ubuntu/>

` sudo apt-get update
 sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release`
    
`curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg`

Add the stable repository
`echo \
  "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null`
  
Install docker engine
`sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io
`  
  
  
### docker-compose

~~`sudo curl -L "https://github.com/docker/compose/releases/download/1.24.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose`
`sudo chmod +x /usr/local/bin/docker-compose`~~

Docker compose is now a part of Docker by defaut and is invoked without a hyphen, like `docker compose`.

## VirtualBox 6
- Win10 VM (from Pur-3.
   - joined to domain
   - MS Office documents

## VMware Workstation
- Download VMware workstation 14
- Use the license key for the Windows version