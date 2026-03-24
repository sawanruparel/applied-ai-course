---
title: "Inference-Time Compute: System 2 for LLMs"
section: System 1 vs System 2
layout: standard
---

# Inference-Time Compute: System 2 for LLMs

### Core techniques enabling "slow thinking":

- **Chain-of-Thought (CoT):** model generates intermediate reasoning steps before the final answer
- **Self-verification:** model checks its own work, catches errors, and revises
- **Backtracking:** model explores one path, recognizes a dead end, and tries another approach
- **Internal search:** model considers multiple solution paths (tree-of-thoughts)
- **Reflection:** model critiques its own reasoning and improves iteratively

### What changed with o1/R1:

- CoT is no longer just a prompting trick -- it is **trained into the model via RL**
- Models learn *when* to think harder and *how* to allocate reasoning effort
- Reasoning tokens are generated internally (hidden from the user in o1, visible in R1)
- Performance scales with inference-time compute: more thinking = better answers

> The key insight: you can trade compute at inference time for accuracy, just like you trade compute at training time for capability.

## Sources

- [Chain-of-Thought Prompting Elicits Reasoning in LLMs (Wei et al., 2022)](https://arxiv.org/abs/2201.11903)
- [Tree of Thoughts: Deliberate Problem Solving with LLMs (Yao et al., 2023)](https://arxiv.org/abs/2305.10601)
- [Reflexion: Language Agents with Verbal Reinforcement Learning (Shinn et al., 2023)](https://arxiv.org/abs/2303.11366)
- [OpenAI o1 System Card (OpenAI, 2024)](https://arxiv.org/abs/2412.16720)
- [DeepSeek-R1 (DeepSeek, 2025)](https://arxiv.org/abs/2501.12948)
