---
title: "Indexing Pipeline"
section: Production
layout: flow
---

# Indexing Pipeline: From Raw Documents to Searchable Index

## Document Ingestion

- Ingest from heterogeneous sources: S3, Google Drive, Confluence, Git repos, databases
- Extract text from PDF (PyMuPDF, Unstructured), DOCX, HTML, Markdown
- Preserve document structure: headings, tables, code blocks, lists
- Extract and store metadata: title, author, date, source URL, permissions

## Chunking Strategy

- **Fixed-size** (512 tokens, 256 overlap): simple, predictable, baseline approach
- **Recursive character splitting**: split on paragraphs, then sentences, then words
- **Semantic chunking**: use embedding similarity to find natural breakpoints
- **Document-aware**: respect section boundaries, never split tables or code blocks
- Optimal chunk size depends on embedding model (most peak at 256-512 tokens)

## Embedding & Enrichment

- Generate dense embeddings (text-embedding-3-large, BGE-M3, Cohere embed-v3)
- Extract keywords for BM25 index (tokenize, stem, remove stopwords)
- Generate contextual headers: prepend document/section context to each chunk
- Optionally generate summaries or questions-this-chunk-answers for multi-representation indexing

## Storage & Indexing

- Write dense vectors to vector store with metadata filters (Qdrant, Weaviate, pgvector)
- Write tokenized text to inverted index (Elasticsearch, OpenSearch, SQLite FTS5)
- Store raw chunks in document store for retrieval-time access
- Build HNSW or IVF-PQ index for approximate nearest neighbor search
- Version the index: track which documents are indexed, enable incremental updates

## Sources

- [Unstructured Library for Document Parsing](https://github.com/Unstructured-IO/unstructured)
- [BGE M3-Embedding: Multi-Lingual, Multi-Functionality, Multi-Granularity (Chen et al., 2024)](https://arxiv.org/abs/2402.03216)
- [Text Embeddings by Weakly-Supervised Contrastive Pre-training / E5 (Wang et al., 2022)](https://arxiv.org/abs/2212.03533)
