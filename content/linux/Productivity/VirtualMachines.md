---
created: 1970-01-01 00:00:00+00:00
source_application: cherrytree
tags:
  - Linux
  - virtualization
  - Ubuntu
  - Docker
title: VirtualMachines
updated: 2021-08-29 02:41:49+00:00
---

## **Install Docker**    
### **Add Docker’s official GPG key**

Ubuntu [installation instructions](https://docs.docker.com/engine/install/ubuntu/):

```bash
sudo apt-get update
sudo apt-get install \
  apt-transport-https \
  ca-certificates \
  curl \
  gnupg \
  lsb-release
```


#### Add Docker's official GPG key:

```bash
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
```
#### Add the repository to Apt sources:


```bash
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
```

#### Install docker engine
```bash
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

### docker-compose

~~`sudo curl -L "https://github.com/docker/compose/releases/download/1.24.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose`
`sudo chmod +x /usr/local/bin/docker-compose`~~

Docker compose is now a part of the Docker packages and now invoked without a hyphen, like `docker compose`.  It should have been installed in the command above.

## VirtualBox 6
- Win10 VM (from Pur-3.
   - joined to domain
   - MS Office documents

## VMware Workstation
- Download VMware workstation 14
- Use the license key for the Windows version