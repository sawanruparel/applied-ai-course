---
title: "Compound AI Systems"
section: Architecture Patterns
layout: diagram
---

# Compound AI Systems

```mermaid
flowchart TB
    Orc["Orchestrator<br/>(Router / Agent)"]
    Orc --> Fast["Fast model<br/>(GPT-4o, Flash)"]
    Orc --> Reason["Reasoning model<br/>(o3, R1, extended)"]
    Orc --> Spec["Specialized<br/>(code, vision)"]
    Fast --> Vec[Vector DB / RAG]
    Reason --> Sand[Code sandbox]
    Spec --> API[External APIs]
```

### Key principles:
- **Route by difficulty:** cheap model for easy queries, expensive model for hard ones
- **Compose capabilities:** combine reasoning + retrieval + code execution
- **Verify outputs:** use one model to check another's work
- **The system is the product**, not any single model call

## Sources

- [The Shift from Models to Compound AI Systems (Zaharia et al., 2024)](https://bair.berkeley.edu/blog/2024/02/18/compound-ai-systems/)
