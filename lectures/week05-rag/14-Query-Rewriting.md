---
title: "Query Rewriting"
section: Self-Correcting Retrieval
layout: standard
---

# Query Rewriting: Transform Queries for Better Retrieval

**Problem** -- User queries are often vague, conversational, or poorly structured for retrieval. The gap between how humans ask questions and how information is indexed is a primary cause of retrieval failure.

**Technique 1: LLM-based rewriting**

Prompt the LLM to reformulate the query before retrieval. Effective for expanding abbreviations, resolving coreferences, and adding domain context.

```
Original:  "Why is my app slow after the update?"
Rewritten: "Application performance degradation after software update
            causes and troubleshooting"
```

**Technique 2: HyDE (Hypothetical Document Embeddings)**

Generate a hypothetical answer to the query, then embed that answer and use it as the search vector. The hypothesis is closer in embedding space to real documents than the original query.

```
Query:     "How does mRNA vaccine work?"
HyDE doc:  "mRNA vaccines deliver synthetic messenger RNA encoding a
            viral protein. Cells produce the protein, triggering..."
--> Embed the HyDE doc, not the query
```

**Technique 3: Step-back prompting**

Abstract the query to a higher-level concept before retrieval. Retrieve broader context first, then answer the specific question.

```
Original:  "What happens if I set batch_size=1 in PyTorch DataLoader?"
Step-back: "How does batch size affect PyTorch DataLoader behavior and
            training performance?"
```

**Technique 4: Sub-question decomposition**

Break complex queries into atomic sub-questions, retrieve for each independently, and merge context before generating.

## Sources

- [Precise Zero-Shot Dense Retrieval without Relevance Labels / HyDE (Gao et al., ACL 2023)](https://arxiv.org/abs/2212.10496)
- [Take a Step Back: Evoking Reasoning via Abstraction in LLMs (Zheng et al., 2023)](https://arxiv.org/abs/2310.06117)
