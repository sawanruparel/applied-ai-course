---
title: "Framework Comparison"
section: Frameworks Landscape
layout: two-column
---

# Framework Comparison: Head to Head

## LangGraph

- **Paradigm**: State machine with typed graph
- **Strength**: Complex, stateful, multi-step workflows
- **State management**: Built-in checkpointing, persistence
- **Learning curve**: Steep — graph concepts, state reducers
- **Debugging**: LangSmith integration, graph visualization
- **Best for**: Workflows needing human-in-the-loop, replay, branching

## PydanticAI

- **Paradigm**: Type-safe agents with dependency injection
- **Strength**: Clean single-agent patterns, structured output
- **State management**: You manage it (just Python)
- **Learning curve**: Gentle — it's just Python + type hints
- **Debugging**: Standard Python debugging, Logfire integration
- **Best for**: Tool-using agents, structured extraction, API backends

---

| Dimension | LangGraph | PydanticAI | Direct SDK |
|-----------|-----------|------------|------------|
| Lines of code for simple agent | ~40 | ~15 | ~25 |
| Multi-model support | Yes | Yes | No (vendor-specific) |
| Checkpointing | Built-in | Manual | Manual |
| Type safety | Partial (TypedDict) | Full (Pydantic) | Manual |
| Streaming | Built-in | Built-in | Built-in |
| Testing story | Moderate | Excellent (DI) | Good |
| Vendor lock-in risk | Low | Low | High |
| Community size | Large | Growing fast | N/A |

**Our recommendation**: Start with PydanticAI. Move to LangGraph when you need stateful orchestration. Use direct SDK for vendor-specific features.

## Sources

- [LangGraph Documentation](https://langchain-ai.github.io/langgraph/)
- [PydanticAI Documentation](https://ai.pydantic.dev/)
- [LangSmith Platform](https://www.langchain.com/langsmith/observability)
- [Pydantic Logfire](https://logfire.pydantic.dev/)
- [OpenAI API Documentation](https://platform.openai.com/docs)
- [Anthropic API Documentation](https://docs.anthropic.com)
