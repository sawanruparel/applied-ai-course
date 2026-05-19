---
title: "The AI Application Stack"
section: Framing
layout: diagram
---

# The AI Application Stack

Every AI application has these layers, whether you make them explicit or not.

```mermaid
flowchart TB
    L1["Deployment & Infra<br/>Docker / K8s / Serverless / Edge"]
    L2["Observability<br/>Tracing / Logging / Eval / Cost"]
    L3["Orchestration<br/>LangGraph / PydanticAI / custom"]
    L4["Framework / SDK<br/>openai / anthropic / litellm"]
    L5["Model layer<br/>GPT-4o / Claude / Gemini / Llama"]
    L1 --> L2 --> L3 --> L4 --> L5
```

**Key insight**: You can swap layers independently. A good architecture keeps each layer replaceable.

## Sources

- [LangGraph Documentation](https://langchain-ai.github.io/langgraph/)
- [PydanticAI Documentation](https://ai.pydantic.dev/)
- [OpenAI API Documentation](https://platform.openai.com/docs)
- [Anthropic API Documentation](https://docs.anthropic.com)
- [LiteLLM — Unified LLM API (GitHub)](https://github.com/BerriAI/litellm)
