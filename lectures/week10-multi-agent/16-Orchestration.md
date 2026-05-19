---
title: "Orchestration Engines"
section: Architecture Deep Dive
layout: standard
---

# Orchestration Engines

## LangGraph: State Machine Orchestration
- Define your workflow as a **directed graph** with nodes and edges
- Nodes are agents or functions; edges define transitions
- **Conditional edges** let you route based on state (if/else at graph level)
- Built-in support for cycles (agent loops), checkpointing, and human-in-the-loop
- As of **v0.4 (April 2026)**, HITL checkpoints surface automatically in `.invoke()` responses and state persists durably in Postgres/Redis, giving graph-based audit trails out of the box
- Best for: complex workflows with branching logic and loops

```python
graph = StateGraph(PipelineState)
graph.add_node("researcher", researcher_agent)
graph.add_node("writer", writer_agent)
graph.add_node("reviewer", reviewer_agent)

graph.add_edge("researcher", "writer")
graph.add_conditional_edges("reviewer", route_after_review,
    {"approved": END, "needs_revision": "writer"})
graph.set_entry_point("researcher")
```

## Event-Driven Architecture
- Agents subscribe to events and react independently
- A message broker (Redis, Kafka, or even an in-memory queue) delivers events
- Best for: systems where agents need to react to real-time triggers
- More infrastructure overhead but highly scalable

## Simple Function Orchestration
- For straightforward pipelines, just call agents in sequence in Python
- No framework needed — `result_a = agent_a(input); result_b = agent_b(result_a)`
- Best for: pipelines with 2-4 stages and no branching
- Don't reach for a framework until you need conditional routing or loops

## When to Use What
| Complexity | Approach | Example |
|---|---|---|
| Linear, 2-4 steps | Plain Python functions | Research then write |
| Branching, loops | LangGraph | Code review with revision cycles |
| Real-time, many agents | Event-driven | Customer support with live routing |
| Conversational handoffs | Claude Agent SDK | Multi-department chatbot |

## Sources

- [LangGraph Documentation (LangChain)](https://langchain-ai.github.io/langgraph/)
- [LangGraph v0.4: HITL checkpoints & state persistence — AI Tech Connect](https://aitechconnect.in/news/langgraph-v04-hitl-checkpoints-state-persistence)
- [Claude Agent SDK (Anthropic)](https://github.com/anthropics/claude-agent-sdk-python)
