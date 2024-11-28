---
tags:
  - AI
  - CLI
  - software
  - tool
---

# About Fabric

## Description and Project Page
`fabric` is an open-source framework for augmenting humans using AI built in #Golang.

https://github.com/danielmiessler/fabric

## Getting started

### Installation

While it started out as a python project, Fabric has moved to golang.  Installation is simple, but there are other methods, including downloading the binary from the GitHub site.  See the [installation docs](https://github.com/danielmiessler/fabric//?tab=readme-ov-file#installation)

```sh
# Install Fabric directly from the repo
go install github.com/danielmiessler/fabric@latest
```

### Configuration

On Linux, the configuration file is located in `~/.config/fabric/.env` and this stores the parameters and API keys for the inference servers it uses.  The setup script will create and update this with settings.  It can also be updated manually; the following is an example that has a key for #OpenAI , YouTube, and an [[ollama]] inference server running on another system running on the LAN

```
OPENAI_API_KEY=key
YOUTUBE_API_KEY=key
OLLAMA_HOST=192.168.0.101:11434
GOOGLE_API_KEY=key
```



### Updating

Fabric --or at least its patterns-- is being updated regularly.  To pull and install the latest code and patterns, executet he following from the same directory created during the installation step above

`git pull; pipx install . --force; fabric --update; source ~/.zshrc (or ~/.bashrc)`