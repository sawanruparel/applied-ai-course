---
title: "Context Precision & Recall"
section: RAG Evaluation
layout: two-column
---

# Context Precision & Recall

Did we retrieve the right information?

## Context Precision

**Are the retrieved chunks relevant to the question?**

Measures signal-to-noise ratio in your retrieval results.

```
Precision@k =
  (relevant chunks in top-k) / k
```

**Weighted precision** (RAGAS version):

```
CP = (1/k) * SUM[ (precision@i * rel_i) ]
     for i = 1..k where rel_i in {0,1}
```

Penalizes relevant docs ranked lower.

**Low precision means**: retrieving too much irrelevant context, which can confuse the generator and increase latency/cost.

## Context Recall

**Did we retrieve all the information needed to answer?**

Requires ground truth answers for comparison.

```
Recall = (GT statements attributable
          to context) / (total GT statements)
```

RAGAS decomposes the ground truth answer into statements, then checks if each can be attributed to the retrieved context.

**Low recall means**: missing critical information. The generator can't produce a correct answer if the right chunks were never retrieved.

---

**The precision-recall tradeoff**: Retrieving more chunks (higher k) tends to improve recall but hurt precision. Typical sweet spot: k=3-5 for most RAG applications.

## Sources

- [RAGAS: Automated Evaluation of Retrieval Augmented Generation (Es et al., 2023)](https://arxiv.org/abs/2309.15217)
- [RAGAS Documentation](https://docs.ragas.io)
