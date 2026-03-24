---
title: "Guardrails AI: Validator Framework"
section: Guardrails & Content Safety
layout: standard
---

# Guardrails AI: Validator Framework

## Validation-Driven Safety

Guardrails AI provides a library of **composable validators** that check LLM outputs for specific quality and safety properties.

## Core Architecture

```python
from guardrails import Guard
from guardrails.hub import (
    ToxicLanguage,
    DetectPII,
    RestrictToTopic,
    GibberishText,
    ReadingTime,
)

# Compose multiple validators into a guard
guard = Guard().use_many(
    ToxicLanguage(on_fail="fix"),       # Fix toxic content
    DetectPII(                           # Redact PII
        pii_entities=["EMAIL", "PHONE", "SSN"],
        on_fail="fix"
    ),
    RestrictToTopic(                     # Stay on topic
        valid_topics=["customer support", "product info"],
        invalid_topics=["politics", "religion"],
        on_fail="refrain"
    ),
    GibberishText(on_fail="reask"),     # Detect nonsense
    ReadingTime(max_minutes=2),          # Length control
)
```

## Using the Guard

```python
result = guard(
    llm_api=openai.chat.completions.create,
    model="gpt-4o",
    messages=[{"role": "user", "content": user_input}],
)

if result.validation_passed:
    return result.validated_output
else:
    # Handle validation failure
    log_safety_event(result.error)
    return "I'm unable to provide that response."
```

## Failure Strategies

| Strategy | Behavior |
|----------|----------|
| `noop` | Log the failure but pass through |
| `refrain` | Return None -- suppress the output |
| `fix` | Attempt to fix the output (e.g., redact PII) |
| `reask` | Ask the LLM to regenerate with feedback |
| `exception` | Raise a Python exception |
| `filter` | Remove the failing chunk from streaming output |

## Guardrails Hub

Community-contributed validators: hallucination detection, SQL injection checks, regex matching, competitor mention detection, bias screening, and 50+ more.

## Sources

- [Guardrails AI](https://github.com/guardrails-ai/guardrails)
