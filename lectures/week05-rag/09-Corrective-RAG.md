---
title: "Corrective RAG (CRAG)"
section: Self-Correcting Retrieval
layout: standard
---

# Corrective RAG (CRAG)

**Paper** -- Yan et al., "Corrective Retrieval Augmented Generation" (ICLR 2024)

**Core idea** -- Before generating an answer, evaluate the quality of retrieved documents. If retrieval quality is poor, trigger corrective actions rather than generating from bad context.

**Three retrieval confidence levels**

- **Correct** -- At least one retrieved document is highly relevant. Proceed to generation with knowledge refinement to strip irrelevant sentences.
- **Incorrect** -- All retrieved documents are irrelevant. Discard them entirely and fall back to web search for fresh, relevant context.
- **Ambiguous** -- Some documents are marginally relevant. Combine refined internal retrieval results with supplementary web search results.

**Lightweight retrieval evaluator** -- A fine-tuned T5-Large model scores each retrieved document as relevant or irrelevant given the query. This is cheaper than using the main LLM for evaluation.

**Knowledge refinement** -- Decompose each relevant document into fine-grained knowledge strips (sentence-level). Score each strip independently and discard irrelevant ones. This eliminates noise within documents, not just across documents.

**Results** -- CRAG improves over standard RAG by 5-10% on PopQA, Biography, and PubQA benchmarks, with the largest gains on queries where naive retrieval returns poor results.

## Sources

- [Corrective Retrieval Augmented Generation (Yan et al., ICLR 2024)](https://arxiv.org/abs/2401.15884)
