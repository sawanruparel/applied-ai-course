---
title: "The Model Size Spectrum"
section: Framing
layout: diagram
---

# The Model Size Spectrum

```
 Parameters    Examples                    Typical Use Cases              Hardware
 ──────────    ────────                    ─────────────────              ────────

   1B          Llama 3.2 1B               Simple classification,         Phone, RPi
               Qwen 2.5 0.5B             text cleanup, routing          1–2 GB RAM
                    │
                    ▼
   3B          Llama 3.2 3B               Extraction, summarization,     Laptop CPU
               Phi-4 mini                 basic Q&A, translation         4 GB RAM
                    │
                    ▼
   7–8B        Llama 3.1 8B               General assistant, code gen,   Single GPU
               Qwen 2.5 7B               RAG, tool use                  8–16 GB VRAM
               Gemma 3 4B/12B
                    │
                    ▼
  13–14B       Qwen 2.5 14B              Complex reasoning, long-form   Single GPU
               Phi-4 14B                 generation, multi-step tasks   16–24 GB VRAM
                    │
                    ▼
  30–70B       Llama 3.3 70B             Near-frontier quality,         Multi-GPU
               Qwen 2.5 72B             complex analysis               40–80 GB VRAM
                    │
                    ▼
 Frontier      GPT-4.1, Claude Opus 4,   Hardest reasoning, creative    API only /
               Gemini 2.5 Pro            writing, novel problems        Data center
```

**Key insight:** The right model is the *smallest* one that meets your quality threshold.

## Sources

- [Introducing Meta Llama 3 (Meta, 2024)](https://ai.meta.com/blog/meta-llama-3/)
- [Qwen2.5: A Party of Foundation Models (Alibaba, 2024)](https://qwenlm.github.io/blog/qwen2.5/)
- [Introducing Phi-3: Redefining What's Possible with SLMs (Microsoft, 2024)](https://azure.microsoft.com/en-us/blog/introducing-phi-3-redefining-whats-possible-with-slms/)
- [Phi-4 Technical Report — arXiv:2412.08905 (Microsoft, 2024)](https://arxiv.org/abs/2412.08905)
- [Gemma 3 (Google, 2025)](https://blog.google/technology/developers/gemma-3/)
