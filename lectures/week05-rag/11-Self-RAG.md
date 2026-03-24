---
title: "Self-RAG"
section: Self-Correcting Retrieval
layout: standard
---

# Self-RAG: Learn to Retrieve, Generate, and Self-Reflect

**Paper** -- Asai et al., "Self-RAG: Learning to Retrieve, Generate, and Critique through Self-Reflection" (ICLR 2024)

**Core idea** -- Train a single LM to adaptively decide when to retrieve, evaluate the relevance of retrieved passages, and assess whether its own generation is supported by the evidence. All of this is done through special reflection tokens predicted by the model itself.

**Key differences from standard RAG**

- Retrieval is on-demand, not mandatory -- the model predicts when it needs external knowledge
- Self-evaluation is built into generation via learned critique tokens
- No separate retrieval evaluator model needed -- the LM handles everything
- Inference-time controllability through reflection token thresholds

**Training process**

1. Train a critic model (GPT-4 distillation) to generate reflection tokens for training data
2. Train the retriever to fetch passages when the model predicts [Retrieve=Yes]
3. Train the generator LM on text interleaved with reflection tokens using standard next-token prediction
4. At inference, the model generates reflection tokens as part of its output and uses them to guide behavior

**Results** -- Self-RAG (Llama2-7B/13B) outperforms ChatGPT and retrieval-augmented Llama2-chat on open-domain QA, reasoning, and fact verification tasks, while citing fewer but more relevant passages.

## Sources

- [Self-RAG: Learning to Retrieve, Generate, and Critique through Self-Reflection (Asai et al., ICLR 2024)](https://arxiv.org/abs/2310.11511)
