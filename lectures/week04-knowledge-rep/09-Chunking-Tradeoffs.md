---
title: "Chunking Tradeoffs"
section: Embeddings Deep Dive
layout: standard
---

# Chunking Tradeoffs

There is no universally optimal chunk size. Every choice is a tradeoff.

### Chunk Size: The Central Tension

| Small chunks (128-256 tokens) | Large chunks (512-1024 tokens) |
|-------------------------------|-------------------------------|
| More precise retrieval | More context per chunk |
| Better for specific questions | Better for complex/nuanced questions |
| More chunks to store and search | Fewer chunks, lower storage costs |
| Risk: losing surrounding context | Risk: diluting the relevant signal |
| Higher recall, lower precision | Lower recall, higher precision |

### Overlap

- **Purpose**: ensure information at chunk boundaries isn't lost
- **Typical range**: 10-20% of chunk size (e.g., 50-token overlap for 512-token chunks)
- **Cost**: increases storage by the overlap percentage
- **Diminishing returns**: beyond 20% overlap, gains are minimal

### Metadata: The Secret Weapon

Attach metadata to every chunk to enable filtering and context reconstruction:

- **Source**: file name, URL, document title
- **Position**: section header, page number, chunk index within document
- **Temporal**: creation date, last modified, version
- **Structural**: document type, author, department, access level
- **Semantic**: LLM-generated summary, keywords, or propositions

### Practical Recommendations

1. Start with **recursive chunking at 512 tokens, 50-token overlap**
2. Always preserve **section headers** as metadata (or prepend to chunk)
3. **Benchmark** different strategies on your actual queries before committing
4. Consider **proposition-based chunking** for high-value use cases (decompose paragraphs into atomic facts)
