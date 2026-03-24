---
title: "The RAGAS Framework"
section: RAG Evaluation
layout: standard
---

# The RAGAS Framework

## Retrieval Augmented Generation Assessment

RAGAS (Es et al., 2023) provides a standardized set of metrics specifically designed for RAG pipeline evaluation.

## Core Metrics

| Metric | What It Measures | Requires Ground Truth? |
|---|---|---|
| **Faithfulness** | Is the answer grounded in the context? | No |
| **Answer Relevancy** | Does the answer address the question? | No |
| **Context Precision** | Are retrieved chunks relevant? | Yes |
| **Context Recall** | Did we retrieve all needed info? | Yes |
| **Answer Correctness** | Does the answer match expected output? | Yes |

## Why RAGAS?

- **Reference-free metrics**: Faithfulness and answer relevancy don't need ground truth labels -- you can run them on production traffic
- **LLM-based scoring**: Uses an LLM to decompose answers into claims and verify each one
- **Component-level diagnosis**: Pinpoints whether failures come from retrieval or generation
- **Framework integrations**: Works with LangChain, LlamaIndex, Haystack out of the box

## The RAGAS Score

A single composite score combining the core metrics:

```
RAGAS Score = Harmonic Mean(Faithfulness, Answer Relevancy,
                            Context Precision, Context Recall)
```

Typical production targets: RAGAS Score > 0.7 for general QA, > 0.85 for high-stakes domains.

## Sources

- [RAGAS: Automated Evaluation of Retrieval Augmented Generation (Es et al., 2023)](https://arxiv.org/abs/2309.15217)
- [RAGAS Documentation](https://docs.ragas.io)
