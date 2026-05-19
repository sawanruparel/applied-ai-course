---
title: "What the Capstone Is"
section: Logistics
layout: standard
---

# The Capstone Is a Working System

Not a slide deck about a system. Not a paper review. A **running, demonstrable AI-powered application** that exercises at least three of the techniques covered this semester.

## The deliverables

| Artifact | Format | Why it matters |
|----------|--------|-----------------|
| Working application | Git repo + README that lets a TA run it | Code that doesn't run isn't a capstone |
| 15-minute demo | Live or recorded | Show the system *being used*, not described |
| Architecture writeup | 4–6 pages | The thinking behind the choices, with diagrams |
| Eval results | Section in the writeup | "It seems to work" is not a result |
| Failure analysis | Section in the writeup | What goes wrong, what you'd fix with more time |

## Required ingredients (pick ≥ 3)

- Retrieval (vector RAG, GraphRAG, or hybrid)
- An agentic loop with tool use
- An MCP server you built or a non-trivial MCP integration
- Multi-agent orchestration
- Human-in-the-loop pause points or memory
- Fine-tuning, distillation, or routing across model sizes
- A safety/guardrail layer with eval coverage

## Scoring focus

The grading rubric weights three things heavily:

1. **The problem is real.** Not a toy. Not a chatbot demo. Something you'd plausibly ship
2. **The evaluation is real.** You have numbers — quality, latency, cost — for *your* problem on *your* corpus, not a leaderboard
3. **The failure analysis is honest.** Capstones that pretend nothing went wrong are scored down; capstones that confront real failure modes are scored up

## What's *not* the capstone

- A re-implementation of a tutorial
- A list of LLM API calls strung together with no architectural thought
- An evaluation paper without a system that produced the data
- A system without an evaluation

Sources

- See `docs/capstone-rubric.md` in the course repo (rubric details + examples)
