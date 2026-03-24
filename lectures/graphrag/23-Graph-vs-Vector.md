---
title: GraphRAG vs Vector RAG
section: When to Use It
layout: two-column
---

## GraphRAG Wins
- Multi-hop reasoning: **2x accuracy** on complex queries
- Entity-dense queries: stable accuracy even with 10+ entities (vector drops to ~0% at 5+)
- Global sensemaking: can synthesize across entire corpora
- Relationship-intensive domains: finance, healthcare, legal
- One deployment: complex multi-hop accuracy **43% → 91%**

## Vector RAG Wins
- Simple semantic search and factoid Q&A
- Fuzzy matching: synonyms, paraphrasing, misspellings
- Small to medium corpora with low entity density
- Exploratory search over unstructured text
- Budget-constrained deployments — 3-5x cheaper infrastructure

> The data is clear: GraphRAG isn't universally better — it's specifically better for **structured, multi-hop, relationship-heavy** queries. Know your query patterns before choosing.

## Sources

- [From Local to Global: A Graph RAG Approach to Query-Focused Summarization (Edge et al., 2024)](https://arxiv.org/abs/2404.16130)
- [When to Use Graphs in RAG — GraphRAG-Bench (Xiang et al., ICLR 2026)](https://arxiv.org/abs/2506.05690)
