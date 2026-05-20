---
title: OWASP Top 10 for Agentic Applications 2026
section: Framing
layout: standard
---

# OWASP Top 10 for Agentic Applications (2026)

The original OWASP **Top 10 for LLM Applications** was written for chat-style systems. The new **OWASP Top 10 for Agentic Applications (2026)** -- a peer-reviewed effort with 100+ contributors -- **supersedes it for agent contexts**, where tool use, autonomy, and delegation create attack surfaces a chatbot never had.

## New, agent-specific risk categories

- **Agent Goal Hijack** -- attackers redirect the agent's objective, not just a single response
- **Tool Misuse** -- coercing the agent into harmful or unauthorized tool calls
- **Delegated Trust failures** -- one agent over-trusting another's output or identity
- **Rogue Agents** -- compromised or malicious agents acting within a multi-agent system

The common thread: a chatbot can only say something wrong; an agent can *do* something wrong, and can be steered into doing it across many steps.

## Sources

- [OWASP Top 10 for Agentic Applications for 2026 (OWASP GenAI)](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/)
- [OWASP Agentic AI Security (Palo Alto Networks)](https://www.paloaltonetworks.com/blog/cloud-security/owasp-agentic-ai-security/)
