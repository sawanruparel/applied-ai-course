---
title: "PydanticAI: Type-Safe Agents"
section: Frameworks Landscape
layout: standard
---

# PydanticAI: Type-Safe Agents

## Philosophy

- Built by the **Pydantic team** — the same people behind FastAPI's data validation
- Design principle: **Python-first, not framework-first**
- Uses standard Python patterns: type hints, dataclasses, dependency injection
- You write normal Python functions; PydanticAI makes them available to the LLM

## Core Concepts

- **Agent**: A configured LLM with a system prompt, tools, and a result type
- **Tools**: Python functions decorated with `@agent.tool` — type hints become the schema
- **Dependencies**: Injected context (database connections, user info) — not hardcoded globals
- **Structured Results**: Pydantic models as return types — validated automatically
- **Model-agnostic**: Works with OpenAI, Anthropic, Gemini, Groq, Ollama out of the box

## Why PydanticAI Wins for Many Use Cases

- **Type safety end-to-end**: Your IDE catches errors before runtime
- **Testable**: Dependency injection means you can mock everything
- **Minimal magic**: Read the source and understand what happens
- **Fast iteration**: Change a tool function, re-run — no graph to rewire
- **Production-ready**: Built-in streaming, retries, and usage tracking

## When PydanticAI Is Not Enough

- No built-in graph execution or checkpointing
- Multi-agent coordination requires custom code
- No visual graph editor or execution replay

## Sources

- [PydanticAI Documentation](https://ai.pydantic.dev/)
- [Pydantic Documentation](https://docs.pydantic.dev)
- [FastAPI Documentation](https://fastapi.tiangolo.com)
