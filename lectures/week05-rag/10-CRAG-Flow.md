---
title: "CRAG Execution Flow"
section: Self-Correcting Retrieval
layout: diagram
---

# CRAG Execution Flow

```mermaid
flowchart TB
    Q[User query] --> Retrieve[Retrieve top-K docs]
    Retrieve --> Eval["Retrieval evaluator<br/>(T5-Large)"]
    Eval --> Conf{Confidence?}
    Conf -->|Correct| Refine[Refine docs<br/>strip irrelevant sentences]
    Conf -->|Ambiguous| Both[Refine + web search<br/>supplement]
    Conf -->|Incorrect| Discard[Discard all retrieved]
    Discard --> Web[Web search fallback]
    Refine --> Gen[Generate answer]
    Both --> Gen
    Web --> Gen
```

**Knowledge refinement (strip-level filtering)**

```mermaid
flowchart LR
    Doc[Document] --> Split[Split into sentences]
    Split --> Score[Score each sentence]
    Score --> Keep[Keep relevant only]
    Keep --> Concat[Concatenate]
```

Each sentence is independently evaluated for relevance to the original query. Irrelevant sentences within otherwise-relevant documents are discarded before generation.

## Sources

- [Corrective Retrieval Augmented Generation (Yan et al., ICLR 2024)](https://arxiv.org/abs/2401.15884)
