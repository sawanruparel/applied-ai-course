---
title: "Pattern 1: Simple Chain"
section: Architecture Patterns
layout: diagram
---

# Pattern 1: Simple Chain

The most common pattern. Most LLM applications are just this.

```
┌──────────┐     ┌──────────┐     ┌──────────┐     ┌──────────┐
│  Input    │────▶│  Prompt  │────▶│   LLM    │────▶│  Parse   │
│           │     │ Template │     │   Call   │     │  Output  │
└──────────┘     └──────────┘     └──────────┘     └──────────┘
```

## When to Use

- Single question → single answer
- Text classification, summarization, extraction
- Any task that needs **one LLM call**

## Implementation (Plain Python)

```python
from pydantic_ai import Agent
from pydantic import BaseModel

class Sentiment(BaseModel):
    label: str  # "positive", "negative", "neutral"
    confidence: float
    reasoning: str

agent = Agent(
    "openai:gpt-4o-mini",
    result_type=Sentiment,
    system_prompt="Analyze the sentiment of the given text.",
)

result = await agent.run("This product exceeded my expectations!")
# Sentiment(label='positive', confidence=0.95, reasoning='...')
```

**Cost**: ~1 LLM call. **Latency**: 0.5-2s. **Complexity**: Minimal.

**Do not** reach for a framework if this is all you need.
