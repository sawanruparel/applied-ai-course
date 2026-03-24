---
title: "Benchmarking for YOUR Use Case"
section: Model Selection
layout: standard
---

# Benchmarking for YOUR Use Case

## Public Leaderboards Are Not Enough

- MMLU, HumanEval, GSM8K measure *general* capability
- Your production task is *specific* — leaderboard rankings often do not correlate
- Models optimize for benchmarks (contamination, overfitting)
- Your data distribution, prompt format, and quality bar are unique

## Build Custom Evals

### Step 1: Define Your Quality Metric
- Accuracy, F1, BLEU, ROUGE — pick what maps to business value
- Include human preference ratings for subjective tasks
- Define a minimum quality threshold (e.g., "95% extraction accuracy")

### Step 2: Create a Golden Test Set
- 200–500 representative examples from your actual data
- Cover edge cases, hard examples, and common patterns
- Version control your test set — it is a critical asset

### Step 3: Run Structured Comparisons
```
for model in [gpt-4.1, gpt-4.1-nano, llama-3.2-3b, qwen3-8b]:
    results = evaluate(model, test_set, prompt_template)
    log(model, accuracy, latency_p50, latency_p99, cost_per_1k)
```

### Step 4: Plot the Pareto Frontier
- X-axis: cost per 1,000 requests
- Y-axis: quality score
- Choose the model on the Pareto frontier that meets your quality bar

## Tools for Custom Evals

- **OpenAI Evals / Inspect AI**: framework for structured evaluation
- **LangSmith / Braintrust**: tracing + eval platforms
- **promptfoo**: open-source CLI for prompt and model comparison
- **Weights & Biases**: experiment tracking for model selection

## Sources

- [MMLU: Measuring Massive Multitask Language Understanding — arXiv:2009.03300 (Hendrycks et al., 2020)](https://arxiv.org/abs/2009.03300)
- [HumanEval: Evaluating Large Language Models Trained on Code — arXiv:2107.03374 (Chen et al., 2021)](https://arxiv.org/abs/2107.03374)
- [GSM8K: Training Verifiers to Solve Math Word Problems — arXiv:2110.14168 (Cobbe et al., 2021)](https://arxiv.org/abs/2110.14168)
- [Inspect AI — LLM Evaluation Framework (UK AISI)](https://github.com/UKGovernmentBEIS/inspect_ai)
- [LangSmith — Tracing and Eval Platform (LangChain)](https://www.langchain.com/langsmith-platform)
- [Braintrust — AI Observability and Evals Platform](https://www.braintrust.dev/)
- [promptfoo — Open-Source LLM Eval CLI](https://github.com/promptfoo/promptfoo)
- [Weights & Biases — Experiment Tracking Platform](https://wandb.ai/site/)
