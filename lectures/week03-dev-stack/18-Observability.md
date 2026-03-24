---
title: "Observability for LLM Applications"
section: Production Concerns
layout: standard
---

# Observability for LLM Applications

## Why LLM Observability Is Different

- Traditional apps: request in, response out, log the status code
- LLM apps: you need to see the **prompt**, **completion**, **token count**, **latency**, and **cost** for every call
- Agent loops make N calls per request — you need the **full trace**

## The Observability Stack

- **LangSmith** — LangChain's tracing platform. Works with LangGraph natively. Can instrument any LLM call.
- **Langfuse** — Open-source LLM observability. Self-hostable. Model-agnostic.
- **Arize Phoenix** — Open-source traces and evals. Strong on embeddings visualization.
- **Logfire** — From the Pydantic team. Native PydanticAI integration. Built on OpenTelemetry.
- **Braintrust** — Logging, evals, and prompt playground in one.

## What to Trace

- **Every LLM call**: model, prompt, completion, tokens (input/output), latency, cost
- **Tool calls**: which tool, input arguments, output, duration
- **Agent iterations**: how many loops, which tools called per loop
- **End-to-end request**: total latency, total cost, total tokens

## Minimal Setup with Logfire

```python
import logfire
logfire.configure()
logfire.instrument_pydantic_ai()

# Now every agent.run() is automatically traced
result = await agent.run("What's the status of order #1234?")
```

**Non-negotiable**: Do not ship an LLM application without tracing. You will not be able to debug production issues without it.

## Sources

- [LangSmith Observability Platform](https://www.langchain.com/langsmith/observability)
- [Langfuse — Open-Source LLM Observability](https://langfuse.com/)
- [Arize Phoenix — AI Observability & Evaluation (GitHub)](https://github.com/Arize-ai/phoenix)
- [Pydantic Logfire](https://logfire.pydantic.dev/)
- [Braintrust — AI Observability Platform](https://www.braintrust.dev/)
