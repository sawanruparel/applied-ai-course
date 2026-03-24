---
title: "What Are Embeddings?"
section: Embeddings Deep Dive
layout: standard
---

# What Are Embeddings?

An **embedding** is a dense vector representation of text in a continuous high-dimensional space, where semantic similarity corresponds to geometric proximity.

### The Intuition

- The word "king" and "queen" are close in embedding space
- "How do I reset my password?" and "I forgot my login credentials" map to nearby vectors
- Unrelated concepts are far apart

### Properties of Good Embeddings

- **Semantic similarity**: similar meanings produce similar vectors
- **Compositionality**: sentence embeddings capture meaning beyond individual words
- **Task transferability**: embeddings trained on one task generalize to others
- **Dimensionality**: typically 256-3072 dimensions (tradeoff: expressiveness vs cost)

### From Words to Sentences

- **Word2Vec / GloVe** (2013-2014): word-level, static embeddings
- **ELMo** (2018): contextualized word embeddings
- **Sentence-BERT** (2019): sentence-level embeddings via siamese networks
- **Modern embedding models** (2023+): instruction-tuned, multi-task, matryoshka representations

### Why This Matters for RAG

Embeddings are the **bridge** between natural language queries and your stored knowledge. The quality of your embeddings directly determines retrieval quality.

## Sources

- [Efficient Estimation of Word Representations in Vector Space — Word2Vec (Mikolov et al., 2013)](https://arxiv.org/abs/1301.3781)
- [GloVe: Global Vectors for Word Representation (Pennington et al., 2014)](https://nlp.stanford.edu/projects/glove/)
- [Deep Contextualized Word Representations — ELMo (Peters et al., 2018)](https://arxiv.org/abs/1802.05365)
- [Sentence-BERT: Sentence Embeddings using Siamese BERT-Networks (Reimers & Gurevych, 2019)](https://arxiv.org/abs/1908.10084)
