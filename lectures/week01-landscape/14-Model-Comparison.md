---
title: "Model Comparison"
section: The Models
layout: standard
---

# Model Comparison (Approximate, Early 2026)

| Model | Input $/1M tok | Output $/1M tok | Context | Reasoning | Speed |
|-------|----------------|-----------------|---------|-----------|-------|
| GPT-4o | $2.50 | $10.00 | 128K | Standard | Fast |
| o3 (low) | $10.00 | $40.00 | 128K | Strong | Medium |
| o3 (high) | $10.00 | $40.00 | 128K | Very strong | Slow |
| Claude 4 Sonnet | $3.00 | $15.00 | 200K | Extended thinking | Fast |
| Claude 4 Opus | $15.00 | $75.00 | 200K | Extended thinking | Medium |
| Gemini 2.0 Flash | $0.10 | $0.40 | 1M | Flash thinking | Very fast |
| Gemini 2.0 Pro | $1.25 | $5.00 | 2M | Standard | Fast |
| DeepSeek R1 | $0.55 | $2.19 | 64K | Strong (visible CoT) | Medium |
| Llama 3 405B* | Self-host | Self-host | 128K | Standard | Varies |

*Self-hosted costs depend on infrastructure. Prices are approximate and change frequently.*

> There is no single "best" model -- the right choice depends on your task, budget, and latency requirements.

## Sources

- [OpenAI API Pricing](https://openai.com/api/pricing/)
- [Anthropic API Pricing](https://platform.claude.com/docs/en/about-claude/pricing)
- [Google AI Gemini API Pricing](https://ai.google.dev/gemini-api/docs/pricing)
- [DeepSeek API Pricing](https://api-docs.deepseek.com/news/news250120)
- [Introducing Meta Llama 3 (Meta, 2024)](https://ai.meta.com/blog/meta-llama-3/)
