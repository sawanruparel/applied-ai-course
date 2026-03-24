---
title: "Common Failure Modes"
section: Production
layout: standard
---

# Common Failure Modes and Debugging Strategies

**Failure: Relevant document exists but is not retrieved**

- Check chunking: was the relevant passage split across chunk boundaries?
- Check embedding quality: does the query embed near the target document?
- Try BM25 search directly: is this a lexical-match problem?
- Solution: adjust chunk size/overlap, add hybrid search, try query rewriting

**Failure: Retrieved documents are relevant but answer is wrong**

- Check context window: are chunks being truncated due to token limits?
- Check ordering: is the most relevant chunk buried among irrelevant ones?
- Solution: add reranking, apply contextual compression, reduce top-k

**Failure: LLM ignores retrieved context and hallucinates**

- Common with over-parameterized models that have strong priors
- Check prompt: is the instruction to use provided context explicit enough?
- Solution: strengthen grounding instructions, add citation requirements, use smaller specialized models

**Failure: System works in testing but fails in production**

- Query distribution shift: real users ask questions your test set did not cover
- Data freshness: index was built on a snapshot that is now stale
- Solution: continuous evaluation with production traffic sampling, automated re-indexing

**Failure: Latency spikes under load**

- Vector search ANN index not warmed, cold-start penalty
- Reranker becomes bottleneck with large candidate sets
- Solution: pre-warm indexes, cap reranking candidate count, add response caching

**Debugging toolkit** -- Log the full pipeline trace for every query: original query, rewritten query, retrieved doc IDs with scores, reranked order, final prompt, and generated answer. Without this, debugging is guesswork.
