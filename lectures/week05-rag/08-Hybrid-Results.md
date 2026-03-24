---
title: "Hybrid Search Benchmark Results"
section: Hybrid Search
layout: standard
---

# Benchmark Results: Hybrid Outperforms Either Approach Alone

**BEIR benchmark results (NDCG@10) across retrieval strategies**

| Dataset | BM25 | Dense (E5-Large) | Hybrid (RRF) | Hybrid + Rerank |
|---------|------|-------------------|---------------|-----------------|
| NQ (open-domain QA) | 30.6 | 52.4 | 54.1 | 58.3 |
| HotpotQA (multi-hop) | 60.3 | 54.6 | 65.8 | 69.2 |
| FiQA (financial) | 23.6 | 37.2 | 39.8 | 44.1 |
| SciFact (scientific) | 66.5 | 64.8 | 71.3 | 74.7 |
| TREC-COVID (biomedical) | 59.5 | 65.4 | 71.0 | 75.8 |
| NFCorpus (nutrition) | 32.2 | 34.1 | 36.9 | 38.5 |
| Avg across 18 BEIR tasks | 42.8 | 48.3 | 52.1 | 56.4 |

**Key observations**

- Hybrid consistently outperforms both BM25-only and dense-only retrieval across all domains
- BM25 still wins on entity-heavy and exact-match tasks (e.g., EntityQuestions: BM25 71.4 vs Dense 52.1)
- Reranking adds 4-6 points NDCG@10 on average -- the single highest-ROI addition to any RAG pipeline
- The gap widens on out-of-domain data where embedding models have not been fine-tuned
- Hybrid search with reranking achieves 95%+ of fine-tuned retriever performance with zero training data

**Practical takeaway** -- Start every production RAG system with hybrid search + reranking. It is the highest-impact, lowest-effort improvement available.

## Sources

- [BEIR: A Heterogeneous Benchmark for Zero-shot Evaluation of IR Models (Thakur et al., NeurIPS 2021)](https://arxiv.org/abs/2104.08663)
- [Text Embeddings by Weakly-Supervised Contrastive Pre-training / E5 (Wang et al., 2022)](https://arxiv.org/abs/2212.03533)
