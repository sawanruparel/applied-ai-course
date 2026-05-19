---
title: "Embedding Model Landscape"
section: Embeddings Deep Dive
layout: standard
---

# Embedding Model Landscape

Choosing an embedding model is one of the highest-leverage decisions in a RAG system.

| Model | Provider | Dimensions | Max Tokens | MTEB Avg | Notes |
|-------|----------|-----------|------------|----------|-------|
| text-embedding-3-large | OpenAI | 3072 (configurable) | 8191 | 64.6 | MRL support, can truncate dims |
| text-embedding-3-small | OpenAI | 1536 (configurable) | 8191 | 62.3 | 5x cheaper than large |
| Embed v4 | Cohere | 256-1536 (Matryoshka) | 512 | 66.3 | Multimodal (interleaved text+image), int8/binary output, on Bedrock + Azure AI Foundry |
| voyage-3-large | Voyage AI | 1024 | 32000 | 67.2 | Strong on code + long docs |
| Gemini text-embedding-004 | Google | 768 | 2048 | 66.0 | Free tier available |
| NV-Embed-v2 | NVIDIA | 4096 | 32768 | 72.3 | Mistral-7B-derived; strong open-weight choice for multilingual retrieval + enterprise on-prem |
| GTE-Qwen2-7B-instruct | Alibaba | 3584 | 32768 | 70.2 | Open-source, self-hostable |
| nomic-embed-text-v1.5 | Nomic | 768 | 8192 | 62.3 | Open-source, MRL support |
| bge-m3 | BAAI | 1024 | 8192 | 63.5 | Multi-lingual, multi-granularity |

### Selection Criteria

- **Accuracy vs cost**: bigger models perform better but cost more per embedding
- **Dimensionality**: higher dims = more expressive but more storage and slower search
- **Max token length**: must cover your chunk sizes
- **Matryoshka support**: lets you trade accuracy for efficiency post-training (e.g. Cohere Embed v4 emits 256-1536 dims from one model)
- **Multimodal inputs**: models like Cohere Embed v4 embed interleaved text + images into a shared space -- one index for documents, screenshots, and diagrams
- **Self-hosted vs API**: latency, privacy, cost at scale
- **Embeddings as a service**: hosted endpoints remove the embedding pipeline entirely -- Pinecone Inference runs embedding and reranking models inside Pinecone Serverless, and MongoDB's Automated Embedding (powered by Voyage AI) generates vectors on write with one click

## Sources

- [OpenAI Embeddings — text-embedding-3 (OpenAI, 2024)](https://platform.openai.com/docs/guides/embeddings)
- [Cohere Embed Models Documentation (Cohere, 2024)](https://docs.cohere.com/docs/embeddings)
- [Cohere Embed v4 — Multimodal Embeddings Changelog (Cohere)](https://docs.cohere.com/changelog/embed-multimodal-v4)
- [Pinecone Inference — Hosted Embedding & Reranking (DataCamp)](https://www.datacamp.com/blog/the-top-5-vector-databases)
- [Voyage AI Embeddings (Voyage AI)](https://www.voyageai.com/)
- [NV-Embed: Improved Techniques for Training LLMs as Generalist Embedding Models (Lee et al., 2024)](https://arxiv.org/abs/2405.17428)
- [Best Embedding Models — NV-Embed-v2 for Multilingual & On-Prem (Openxcell)](https://www.openxcell.com/blog/best-embedding-models/)
- [GTE-Qwen2-7B-instruct (Alibaba NLP)](https://huggingface.co/Alibaba-NLP/gte-Qwen2-7B-instruct)
- [Nomic Embed: Training a Reproducible Long Context Text Embedder (Nussbaum et al., 2024)](https://arxiv.org/abs/2402.01613)
- [BGE M3-Embedding (Chen et al., 2024)](https://arxiv.org/abs/2402.03216)
- [MTEB: Massive Text Embedding Benchmark (Muennighoff et al., 2022)](https://arxiv.org/abs/2210.07316)
- [MTEB Leaderboard (Hugging Face)](https://huggingface.co/spaces/mteb/leaderboard)
