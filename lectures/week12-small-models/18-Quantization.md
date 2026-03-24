---
title: "Quantization: Shrinking Models for Deployment"
section: Deployment
layout: standard
---

# Quantization: Shrinking Models for Deployment

## What Is Quantization?

Reducing the precision of model weights from 16-bit floats to 8-bit, 4-bit, or even 2-bit integers. This shrinks memory usage and speeds up inference with minimal quality loss.

## Quantization Methods

| Method | Bits | Approach              | Quality Loss | Speed Gain | Best For         |
|--------|:----:|-----------------------|:------------:|:----------:|------------------|
| FP16   | 16   | Baseline              | None         | 1x         | Reference        |
| INT8   | 8    | Post-training         | Minimal      | 1.5–2x     | GPU serving      |
| GPTQ   | 4    | One-shot, GPU-based   | Low          | 2–3x       | GPU deployment   |
| AWQ    | 4    | Activation-aware      | Very low     | 2–3x       | GPU deployment   |
| GGUF   | 2–8  | llama.cpp native      | Varies       | 2–4x       | CPU / edge       |
| BnB    | 4    | bitsandbytes, dynamic | Low          | 1.5–2x     | Fine-tuning      |

## Memory Impact (Llama 3.1 8B example)

| Precision | Model Size | GPU Memory | Runs On               |
|-----------|:----------:|:----------:|------------------------|
| FP16      | 16 GB      | ~18 GB     | A100, H100             |
| INT8      | 8 GB       | ~10 GB     | RTX 4090, A10          |
| Q4 (GPTQ) | 4.5 GB    | ~6 GB      | RTX 3060, M1 Pro       |
| Q4 (GGUF) | 4.5 GB    | ~5 GB RAM  | MacBook Air, CPU-only  |
| Q2 (GGUF) | 2.5 GB    | ~3 GB RAM  | Raspberry Pi 5, phones |

## Practical Advice

- **Start with Q4 (AWQ or GGUF)** — best quality/size trade-off
- **Q8 if you have the memory** — nearly lossless
- **Q2 only for extreme edge** — noticeable quality degradation
- Always re-run your eval suite after quantization to measure actual impact

## Sources

- [GPTQ: Accurate Post-Training Quantization for Generative Pre-trained Transformers — arXiv:2210.17323 (Frantar et al., 2022)](https://arxiv.org/abs/2210.17323)
- [AWQ: Activation-aware Weight Quantization — arXiv:2306.00978 (Lin et al., 2023)](https://arxiv.org/abs/2306.00978)
- [GGML / GGUF Format (Gerganov)](https://github.com/ggerganov/ggml)
- [bitsandbytes — Accessible LLMs via k-bit Quantization](https://github.com/bitsandbytes-foundation/bitsandbytes)
- [llama.cpp — GGUF Quantization Support](https://github.com/ggerganov/llama.cpp)
