---
title: "Indexing Strategies"
section: Vector Databases
layout: standard
---

# Indexing Strategies

The choice of index determines the speed/accuracy/memory tradeoff for your vector search.

### Flat Index (Exact Search)

- Brute-force comparison against every vector
- **100% recall** -- guaranteed to find the true nearest neighbors
- Practical up to ~100K vectors (depending on latency requirements)
- Use for: golden test sets, small corpora, accuracy baselines

### HNSW (Hierarchical Navigable Small World)

- **Default choice** for most production systems
- Tunable parameters: `M` (connections per node), `ef_construction` (build quality), `ef_search` (query quality)
- Higher `M` = better recall, more memory; typical range: 16-64
- Higher `ef_search` = better recall, slower queries; typical range: 100-500
- Memory overhead: ~1.5-2x the raw vector storage
- Build time: can be slow for very large datasets (100M+)

### IVF (Inverted File Index)

- Partition-based: clusters vectors, searches only relevant partitions
- Tunable: `nlist` (number of clusters), `nprobe` (clusters searched per query)
- Faster build time than HNSW, lower memory overhead
- Good for: very large datasets where memory is constrained
- Often combined with PQ for compression: IVF-PQ

### Quantization (Compression)

- **Scalar quantization**: float32 to int8 (~4x compression, minimal accuracy loss)
- **Product quantization**: ~100x compression, moderate accuracy loss
- **Binary quantization**: 32x compression, best for reranking pipelines
- Use when: storage costs dominate or you need to fit billions of vectors in memory

### Decision Framework

1. **< 100K vectors**: flat index is fine
2. **100K - 10M vectors**: HNSW with default parameters
3. **10M - 1B vectors**: HNSW + scalar quantization, or IVF-PQ
4. **> 1B vectors**: IVF-PQ with distributed sharding

## Sources

- [Efficient and Robust Approximate Nearest Neighbor Search Using HNSW Graphs (Malkov & Yashunin, 2018)](https://arxiv.org/abs/1603.09320)
- [FAISS — A Library for Efficient Similarity Search (Facebook Research)](https://github.com/facebookresearch/faiss)
