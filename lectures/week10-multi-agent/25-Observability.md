---
title: "Observability"
section: Production Concerns
layout: standard
---

# Observability: Tracing Multi-Agent Conversations

## Why Multi-Agent Systems Are Hard to Debug
- A 4-agent pipeline produces 4+ LLM calls, each with its own input/output
- When the final output is wrong, which agent introduced the error?
- Agent interactions create emergent behavior — the bug may not be in any single agent
- Without tracing, debugging is guesswork

## What to Trace

### Per-Agent Traces
- **Input:** What prompt and context did the agent receive?
- **Output:** What did the agent produce?
- **Tool calls:** Which tools were called, with what arguments, and what was returned?
- **Token usage:** Input tokens, output tokens, total cost
- **Latency:** How long did this agent take?
- **Decision points:** Why did the supervisor choose this agent?

### Workflow-Level Traces
- **Full execution graph:** Which agents ran, in what order, with what data flow
- **State transitions:** How did shared state change after each agent
- **Iteration count:** How many loops before convergence
- **Total cost and latency** for the complete workflow

## Tracing Tools
- **LangSmith** — First-party tracing for LangGraph and LangChain workflows
- **Braintrust** — Model evaluation and tracing with multi-step support
- **Arize Phoenix** — Open-source observability for LLM applications
- **OpenTelemetry** — Standard tracing protocol; some LLM frameworks emit OTEL spans
- **Claude Agent SDK** — Built-in tracing with structured trace events

## Practical Tip: The Replay Debugger
- Log every agent's input and output as structured JSON
- When a workflow fails, replay individual agents with their exact inputs
- This lets you test fixes on a single agent without rerunning the whole pipeline
- Store traces for at least 30 days — patterns emerge over time

## Sources

- [LangSmith Observability (LangChain)](https://docs.langchain.com/langsmith/observability)
- [Braintrust: AI Observability Platform](https://www.braintrust.dev/)
- [Arize Phoenix: Open-Source AI Observability](https://github.com/Arize-ai/phoenix)
- [Claude Agent SDK (Anthropic)](https://github.com/anthropics/claude-agent-sdk-python)
