---
title: Mental Model
section: Framing
layout: diagram
---

# GraphRAG Pipeline at a Glance

```text
Raw Documents
      ↓  chunk + extract
Entity & Relationship Extraction (LLM)
      ↓  (nodes + edges)
Knowledge Graph Construction
      ↓  community detection
Hierarchical Community Summaries
      ↓  index
Graph Store + Vector Store
      ↓  query
Local Search (neighborhood)  |  Global Search (map-reduce)
      ↓
LLM Generation with Structured Context
```

The key insight: build a **knowledge graph** from your documents at index time, then **traverse** it at query time to assemble richer, more connected context than vector search alone.
