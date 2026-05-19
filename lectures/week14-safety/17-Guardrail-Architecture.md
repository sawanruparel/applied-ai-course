---
title: Guardrail Architecture
section: Guardrails & Content Safety
layout: diagram
---

# Guardrail Architecture

## Input Rail --> LLM --> Output Rail

```mermaid
flowchart TB
    U[User Request] --> IR["Input Rails<br/>injection / PII / topic /<br/>rate limit / length"]
    IR -->|Pass| SP[System prompt + sanitized input]
    IR -->|Block| Reject["Rejection: I can't help with that"]
    SP --> LLM[LLM Core]
    LLM --> OR["Output Rails<br/>safety / PII / hallucination /<br/>schema / exfil / tool auth"]
    OR -->|Pass| V[Validated Response]
    OR -->|Block| Fallback[Fallback or human escalation]
    V --> User2[User]
```

**Latency tip:** Run input rails in parallel where possible. Run output rails as streaming validators to minimize perceived latency.
