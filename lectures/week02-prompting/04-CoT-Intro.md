---
title: "Chain-of-Thought Prompting"
section: Chain-of-Thought
layout: standard
---

# Chain-of-Thought: "Let's Think Step by Step"

Chain-of-Thought (CoT) prompting elicits intermediate reasoning steps from the model before it produces a final answer. Introduced by Wei et al. (2022), it dramatically improves performance on arithmetic, commonsense, and symbolic reasoning tasks.

## The Key Insight

Instead of asking for the answer directly, ask the model to **show its work**.

```
# Without CoT
Q: Roger has 5 tennis balls. He buys 2 more cans of tennis balls.
   Each can has 3 tennis balls. How many does he have now?
A: 11  (model may guess incorrectly)

# With CoT
Q: Roger has 5 tennis balls. He buys 2 more cans of tennis balls.
   Each can has 3 tennis balls. How many does he have now?
A: Roger started with 5 balls. He bought 2 cans x 3 balls = 6 balls.
   5 + 6 = 11 tennis balls. The answer is 11.
```

## Why This Matters

- GSM8K benchmark: standard prompting ~18% accuracy vs. CoT ~57% (PaLM 540B)
- CoT benefits scale with model size — smaller models gain less
- The reasoning chain is inspectable, making errors diagnosable
- CoT works across languages and task types, not just math

## Sources

- [Chain-of-Thought Prompting Elicits Reasoning in Large Language Models (Wei et al., 2022)](https://arxiv.org/abs/2201.11903)
