---
title: Graph Construction
section: Core Concepts
layout: diagram
---

# Building the Knowledge Graph

```text
Chunk 1 extracts: (A)--[r1]-->(B), (B)--[r2]-->(C)
Chunk 2 extracts: (A)--[r3]-->(D), (B)--[r4]-->(E)
Chunk 3 extracts: (A')--[r5]-->(C)   ← A' is a duplicate of A
                          ↓
              Entity Resolution / Merging
                          ↓
            Unified Graph: A--[r1]-->B--[r2]-->C
                           |              ↑
                           +--[r3]-->D    |
                           +--[r5]--------+
                                B--[r4]-->E
```

- **Entity resolution:** merge nodes that refer to the same real-world entity ("OpenAI", "openai", "Open AI" → single node)
- **Edge aggregation:** combine duplicate relationships, track weight (how many sources support this edge)
- **Source linking:** every node and edge maintains references back to the original text chunks for provenance
