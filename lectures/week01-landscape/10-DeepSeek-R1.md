---
title: "DeepSeek R1: Open-Weight Reasoning"
section: The Models
layout: standard
---

# DeepSeek R1: Open-Weight Reasoning

### Why R1 matters:
- **Open weights** -- full model available for download and self-hosting
- **Competitive with o1** on math, coding, and science benchmarks
- **Transparent reasoning** -- chain-of-thought is visible, not hidden
- Trained by a Chinese AI lab (DeepSeek) at a fraction of the rumored cost

### Technical approach:
- Base model: DeepSeek-V3 (MoE, 671B total params, ~37B active)
- **GRPO (Group Relative Policy Optimization):** RL without a separate critic model
- Key finding: RL alone (without supervised fine-tuning on CoT data) produces emergent reasoning
- The model spontaneously learned to self-verify, backtrack, and allocate variable effort

### Benchmark highlights:
- AIME 2024: 79.8% (pass@1), comparable to o1 at 79.2%
- MATH-500: 97.3%
- Codeforces: 96.3 percentile rating
- Distilled versions (1.5B-70B) retain strong reasoning ability

> R1 democratized reasoning models: you no longer need a $200/mo subscription to access System 2 thinking.

## Sources

- [DeepSeek-R1: Incentivizing Reasoning via RL (DeepSeek, 2025)](https://arxiv.org/abs/2501.12948)
- [DeepSeek-R1 GitHub Repository](https://github.com/deepseek-ai/DeepSeek-R1)
- [DeepSeek-R1 Release Announcement](https://api-docs.deepseek.com/news/news250120)
