---
title: "Compound AI Systems"
section: Architecture Patterns
layout: diagram
---

# Compound AI Systems

```
                    +-------------------+
                    |   Orchestrator    |
                    |   (Router/Agent)  |
                    +--------+----------+
                             |
            +----------------+----------------+
            |                |                |
    +-------v------+  +-----v-------+  +-----v-------+
    | Fast Model   |  | Reasoning   |  | Specialized |
    | (GPT-4o/     |  | Model       |  | Model       |
    | Flash)       |  | (o3/R1/     |  | (Code/      |
    |              |  | Extended)   |  | Vision)     |
    +-------+------+  +-----+-------+  +-----+-------+
            |                |                |
            +----------------+----------------+
                             |
            +----------------+----------------+
            |                |                |
    +-------v------+  +-----v-------+  +-----v-------+
    | Vector DB    |  | Code        |  | External    |
    | (RAG)        |  | Sandbox     |  | APIs        |
    +--------------+  +-------------+  +-------------+
```

### Key principles:
- **Route by difficulty:** cheap model for easy queries, expensive model for hard ones
- **Compose capabilities:** combine reasoning + retrieval + code execution
- **Verify outputs:** use one model to check another's work
- **The system is the product**, not any single model call

## Sources

- [The Shift from Models to Compound AI Systems (Zaharia et al., 2024)](https://bair.berkeley.edu/blog/2024/02/18/compound-ai-systems/)
