---
title: "Example: Customer Support System"
section: Real-World Implementations
layout: diagram
---

# Example: Customer Support with Agent Routing

```
    Customer: "I was charged twice for my subscription"
                          │
                          v
               ┌──────────────────┐
               │   Triage Agent    │
               │                  │
               │ Classifies:      │
               │ - billing        │◄──── Routes based on
               │ - technical      │      intent classification
               │ - account        │
               │ - general        │
               └────────┬─────────┘
                        │ billing detected
                        v
               ┌──────────────────┐
               │  Billing Agent    │
               │                  │
               │ Tools:           │
               │ - lookup_charges │
               │ - process_refund │     ┌──────────────────┐
               │ - check_sub      │────>│  Escalation      │
               │                  │     │  Agent            │
               │ Checks charges,  │     │                  │
               │ finds duplicate  │     │ Activated when:  │
               │                  │     │ - Agent unsure   │
               └────────┬─────────┘     │ - Customer angry │
                        │               │ - Policy edge    │
                        │               │   case           │
                        v               │                  │
               ┌──────────────────┐     │ Creates ticket   │
               │  Resolution      │     │ for human review │
               │                  │     └──────────────────┘
               │ "I've found the  │
               │  duplicate charge│
               │  and initiated a │
               │  refund."        │
               └──────────────────┘
```

## Design Decisions
- **Triage is cheap:** uses a fast model (Haiku) for classification only
- **Specialists are thorough:** use a capable model (Sonnet) with domain tools
- **Escalation is a first-class agent**, not an afterthought — it knows how to summarize the conversation for a human agent
- Each specialist has access to **different backend systems** via MCP

## Handoff Mechanics (Swarm Pattern)
- Triage agent uses `handoff(billing_agent)` with conversation context
- Billing agent can `handoff(escalation_agent)` if it detects it cannot resolve
- Customer experiences one seamless conversation across all agents
