---
title: "Cost Optimization"
section: Production
layout: standard
---

# Cost Optimization: Caching, Tiered Retrieval, Model Routing

**Semantic caching**

Cache responses for semantically similar queries, not just exact matches. Embed each query and check cache with a similarity threshold (>0.95 cosine). Cache hit rates of 15-30% are typical for internal knowledge-base applications.

**Tiered retrieval**

| Tier | Latency | Cost | When to use |
|------|---------|------|-------------|
| Cache lookup | <5ms | ~$0 | Repeated/similar queries |
| BM25 only | <10ms | ~$0 | Simple entity/keyword lookup |
| BM25 + Vector | <50ms | $0.0001/query | Standard queries |
| + Reranker | <150ms | $0.001/query | Queries needing precision |
| + LLM eval loop | <2s | $0.01-0.05/query | Complex or low-confidence |
| + Web search fallback | <3s | $0.01/query | Out-of-domain queries |

Route queries to the cheapest tier that can handle them. Use a lightweight classifier (or heuristics based on query length and type) to select the tier.

**Model routing for generation**

- Simple factoid answers: small model (Haiku, GPT-4o-mini) -- fast, cheap
- Complex synthesis: large model (Opus, GPT-4o) -- slower, expensive
- Route based on query complexity classification and retrieval confidence

**Embedding cost reduction**

- Batch embedding requests (API calls charge per token, not per request)
- Cache embeddings for repeated queries
- Use dimensionality reduction (Matryoshka embeddings) for initial ANN search, full dimensions for reranking

**Infrastructure savings**

- Use quantized vector indexes (binary or scalar quantization) for 4-8x memory reduction
- Offload cold data to disk-based indexes, keep hot data in memory
- Right-size GPU instances for reranking workloads
