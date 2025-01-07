---
tags:
  - AI
  - software
  - local
---

## Overview
Run LLMs locally - ollama.ai

### Install
Download from https://ollama.ai and install.  Easy peasy.

Or you could use `curl https://ollama.ai/install.sh | sh`, but I don’t love the idea of blindly pulling and executing shell scripts.


### Running the first time
Running ollama is a bit confusing in that it is super simple and requires almost nothing to do.  If you’re just starting, I would do the following to get familiar
1. `ollama run llama` this will pull down and then run the base llama model.  When it’s finished, you will be presented with a standard python prompt (i.e. `>>>`) which is a chat interface
2. `ctrl-c` to break out of that when you’re done playing around
3. `ollama pull <modelname>`  a few times to get get some more models and have ollama make them available.  Ollama has its own [model catalogue](https://ollama.com/library)
4. `ollama serve` which will likely throw an error because it’s already running and listening on a port, however this is the quickest way I know to get it to tell me *which* port is being used[^1].

> [!NOTE] remote clients on Mac
> On a mac, Ollama will listen only on `localhost` by default.  To make it accessible to other hosts on your network, perform the following:
> 1. Set the following two variables 
> 	* `launchctl setenv OLLAMA_HOST 0.0.0.0:11434`
> 	* `launchctl setenv OLLAMA_ORIGINS "*"`
> 1. Restart Ollama from the system tray
> 2. Restart your terminal


> [!WARNING] Security Alert
> making your ollama service available in this way could pose a security risk.  Make sure you are only doing this on a trusted network or use the firewall to restrict connections to specific, trusted hosts.


**Notes:**
- No interface, runs completely from the command-line
	- **Note:** on Mac, there is a system tray icon used for shutting down
- a good way to run LLMs for use with  an #agent like [[AutoGen]]
- can run multiple models at the same time (actually: they run sequentially, but all are “available”)
- Provides an #OpenAI compatible API 
- Ollama listens on `11343/tcp` as the default port 
- Can handle multiple, simultaneous queries


## Working with Ollama
### Command-line options
- `--model` specifies the model that `ollama` will use.  It will attempt to download if it’s not there, e.g. `--model ollama/codellama`
- `--pull` will download the specified model
- `--api-base` can be used to set the IP and port on which the service is listening.

### Models location

Ollama looks for the models in the following places and also places models here when using `ollama pull`
- MacOS
	- Most likely this is in `~/.ollama/models` if you execute ollama as a user
- Linux
	- `/usr/share/ollama/.ollama/models/`

### Using Modelfiles
The `Modelfile` is a configuration file for a model run by Ollama, and this can be used to set things like the [[prompt]] that the model expects to receive, temperature, system message, etc.  Their format is a bit reminiscent of `Dockerfile` for #Docker.  

First, checkout the [modelfile documentation](https://github.com/ollama/ollama/blob/main/docs/modelfile.md).  

The Modelfile requires the following components
- `FROM` directive specifying the source model
- 

#### Change the context window

First, obtain the current modelfile with  
`ollama show --modelfile modelname:tag >> modelname-custom.Modelfile`  
Next, add the following line, adjusting the number to fit your needs  
`PARAMETER num_ctx 256000`

Finally, create the new model with the following command:  
`ollama create new-model-name -f modelname-custom.Modelfile`
### Accessing via the API

#### OpenAI-compatible API
as of v0.1.24 on 2023-02-08, Ollama has an OpenAI-compatible API interface.  There is no need to invoke it; the API is accessible if Ollama is serving up LLMs.  It appears to nest the endpoints under `/v1/v1`, so use `v1` at the tail-end of wherever you define the base url for the API, e.g. `http://127.0.0.1:8080/v1`, whereas if [[LM Studio]]is hosting the model, you would just put the server:port combo.

## Outside the box
This section goes beyond the immediately native capabilities in Ollama.
### Running other models
While Ollama has an [extensive model library](https://ollama.com/library), maybe there is flashy new model on [[HuggingFace]] that you just have to incorporate into your tool.  Otmane Boughaba has a nice [article on how to use custom LLMs] from #HuggingFace locally with Ollama(https://otmaneboughaba.com/posts/local-llm-ollama-huggingface/).  

When running arbitrary models, we’ll need to create and use a [[ollama#Using Modelfiles|modelfile]] and then create an ollama-compatible (ollama-aware?) version of the model so that it’s ready to be served up by the Ollama service.

#### Procedure
1. Grab the model you want to use.  You can use [[HuggingFace#the CLI]] to do this.
2. Create a  [[ollama#Using Modelfiles|modelfile]] specifying attributes of the model and how you want it to behave
3. Build the model:  `ollama create <name> -f Modelfile`
4. Run `ollama list` and you should see `<name>` as a model available for use by ollama,
5. Test with `ollama run <name>`.


## litellm API wrapper
#litellm is a python module providing an #OpenAI compatible API interface.  If the module is installed, Ollama will “just know” that it is there and make use of it.

**install**  `python -m pip install litellm`



[^1]: This can be specified by setting the `OLLAMA_HOST` variable