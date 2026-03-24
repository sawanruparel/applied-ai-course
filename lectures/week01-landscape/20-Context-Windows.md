---
title: "The Context Window Revolution"
section: Architecture Patterns
layout: standard
---

# The Context Window Revolution

### The progression:
- GPT-3 (2020): 4K tokens (~3,000 words)
- GPT-4 (2023): 8K-32K tokens
- GPT-4 Turbo (2023): 128K tokens (~100,000 words)
- Claude 3 (2024): 200K tokens (~150,000 words)
- Gemini 1.5 Pro (2024): 1M tokens, later 2M (~1.5M words)

### What 1M+ tokens means in practice:
- An entire codebase (10,000+ lines) in a single prompt
- A full book or research paper collection
- Hours of meeting transcripts
- Hundreds of pages of legal documents

### Implications for system design:
- **RAG becomes optional** for many use cases -- just stuff it in context
- **Few-shot learning** with dozens or hundreds of examples
- **Long-form analysis** without chunking and reassembly
- **"Needle in a haystack"** retrieval within the context window itself

### Limitations to remember:
- Cost scales linearly with context length
- Attention to information in the "middle" can degrade (lost-in-the-middle effect)
- Latency increases with context size
- Not all models handle long context equally well -- test empirically

## Sources

- [GPT-4 Technical Report (OpenAI, 2023)](https://arxiv.org/abs/2303.08774)
- [Introducing Claude 3 Family (Anthropic, Mar 2024)](https://www.anthropic.com/news/claude-3-family)
- [Our Next-Generation Model: Gemini 1.5 (Google, Feb 2024)](https://blog.google/technology/ai/google-gemini-next-generation-model-february-2024/)
- [Lost in the Middle: How Language Models Use Long Contexts (Liu et al., 2023)](https://arxiv.org/abs/2307.03172)
