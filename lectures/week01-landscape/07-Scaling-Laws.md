---
title: "Two Scaling Curves"
section: System 1 vs System 2
layout: diagram
---

# Training-Time vs. Inference-Time Scaling

```
Performance
    ^
    |                                    ___________  Inference-time scaling
    |                               ___/              (o3, R1 with more compute)
    |                          ___/
    |                     ___/
    |                ___/
    |           ___/        ____________  Training-time scaling
    |      ___/        ____/              (GPT-3 -> GPT-4)
    |  ___/       ____/
    | /       ___/
    |/    ___/
    | ___/
    |/
    +-------------------------------------------------> Compute (log scale)
```

### Key observations:

- **Training-time scaling** (Chinchilla laws): diminishing returns as models get larger
- **Inference-time scaling** (o1/o3/R1): new dimension of improvement, orthogonal to model size
- **They compose:** a larger model + more inference compute = best results
- **Practical implication:** a smaller model thinking longer can beat a larger model answering instantly
- OpenAI reported o3 outperforming o1 by spending 10-100x more inference compute on hard problems

## Sources

- [Training Compute-Optimal Large Language Models — Chinchilla (Hoffmann et al., 2022)](https://arxiv.org/abs/2203.15556)
- [Scaling LLM Test-Time Compute Optimally (Snell et al., 2024)](https://arxiv.org/abs/2408.03314)
- [OpenAI o1 System Card (OpenAI, 2024)](https://arxiv.org/abs/2412.16720)
