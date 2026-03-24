---
title: "Monitoring RAG Systems"
section: Production
layout: standard
---

# Monitoring RAG: Retrieval Metrics, Answer Quality, Drift Detection

**Retrieval quality metrics**

- **Context relevance** -- What fraction of retrieved chunks are actually relevant to the query? Measured by LLM-as-judge or human annotation. Target: >0.7 for top-5 chunks.
- **Context recall** -- Does the retrieved context contain the information needed to answer? Compare against ground-truth answer. Target: >0.85.
- **Retrieval latency** -- P50, P95, P99 for the full retrieval pipeline. Budget: <200ms P95.
- **Hit rate** -- Fraction of queries where at least one relevant document is in top-k. Target: >0.90.

**Answer quality metrics**

- **Faithfulness** -- Is the generated answer supported by the retrieved context? Decompose into claims and check entailment. Target: >0.90.
- **Answer relevance** -- Does the answer address the user's question? LLM-as-judge scoring. Target: >0.85.
- **Hallucination rate** -- Fraction of generated claims not supported by any retrieved document. Target: <0.05.

**Operational monitoring**

- **Query volume and patterns** -- Detect shifts in query distribution that may indicate index staleness
- **Embedding drift** -- Monitor embedding model output stability; retraining or model updates can silently shift the vector space
- **Index freshness** -- Track the age of indexed documents; alert when the most recent document is older than threshold
- **Feedback loops** -- Log user thumbs-up/down, follow-up questions (implicit negative signal), and query reformulations

**Frameworks** -- Ragas, DeepEval, and LangSmith provide automated evaluation pipelines for RAG systems with LLM-as-judge scoring.

## Sources

- [RAGAS: Automated Evaluation of Retrieval Augmented Generation (Es et al., 2023)](https://arxiv.org/abs/2309.15217)
- [DeepEval: LLM Evaluation Framework](https://github.com/confident-ai/deepeval)
- [LangSmith Observability Platform](https://docs.langchain.com/langsmith/observability)
