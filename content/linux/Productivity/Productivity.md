---
date_created: 2023-03-28 19:05:03+00:00
source_application: cherrytree
tags: 
  - productivity
title: Productivity Applications
date_updated: 2025-01-16 19:05:03+00:00
---


## Emacs
Really, this is all one needs for a fully-functioning computing environment   (don't @ me, vim-lovers!)
1. Install emacs `apt install emacs`
2. 3. Install the Melpla package manager 
   1. edit the `.emacs` file and add the content from [[EmacsDotFile]]
   2. Evaluate the .emacs file (or restart)
3. Install markdown-mode
   3. `M-x package-install RET markdown-mode RET`
4. Install Dockerfile-mode
   4. `M-x package-install RET dockerfile-mode RET`
5. Install YAML-mode
   1. `sudo apt  install elpa-yaml-mode`
6. 

## Evernote

> [!NOTE] Deprecated
> I stopped using Evernote as they continued to price the tool outside of a reasonable fee and took too long to get a good Linux client.  At this time, there is a Linux client that works well enough if one is a subscriber.


- Use in-browser version
	- a Linux client is or was available in beta, I'm not sure what the status is.
- [Geeknote](http://www.geeknote.me/)
- [Geeknote in Emacs](https://github.com/avendael/emacs-geeknote)
- Geeknote in ZSH  

## FoxitReader
- For PDFs
- Issue: window disappears upon undock.  Only way to start is to kill the process and re-open
- `kill `pgrep Fox``


## Office applications

### Native
- LibreOffice is the *de facto* productivity suite for any Linux install

### Microsoft
If MS Office is a necessity, then a VM is the best choice

- Install Windows VM
- Map drives
- Install office from O365

## PDF

### Web client
- modern web browsers do a good job of supporting PDF files

### Ghostview
an oldie and a goodie, and installing on Debian-based distros is a breeze:

`sudo apt install gv`


## Slack
- [Download](slack.com/download)
- Install w/ `dpkg`

## Todoist
Install todoist for Chrome and configure a Chrome applet



## Virtualization
See [VirtualMachines](VirtualMachines.md) for installing & configuring 



## WTFutil
[WTFutil](http://wtfutil.com) display status of various 
- Download the binary from the website
- update the configuration in `~/.config/wtf/config.yml` with the contents of [WtfConfig](WtfConfig-OLD.md) 


## Xmind
The latest Xmind supports Linux and is available [to download](https://xmind.app/download/) as a snap, Flatpak, or native .deb installer.

## Xournal

A nice journaling app that works well with Wacom tablets