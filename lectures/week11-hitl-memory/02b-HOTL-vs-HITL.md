---
title: "Human-in-the-Loop vs Human-on-the-Loop"
section: Framing
layout: standard
---

# HITL vs HOTL

Two oversight models with very different latency and throughput profiles.

## Human-in-the-Loop (HITL)

**Synchronous approval before each action.** The agent pauses and waits for a human to approve every consequential step before it proceeds.

- Maximum control — nothing irreversible happens without sign-off
- Adds latency to every gated action; throughput is bounded by human availability
- Right choice for **high-stakes, irreversible actions** (wire transfers, production deletes, medical orders)

## Human-on-the-Loop (HOTL)

**Asynchronous monitoring; intervene only on anomalies.** The agent acts autonomously while a human watches dashboards and alerts, stepping in only when something looks wrong.

- High throughput — the human is not in the critical path
- Relies on strong observability and anomaly detection to surface what needs attention
- Right choice for **high-volume, lower-stakes** or easily-reversible workflows

## Choosing between them

Most production systems prefer **HOTL for throughput** and reserve **HITL for high-stakes, irreversible actions**. The two are not exclusive — a single system can run HOTL by default and escalate to HITL when confidence is low or an action crosses a risk threshold.

## Sources

- [Human-in-the-Loop vs Human-on-the-Loop AI Agents (Waxell)](https://www.waxell.ai/blog/human-in-the-loop-vs-human-on-the-loop-ai-agents)
