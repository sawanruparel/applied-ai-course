---
title: "Key Papers"
section: Production Distillation
layout: standard
---

# Key Papers and Resources

## Essential reading

| Paper | Year | Key Contribution |
|-------|------|-----------------|
| **[LoRA: Low-Rank Adaptation of Large Language Models](https://arxiv.org/abs/2106.09685)** (Hu et al.) | 2021 | Introduced low-rank adapters for parameter-efficient fine-tuning |
| **[QLoRA: Efficient Finetuning of Quantized LLMs](https://arxiv.org/abs/2305.14314)** (Dettmers et al.) | 2023 | 4-bit quantization + LoRA, enabling single-GPU fine-tuning |
| **[Self-Instruct](https://arxiv.org/abs/2212.10560)** (Wang et al.) | 2022 | Framework for generating instruction data using a language model |
| **[Alpaca](https://crfm.stanford.edu/2023/03/13/alpaca.html)** (Taori et al., Stanford) | 2023 | 52K instruction-following examples from text-davinci-003 to fine-tune LLaMA |
| **[Orca: Progressive Learning from Complex Explanation Traces](https://arxiv.org/abs/2306.02707)** (Mukherjee et al.) | 2023 | Fine-tuning on GPT-4 explanation traces, showing reasoning transfer |
| **[Phi-1: Textbooks Are All You Need](https://arxiv.org/abs/2306.11644)** (Gunasekar et al.) | 2023 | Synthetic "textbook-quality" data to train small but capable models |
| **[WizardLM: Empowering Large Language Models to Follow Complex Instructions](https://arxiv.org/abs/2304.12244)** | 2023 | Evol-Instruct for generating progressively complex training data |
| **[DPO: Direct Preference Optimization](https://arxiv.org/abs/2305.18290)** (Rafailov et al.) | 2023 | Simplified preference alignment without a reward model |

## Practical resources

- **[Hugging Face PEFT](https://github.com/huggingface/peft):** Comprehensive guide to LoRA, QLoRA, and other adapters
- **[TRL (Transformer Reinforcement Learning)](https://github.com/huggingface/trl):** SFT, DPO, PPO trainers
- **[Axolotl](https://github.com/axolotl-ai-cloud/axolotl):** YAML-driven fine-tuning with many model support
- **[Unsloth](https://github.com/unslothai/unsloth):** Optimized training kernels for fast LoRA fine-tuning
- **[mergekit](https://github.com/arcee-ai/mergekit):** Model merging toolkit (TIES, DARE, SLERP)
- **[lm-evaluation-harness](https://github.com/EleutherAI/lm-evaluation-harness):** Standardized benchmark evaluation
- **[vLLM](https://github.com/vllm-project/vllm):** High-performance inference with LoRA adapter support

## Community hubs

- **Hugging Face Hub:** Model hosting, datasets, and spaces for demos
- **Open LLM Leaderboard:** Compare model performance across benchmarks
- **r/LocalLLaMA:** Community discussion on fine-tuning and deployment
- **Alignment Forum:** Research discussion on preference learning and safety
