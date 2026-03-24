---
title: "Edge Deployment"
section: Deployment
layout: standard
---

# Edge Deployment: Mobile, Browser, Embedded

## Mobile Deployment

- **Apple CoreML / MLX**: Optimized for Apple Silicon (iPhone, iPad, Mac)
  - Llama 3.2 3B runs at ~30 tokens/sec on iPhone 15 Pro
  - MLX framework enables rapid prototyping on Mac
- **Android / MediaTek / Qualcomm**: NPU-accelerated inference
  - Llama 3.2 1B at 50+ tokens/sec on Snapdragon 8 Gen 3
  - ExecuTorch (Meta) for cross-platform mobile deployment
- **ONNX Runtime Mobile**: Cross-platform, optimized for on-device

## Browser-Based Inference

- **WebLLM (MLC)**: Run models directly in the browser via WebGPU
  - Llama 3.2 3B, Phi-3 mini, Gemma 2B all supported
  - No server required — fully client-side
  - ~15 tokens/sec on M1 MacBook in Chrome
- **Transformers.js**: HuggingFace models in the browser via ONNX/WebGPU
- Use cases: offline apps, privacy-first tools, demos

## Embedded and IoT

- **Raspberry Pi 5 (8GB)**: Runs Q4 Llama 3.2 1B at ~5 tokens/sec
- **NVIDIA Jetson Orin Nano**: Runs 3B–7B models for robotics and vision
- **Dedicated inference chips**: Hailo, Coral, Groq (for edge scenarios)

## Key Constraints

| Platform       | Max Model Size | Typical Speed  | Memory Budget |
|----------------|:--------------:|:--------------:|:-------------:|
| Flagship phone | 3B (Q4)       | 20–50 tok/s    | 4–6 GB        |
| Laptop (M-series)| 7B–14B (Q4) | 30–80 tok/s    | 8–32 GB       |
| Browser (WebGPU)| 3B (Q4)      | 10–20 tok/s    | 4 GB VRAM     |
| Raspberry Pi 5 | 1B–3B (Q2–Q4) | 3–8 tok/s      | 4–8 GB        |

## Sources

- [MLX — Apple Machine Learning Framework](https://github.com/ml-explore/mlx)
- [ExecuTorch — On-Device AI for PyTorch (Meta)](https://github.com/pytorch/executorch)
- [ONNX Runtime — Cross-Platform ML Inference (Microsoft)](https://github.com/microsoft/onnxruntime)
- [WebLLM — In-Browser LLM Inference via WebGPU (MLC AI)](https://github.com/mlc-ai/web-llm)
- [Transformers.js — ML for the Web (HuggingFace)](https://github.com/huggingface/transformers.js)
