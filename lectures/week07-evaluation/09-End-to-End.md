---
title: "End-to-End RAG Evaluation Pipeline"
section: RAG Evaluation
layout: diagram
---

# End-to-End RAG Evaluation Pipeline

```mermaid
flowchart TB
    DS["Eval dataset<br/>(question, ground_truth, ref_docs)"] --> Pipe
    subgraph "Your RAG pipeline"
      Pipe[Retriever] --> Chunks[Retrieved chunks]
      Chunks --> Gen[Generator]
      Gen --> Ans[Answer]
    end
    Ans --> Ragas
    Chunks --> Ragas
    DS --> Ragas
    subgraph "RAGAS evaluation"
      Ragas{Has ground truth?}
      Ragas -->|no| NoGT["Faithfulness<br/>Answer relevancy"]
      Ragas -->|yes| GT["Context recall/precision<br/>Answer correctness"]
    end
    NoGT --> Results["Results & diagnostics<br/>(per-sample + aggregate)"]
    GT --> Results
```

**Key point**: You need four columns of data -- question, answer, contexts, and (optionally) ground_truth -- to run the full RAGAS evaluation suite.

## Sources

- [RAGAS: Automated Evaluation of Retrieval Augmented Generation (Es et al., 2023)](https://arxiv.org/abs/2309.15217)
- [RAGAS Documentation](https://docs.ragas.io)
