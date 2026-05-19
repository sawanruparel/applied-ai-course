---
title: "Self-Consistency"
section: Chain-of-Thought
layout: diagram
---

# Self-Consistency: Multiple Paths, Majority Vote

Wang et al. (2022): Sample multiple reasoning chains at temperature > 0, then take the majority answer. Different reasoning paths that converge on the same answer signal correctness.

```mermaid
flowchart TB
    P["Same prompt<br/>(temperature = 0.7)"]
    P --> C1["Chain 1<br/>Ans: 42"]
    P --> C2["Chain 2<br/>Ans: 42"]
    P --> C3["Chain 3<br/>Ans: 37"]
    P --> Cn["Chain N<br/>Ans: 42"]
    C1 --> V[Majority vote]
    C2 --> V
    C3 --> V
    Cn --> V
    V --> A["Answer: 42<br/>(3 of 4 agree)"]
```

## Key Properties

- **N = 5-10** samples is typically sufficient for arithmetic and commonsense tasks
- **Diverse reasoning paths** → higher confidence when they agree
- **Cost tradeoff**: N times the inference cost, but significantly higher accuracy
- GSM8K: CoT alone ~57% → Self-Consistency ~74% (PaLM 540B)
- Works with any CoT variant as the base sampling strategy

## Sources

- [Self-Consistency Improves Chain of Thought Reasoning in Language Models (Wang et al., 2022)](https://arxiv.org/abs/2203.11171)
