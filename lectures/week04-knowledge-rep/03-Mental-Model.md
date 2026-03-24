---
title: "Mental Model: From Unstructured to Computable"
section: Framing
layout: standard
---

# Mental Model: From Unstructured to Computable

The core task: turn **unstructured knowledge** into **computable representations** that an LLM can use at inference time.

### The Representation Pipeline

1. **Raw Knowledge** -- PDFs, docs, code, databases, APIs, web pages
2. **Chunked Text** -- meaningful segments with preserved context
3. **Dense Vectors** -- numerical representations capturing semantic meaning
4. **Indexed Store** -- searchable structure optimized for similarity retrieval
5. **Curated Context** -- the right information, in the right order, at the right time

### Key Insight

The quality of your AI application is bounded by the quality of your knowledge representation. Garbage in, hallucinations out.

### What We'll Cover Today

- **Embeddings**: how we turn text into vectors (the representation)
- **Vector Databases**: how we store and search those vectors (the infrastructure)
- **Context Management**: how we select and organize retrieved information (the intelligence)
