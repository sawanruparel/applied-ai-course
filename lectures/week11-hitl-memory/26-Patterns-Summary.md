---
title: "HITL + Memory Patterns Summary"
section: Close
layout: cards
---

# HITL + Memory: Combined Patterns for Production Agents

Putting it all together — how HITL and memory work in concert.

## Safe Autonomous Agent

- Approval gates on irreversible actions
- Confidence-based routing for everything else
- Episodic memory of past mistakes prevents repeat errors
- Escalation to humans when confidence is low

## Personalized Assistant

- Entity memory tracks user preferences across sessions
- Summary memory compresses long interactions
- HITL on first encounter with new action types
- Gradually increases autonomy as trust builds

## Multi-Day Workflow Agent

- State machine with explicit HITL review checkpoints
- Persistent checkpointing survives restarts and failures
- Long-term memory of project context and decisions
- Review queues for batched human oversight

## Collaborative Team Agent

- Shared entity memory across team conversations
- Individual preference memory per team member
- Approval gates for actions affecting shared resources
- Feedback loops capture team corrections and norms
