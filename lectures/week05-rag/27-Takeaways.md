---
title: "Key Takeaways"
section: Production
layout: cards
---

# Key Takeaways

## Hybrid Search Is the Baseline

Never ship vector-only retrieval. Combine dense embeddings with BM25 sparse search and reciprocal rank fusion. Add a cross-encoder reranker for the highest-impact single improvement to any RAG pipeline.

## Close the Loop

Open-loop RAG (retrieve once, generate once) fails silently. Implement retrieval evaluation -- even a simple relevance classifier -- and route to corrective actions when confidence is low. CRAG and Self-RAG provide proven patterns.

## Match Strategy to Query

Not all queries need the same retrieval depth. Simple factoid lookups should be fast and cheap. Complex multi-hop questions warrant iterative retrieval with query decomposition. Use Adaptive RAG routing to allocate resources proportionally.

## Observe Everything

Log the full pipeline trace: query, rewrite, retrieved docs, scores, reranked order, prompt, and output. Without observability, you cannot diagnose failures, measure improvements, or detect drift. Instrument before you optimize.

## Ground Every Claim

Every statement in a RAG output should trace back to a retrieved source. Implement citation generation or post-hoc attribution. Flag unsupported claims rather than presenting them as facts. Trust is earned through verifiability.

## Optimize the Pipeline, Not Just the Model

Chunking strategy, embedding model selection, reranker choice, and caching architecture often matter more than upgrading the LLM. Profile your pipeline end-to-end before spending on a larger generator.
