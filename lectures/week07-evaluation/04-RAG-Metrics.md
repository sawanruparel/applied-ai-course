---
title: "RAG-Specific Metrics"
section: RAG Evaluation
layout: two-column
---

# RAG-Specific Metrics

RAG evaluation requires measuring TWO distinct stages independently.

## Retrieval Quality

**Did we find the right documents?**

- **Context Precision**: What fraction of retrieved chunks are actually relevant?
  - `Precision = relevant_retrieved / total_retrieved`
- **Context Recall**: Did we retrieve all the relevant chunks?
  - `Recall = relevant_retrieved / total_relevant`
- **Mean Reciprocal Rank (MRR)**: Is the most relevant chunk ranked first?
  - `MRR = 1/rank_of_first_relevant`
- **NDCG@k**: Are relevant chunks ranked higher than irrelevant ones?

## Generation Quality

**Given the retrieved context, is the answer good?**

- **Faithfulness**: Is every claim in the answer supported by the context?
  - `Faithfulness = supported_claims / total_claims`
- **Answer Relevancy**: Does the answer address the original question?
- **Answer Correctness**: Does the answer match a known ground truth?
  - Combines factual similarity + semantic similarity
- **Hallucination Rate**: What fraction of claims are fabricated?

---

**Key insight**: A bad answer can come from bad retrieval OR bad generation. You must measure both to know where to fix.
