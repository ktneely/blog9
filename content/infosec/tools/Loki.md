---
tags:
  - tool
  - infosec
  - malware
  - analysis
  - open-source
date: 2025-01-14
author: ktneely
description: Loki is a Tool using Yara rules to search for malicious files
---


## Overview

### Description

- [Loki Project Page](https://github.com/Neo23x0/Loki)  - **GitHub**
Loki is an open source tool meant to aid in working with [[YARA]] and it works on both #Windows and #Linux.  It's now in maintenance mode, with the developer working on [THOR](https://www.nextron-systems.com/thor-lite/) and its companion products, which include both commercial and free versions.

Loki performs detections for the presence of potentially malicious executions using four detection methods:
1. File Name IOC
   Regex match on full file path/name

2. Yara Rule Check
   Yara signature match on file data and process memory

3. Hash Check
   Compares known malicious hashes (MD5, SHA1, SHA256) with scanned files
   
4. C2 Back Connect Check
   Compares process connection endpoints with C2 IOCs (new since version v.10)



## Usage

Basic usage:  `python /path/to/loki.py`

- Once installed, make sure to run it with `--update`.
	- This will pull in signatures into `/path/to/Loki/signature-base/` under directories such as
		- `iocs/`
		- `misc/`
		- `yara/`
- Run Loki against file(s) in a directory, e.g.  `python loki.py -p /mnt/badfiles/`
