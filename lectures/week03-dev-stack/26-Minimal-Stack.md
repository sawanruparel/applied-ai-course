---
title: "The Minimal Viable Stack"
section: Close
layout: standard
---

# The Minimal Viable Stack

Start here. Add complexity only when you have evidence you need it.

## Level 0: Prototype (Day 1)

- **Model**: OpenAI or Anthropic API directly
- **Framework**: None. Just `openai` or `anthropic` SDK.
- **Observability**: `print()` statements
- **Deployment**: Run locally or in a notebook
- **Testing**: Manual testing in the REPL

## Level 1: First Production App

- **Model**: GPT-4o-mini or Claude Haiku for cost efficiency
- **Framework**: PydanticAI for structured output and tool use
- **Observability**: Logfire or Langfuse for tracing
- **Deployment**: FastAPI in Docker on Cloud Run
- **Testing**: Unit tests for tools, 50-example eval suite

## Level 2: Scaling Up

- **Model**: Router across multiple models (cheap for simple, expensive for complex)
- **Framework**: PydanticAI for agents, LangGraph only if you need stateful workflows
- **Observability**: Full tracing with cost tracking and alerting
- **Deployment**: Kubernetes or ECS with auto-scaling
- **Testing**: Comprehensive evals in CI, LLM-as-judge for quality

## Level 3: Enterprise

- **Model**: Self-hosted for high-volume, API for burst capacity
- **Framework**: Custom orchestration layer on top of PydanticAI/LangGraph
- **Observability**: Integrated with existing APM (Datadog, New Relic)
- **Deployment**: Multi-region, failover across providers
- **Testing**: A/B testing, continuous eval, human review loops

**Most teams should live at Level 1 for longer than they think.**

## Sources

- [PydanticAI Documentation](https://ai.pydantic.dev/)
- [LangGraph Documentation](https://langchain-ai.github.io/langgraph/)
- [Pydantic Logfire](https://logfire.pydantic.dev/)
- [Langfuse — Open-Source LLM Observability](https://langfuse.com/)
- [FastAPI Documentation](https://fastapi.tiangolo.com)
- [OpenAI API Documentation](https://platform.openai.com/docs)
- [Anthropic API Documentation](https://docs.anthropic.com)
