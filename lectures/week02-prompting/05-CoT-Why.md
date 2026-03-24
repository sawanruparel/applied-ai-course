---
title: "Why Chain-of-Thought Works"
section: Chain-of-Thought
layout: diagram
---

# Why CoT Works: Decomposition Enables Reasoning

The model cannot perform complex computation in a single forward pass. Each generated token is one "compute step." CoT converts serial reasoning into sequential token generation.

```
WITHOUT CoT — Single forward pass must solve everything at once:

  ┌─────────────────────────────────────┐
  │         "What is 27 x 34?"          │
  │                                     │
  │    [ SINGLE FORWARD PASS ]          │
  │    P(answer | question)             │
  │                                     │
  │         → "918" ← (CORRECT?)        │
  │    No intermediate verification     │
  └─────────────────────────────────────┘


WITH CoT — Each step feeds into the next, creating a reasoning chain:

  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐    ┌──────────┐
  │  "27 x 34"   │───▶│  "27 x 30    │───▶│  "27 x 4     │───▶│  "810 +  │
  │  Decompose   │    │   = 810"     │    │   = 108"     │    │   108 =  │
  │  the problem │    │  Step 1      │    │  Step 2      │    │   918"   │
  └──────────────┘    └──────────────┘    └──────────────┘    └──────────┘
       PLAN             COMPUTE            COMPUTE             COMBINE
```

## The Mechanism

- **Expanded compute budget**: each reasoning token is an additional forward pass the model gets to use
- **Working memory via context**: earlier steps remain in the context window as scratchpad
- **Error localization**: if step 2 is wrong, the error is visible and can be caught
- **Compositional generalization**: familiar sub-steps combine to solve novel problems

## Sources

- [Chain-of-Thought Prompting Elicits Reasoning in Large Language Models (Wei et al., 2022)](https://arxiv.org/abs/2201.11903)
