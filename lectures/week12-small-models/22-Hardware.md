---
title: "Hardware Landscape"
section: Deployment
layout: cards
---

# Hardware Landscape for Small Model Inference

## NVIDIA GPUs
- **H100/H200**: The datacenter workhorse, 80–141 GB HBM3
- **A100 (40/80GB)**: Still widely available, excellent price/perf for serving
- **L4 (24GB)**: Low-power inference GPU, great for 7B–14B models
- **RTX 4090 (24GB)**: Consumer GPU, surprisingly effective for serving
- Cloud: ~$2–4/hr (A100), ~$0.50–1/hr (L4)

## Apple Silicon
- **M4 Pro/Max/Ultra**: Unified memory (36–192 GB) — fits large models
- 7B Q4 at 50–80 tok/s on M4 Pro, 14B Q4 at 30–50 tok/s
- MLX framework optimized for Apple hardware
- Best for: development, prototyping, small-team serving
- Unbeatable power efficiency (watts per token)

## Google TPUs
- **TPU v5e**: Cost-optimized for inference, ~$1.20/hr
- **TPU v6e**: Next-gen, strong for batch inference workloads
- Tight integration with JAX, Keras, Vertex AI
- Best for: teams already in GCP ecosystem
- Excellent for serving Gemma models natively

## Dedicated Inference Accelerators
- **Groq LPU**: Deterministic latency, 500+ tok/s for small models
- **Cerebras WSE**: Wafer-scale engine for massive throughput
- **AWS Inferentia2**: Cost-effective on AWS, ~$0.75/hr
- **Intel Gaudi 2/3**: Competitive pricing, good for 7B–14B models
- Emerging: Etched Sohu, SambaNova, specialized RISC-V chips

## Sources

- [MLX — Apple Machine Learning Framework](https://github.com/ml-explore/mlx)
- [TensorRT-LLM — NVIDIA LLM Inference Library](https://github.com/NVIDIA/TensorRT-LLM)
