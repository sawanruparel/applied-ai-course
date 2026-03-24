---
title: Evaluation & Benchmarks
section: Challenges & Future
layout: standard
---

# How Do You Know It's Working?

| Benchmark / Method | What It Measures | Status |
|-------------------|-----------------|--------|
| GraphRAG-Bench (ICLR 2026) | When graph structures provide measurable benefits vs. vector | First standardized benchmark for the field |
| Diffbot KG-LM Benchmark | Knowledge graph accuracy on factual queries | GraphRAG outperforms vector RAG 3.4x |
| Multi-hop accuracy | Can the system chain facts across documents? | Key differentiator — test with 2-5 hop queries |
| Global sensemaking | Can it synthesize themes across the full corpus? | Only testable with corpus-wide questions |
| Entity disambiguation | Does it correctly resolve ambiguous entity references? | Critical for production quality |

- **What to measure in production:** answer accuracy on multi-hop queries, retrieval latency (p50 and p99), indexing cost per document, graph freshness lag
- **Common pitfall:** benchmarking only on simple queries where GraphRAG shows no advantage, then concluding it doesn't work

## Sources

- [When to Use Graphs in RAG — GraphRAG-Bench (Xiang et al., ICLR 2026)](https://arxiv.org/abs/2506.05690)
- [Diffbot KG-LM Benchmark](https://www.diffbot.com/company/news/20250109.html)
