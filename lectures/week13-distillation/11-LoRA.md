---
title: "LoRA: Low-Rank Adaptation"
section: Fine-Tuning Fundamentals
layout: standard
---

# LoRA: Low-Rank Adaptation

## The key insight

Most of the "knowledge" learned during fine-tuning lives in a low-dimensional subspace. You don't need to update all 7 billion parameters -- a small set of adapter matrices can capture task-specific behavior.

## How it works (intuition)

1. **Freeze** the entire pre-trained model (no gradients flow to original weights)
2. **Add** small trainable matrices alongside specific layers (usually attention layers)
3. **Train** only these adapter matrices (~0.1-1% of total parameters)
4. **Merge** adapters back into base model for deployment (zero inference overhead)

## By the numbers

| Model Size | Full Fine-Tune Params | LoRA Params (rank 16) | Reduction |
|------------|----------------------|----------------------|-----------|
| 7B | 7,000M | 4-20M | 350-1750x |
| 13B | 13,000M | 8-40M | 325-1625x |
| 70B | 70,000M | 40-200M | 350-1750x |

## Practical benefits

- **Train on a single GPU:** A 7B model with LoRA fits in ~10 GB VRAM
- **Fast training:** Minutes to hours, not days
- **No catastrophic forgetting:** Base model knowledge is preserved
- **Stackable:** Swap different LoRA adapters for different tasks
- **Tiny storage:** Each adapter is 10-100 MB, not 14 GB

## LoRA targets

Common layers to apply LoRA to:
- `q_proj`, `v_proj` -- minimum effective set (attention queries and values)
- `q_proj`, `k_proj`, `v_proj`, `o_proj` -- full attention (recommended)
- All linear layers -- maximum expressiveness, higher cost

## Sources

- [LoRA: Low-Rank Adaptation of Large Language Models (Hu et al., 2021)](https://arxiv.org/abs/2106.09685)
