---
created: 2022-12-14 22:35:01+00:00
source_application: cherrytree
tags: []
title: Kali on Docker
updated: 2022-12-15 01:20:04+00:00
---


You can run a mostly complete version of Kali under Docker.  
- [Documentation](https://www.kali.org/docs/containers/using-kali-docker-images/)


`docker pull docker.io/kalilinux/kali-rolling`

Run it with exposing a port for the GUI via RDP, if desired.  Note this assumes it's not in use by something else
`docker run -p 3389:3389 --expose=3389 --tty --interactive kalilinux/kali-rolling /bin/bash`


Optional Enable the GUI 
Instructions: <https://www.kali.org/docs/general-use/xfce-with-rdp/>  


Leave the CLI with `exit`
Restart the container
`docker container list --all |grep kali
docker start <CONTAINER ID>
`
Rejoin the container CLI with: 
`docker attach <CONTAINER ID>`

Remove the container 
`docker rm <CONTAINER ID>`