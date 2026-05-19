---
title: "Mistral and Mixtral"
section: Small Model Landscape
layout: standard
---

# Mistral and Mixtral

## Mistral 7B (Sept 2023) — The Model That Started the SLM Revolution

- Outperformed Llama 2 13B on every benchmark at half the size
- Introduced Sliding Window Attention (SWA) for efficient long contexts
- Grouped Query Attention (GQA) for faster inference
- Apache 2.0 license — fully permissive

## Mixtral 8x7B (Dec 2023) — Mixture of Experts Goes Mainstream

- 8 expert networks, 2 active per token — 46.7B total, ~13B active
- Matches or beats Llama 2 70B while using 6x less compute per token
- Proved MoE is practical for production deployment

## Mistral Small / Nemo (2024–2026)

- **Mistral Nemo 12B**: collaboration with NVIDIA, strong general-purpose model
- **Mistral Small 3.1 24B**: optimized for fast API-served inference
- **Mistral Small 4 (March 16, 2026)**: a hybrid model that unifies instruct, reasoning, multimodal, and coding capabilities in a single checkpoint
- Function calling and JSON mode built in
- Tekken tokenizer: more efficient for multilingual and code

## MoE Architecture — Why It Matters

- Total parameters determine knowledge capacity (what the model knows)
- Active parameters determine inference cost (what you pay per token)
- MoE gives you big-model knowledge at small-model cost
- Trade-off: higher memory footprint (all experts must be loaded)

## Sources

- [Mistral 7B (Mistral AI, 2023)](https://mistral.ai/news/announcing-mistral-7b)
- [Mistral 7B — arXiv:2310.06825 (Jiang et al., 2023)](https://arxiv.org/abs/2310.06825)
- [Mixtral of Experts (Mistral AI, 2023)](https://mistral.ai/news/mixtral-of-experts)
- [Mixtral of Experts — arXiv:2401.04088 (Jiang et al., 2024)](https://arxiv.org/abs/2401.04088)
- [Mistral NeMo (Mistral AI & NVIDIA, 2024)](https://mistral.ai/news/mistral-nemo)
- [Mistral Small 3.1 (Mistral AI, 2025)](https://mistral.ai/news/mistral-small-3-1)
- [Mistral Small (latest) Model Stats (LLM-Stats)](https://llm-stats.com/models/mistral-small-latest)
