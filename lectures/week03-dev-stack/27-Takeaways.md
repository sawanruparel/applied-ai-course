---
title: "Key Takeaways"
section: Close
layout: cards
---

# Key Takeaways

## Simplicity Wins

Most LLM applications need a simple chain or a router, not an agent framework. Start with the simplest pattern and upgrade only when you hit a real wall. Complexity is a cost, not a feature.

## PydanticAI for Agents, LangGraph for Workflows

PydanticAI is the best default for tool-using agents: type-safe, testable, Pythonic. Reach for LangGraph when you need stateful, checkpointed, multi-step workflows with human-in-the-loop. Don't use both where one will do.

## Separate Business Logic from Framework

Write your core logic as plain Python functions. The framework should wire things together, not own your code. This protects you when frameworks change, break, or get abandoned.

## Observability and Evals Are Non-Negotiable

Instrument tracing from day one. Build an eval suite before writing prompts. If you can't measure it, you can't improve it, and you definitely can't debug it in production.

## Cost Is a First-Class Concern

Token costs compound fast. Route to cheap models, cache aggressively, set budget controls, and track spend per feature. The difference between a naive and optimized stack can be 5-10x in cost.

## Ship, Then Optimize

Get to production with a minimal stack. Real traffic reveals which optimizations matter. Premature optimization of AI systems is especially wasteful because the model landscape changes quarterly.
