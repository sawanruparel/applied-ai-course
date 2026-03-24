---
title: "Answer Relevancy & Correctness"
section: RAG Evaluation
layout: standard
---

# Answer Relevancy & Correctness

## Is the Answer Actually Useful?

## Answer Relevancy

Measures whether the generated answer addresses the original question (not whether it's factually correct).

**How it works (RAGAS):**
1. Given the answer, use an LLM to generate N hypothetical questions that the answer could be responding to
2. Compute cosine similarity between each generated question and the original question
3. Average the similarities

```
Answer Relevancy = (1/N) * SUM[ cosine_sim(q_original, q_generated_i) ]
```

**Example:**
- Question: "What is the return policy?"
- Answer: "Our company was founded in 1995 in Seattle..."
- Generated questions would be about company history, NOT return policies
- Low similarity with original question = low relevancy score

## Answer Correctness

Combines factual overlap with semantic similarity against a ground truth reference.

```
Answer Correctness = w1 * F1_factual + w2 * semantic_similarity
```

Where `F1_factual` is computed by:
- Decomposing both answer and ground truth into claims
- Computing TP (matching claims), FP (extra claims), FN (missing claims)
- `F1 = 2 * TP / (2*TP + FP + FN)`

Default weights: `w1 = 0.75, w2 = 0.25` (factual accuracy weighted higher).

## When to Use Each

- **Answer Relevancy**: Always -- doesn't require ground truth, catches off-topic answers
- **Answer Correctness**: When you have labeled test sets with expected answers

## Sources

- [RAGAS: Automated Evaluation of Retrieval Augmented Generation (Es et al., 2023)](https://arxiv.org/abs/2309.15217)
- [RAGAS Documentation](https://docs.ragas.io)
