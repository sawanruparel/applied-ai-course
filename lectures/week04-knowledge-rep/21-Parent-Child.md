---
title: "Parent-Child Retrieval"
section: Context Management
layout: diagram
---

# Parent-Child Retrieval: Retrieve Small, Return Large

**Core insight**: small chunks are better for matching, but large chunks are better for answering.

```mermaid
flowchart LR
    subgraph "Indexed structure"
      P1["Parent 1<br/>(~1024 tok)"]
      P2["Parent 2<br/>(~1024 tok)"]
      C11["Child 1.1<br/>(128 tok)"] --> P1
      C12["Child 1.2"] --> P1
      C13["Child 1.3"] --> P1
      C21["Child 2.1"] --> P2
      C22["Child 2.2"] --> P2
      C23["Child 2.3"] --> P2
    end
    Q["Query:<br/>How does failover work?"] --> Search[Embed + search<br/>against CHILD chunks]
    C11 & C12 & C13 & C21 & C22 & C23 --> Search
    Search --> Match["Match: Child 2.2<br/>(score 0.89)"]
    Match --> Return["Return PARENT 2<br/>to the LLM"]
    P2 -.-> Return
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
