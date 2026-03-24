---
title: "CoT Variants"
section: Chain-of-Thought
layout: cards
---

# CoT Variants

## Zero-Shot CoT

Append a trigger phrase — no examples needed.

```
Q: A store had 42 apples. They sold
   15 in the morning and received a
   shipment of 30. How many now?

A: Let's think step by step.
```

Simple but effective. Kojima et al. (2022) showed this alone improves MultiArith accuracy from 17.7% to 78.7%.

## Few-Shot CoT

Provide 2-5 exemplars with full reasoning chains.

```
Q: [example problem 1]
A: [step-by-step reasoning] Answer: X

Q: [example problem 2]
A: [step-by-step reasoning] Answer: Y

Q: [actual problem]
A:
```

Gold standard for complex tasks. Exemplar quality matters more than quantity.

## Auto-CoT (Zhang et al., 2022)

Automatically generate diverse reasoning demonstrations.

1. Cluster questions by similarity
2. Select one representative per cluster
3. Generate CoT for each using zero-shot CoT
4. Use generated chains as few-shot exemplars

Eliminates manual exemplar engineering. Approaches hand-crafted CoT performance.

## Complexity-Based CoT

Sample multiple chains, select the one with the most reasoning steps.

The intuition: harder problems need longer chains, and longer chains correlate with more thorough reasoning.

Filters out chains that skip steps or take shortcuts to the answer.

## Sources

- [Large Language Models are Zero-Shot Reasoners (Kojima et al., 2022)](https://arxiv.org/abs/2205.11916)
- [Automatic Chain of Thought Prompting in Large Language Models (Zhang et al., 2022)](https://arxiv.org/abs/2210.03493)
- [Complexity-Based Prompting for Multi-Step Reasoning (Fu et al., 2022)](https://arxiv.org/abs/2210.00720)
