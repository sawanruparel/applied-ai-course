---
title: "Meta Llama 3.2 and Llama 4"
section: Small Model Landscape
layout: standard
---

# Meta Llama 3.2 and Llama 4

## Llama 3.2 (Sept 2024) — The Open-Weight Foundation

- **1B and 3B** text models — first truly capable sub-4B models from Meta
- **11B and 90B** vision-language multimodal variants
- 128K context window across all sizes
- Trained on 9T tokens — massive data investment even for small models
- Optimized for on-device: Qualcomm, MediaTek partnerships at launch

## Llama 3.3 70B (Dec 2024)

- Matches Llama 3.1 405B performance at a fraction of the compute
- Demonstrates that distillation from larger models is highly effective

## Llama 4 (April 2025)

- **Scout**: 17B active params, 16 experts (109B total), 10M context window — quantized, it fits in ~10 GB VRAM and runs on consumer hardware via Ollama
- **Maverick**: 17B active params, 128 experts (400B total)
- Mixture-of-Experts architecture — only activates a subset per token
- Early-fusion native multimodality (text, image, video)

## Why It Matters for Small Model Strategy

- Apache 2.0-like license (Llama Community License) — commercial use allowed
- Massive ecosystem: fine-tuning tools, quantized variants, deployment infra
- The 1B and 3B models run comfortably on a smartphone

## Sources

- [Llama 3.2: Revolutionizing Edge AI and Vision (Meta, 2024)](https://ai.meta.com/blog/llama-3-2-connect-2024-vision-edge-mobile-devices/)
- [The Llama 3 Herd of Models — arXiv:2407.21783 (Meta, 2024)](https://arxiv.org/abs/2407.21783)
- [The Llama 4 Herd: Natively Multimodal AI Innovation (Meta, 2025)](https://ai.meta.com/blog/llama-4-multimodal-intelligence/)
- [New Open-Source LLM Releases, April 2026 (Fazm AI)](https://fazm.ai/blog/new-open-source-llm-releases-april-2026)
