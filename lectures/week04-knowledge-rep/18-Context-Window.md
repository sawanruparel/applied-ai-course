---
title: "Context Window Strategies"
section: Context Management
layout: standard
---

# Context Window Strategies

The context window is your most valuable resource. Managing it well is the difference between a good and great RAG system.

### What Goes In

- **System prompt**: instructions, persona, output format constraints
- **Retrieved chunks**: the knowledge the LLM needs to answer
- **Conversation history**: prior turns for multi-turn interactions
- **Metadata**: source citations, timestamps, confidence signals
- **Examples**: few-shot demonstrations if needed

### What Stays Out

- Chunks with low relevance scores (below a threshold, not just bottom of top-k)
- Redundant information (deduplicate overlapping chunks)
- Stale data when fresher alternatives exist
- Information the user doesn't have access to (enforce permissions)

### The Lost-in-the-Middle Effect

Research (Liu et al., 2023) showed that LLMs perform best when relevant information is at the **beginning** or **end** of the context, and worst when it's buried in the middle.

**Practical implication**: place your most relevant chunks first and last, not in the middle.

### Token Budget Allocation

For a 128K-token context window, a typical allocation:

| Component | Tokens | Notes |
|-----------|--------|-------|
| System prompt | 500-2,000 | Instructions and formatting |
| Retrieved context | 2,000-8,000 | 4-16 chunks at ~500 tokens each |
| Conversation history | 1,000-4,000 | Last 3-5 turns |
| Output reservation | 1,000-4,000 | Space for the model's response |
| **Buffer** | remaining | Headroom for edge cases |

### Ordering Strategies

1. **Relevance-first**: highest similarity score at the top
2. **Chronological**: oldest to newest (for temporal reasoning)
3. **Sandwich**: most relevant at start and end, less relevant in middle
4. **Grouped by source**: cluster chunks from the same document together

## Sources

- [Lost in the Middle: How Language Models Use Long Contexts (Liu et al., 2023)](https://arxiv.org/abs/2307.03172)
