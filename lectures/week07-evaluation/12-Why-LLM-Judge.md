---
title: "Why LLM-as-a-Judge Works"
section: LLM-as-a-Judge
layout: standard
---

# Why LLM-as-a-Judge Works

## High Correlation with Human Judgment at Lower Cost

## Benchmark Evidence

Research consistently shows strong agreement between LLM judges and human evaluators:

| Study | Judge Model | Human Agreement | Task |
|---|---|---|---|
| MT-Bench (Zheng et al., 2023) | GPT-4 | 85% pairwise agreement | Multi-turn chat |
| AlpacaEval 2 | GPT-4-Turbo | 69.2% Spearman correlation | Instruction following |
| G-Eval (Liu et al., 2023) | GPT-4 | 0.514 Spearman (summarization) | Coherence, fluency |
| RAGAS (Es et al., 2023) | GPT-3.5+ | Significant correlation | RAG faithfulness |
| Prometheus (Kim et al., 2024) | Prometheus-2 | 0.59 Pearson | Open-ended scoring |

## Cost and Speed Comparison

| Method | Cost per Evaluation | Turnaround | Scalability |
|---|---|---|---|
| Expert human review | $5 - $15 | Days to weeks | Low (10-50/day/person) |
| Crowdsourced review | $0.50 - $2 | Hours to days | Medium (100s/day) |
| LLM judge (GPT-4o) | $0.01 - $0.05 | Seconds | High (1000s/hour) |
| LLM judge (GPT-4o-mini) | $0.001 - $0.005 | Seconds | Very high |

## The Practical Tradeoff

- LLM judges are **not perfect** -- they agree with humans ~80-85% of the time
- But human annotators only agree with EACH OTHER ~80-85% of the time (inter-annotator agreement)
- LLM judges are **consistent** -- same input always gets similar scores (no bad days, no fatigue)
- Use human eval to calibrate and validate your LLM judge, then scale with the LLM

## Sources

- [Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena (Zheng et al., 2023)](https://arxiv.org/abs/2306.05685)
- [G-Eval: NLG Evaluation using GPT-4 with Better Human Alignment (Liu et al., 2023)](https://arxiv.org/abs/2303.16634)
- [RAGAS: Automated Evaluation of Retrieval Augmented Generation (Es et al., 2023)](https://arxiv.org/abs/2309.15217)
- [Prometheus: Inducing Fine-Grained Evaluation Capability in Language Models (Kim et al., 2023)](https://arxiv.org/abs/2310.08491)
- [Length-Controlled AlpacaEval: A Simple Way to Debias Automatic Evaluators (Dubois et al., 2024)](https://arxiv.org/abs/2404.04475)
