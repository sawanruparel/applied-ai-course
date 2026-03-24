---
title: "Pattern 4: Agent Loop"
section: Architecture Patterns
layout: diagram
---

# Pattern 4: Agent Loop

The model decides what to do next. Plan, act, observe, repeat.

```
                    ┌──────────────┐
                    │   User       │
                    │   Query      │
                    └──────┬───────┘
                           │
                    ┌──────▼───────┐
               ┌───▶│   Think /   │
               │    │   Plan      │
               │    └──────┬───────┘
               │           │
               │    ┌──────▼───────┐
               │    │   Select    │──── done? ──▶ Return result
               │    │   Tool      │
               │    └──────┬───────┘
               │           │
               │    ┌──────▼───────┐
               │    │   Execute   │
               │    │   Tool      │
               │    └──────┬───────┘
               │           │
               │    ┌──────▼───────┐
               └────│   Observe   │
                    │   Result    │
                    └─────────────┘
```

## This Is What "Agents" Actually Are

- The LLM is in the driver's seat — it picks which tool to call and when to stop
- Each iteration adds to the conversation history (growing context)
- The loop runs until: the model returns a final answer, a max iteration limit, or an error

## Critical Guardrails

- **Max iterations**: Always set a cap (5-10 for most use cases)
- **Token budget**: Track cumulative tokens; abort if budget exceeded
- **Tool result size**: Truncate large tool outputs before feeding back
- **Timeout**: Wall-clock timeout for the entire agent run

```python
agent = Agent("anthropic:claude-sonnet-4-20250514",
    system_prompt="You are a research assistant with access to search and calculator.",
    retries=2,
)
# PydanticAI handles the loop internally — tools are called until done
result = await agent.run("What's the GDP per capita of the top 3 EU economies?")
```

**Warning**: Agent loops are the most expensive pattern. Each iteration is a full LLM call with growing context. Monitor costs.

## Sources

- [PydanticAI Documentation — Agents](https://ai.pydantic.dev/)
- [ReAct: Synergizing Reasoning and Acting in Language Models (Yao et al., 2022)](https://arxiv.org/abs/2210.03629)
- [Anthropic Building Effective Agents](https://www.anthropic.com/research/building-effective-agents)
