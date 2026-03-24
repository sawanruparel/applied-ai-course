---
title: "Head-to-Head: Small Model Benchmarks"
section: Small Model Landscape
layout: standard
---

# Head-to-Head: Small Model Benchmarks

## ~3B Parameter Class

| Benchmark        | Llama 3.2 3B | Qwen 2.5 3B | Phi-4 mini 3.8B | Gemma 3 4B |
|------------------|:------------:|:------------:|:----------------:|:----------:|
| MMLU (5-shot)    | 63.4         | 65.6         | 68.6             | 64.2       |
| GSM8K (math)     | 77.7         | 79.1         | 84.8             | 73.5       |
| HumanEval (code) | 44.5         | 49.4         | 52.1             | 42.7       |
| ARC-C (reasoning)| 78.6         | 77.7         | 80.2             | 76.5       |
| GPQA (science)   | 28.1         | 30.5         | 36.4             | 29.8       |

## ~7–14B Parameter Class

| Benchmark        | Llama 3.1 8B | Qwen 2.5 7B | Qwen 3 8B | Phi-4 14B | Gemma 3 12B |
|------------------|:------------:|:------------:|:----------:|:---------:|:-----------:|
| MMLU (5-shot)    | 73.0         | 74.2         | 80.1       | 84.8      | 79.4        |
| GSM8K (math)     | 84.5         | 85.7         | 92.3       | 95.2      | 86.1        |
| HumanEval (code) | 62.2         | 66.5         | 72.3       | 73.8      | 64.3        |
| ARC-C (reasoning)| 83.4         | 84.1         | 87.5       | 89.2      | 85.8        |
| GPQA (science)   | 32.8         | 35.2         | 43.1       | 52.6      | 40.7        |

*Scores are approximate composites from published benchmarks and independent evaluations. Always validate on your own data.*

## Key Takeaway

The gap between 7B models and frontier models has narrowed dramatically. On focused tasks, the difference can be negligible.

## Sources

- [MMLU: Measuring Massive Multitask Language Understanding — arXiv:2009.03300 (Hendrycks et al., 2020)](https://arxiv.org/abs/2009.03300)
- [HumanEval: Evaluating Large Language Models Trained on Code — arXiv:2107.03374 (Chen et al., 2021)](https://arxiv.org/abs/2107.03374)
- [GSM8K: Training Verifiers to Solve Math Word Problems — arXiv:2110.14168 (Cobbe et al., 2021)](https://arxiv.org/abs/2110.14168)
- [GPQA: A Graduate-Level Google-Proof Q&A Benchmark — arXiv:2311.12022 (Rein et al., 2023)](https://arxiv.org/abs/2311.12022)
