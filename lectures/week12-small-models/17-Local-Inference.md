---
title: "Local Inference Tools"
section: Deployment
layout: cards
---

# Local Inference Tools

## Ollama
- One-command setup: `ollama run llama3.2:3b`
- Manages model downloads, quantization, and serving
- REST API compatible with OpenAI format
- macOS, Linux, Windows support
- Best for: **development, prototyping, single-user apps**
- Limitation: single-request at a time, no batching

## llama.cpp / llama-server
- Pure C/C++ inference — no Python dependency
- GGUF format with extensive quantization options (Q2 through Q8)
- Runs on CPU, Apple Metal, CUDA, Vulkan, SYCL
- Extremely memory efficient — 3B model in ~2GB RAM
- Best for: **edge deployment, embedded systems, maximum portability**
- Powers many other tools (Ollama uses it internally)

## vLLM
- Production-grade serving with PagedAttention
- Continuous batching for high throughput
- OpenAI-compatible API server out of the box
- Tensor parallelism across multiple GPUs
- Best for: **production serving at scale, high concurrency**
- Throughput: 10–50x over naive HuggingFace inference

## Text Generation Inference (TGI)
- HuggingFace's production serving solution
- Flash Attention, quantization (GPTQ, AWQ, EETQ)
- Token streaming and grammar-constrained generation
- Docker-first deployment with GPU support
- Best for: **HuggingFace ecosystem integration, Docker workflows**
- Powers HuggingFace Inference Endpoints

## Sources

- [Ollama — Local LLM Runner](https://ollama.com)
- [llama.cpp — LLM Inference in C/C++ (Gerganov)](https://github.com/ggerganov/llama.cpp)
- [vLLM — High-Throughput LLM Serving Engine](https://github.com/vllm-project/vllm)
- [vLLM: PagedAttention — arXiv:2309.06180 (Kwon et al., 2023)](https://arxiv.org/abs/2309.06180)
- [Text Generation Inference — HuggingFace Serving Toolkit](https://github.com/huggingface/text-generation-inference)
