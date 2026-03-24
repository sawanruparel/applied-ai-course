---
title: "Anthropic's Claude Agent SDK"
section: Frameworks Landscape
layout: standard
---

# Anthropic's Claude Agent SDK

## What It Is

- Anthropic's official Python SDK for building agents with Claude
- First-class support for **tool use**, **streaming**, and **multi-turn conversations**
- Thin layer over the Messages API — you stay close to the metal

## Code Example: Agent with Tools

```python
import anthropic

client = anthropic.Anthropic()

tools = [
    {
        "name": "get_weather",
        "description": "Get current weather for a city",
        "input_schema": {
            "type": "object",
            "properties": {
                "city": {"type": "string", "description": "City name"},
            },
            "required": ["city"],
        },
    }
]

messages = [{"role": "user", "content": "What's the weather in Paris?"}]

# Agent loop: call until no more tool use
while True:
    response = client.messages.create(
        model="claude-sonnet-4-20250514",
        max_tokens=1024,
        tools=tools,
        messages=messages,
    )
    if response.stop_reason == "tool_use":
        tool_block = next(b for b in response.content if b.type == "tool_use")
        result = execute_tool(tool_block.name, tool_block.input)
        messages.append({"role": "assistant", "content": response.content})
        messages.append({
            "role": "user",
            "content": [{"type": "tool_result",
                         "tool_use_id": tool_block.id, "content": result}],
        })
    else:
        break  # Final text response
```

## When to Use the Direct SDK

- You want **maximum control** over the conversation loop
- You're building Claude-specific features (extended thinking, PDF input, citations)
- You don't need multi-model support
- You prefer explicit code over framework abstractions

## Sources

- [Anthropic API Documentation](https://docs.anthropic.com)
- [Anthropic Python SDK — Messages API](https://docs.anthropic.com)
- [Anthropic Tool Use Documentation](https://docs.anthropic.com)
