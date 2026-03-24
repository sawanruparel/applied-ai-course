---
title: "Google Gemma 2 and Gemma 3"
section: Small Model Landscape
layout: standard
---

# Google Gemma 2 and Gemma 3

## Gemma 2 (June 2024)

- Sizes: **2B, 9B, 27B**
- Knowledge distillation from larger Gemini models
- 9B model rivals Llama 3 8B and Mistral 7B across benchmarks
- Optimized for TPU, GPU, and CPU inference

## Gemma 3 (March 2025) — Built for On-Device

- Sizes: **1B, 4B, 12B, 27B**
- Native multimodal: text + image + short video understanding
- 128K context window (up from 8K in Gemma 2)
- **ShieldGemma** built-in safety classifier
- Runs on a single NVIDIA H100, RTX 3090, or even TPU v5e

## Key Differentiators

- Tight integration with Google ecosystem: Vertex AI, Colab, Android
- Gemma 3 4B with quantization runs on Pixel phones
- Strong structured output and function calling support
- "Gemma terms of use" license — permissive for most commercial use

## Performance Highlights

- Gemma 3 27B competes with Llama 3.3 70B on reasoning tasks
- Gemma 3 12B beats Qwen 2.5 14B on multimodal understanding
- Designed from the ground up for efficient on-device inference

## Sources

- [Gemma 2: Improving Open Language Models at a Practical Size — arXiv:2408.00118 (Google DeepMind, 2024)](https://arxiv.org/abs/2408.00118)
- [Google Launches Gemma 2 (Google, 2024)](https://blog.google/technology/developers/google-gemma-2/)
- [Gemma 3: Google's New Open Model Based on Gemini 2.0 (Google, 2025)](https://blog.google/technology/developers/gemma-3/)
- [Gemma 3 Technical Report (Google DeepMind, 2025)](https://arxiv.org/abs/2503.19786)
