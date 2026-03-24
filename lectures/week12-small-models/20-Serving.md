---
title: "Model Serving at Scale"
section: Deployment
layout: standard
---

# Model Serving: Optimizing Throughput and Latency

## The Serving Stack

```
Client → Load Balancer → Inference Server → GPU/CPU Workers
                              │
                    ┌─────────┼─────────┐
                    │         │         │
                  vLLM       TGI     Triton
```

## vLLM — The Throughput Champion

- **PagedAttention**: manages KV cache like virtual memory — near-zero waste
- Continuous batching: new requests join in-flight batches
- Tensor parallelism: split one model across multiple GPUs
- Prefix caching: shared system prompts computed once
- Throughput: 8B model on A100 handles **500–2,000 requests/min**

## TGI (Text Generation Inference)

- Flash Attention 2 for memory-efficient attention
- Watermark detection for generated text
- Grammar-constrained generation (JSON schema, regex)
- Integrated with HuggingFace Hub — pull any model by name

## NVIDIA Triton Inference Server

- Multi-framework: serves PyTorch, TensorRT, ONNX, vLLM backends
- Dynamic batching with configurable strategies
- Model ensembles: chain preprocessing + model + postprocessing
- Best for: organizations already in the NVIDIA ecosystem

## Key Serving Metrics

| Metric                | Target (8B model, A100) | Why It Matters            |
|-----------------------|:-----------------------:|---------------------------|
| Time to first token   | < 100ms                 | User-perceived latency    |
| Tokens per second     | 50–100 tok/s per user   | Streaming experience      |
| Throughput            | 500–2,000 req/min       | Cost efficiency           |
| GPU utilization       | > 80%                   | Hardware ROI              |

## Sources

- [vLLM: PagedAttention — arXiv:2309.06180 (Kwon et al., 2023)](https://arxiv.org/abs/2309.06180)
- [vLLM — High-Throughput LLM Serving Engine](https://github.com/vllm-project/vllm)
- [Text Generation Inference — HuggingFace Serving Toolkit](https://github.com/huggingface/text-generation-inference)
- [NVIDIA Triton Inference Server](https://github.com/triton-inference-server/server)
