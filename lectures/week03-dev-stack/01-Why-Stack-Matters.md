---
title: "Why Stack Choice Matters"
section: Framing
layout: standard
---

# Why Stack Choice Matters

## The Cost of Rewrites

- The AI framework landscape changes **every 3-6 months** — new entrants, breaking changes, abandoned projects
- A bad framework choice can mean **weeks of rewrite** when requirements shift
- Production AI apps have unique constraints: **non-determinism, latency, cost per request**

## What Goes Wrong

- **Over-abstraction**: Framework hides the LLM call so deeply you can't debug token usage
- **Lock-in**: Your prompt logic is tangled with framework-specific state management
- **Wrong level of complexity**: Using an orchestration engine for a single prompt-response app

## The Goal This Week

- Understand the **layers** of the AI application stack
- Compare **LangGraph** and **PydanticAI** in depth — the two strongest contenders for production Python
- Learn **architectural patterns** so you pick the right one before writing code
- Know what **production concerns** you'll hit and how to handle them
