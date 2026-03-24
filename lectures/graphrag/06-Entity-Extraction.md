---
title: Entity & Relationship Extraction
section: Core Concepts
layout: standard
---

# Entity & Relationship Extraction

- **Input:** text chunks from source documents
- **Process:** an LLM reads each chunk and identifies entities (named + conceptual) and relationships between them
- **Output:** structured triples — `(Entity A, relationship, Entity B)` with descriptions

```text
Chunk: "OpenAI released GPT-4 in March 2023, which significantly
        outperformed Google's PaLM 2 on reasoning benchmarks."

Extracted:
  (OpenAI,      released,       GPT-4)
  (GPT-4,       outperformed,   PaLM 2)
  (PaLM 2,      developed_by,   Google)
  (GPT-4,       released_date,  March 2023)
```

- Multiple extraction passes improve recall — first pass gets ~70% of entities, second pass catches missed ones
- Cost driver: every chunk requires an LLM call (or multiple) — this is why GraphRAG indexing is expensive

## Sources

- [From Local to Global: A Graph RAG Approach to Query-Focused Summarization (Edge et al., 2024)](https://arxiv.org/abs/2404.16130)
- [spaCy — Industrial-Strength NLP](https://spacy.io)
