---
title: "PydanticAI Code Patterns"
section: Frameworks Landscape
layout: standard
---

# PydanticAI Code Patterns

## Basic Agent with Structured Output

```python
from pydantic import BaseModel
from pydantic_ai import Agent

class CityInfo(BaseModel):
    name: str
    country: str
    population: int
    fun_fact: str

agent = Agent(
    "openai:gpt-4o",
    result_type=CityInfo,
    system_prompt="You are a geography expert. Return accurate city data.",
)

result = await agent.run("Tell me about Tokyo")
print(result.data)  # CityInfo(name='Tokyo', country='Japan', ...)
```

## Agent with Tools and Dependencies

```python
from dataclasses import dataclass
from pydantic_ai import Agent, RunContext

@dataclass
class Deps:
    db: DatabasePool
    user_id: str

agent = Agent("anthropic:claude-sonnet-4-20250514", deps_type=Deps)

@agent.tool
async def lookup_order(ctx: RunContext[Deps], order_id: str) -> str:
    """Look up an order by its ID."""
    row = await ctx.deps.db.fetchrow(
        "SELECT * FROM orders WHERE id = $1 AND user_id = $2",
        order_id, ctx.deps.user_id,
    )
    return f"Order {order_id}: status={row['status']}, total=${row['total']}"

@agent.tool
async def cancel_order(ctx: RunContext[Deps], order_id: str) -> str:
    """Cancel an order if it hasn't shipped yet."""
    await ctx.deps.db.execute(
        "UPDATE orders SET status='cancelled' WHERE id=$1", order_id
    )
    return f"Order {order_id} cancelled."

result = await agent.run(
    "Cancel my order #1234",
    deps=Deps(db=pool, user_id="u_abc"),
)
```

## Key Pattern: Dependency Injection Makes Testing Easy

```python
# In tests — swap real DB for a mock
mock_deps = Deps(db=MockDB(), user_id="test_user")
result = await agent.run("Cancel order #1234", deps=mock_deps)
```

## Sources

- [PydanticAI Documentation — Agents](https://ai.pydantic.dev/)
- [PydanticAI Dependencies & Tool Use](https://ai.pydantic.dev/)
- [Pydantic BaseModel Documentation](https://docs.pydantic.dev)
