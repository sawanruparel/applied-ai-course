---
title: LazyGraphRAG
section: The Landscape
layout: two-column
---

## The Problem
- Full GraphRAG indexing costs ~1000x more than vector RAG
- Most community summaries are never queried
- You pay upfront for comprehensiveness you may not need

## LazyGraphRAG (Microsoft, late 2024)
- Indexing cost identical to vector RAG — **0.1% of full GraphRAG**
- Defers all LLM summarization to **query time**
- Uses **iterative deepening** — combines best-first and breadth-first graph search
- At 4% of full GraphRAG's query cost, outperforms all competing methods on both local and global queries
- Now integrated into Azure Local

> LazyGraphRAG asks: "Why summarize everything upfront when you can summarize on demand?" — the same insight behind lazy evaluation in programming.

## Sources

- [LazyGraphRAG (Microsoft Research, 2024)](https://www.microsoft.com/en-us/research/blog/lazygraphrag-setting-a-new-standard-for-quality-and-cost/)
- [From Local to Global: A Graph RAG Approach to Query-Focused Summarization (Edge et al., 2024)](https://arxiv.org/abs/2404.16130)
