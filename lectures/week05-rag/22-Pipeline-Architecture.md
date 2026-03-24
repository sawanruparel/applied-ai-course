---
title: "Production RAG Pipeline Architecture"
section: Production
layout: diagram
---

# Production RAG Pipeline Architecture

```
 +-----------+     +------------+     +-----------+     +----------+
 |  Client   |---->|  API       |---->|  Query    |---->| Retrieval|
 |  Request  |     |  Gateway   |     |  Processor|     | Router   |
 +-----------+     +------------+     +-----------+     +-----+----+
                        |                                     |
                   +----v-----+              +----------------+--------+
                   | Auth &   |              |                |        |
                   | Rate     |        +-----v----+    +------v--+ +---v---+
                   | Limiting |        | Vector   |    | BM25    | | SQL / |
                   +----------+        | Store    |    | Index   | | API   |
                                       +-----+----+    +----+----+ +---+---+
                                             |              |           |
                                             +-------+------+-----------+
                                                     |
                                              +------v------+
                                              | Rank Fusion |
                                              | + Reranker  |
                                              +------+------+
                                                     |
                   +----------+               +------v------+
                   | Response |<--------------| Generator   |
                   | Cache    |               | (LLM)       |
                   +----+-----+               +------+------+
                        |                            |
                   +----v-----+               +------v------+
                   | Grounding|               | Self-Eval   |
                   | Check    |               | (CRAG loop) |
                   +----+-----+               +-------------+
                        |
                   +----v-----+     +------------+
                   | Response |---->| Monitoring |
                   | to Client|     | & Logging  |
                   +----------+     +------------+
```

**Key architectural decisions**

- **Retrieval router** decides which backends to query based on query classification
- **Response cache** (semantic similarity cache) avoids re-processing near-duplicate queries
- **Self-eval loop** feeds back into retrieval if quality is below threshold
- **Grounding check** runs in parallel with response streaming where possible
- **Every component emits structured logs** for observability and debugging
