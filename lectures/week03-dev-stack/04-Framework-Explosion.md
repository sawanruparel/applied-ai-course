---
title: "The Cambrian Explosion of AI Frameworks"
section: Frameworks Landscape
layout: standard
---

# The Cambrian Explosion of AI Frameworks

## The Current Landscape (Spring 2026)

- **LangChain / LangGraph** — The incumbent. Massive ecosystem, steepest learning curve.
- **LlamaIndex Workflows** — Once a retrieval library; **Workflows** turned it into an event-driven, full-stack app framework with first-class state management, workflow orchestration, and structured event passing. Still the strongest data/ingestion layer.
- **CrewAI** — Multi-agent framework with role-based agents. Good for defined team workflows.
- **Microsoft Agent Framework (MAF)** — The **AutoGen + Semantic Kernel merger** (announced late 2025). Targets .NET enterprise: type-safe plugins, middleware, built-in observability, plus AutoGen's multi-agent patterns.
- **PydanticAI** — Type-safe agents from the Pydantic team. Clean, Pythonic, production-ready.
- **Claude Agent SDK** — Anthropic's native agent framework. First-class tool use and streaming.
- **Instructor** — Lightweight structured output. Wraps any LLM client.
- **Mirascope** — Pythonic LLM toolkit with provider-agnostic design.

## MCP Is Reshaping the Stack

- **Model Context Protocol (MCP)** standardized tool integration, **reducing the need for heavy framework abstractions** just to call tools
- Agent SDKs like **Composio** and **Prefect** now ship **500+ pre-built MCP integrations**, so much "framework" value is moving into the protocol + SDK layer

## What to Actually Use

| Need | Recommendation |
|------|---------------|
| Simple structured output | Instructor or PydanticAI |
| Single agent with tools | PydanticAI or Claude Agent SDK |
| Complex stateful workflows | LangGraph |
| RAG-heavy applications | LlamaIndex Workflows or custom |
| Multi-agent coordination | LangGraph or CrewAI |
| .NET / enterprise multi-agent | Microsoft Agent Framework (MAF) |

**Opinion**: Most applications need far less framework than developers think.

## Sources

- [LangChain Documentation](https://docs.langchain.com)
- [LangGraph Documentation](https://langchain-ai.github.io/langgraph/)
- [LlamaIndex Documentation](https://docs.llamaindex.ai)
- [CrewAI Documentation](https://docs.crewai.com/)
- [AutoGen — Microsoft (GitHub)](https://github.com/microsoft/autogen)
- [10 AI Agent Frameworks You Should Know in 2026 — incl. Microsoft Agent Framework (AtnoForGenAI, 2026)](https://medium.com/@atnoforgenai/10-ai-agent-frameworks-you-should-know-in-2026-langgraph-crewai-autogen-more-2e0be4055556)
- [LlamaIndex vs LangChain: Which to Choose in 2026 (Contabo)](https://contabo.com/blog/blog/llamaindex-vs-langchain-which-one-to-choose-in-2026/)
- [LLM Frameworks Replaced by Agent SDKs and MCP (MindStudio, 2026)](https://www.mindstudio.ai/blog/llm-frameworks-replaced-by-agent-sdks)
- [PydanticAI Documentation](https://ai.pydantic.dev/)
- [Anthropic Claude SDK Documentation](https://docs.anthropic.com)
- [Instructor (GitHub)](https://github.com/567-labs/instructor)
- [Mirascope Documentation](https://mirascope.com/docs/mirascope)
