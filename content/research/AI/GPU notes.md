---
tags:
  - eGPU
---

# Research
- https://timdettmers.com/2023/01/30/which-gpu-for-deep-learning/#GPU_Recommendations

# Choosing a GPU for deep learning

## TL;DR



## Objectives
- can train larger models as they are released or as the really big ones are optimized (GPT-3 like models)
- somewhat future-proof (no upgrades for 3+ years)
- works well for gaming, as well

## Best GPU articles and ratings
- Best GPU for deep learning 2023 https://bytexd.com/hardware/best-gpu-for-deep-learning/
- Tom’s hardware GPU benchmarks with [[Stable Diffusion]] - https://www.tomshardware.com/news/stable-diffusion-gpu-benchmarks 
- 




### GPU Decision-making flowchart
![decision flowchart](https://i0.wp.com/timdettmers.com/wp-content/uploads/2023/01/gpu_recommendations.png?ssl=1)


## Running and testing
[[eGPU as a part of a homelab computing setup]] from running and testing an eGPU on my home hardware


### Installing NVidia container toolkit
From [GitHub Issue 72](https://github.com/NVIDIA/nvidia-container-toolkit/issues/72):
Basically, the install from earlier versions of Ubuntu *should* work.

we generally only publish packages for LTS releases. With that said, the Ubuntu18.04 repositories can be used for all newer Ubuntu distributions (and are already used for the 20.04 and 22.04 packages).

This means following the standard instructions [here](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/install-guide.html#installing-on-ubuntu-and-debian), but explicitly setting `distribution=ubuntu18.04`:

```sh
distribution=ubuntu18.04 \
      && curl -fsSL https://nvidia.github.io/libnvidia-container/gpgkey | sudo gpg --dearmor -o /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg \
      && curl -s -L https://nvidia.github.io/libnvidia-container/$distribution/libnvidia-container.list | \
            sed 's#deb https://#deb [signed-by=/usr/share/keyrings/nvidia-container-toolkit-keyring.gpg] https://#g' | \
            sudo tee /etc/apt/sources.list.d/nvidia-container-toolkit.list
```

## Using a GPU with Docker 
In order to have docker containers leverage an Nvidia GPU, `nvidia-container-toolkit` must be installed

### Installation
Handy [Server World install guide](https://www.server-world.info/en/note?os=Ubuntu_22.04&p=nvidia&f=2)

```
root@dlp:~# curl -s -L https://nvidia.github.io/nvidia-docker/gpgkey | apt-key add -
OK
root@dlp:~# curl -s -L https://nvidia.github.io/nvidia-docker/ubuntu22.04/nvidia-docker.list > /etc/apt/sources.list.d/nvidia-docker.list
root@dlp:~# apt update
root@dlp:~# apt -y install nvidia-container-toolkit
root@dlp:~# systemctl restart docker
```

### Test/validate that it’s working

Fire up a CUDA-enabled image and have it run the *nvidia-smi* tool:  `docker run --gpus all nvidia/cuda:11.5.2-base-ubuntu20.04 nvidia-smi`

