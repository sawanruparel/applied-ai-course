---
title: End-to-End Pipeline
section: Architecture
layout: diagram
---

# End-to-End GraphRAG Pipeline

```text
1. INGEST         PDF / HTML / text  →  chunked TextUnits
                        ↓
2. EXTRACT        LLM extracts entities + relationships per chunk
                        ↓
3. BUILD          Entity resolution  →  unified knowledge graph
                        ↓
4. CLUSTER        Leiden community detection  →  hierarchical communities
                        ↓
5. SUMMARIZE      LLM generates community summaries at each level
                        ↓
6. INDEX          Graph DB (structure) + Vector DB (embeddings)
                        ↓
7. QUERY          Router picks local vs. global search strategy
                        ↓
8. GENERATE       LLM synthesizes answer from structured context
```

Steps 2 and 5 are the expensive ones — both require LLM calls at scale. Everything else is conventional data engineering.
