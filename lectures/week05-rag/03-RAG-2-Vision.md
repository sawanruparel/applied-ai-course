---
title: "RAG 2.0 Vision"
section: Framing
layout: standard
---

# RAG 2.0: Retrieval That Knows When It's Wrong

**Core principle** -- A production RAG system must be closed-loop. It should detect retrieval failure, diagnose the cause, and apply corrective strategies before generating an answer.

**Self-assessment** -- The system evaluates whether retrieved documents are relevant, sufficient, and consistent before proceeding to generation. Low-confidence retrievals trigger corrective actions.

**Adaptive strategy** -- Different queries require different retrieval approaches. Simple factoid queries need keyword precision; complex analytical queries need multi-hop reasoning; ambiguous queries need clarification.

**Hybrid retrieval** -- Combine dense vector search with sparse keyword search, then fuse and rerank results. Each modality covers the other's weaknesses.

**Iterative refinement** -- When the first retrieval pass is insufficient, rewrite the query, decompose it, or retrieve from alternative sources. Allow multiple retrieval attempts before generating.

**Grounded generation** -- Every claim in the output should be traceable to a retrieved source. If a claim cannot be grounded, flag it or suppress it.

**This week's goal** -- Build the mental model and practical skills to implement self-correcting RAG pipelines that are reliable enough for production deployment.
