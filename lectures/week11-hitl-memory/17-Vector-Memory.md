---
title: "Vector-Based Long-Term Memory"
section: Agent Memory
layout: diagram
---

# Vector-Based Long-Term Memory

Embed past experiences and retrieve by semantic similarity.

```
  STORAGE FLOW                          RETRIEVAL FLOW

  ┌────────────┐                       ┌────────────────┐
  │ Interaction │                       │ Current Query  │
  │ or Fact     │                       │ or Context     │
  └──────┬─────┘                       └───────┬────────┘
         │                                      │
         ▼                                      ▼
  ┌────────────┐                       ┌────────────────┐
  │  Extract   │                       │   Embed Query  │
  │  Memory    │                       │                │
  │  Chunks    │                       └───────┬────────┘
  └──────┬─────┘                               │
         │                                      ▼
         ▼                              ┌───────────────┐
  ┌────────────┐                       │  Similarity    │
  │  Embed     │                       │  Search        │
  │  (OpenAI,  │                       │  (cosine, k=5) │
  │  Cohere)   │                       └───────┬────────┘
  └──────┬─────┘                               │
         │                                      ▼
         ▼                              ┌───────────────┐
  ┌────────────┐                       │  Re-rank &     │
  │  Store in  │──────────────────────▶│  Filter        │
  │  Vector DB │   (Chroma, Pinecone,  │  (recency,     │
  │  + Metadata│    Weaviate, pgvector)│   relevance)   │
  └────────────┘                       └───────┬────────┘
                                                │
                                                ▼
                                       ┌───────────────┐
                                       │  Inject into  │
                                       │  Context      │
                                       └───────────────┘
```

## Implementation

```python
from langchain_chroma import Chroma
from langchain_openai import OpenAIEmbeddings

# Initialize vector memory
memory_store = Chroma(
    collection_name="agent_memory",
    embedding_function=OpenAIEmbeddings(model="text-embedding-3-small"),
    persist_directory="./memory_db"
)

# Store a memory
def store_memory(content: str, metadata: dict):
    memory_store.add_texts(
        texts=[content],
        metadatas=[{
            **metadata,
            "timestamp": datetime.now().isoformat(),
            "type": metadata.get("type", "general"),  # episode, entity, preference
        }]
    )

# Retrieve relevant memories
def recall(query: str, k: int = 5, memory_type: str = None):
    filters = {"type": memory_type} if memory_type else None
    results = memory_store.similarity_search(
        query=query, k=k, filter=filters
    )
    return results
```

**Tip:** Combine vector similarity with metadata filters (recency, type, importance) for best results.

## Sources

- [LangChain Chroma Integration (LangChain)](https://python.langchain.com/docs/integrations/vectorstores/chroma/)
- [Chroma Documentation (Chroma)](https://docs.trychroma.com/)
- [OpenAI Embeddings API (OpenAI)](https://platform.openai.com/docs/guides/embeddings)
