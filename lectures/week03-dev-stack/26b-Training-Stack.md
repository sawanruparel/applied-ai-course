---
title: "The Post-Training Stack"
section: Close
layout: standard
---

# The Post-Training Stack: Hugging Face TRL v1.0

Most of this week is about *inference-time* orchestration. When you need to **adapt a model's weights**, the stack converges on one library.

## Hugging Face TRL v1.0 (April 2026)

- The **unified post-training library** — one API for the whole alignment pipeline (SFT, reward modeling, DPO, GRPO)
- Integrates **Unsloth kernels** for **~2x training speed** and **~70% memory reduction**, putting fine-tuning within reach of a single GPU
- The techniques themselves — LoRA/QLoRA, DPO, GRPO, distillation — are covered in depth in **Week 13 (Distillation & Fine-Tuning)**. Here it's just the stack-level answer to "which library."

## Where It Fits in the Stack

- Sits **below** the orchestration and framework layers — it produces the model artifact those layers serve
- Use it when prompting, RAG, and tool use have plateaued and you have **labeled or preference data** for your domain
- For most teams this is a **Level 3 / enterprise** concern, not a day-one decision

> Fine-tune last, not first: exhaust prompting, retrieval, and tool use before you touch weights.

## Sources

- [Hugging Face Releases TRL v1.0: Unified Post-Training Stack (MarkTechPost, Apr 2026)](https://www.marktechpost.com/2026/04/01/hugging-face-releases-trl-v1-0-a-unified-post-training-stack-for-sft-reward-modeling-dpo-and-grpo-workflows/)
