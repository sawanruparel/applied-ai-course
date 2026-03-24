---
title: "The Evaluation Crisis"
section: Challenges & Course Preview
layout: standard
---

# The Evaluation Crisis

### Benchmarks are saturating:

- MMLU: GPT-4 86.4% (2023) -> frontier models ~90%+ (2025) -- ceiling effect
- HumanEval (code): solved by most frontier models at 90%+
- GSM8K (math): went from challenging to trivial in 18 months
- When models ace the test, the test stops being informative

### Leaderboards are unreliable:

- **Data contamination:** benchmark questions leak into training data
- **Overfitting to benchmarks:** models (or their training) optimized for specific tests
- **Chatbot Arena** (LMSYS): crowdsourced preference, but biased toward style over substance
- **Self-reported results** from labs are marketing, not science

### What to do instead:

- **Build domain-specific evals** for your actual use case
- **Use held-out test sets** that are not public
- **Test on real user queries,** not synthetic benchmarks
- **Evaluate systems, not models** -- the full pipeline matters
- **LLM-as-judge:** use a strong model to evaluate a weaker one (but watch for biases)
- **Track regression:** eval after every model update or prompt change

> If you are choosing a model based on a leaderboard, you are probably making the wrong decision.

## Sources

- [Measuring Massive Multitask Language Understanding — MMLU (Hendrycks et al., 2020)](https://arxiv.org/abs/2009.03300)
- [Evaluating Large Language Models Trained on Code — HumanEval (Chen et al., 2021)](https://arxiv.org/abs/2107.03374)
- [Training Verifiers to Solve Math Word Problems — GSM8K (Cobbe et al., 2021)](https://arxiv.org/abs/2110.14168)
- [Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena (Zheng et al., 2023)](https://arxiv.org/abs/2306.05685)
- [Chatbot Arena Leaderboard (LMSYS)](https://arena.ai/)
