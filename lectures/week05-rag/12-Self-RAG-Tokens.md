---
title: "Self-RAG Special Tokens"
section: Self-Correcting Retrieval
layout: diagram
---

# Self-RAG Reflection Tokens

```
Token          Purpose                        Values
========================================================================
[Retrieve]     Should I retrieve?             { Yes, No, Continue }
[IsRel]        Is passage relevant to query?  { Relevant, Irrelevant }
[IsSup]        Is generation supported?       { Fully, Partially, None }
[IsUse]        Is response useful overall?    { 5, 4, 3, 2, 1 }
```

**Generation flow with reflection tokens**

```
Input:  "What causes aurora borealis?"

Step 1: Model generates --> [Retrieve = Yes]
        (Model decides external knowledge is needed)

Step 2: Retriever fetches passage about solar wind and magnetosphere

Step 3: Model evaluates --> [IsRel = Relevant]
        (Retrieved passage is relevant to the query)

Step 4: Model generates response segment:
        "Aurora borealis is caused by charged particles from
         solar wind interacting with Earth's magnetosphere..."

Step 5: Model evaluates --> [IsSup = Fully Supported]
        (Generated text is grounded in the retrieved passage)

Step 6: Model evaluates --> [IsUse = 5]
        (Overall response quality is high)

Step 7: Continue or retrieve again for next segment
```

**Inference-time control** -- By adjusting thresholds on [IsSup] and [IsUse] scores, you can trade off between:

- **High precision** (strict thresholds): only output claims fully supported by evidence
- **High recall** (relaxed thresholds): allow partially supported claims for broader coverage
- **No retrieval** (force [Retrieve=No]): use the model as a standard LM

## Sources

- [Self-RAG: Learning to Retrieve, Generate, and Critique through Self-Reflection (Asai et al., ICLR 2024)](https://arxiv.org/abs/2310.11511)
