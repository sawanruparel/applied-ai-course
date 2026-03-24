---
title: "Multi-Agent Framework Landscape"
section: Framing
layout: standard
---

# Multi-Agent Framework Landscape

## AutoGen (Microsoft)
- Conversation-driven multi-agent framework
- Agents communicate through chat-like message passing
- Strong support for human-in-the-loop workflows
- GroupChat abstraction for multi-party agent conversations

## CrewAI
- Role-based agent teams with a "crew" metaphor
- Declarative: define agents, tasks, and processes in config
- Built-in sequential and hierarchical process types
- Lower barrier to entry; good for straightforward pipelines

## LangGraph (LangChain)
- Graph-based orchestration with explicit state machines
- Nodes are agents or functions, edges are conditional transitions
- Fine-grained control over routing, loops, and error handling
- Best for complex workflows where you need deterministic control flow

## Claude Agent SDK (Anthropic)
- Lightweight Python SDK for building agent loops with Claude
- Built-in support for tool use, handoffs between agents, and guardrails
- First-class MCP integration for connecting agents to external services
- Designed for production: tracing, streaming, structured output

## How to Choose
- **Prototyping quickly?** CrewAI or AutoGen
- **Complex state machines?** LangGraph
- **Production with Claude?** Claude Agent SDK
- **Research/experimentation?** AutoGen's flexible conversation patterns

## Sources

- [AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation (Wu et al., 2023)](https://arxiv.org/abs/2308.08155)
- [AutoGen GitHub Repository (Microsoft)](https://github.com/microsoft/autogen)
- [CrewAI GitHub Repository](https://github.com/crewAIInc/crewAI)
- [LangGraph Documentation (LangChain)](https://langchain-ai.github.io/langgraph/)
- [Claude Agent SDK (Anthropic)](https://github.com/anthropics/claude-agent-sdk-python)
