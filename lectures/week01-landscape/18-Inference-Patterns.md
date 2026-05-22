---
title: "Key Inference Patterns"
section: Architecture Patterns
layout: standard
---

# Inference-Time Patterns: Trading Compute for Accuracy

Reasoning models don't just answer -- they can think in structured ways. The core patterns at a glance:

- **Chain-of-Thought (CoT):** generate reasoning steps before the answer -- now trained natively, not just prompted
- **Self-Consistency:** sample multiple CoT paths, take the majority vote -- trades compute for reliability
- **Tree-of-Thoughts (ToT):** explore and prune multiple reasoning branches
- **Reflection / self-critique:** the model evaluates and revises its own output -- the foundation of agent loops (act -> observe -> reflect -> act)

> These are the building blocks of "thinking longer." We go deep on each -- when to use them, how to prompt them, and where they fail -- in **Week 2 (Advanced Prompt Engineering)**.

## Sources

- [Chain-of-Thought Prompting Elicits Reasoning in LLMs (Wei et al., 2022)](https://arxiv.org/abs/2201.11903)
- [Self-Consistency Improves Chain of Thought Reasoning (Wang et al., 2022)](https://arxiv.org/abs/2203.11171)
- [Tree of Thoughts: Deliberate Problem Solving with LLMs (Yao et al., 2023)](https://arxiv.org/abs/2305.10601)
