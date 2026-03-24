---
title: "Error Handling for LLM APIs"
section: Production Concerns
layout: standard
---

# Error Handling for LLM APIs

## LLM APIs Fail in Ways Traditional APIs Don't

- **Rate limits** (429): You'll hit them. Every provider has them.
- **Timeout**: Large prompts or complex reasoning can take 30-60+ seconds.
- **Malformed output**: The model returns JSON that doesn't match your schema.
- **Content filtering**: Model refuses the request due to safety filters.
- **Context length exceeded**: Your prompt + history is too long.
- **Service outages**: Even OpenAI and Anthropic have downtime.

## Defense Layers

### 1. Retries with Exponential Backoff

```python
from tenacity import retry, stop_after_attempt, wait_exponential

@retry(stop=stop_after_attempt(3), wait=wait_exponential(min=1, max=30))
async def call_llm(prompt: str) -> str:
    return await agent.run(prompt)
```

### 2. Fallback Models

```python
async def call_with_fallback(prompt: str) -> str:
    try:
        return await primary_agent.run(prompt)  # Claude Sonnet
    except Exception:
        return await fallback_agent.run(prompt)  # GPT-4o-mini
```

### 3. Circuit Breaker

- After N consecutive failures, stop calling the API for a cooldown period
- Prevents cascading failures and runaway costs
- Libraries: `circuitbreaker`, `aiobreaker`, or custom implementation

### 4. Structured Output Validation

```python
# PydanticAI handles this — if output doesn't validate,
# it automatically re-prompts the model with the validation error
agent = Agent("openai:gpt-4o", result_type=MyModel, retries=2)
```

## The Error Handling Checklist

- [ ] Retries with backoff for transient failures
- [ ] Fallback model for provider outages
- [ ] Timeout on every LLM call (30s default, adjust per use case)
- [ ] Input validation before calling the LLM (check token count)
- [ ] Output validation after (Pydantic models, not string parsing)
- [ ] Graceful degradation in the UI when all else fails

## Sources

- [Tenacity — Retrying Library for Python (GitHub)](https://github.com/jd/tenacity)
- [PydanticAI Documentation — Retries & Validation](https://ai.pydantic.dev/)
- [OpenAI API Error Handling](https://platform.openai.com/docs)
- [Anthropic API Error Handling](https://docs.anthropic.com)
