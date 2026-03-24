---
title: Community Detection
section: Core Concepts
layout: diagram
---

# Hierarchical Community Detection

```text
Full Graph (all entities)
      ↓  Leiden algorithm
Level 0: Coarse communities (broad themes)
      ↓  recursive partitioning
Level 1: Finer communities (sub-topics)
      ↓
Level 2: Leaf communities (specific clusters)
```

- **Leiden algorithm** (improvement over Louvain) — guarantees well-connected communities; standard in GraphRAG
- Each community at each level gets an **LLM-generated summary** describing its key entities, relationships, and themes
- These summaries are the secret weapon — they pre-compute "what is this cluster about?" so global queries don't need to scan the entire graph

> Community summaries let you answer "What are the main themes across 10,000 documents?" without retrieving all 10,000 documents.

## Sources

- [From Local to Global: A Graph RAG Approach to Query-Focused Summarization (Edge et al., 2024)](https://arxiv.org/abs/2404.16130)
- [From Louvain to Leiden: Guaranteeing Well-Connected Communities (Traag et al., 2019)](https://arxiv.org/abs/1810.08473)
- [Fast Unfolding of Communities in Large Networks — Louvain Method (Blondel et al., 2008)](https://arxiv.org/abs/0803.0476)
