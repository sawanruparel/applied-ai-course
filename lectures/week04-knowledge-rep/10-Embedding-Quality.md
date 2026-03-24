---
title: "Measuring Embedding Quality"
section: Embeddings Deep Dive
layout: standard
---

# Measuring Embedding Quality

You cannot improve what you do not measure. Embedding quality directly determines retrieval quality.

### Intrinsic Metrics (Embedding Space)

- **Retrieval Accuracy (Recall@k)**: what fraction of relevant documents appear in the top-k results?
- **Mean Reciprocal Rank (MRR)**: how high does the first relevant result rank on average?
- **Clustering Coherence**: do documents on the same topic cluster together? (silhouette score)
- **Nearest Neighbor Overlap**: do similar queries return overlapping result sets?

### The MTEB Benchmark

The **Massive Text Embedding Benchmark** evaluates embeddings across 8 task categories:

- Classification, Clustering, Pair Classification, Reranking
- Retrieval, Semantic Textual Similarity (STS), Summarization, BitextMining
- 56+ datasets, multiple languages
- **Limitation**: MTEB scores are averages -- a model strong on STS may be weak on retrieval

### Practical Evaluation Strategy

1. **Build a golden test set**: 50-100 question-answer pairs from your actual domain
2. **Measure Recall@5 and Recall@20**: does the right chunk appear in retrieved results?
3. **Compare models head-to-head**: same chunks, same queries, different embeddings
4. **Test with real user queries**: synthetic benchmarks don't capture real distribution
5. **Track drift over time**: as your corpus grows, retrieval quality can degrade

### Common Failure Modes

- Embedding model trained on English performs poorly on multilingual content
- Short queries fail to match long, detailed chunks (length mismatch)
- Domain jargon or acronyms not represented in the embedding model's training data
- Symmetric models (STS-trained) underperform on asymmetric retrieval (query vs document)

## Sources

- [MTEB: Massive Text Embedding Benchmark (Muennighoff et al., 2022)](https://arxiv.org/abs/2210.07316)
- [MTEB Leaderboard (Hugging Face)](https://huggingface.co/spaces/mteb/leaderboard)
