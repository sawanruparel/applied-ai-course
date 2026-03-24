---
title: "Parent-Child Retrieval"
section: Context Management
layout: diagram
---

# Parent-Child Retrieval: Retrieve Small, Return Large

**Core insight**: small chunks are better for matching, but large chunks are better for answering.

```
  Document
  ========================================================
  |  Section 1: Introduction                              |
  |  +-----------+ +-----------+ +-----------+            |
  |  | Child 1.1 | | Child 1.2 | | Child 1.3 |  <-- small|
  |  | (128 tok) | | (128 tok) | | (128 tok) |    chunks |
  |  +-----------+ +-----------+ +-----------+    for     |
  |                                                search |
  |  Parent Chunk 1 (full section, ~1024 tokens)   <---+  |
  |                                                    |  |
  |  Section 2: Architecture                           |  |
  |  +-----------+ +-----------+ +-----------+         |  |
  |  | Child 2.1 | | Child 2.2 | | Child 2.3 |        |  |
  |  +-----------+ +-----------+ +-----------+         |  |
  |                                                    |  |
  |  Parent Chunk 2 (full section, ~1024 tokens)       |  |
  ========================================================
                                                       |
  Query: "How does the failover mechanism work?"       |
         |                                             |
         v                                             |
  Embed + search against CHILD chunks                  |
         |                                             |
         v                                             |
  Match: Child 2.2 (score: 0.89)                       |
         |                                             |
         v                                             |
  Return PARENT chunk 2 to the LLM  <-----------------+
  (full section with surrounding context)
```

### How It Works

1. **Index small chunks** (128-256 tokens) for precise semantic matching
2. **Store parent references**: each child chunk links to its parent (the full section or document)
3. **At query time**: search against child chunks, but return the parent chunk to the LLM
4. The LLM gets the full context surrounding the matched passage

### Variations

- **Sentence window**: retrieve the matching sentence, expand to +/- N surrounding sentences
- **Section-level parents**: children are paragraphs, parents are full sections
- **Document summary + chunks**: store a summary of the whole document as metadata; include it alongside retrieved chunks

### Benefits

- Precise retrieval (small chunks match better)
- Rich context for generation (large chunks provide better answers)
- Reduces "out of context" hallucinations from truncated chunks
