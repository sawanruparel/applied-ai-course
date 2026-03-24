---
title: "Long Context as Alternative"
section: Context Management
layout: two-column
---

# Long Context: Does RAG Still Matter?

With context windows reaching 1M+ tokens, do we still need retrieval pipelines?

## The Case for RAG

- **Scale**: 1M tokens is ~3,000 pages; many corpora are much larger
- **Cost**: processing 1M tokens per query is expensive ($3-15+ per call depending on model)
- **Latency**: large context = slower time-to-first-token (10-30s for very long contexts)
- **Accuracy**: needle-in-a-haystack tests show degradation in very long contexts
- **Freshness**: easy to update the index without reprocessing everything
- **Access control**: can filter by permissions at retrieval time
- **Auditability**: you know exactly which chunks informed the answer

## The Case for Long Context

- **Simplicity**: no chunking, no embeddings, no vector DB, no retrieval pipeline
- **Full document understanding**: the model sees the entire document, not fragments
- **Cross-reference**: can reason across sections that RAG might not retrieve together
- **Small corpora**: for <500 pages, just load everything into context
- **Complex reasoning**: tasks requiring holistic document understanding (e.g., legal analysis)
- **Rapid prototyping**: go from zero to working system in minutes, not days

### The Pragmatic View: They're Complementary

| Scenario | Best Approach |
|----------|--------------|
| < 500 pages, infrequent queries | Long context |
| < 500 pages, high query volume | RAG (amortize embedding cost) |
| > 500 pages | RAG (or RAG + long context for retrieved chunks) |
| Real-time data feeds | RAG with streaming ingestion |
| Complex document analysis | Long context (or RAG to select, then long context to analyze) |
| Multi-document synthesis | RAG to retrieve, long context to reason |

> The future is likely **RAG as a pre-filter for long context**: retrieve the 50 most relevant pages, load them all into a large context window, let the model reason over the full set.

## Sources

- [Lost in the Middle: How Language Models Use Long Contexts (Liu et al., 2023)](https://arxiv.org/abs/2307.03172)
- [Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks (Lewis et al., 2020)](https://arxiv.org/abs/2005.11401)
