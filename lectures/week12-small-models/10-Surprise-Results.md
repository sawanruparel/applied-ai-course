---
title: "When Small Beats Big"
section: Small Model Landscape
layout: standard
---

# When Small Beats Big

## The Counterintuitive Results

Fine-tuned small models regularly outperform general-purpose frontier models on specific tasks. This is not a fluke — it is a repeatable pattern.

## Documented Examples

- **Medical NER**: Fine-tuned Llama 3.1 8B outperformed GPT-4 on clinical entity extraction by 8% F1 (Microsoft Research, 2024)
- **Legal clause classification**: Fine-tuned Phi-3 mini beat GPT-4o by 12% accuracy on contract review tasks
- **SQL generation**: Fine-tuned Qwen 2.5 Coder 7B matched GPT-4.1 on Spider benchmark while costing 100x less
- **Sentiment analysis**: A fine-tuned 3B model achieves 95%+ accuracy — no frontier model needed
- **Structured extraction**: Constrained decoding with a 7B model produces valid JSON 99.9% of the time

## Why Does This Happen?

1. **Task narrowness**: Small models have enough capacity for focused tasks
2. **Fine-tuning efficiency**: Adapting all parameters of a small model beats prompting a large one
3. **Output constraints**: Structured tasks reduce the generation space — smaller models excel
4. **Data quality**: Domain-specific fine-tuning data teaches exactly what is needed

## The Rule of Thumb

If your task can be described in a 1-page annotation guide and you have 1,000+ labeled examples, a fine-tuned 7B model will likely match frontier performance.

## Sources

- [The Llama 3 Herd of Models — arXiv:2407.21783 (Meta, 2024)](https://arxiv.org/abs/2407.21783)
- [Phi-3 Technical Report — arXiv:2404.14219 (Microsoft, 2024)](https://arxiv.org/abs/2404.14219)
- [Qwen2.5-Coder Technical Report — arXiv:2409.12186 (Qwen Team, 2024)](https://arxiv.org/abs/2409.12186)
