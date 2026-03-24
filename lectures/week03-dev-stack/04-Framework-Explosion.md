---
title: "The Cambrian Explosion of AI Frameworks"
section: Frameworks Landscape
layout: standard
---

# The Cambrian Explosion of AI Frameworks

## The Current Landscape (Spring 2026)

- **LangChain / LangGraph** — The incumbent. Massive ecosystem, steepest learning curve.
- **LlamaIndex** — Originally RAG-focused, now a full framework. Best for data-heavy apps.
- **CrewAI** — Multi-agent framework with role-based agents. Good for defined team workflows.
- **AutoGen (Microsoft)** — Multi-agent conversations. Research-oriented, complex setup.
- **PydanticAI** — Type-safe agents from the Pydantic team. Clean, Pythonic, production-ready.
- **Claude Agent SDK** — Anthropic's native agent framework. First-class tool use and streaming.
- **Instructor** — Lightweight structured output. Wraps any LLM client.
- **Mirascope** — Pythonic LLM toolkit with provider-agnostic design.

## What to Actually Use

| Need | Recommendation |
|------|---------------|
| Simple structured output | Instructor or PydanticAI |
| Single agent with tools | PydanticAI or Claude Agent SDK |
| Complex stateful workflows | LangGraph |
| RAG-heavy applications | LlamaIndex or custom |
| Multi-agent coordination | LangGraph or CrewAI |

**Opinion**: Most applications need far less framework than developers think.

## Sources

- [LangChain Documentation](https://docs.langchain.com)
- [LangGraph Documentation](https://langchain-ai.github.io/langgraph/)
- [LlamaIndex Documentation](https://docs.llamaindex.ai)
- [CrewAI Documentation](https://docs.crewai.com/)
- [AutoGen — Microsoft (GitHub)](https://github.com/microsoft/autogen)
- [PydanticAI Documentation](https://ai.pydantic.dev/)
- [Anthropic Claude SDK Documentation](https://docs.anthropic.com)
- [Instructor (GitHub)](https://github.com/567-labs/instructor)
- [Mirascope Documentation](https://mirascope.com/docs/mirascope)
