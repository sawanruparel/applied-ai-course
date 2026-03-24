---
title: "End-to-End RAG Evaluation Pipeline"
section: RAG Evaluation
layout: diagram
---

# End-to-End RAG Evaluation Pipeline

```
 EVALUATION DATASET
 +------------------------------------------+
 | question | ground_truth | reference_docs  |
 +------------------------------------------+
        |
        v
 +----------------------------------------------+
 |           YOUR RAG PIPELINE                   |
 |                                               |
 |  question --> [Retriever] --> retrieved_chunks |
 |                    |                          |
 |             retrieved_chunks + question       |
 |                    |                          |
 |                    v                          |
 |              [Generator] --> answer            |
 +----------------------------------------------+
        |
        | (question, answer, retrieved_chunks, ground_truth)
        v
 +----------------------------------------------+
 |           RAGAS EVALUATION                    |
 |                                               |
 |  No Ground Truth Needed:                      |
 |    [Faithfulness]      answer vs chunks        |
 |    [Answer Relevancy]  answer vs question      |
 |                                               |
 |  Ground Truth Required:                       |
 |    [Context Recall]    chunks vs ground_truth  |
 |    [Context Precision] chunks vs ground_truth  |
 |    [Answer Correctness] answer vs ground_truth |
 +----------------------------------------------+
        |
        v
 +----------------------------------------------+
 |           RESULTS & DIAGNOSTICS               |
 |                                               |
 |  Per-sample scores --> find failure cases      |
 |  Aggregate scores  --> track over time         |
 |  Component scores  --> retrieval vs generation |
 +----------------------------------------------+
```

**Key point**: You need four columns of data -- question, answer, contexts, and (optionally) ground_truth -- to run the full RAGAS evaluation suite.

## Sources

- [RAGAS: Automated Evaluation of Retrieval Augmented Generation (Es et al., 2023)](https://arxiv.org/abs/2309.15217)
- [RAGAS Documentation](https://docs.ragas.io)
