---
title: "The Evaluation Landscape"
section: Framing
layout: cards
---

# The Evaluation Landscape

## Benchmarks

Static test suites with known answers (MMLU, HumanEval, TruthfulQA). Good for comparing base models. Limited for production app evaluation -- your domain isn't on the benchmark.

## Human Evaluation

Gold standard for subjective quality. Expensive ($5-15 per judgment), slow (days-weeks), hard to reproduce. Essential for calibration but not for CI/CD.

## Automated Metrics

Traditional NLP metrics: BLEU, ROUGE, BERTScore. Fast and cheap. Often poorly correlated with actual quality for open-ended generation tasks.

## LLM-as-a-Judge

Use a capable LLM (GPT-4, Claude) to score outputs against rubrics. 80-90% agreement with human raters. Scales to thousands of evaluations per hour at ~$0.01-0.05 each.

## Sources

- [MMLU: Measuring Massive Multitask Language Understanding (Hendrycks et al., 2020)](https://arxiv.org/abs/2009.03300)
- [HumanEval: Evaluating Large Language Models Trained on Code (Chen et al., 2021)](https://arxiv.org/abs/2107.03374)
- [TruthfulQA: Measuring How Models Mimic Human Falsehoods (Lin et al., 2021)](https://arxiv.org/abs/2109.07958)
- [Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena (Zheng et al., 2023)](https://arxiv.org/abs/2306.05685)
