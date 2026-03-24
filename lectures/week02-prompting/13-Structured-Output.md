---
title: "Structured Output"
section: Advanced Patterns
layout: standard
---

# Structured Output: JSON Mode, Function Calling, Schema Enforcement

Unstructured text is hard to parse reliably. Structured output techniques guarantee machine-readable formats.

## JSON Mode

Most modern APIs support forcing JSON output. Always provide a schema.

```python
response = client.chat.completions.create(
    model="gpt-4o",
    response_format={"type": "json_object"},
    messages=[{
        "role": "system",
        "content": """Extract entities as JSON. Schema:
        {"persons": [str], "orgs": [str], "dates": [str]}"""
    }, {
        "role": "user",
        "content": "Tim Cook announced Apple's Q1 results on Jan 30, 2025."
    }]
)
# {"persons": ["Tim Cook"], "orgs": ["Apple"], "dates": ["Jan 30, 2025"]}
```

## Function Calling / Tool Use

Define typed function signatures. The model returns structured arguments.

```python
tools = [{
    "type": "function",
    "function": {
        "name": "create_calendar_event",
        "parameters": {
            "type": "object",
            "properties": {
                "title": {"type": "string"},
                "start": {"type": "string", "format": "date-time"},
                "duration_minutes": {"type": "integer"}
            },
            "required": ["title", "start"]
        }
    }
}]
```

## Schema Enforcement Strategies

- **Constrained decoding**: Outlines, Instructor, LMQL — force valid tokens at generation time
- **Post-hoc validation**: Pydantic models, JSON Schema validators, retry on failure
- **Hybrid**: generate freely, validate, re-prompt with error message if invalid

## Sources

- [Outlines — Structured Generation Library (dottxt-ai)](https://github.com/dottxt-ai/outlines)
- [Instructor — Structured Outputs for LLMs (jxnl)](https://github.com/567-labs/instructor)
- [LMQL — Language Model Query Language (ETH Zurich)](https://lmql.ai/)
