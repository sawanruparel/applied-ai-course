---
title: "Why Chain-of-Thought Works"
section: Chain-of-Thought
layout: diagram
---

# Why CoT Works: Decomposition Enables Reasoning

The model cannot perform complex computation in a single forward pass. Each generated token is one "compute step." CoT converts serial reasoning into sequential token generation.

```mermaid
flowchart LR
    subgraph NoCoT["Without CoT (single pass)"]
      Q1["27 x 34"] --> P1["P(answer | question)"] --> A1["918 ?"]
    end
    subgraph WithCoT["With CoT (chain of reasoning steps)"]
      Q2["27 x 34"] --> S1["27 x 30 = 810"] --> S2["27 x 4 = 108"] --> S3["810 + 108 = 918"]
    end
```

## The Mechanism

- **Expanded compute budget**: each reasoning token is an additional forward pass the model gets to use
- **Working memory via context**: earlier steps remain in the context window as scratchpad
- **Error localization**: if step 2 is wrong, the error is visible and can be caught
- **Compositional generalization**: familiar sub-steps combine to solve novel problems

## Sources

- [Chain-of-Thought Prompting Elicits Reasoning in Large Language Models (Wei et al., 2022)](https://arxiv.org/abs/2201.11903)
