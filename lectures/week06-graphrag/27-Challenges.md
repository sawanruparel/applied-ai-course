---
title: Open Challenges
section: Challenges & Future
layout: standard
---

# Open Challenges

- **Indexing cost** — full GraphRAG is ~1000x more expensive to index than vector RAG; LazyGraphRAG and LinearRAG are promising but trade off capability
- **Hallucinated edges** — LLMs invent relationships not present in source text; no reliable way to detect or prevent this at scale
- **Entity resolution at scale** — merging "OpenAI", "openai", "Open AI" is easy; merging ambiguous entities across thousands of documents is an unsolved problem
- **Scalability** — memory doubles for billion-node graphs; real-time subgraph retrieval remains challenging; response times of minutes reported in production
- **Evaluation** — no standardized benchmarks until GraphRAG-Bench (ICLR 2026); hard to measure graph quality independent of end-task performance
- **Freshness** — knowledge graphs become stale; incremental updates without full re-indexing is an active research area

> The field is maturing fast, but these are genuinely hard problems — not just engineering challenges, but open research questions.

## Sources

- [From Local to Global: A Graph RAG Approach to Query-Focused Summarization (Edge et al., 2024)](https://arxiv.org/abs/2404.16130)
- [LazyGraphRAG (Microsoft Research, 2024)](https://www.microsoft.com/en-us/research/blog/lazygraphrag-setting-a-new-standard-for-quality-and-cost/)
- [LinearRAG: Linear Graph Retrieval Augmented Generation on Large-scale Corpora (Zhuang et al., ICLR 2026)](https://arxiv.org/abs/2510.10114)
- [When to Use Graphs in RAG — GraphRAG-Bench (Xiang et al., ICLR 2026)](https://arxiv.org/abs/2506.05690)
