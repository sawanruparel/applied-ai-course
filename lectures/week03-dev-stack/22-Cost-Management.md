---
title: "Cost Management"
section: Production Concerns
layout: standard
---

# Cost Management

## The Cost Equation

```
Cost = (input_tokens * input_price) + (output_tokens * output_price)
```

Prices per million tokens (as of early 2026):

| Model | Input | Output | Sweet Spot |
|-------|-------|--------|------------|
| GPT-4o-mini | $0.15 | $0.60 | High-volume, simple tasks |
| GPT-4o | $2.50 | $10.00 | Complex reasoning |
| Claude Haiku | $0.25 | $1.25 | Fast, cheap classification |
| Claude Sonnet | $3.00 | $15.00 | Balanced quality/cost |
| Gemini Flash | $0.075 | $0.30 | Cheapest option for bulk |

## Cost Optimization Strategies

### 1. Model Routing

- Route simple queries to cheap models (GPT-4o-mini, Haiku, Gemini Flash)
- Reserve expensive models for complex tasks
- A router paying $0.15/M tokens to save $10/M tokens on 60% of requests is a huge win

### 2. Prompt Optimization

- Shorter prompts = fewer input tokens = lower cost
- Remove verbose system prompts — be concise
- Use structured output to minimize output tokens (JSON, not prose)

### 3. Token Budgets

```python
# Track usage across agent runs
result = await agent.run("Analyze this document")
print(f"Tokens used: {result.usage().total_tokens}")
print(f"Cost: ${result.usage().total_tokens * price_per_token:.4f}")
```

### 4. Budget Controls

- Set per-request, per-user, and per-day spending limits
- Alert when spend exceeds thresholds
- Kill switch: disable expensive features when budget is exhausted

## Real-World Benchmark

A support chatbot handling 10,000 conversations/day:
- **Without optimization**: ~$500/day (GPT-4o for everything)
- **With routing + caching**: ~$80/day (70% Haiku, 25% Sonnet, 5% GPT-4o, 40% cache hit)

## Sources

- [OpenAI API Pricing](https://openai.com/api/pricing/)
- [Anthropic Claude API Pricing](https://claude.com/pricing)
- [Google Gemini API Pricing](https://ai.google.dev/pricing)
