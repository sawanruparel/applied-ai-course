---
title: Anti-Patterns
section: When to Use It
layout: standard
---

# When NOT to Use GraphRAG

- **Simple Q&A over small corpora** — if your documents fit in a single context window, you don't need retrieval at all, let alone graph retrieval
- **Low entity density** — blog posts, creative writing, opinion pieces have few named entities and weak relationships; vector search works fine
- **Rapidly changing corpora** — if documents change hourly, the re-indexing cost of graph construction becomes prohibitive (unless you use LazyGraphRAG)
- **Latency-critical applications** — graph traversal adds 2.4x latency on average; if you need sub-50ms responses, vector-only is safer
- **Tight budgets** — infrastructure costs are 2-3x higher; if accuracy on complex queries isn't your bottleneck, don't pay for it
- **When you haven't tried vector RAG first** — GraphRAG is an optimization for specific failure modes; if you don't know your failure modes yet, start simple

> The biggest anti-pattern: adopting GraphRAG because it sounds impressive, not because your queries actually need it.

## Sources

- [From Local to Global: A Graph RAG Approach to Query-Focused Summarization (Edge et al., 2024)](https://arxiv.org/abs/2404.16130)
- [LazyGraphRAG (Microsoft Research, 2024)](https://www.microsoft.com/en-us/research/blog/lazygraphrag-setting-a-new-standard-for-quality-and-cost/)
- [When to Use Graphs in RAG — GraphRAG-Bench (Xiang et al., ICLR 2026)](https://arxiv.org/abs/2506.05690)
