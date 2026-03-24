---
title: "Key Papers and Resources"
section: Close
layout: standard
---

# Key Papers and Resources

### Foundational Papers

| Paper | Year | Key Contribution |
|-------|------|-----------------|
| [Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks (Lewis et al.)](https://arxiv.org/abs/2005.11401) | 2020 | Introduced the RAG paradigm |
| [Sentence-BERT: Sentence Embeddings using Siamese BERT-Networks (Reimers & Gurevych)](https://arxiv.org/abs/1908.10084) | 2019 | Efficient sentence embeddings via siamese networks |
| [Efficient and Robust Approximate Nearest Neighbor Search Using HNSW Graphs (Malkov & Yashunin)](https://arxiv.org/abs/1603.09320) | 2018 | The HNSW algorithm used in most vector DBs |
| [Lost in the Middle: How Language Models Use Long Contexts (Liu et al.)](https://arxiv.org/abs/2307.03172) | 2023 | Showed positional bias in LLM context attention |
| [Matryoshka Representation Learning (Kusupati et al.)](https://arxiv.org/abs/2205.13147) | 2022 | Train embeddings useful at multiple dimensionalities |
| [ColBERT: Efficient and Effective Passage Search via Contextualized Late Interaction (Khattab & Zaharia)](https://arxiv.org/abs/2004.12832) | 2020 | Late interaction model bridging bi-encoder and cross-encoder |

### Technical Resources

| Resource | Description |
|----------|-------------|
| [MTEB Leaderboard](https://huggingface.co/spaces/mteb/leaderboard) | Live embedding model benchmarks |
| [Anthropic: Introducing Contextual Retrieval (Sep 2024)](https://www.anthropic.com/news/contextual-retrieval) | Contextual chunking approach with benchmarks |
| [Pinecone Learning Center](https://docs.pinecone.io) | Practical vector DB tutorials and architecture guides |
| [LlamaIndex Documentation](https://developers.llamaindex.ai/) | Comprehensive RAG framework with advanced retrieval patterns |
| [LangChain RAG Tutorial](https://reference.langchain.com/python/langchain-text-splitters/character/RecursiveCharacterTextSplitter) | End-to-end RAG implementation guide |
| [Weaviate Blog: Hybrid Search Explained](https://weaviate.io/developers/weaviate) | Deep dive into combining vector and keyword search |

### Recommended Reading Order

1. Lewis et al. (2020) -- understand the original RAG formulation
2. Reimers & Gurevych (2019) -- how sentence embeddings work
3. Liu et al. (2023) -- why context management matters
4. Anthropic Contextual Retrieval blog post -- modern best practices
5. MTEB Leaderboard -- evaluate current model landscape
