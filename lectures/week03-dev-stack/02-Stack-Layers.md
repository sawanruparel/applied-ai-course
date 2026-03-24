---
title: "The AI Application Stack"
section: Framing
layout: diagram
---

# The AI Application Stack

Every AI application has these layers, whether you make them explicit or not.

```
┌─────────────────────────────────────────────────┐
│              DEPLOYMENT & INFRA                  │
│     Docker / K8s / Serverless / Edge             │
├─────────────────────────────────────────────────┤
│              OBSERVABILITY                       │
│     Tracing / Logging / Eval / Cost Tracking     │
├─────────────────────────────────────────────────┤
│              ORCHESTRATION                       │
│     Routing / State / Multi-step / Agents        │
│     (LangGraph, PydanticAI, custom code)         │
├─────────────────────────────────────────────────┤
│              FRAMEWORK / SDK                     │
│     LLM client, tool calling, structured output  │
│     (openai SDK, anthropic SDK, litellm)         │
├─────────────────────────────────────────────────┤
│              MODEL LAYER                         │
│     GPT-4o / Claude / Gemini / Llama / Mistral   │
│     via API or self-hosted                       │
└─────────────────────────────────────────────────┘
```

**Key insight**: You can swap layers independently. A good architecture keeps each layer replaceable.

## Sources

- [LangGraph Documentation](https://langchain-ai.github.io/langgraph/)
- [PydanticAI Documentation](https://ai.pydantic.dev/)
- [OpenAI API Documentation](https://platform.openai.com/docs)
- [Anthropic API Documentation](https://docs.anthropic.com)
- [LiteLLM — Unified LLM API (GitHub)](https://github.com/BerriAI/litellm)
