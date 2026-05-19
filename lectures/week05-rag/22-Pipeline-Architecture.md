---
title: "Production RAG Pipeline Architecture"
section: Production
layout: diagram
---

# Production RAG Pipeline Architecture

```mermaid
flowchart TB
    Client[Client request] --> Gateway[API gateway<br/>auth + rate limit]
    Gateway --> QP[Query processor]
    QP --> Router[Retrieval router]
    Router --> V[Vector store]
    Router --> K[BM25 index]
    Router --> S[SQL / API]
    V & K & S --> Fuse[Rank fusion + reranker]
    Fuse --> Gen[Generator LLM]
    Gen --> Eval{Self-eval<br/>CRAG loop}
    Eval -->|low quality| Router
    Eval -->|ok| Ground[Grounding check]
    Ground --> Cache[Response cache]
    Cache --> Out[Response to client]
    Out --> Mon[Monitoring & logging]
```

**Key architectural decisions**

- **Retrieval router** decides which backends to query based on query classification
- **Response cache** (semantic similarity cache) avoids re-processing near-duplicate queries
- **Self-eval loop** feeds back into retrieval if quality is below threshold
- **Grounding check** runs in parallel with response streaming where possible
- **Every component emits structured logs** for observability and debugging
