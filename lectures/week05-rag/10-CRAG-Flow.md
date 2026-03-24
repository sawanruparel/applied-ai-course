---
title: "CRAG Execution Flow"
section: Self-Correcting Retrieval
layout: diagram
---

# CRAG Execution Flow

```
+-------------+
|  User Query |
+------+------+
       |
       v
+------+------+
|  Retrieve   |
|  Top-K Docs |
+------+------+
       |
       v
+------+--------+
|  Retrieval    |       +---------+
|  Evaluator    +------>| Score   |
|  (T5-Large)   |       | each doc|
+------+--------+       +----+----+
       |                      |
       v                      v
+------+------+        +------+------+
| Confidence  |        | Per-doc     |
| Assessment  |        | Relevance   |
+------+------+        +-------------+
       |
       +------------------+------------------+
       |                  |                  |
       v                  v                  v
  [CORRECT]          [AMBIGUOUS]       [INCORRECT]
       |                  |                  |
       v                  v                  v
  +----+----+      +------+------+    +------+------+
  | Refine  |      | Refine docs |    | Discard all |
  | docs    |      | + Web Search|    | retrieved   |
  | (strip) |      | (supplement)|    | docs        |
  +----+----+      +------+------+    +------+------+
       |                  |                  |
       |                  |                  v
       |                  |           +------+------+
       |                  |           | Web Search  |
       |                  |           | (fallback)  |
       |                  |           +------+------+
       |                  |                  |
       +------------------+------------------+
                          |
                   +------v------+
                   |  Generate   |
                   |  Answer     |
                   +-------------+
```

**Knowledge refinement (strip-level filtering)**

```
Document --> Split into sentences --> Score each sentence --> Keep relevant --> Concat
```

Each sentence is independently evaluated for relevance to the original query. Irrelevant sentences within otherwise-relevant documents are discarded before generation.

## Sources

- [Corrective Retrieval Augmented Generation (Yan et al., ICLR 2024)](https://arxiv.org/abs/2401.15884)
