---
title: "Cost Control"
section: Production Concerns
layout: standard
---

# Cost Control: Agent Loops Can Be Expensive

## The Cost Multiplication Problem
- A single agent call: ~$0.01-0.05 (depending on model and context size)
- A 4-agent pipeline: ~$0.04-0.20 per run
- A 4-agent pipeline with 3 revision loops: ~$0.12-0.60 per run
- A competitive pattern with 3 proposals + judge: ~$0.04-0.20 per decision
- **At scale, these costs multiply fast** — 1000 requests/day = $120-600/day

## Budget Enforcement Strategies

### Per-Agent Token Limits
- Set `max_tokens` on each agent call to prevent runaway generation
- A researcher doesn't need 8000 tokens to summarize findings — cap it at 2000
- This also forces agents to be concise

### Max Iteration Caps
- Every loop needs a hard stop: `max_iterations = 5`
- Collaborative patterns are the biggest risk — agents can "refine" forever
- Log a warning when an agent hits its iteration cap

### Early Stopping Conditions
- Define "good enough" criteria and stop iterating when met
- Example: "If the test pass rate is above 95%, stop the review cycle"
- Don't let perfect be the enemy of good (or cheap)

### Model Tiering
- Use cheaper models for simple tasks (classification, routing, formatting)
- Reserve expensive models for tasks that need reasoning (analysis, code generation)
- Example: Triage agent uses Haiku ($0.25/M tokens), specialist uses Sonnet ($3/M tokens)

## Cost Monitoring Dashboard
Track these metrics per agent and per workflow:
- **Tokens consumed** (input + output) per agent per run
- **Number of iterations** before convergence
- **Cost per completed workflow** (sum of all agent calls)
- **Abort rate** (how often workflows hit budget limits)
- Set alerts when cost per workflow exceeds 2x the expected baseline
