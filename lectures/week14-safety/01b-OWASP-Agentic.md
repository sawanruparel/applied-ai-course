---
title: OWASP Top 10 for Agentic Applications 2026
section: Framing
layout: standard
---

# OWASP Top 10 for Agentic Applications (2026)

## A Dedicated Framework for Agents

The original OWASP **Top 10 for LLM Applications** was written for chat-style systems. The new **OWASP Top 10 for Agentic Applications (2026)** -- a peer-reviewed effort with 100+ contributors -- **supersedes it for agent contexts**, where tool use, autonomy, and delegation create attack surfaces a chatbot never had.

## What's New for Agents

- **Agent Goal Hijack** -- attackers redirect the agent's objective, not just a single response
- **Tool Misuse** -- coercing the agent into harmful or unauthorized tool calls
- **Delegated Trust failures** -- one agent over-trusting another's output or identity
- **Rogue Agents** -- compromised or malicious agents acting within a multi-agent system

## Two Non-Negotiable Controls

- **Least-Agency** -- grant an agent only the *minimum autonomy* required for its task. Mirror least-privilege, but applied to decision-making power and tool scope, not just data access.
- **Strong Observability** -- log goal state, tool-use patterns, and decision pathways. You cannot detect a hijacked goal or a rogue agent without visibility into *why* the agent acted, not just *what* it returned.

> Least-Agency limits the blast radius; Strong Observability is how you see the blast at all.

## Sources

- [OWASP Top 10 for Agentic Applications for 2026 (OWASP GenAI)](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/)
- [OWASP Agentic AI Security (Palo Alto Networks)](https://www.paloaltonetworks.com/blog/cloud-security/owasp-agentic-ai-security/)
- [OWASP Top 10 for Agentic Applications 2026 (NeuralTrust)](https://neuraltrust.ai/blog/owasp-top-10-for-agentic-applications-2026)
