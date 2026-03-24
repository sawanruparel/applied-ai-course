---
title: "Showcasing Architecture"
section: Presentation Framework
layout: standard
---

# Showcasing Your Architecture

### System Diagram Essentials
- Show the full data flow: user input through final output
- Label every model call — which model, which purpose, why that choice
- Highlight MCP servers and what tools/resources each exposes

### Model Selection Rationale
- Why this model for this task? (Week 1: model landscape, Week 12: small model strategy)
- Did you use different models for different subtasks? (routing, Week 10)
- Cost/latency tradeoffs — what did you optimize for?

### MCP Integration Points
- Which MCP servers did you build vs. reuse? (Week 9: building MCP servers)
- What tools does your agent invoke? What resources does it read?
- How does the agent decide which tool to call? (Week 10: orchestration)

### RAG and Knowledge Grounding
- What data sources feed your system? (Week 4: knowledge representation)
- Retrieval strategy: vector search, hybrid, graph-based? (Week 5: RAG 2.0)
- How do you handle stale or conflicting information?

---

**Show the architecture diagram early — it anchors everything else in the presentation.**
