---
title: Least-Agency & Strong Observability
section: Framing
layout: standard
---

# Two Non-Negotiable Agentic Controls

The OWASP 2026 agentic framework singles out two controls as load-bearing for *every* agent deployment, regardless of which specific risks apply.

## Least-Agency

Grant an agent only the **minimum autonomy** required for its task. It mirrors least-privilege, but applied to decision-making power and tool scope, not just data access:

- Scope tools to the narrowest capability that completes the job (read-only where possible)
- Gate irreversible actions behind confirmation or a separate approval step
- Don't give a single agent both the means and the reach to cause large harm

## Strong Observability

Log **goal state, tool-use patterns, and decision pathways** -- not just final outputs. You cannot detect a hijacked goal or a rogue agent without visibility into *why* the agent acted, not just *what* it returned.

- Capture the agent's stated intent before each tool call
- Trace delegation: which agent asked which agent to do what
- Alert on anomalous tool-use sequences, not just failures

> Least-Agency limits the blast radius; Strong Observability is how you see the blast at all.

## Sources

- [OWASP Top 10 for Agentic Applications 2026 (NeuralTrust)](https://neuraltrust.ai/blog/owasp-top-10-for-agentic-applications-2026)
- [OWASP Agentic AI Security (Palo Alto Networks)](https://www.paloaltonetworks.com/blog/cloud-security/owasp-agentic-ai-security/)
