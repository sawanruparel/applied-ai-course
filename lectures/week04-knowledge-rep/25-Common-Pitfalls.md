---
title: "Common Pitfalls"
section: Close
layout: standard
---

# Common Pitfalls in RAG Systems

These are the failure modes I see most often in production RAG deployments.

### 1. Wrong Chunk Size

- Chunks too small: retrieved text lacks context, LLM can't form coherent answers
- Chunks too large: irrelevant text dilutes the signal, wastes context window
- **Fix**: benchmark multiple sizes (256, 512, 1024) on your actual queries

### 2. Bad or Mismatched Embeddings

- Using a general-purpose model for a highly specialized domain (medical, legal, financial)
- Embedding queries and documents with different models (they must share the same vector space)
- Not testing embedding quality on your domain before committing
- **Fix**: evaluate on a golden test set before deploying; consider domain fine-tuning

### 3. Ignoring Metadata

- Storing chunks without source, date, section, or author information
- No metadata filtering: searching the entire corpus when the answer is in a specific document
- **Fix**: design your metadata schema before building the pipeline

### 4. No Reranking Stage

- Trusting bi-encoder similarity scores as the final relevance signal
- Returning top-k by embedding similarity alone
- **Fix**: add a cross-encoder reranker; even a cheap one improves precision significantly

### 5. Stuffing Too Much into Context

- Retrieving 20 chunks "just in case" when 5 would suffice
- Not deduplicating overlapping chunks
- **Fix**: use fewer, higher-quality chunks; measure answer quality vs chunk count

### 6. Not Evaluating End-to-End

- Measuring embedding similarity but not answer correctness
- No automated evaluation pipeline; relying on vibes
- **Fix**: build an eval set of question-answer pairs; measure faithfulness, relevance, and completeness

### 7. Ignoring Document Parsing Quality

- Garbage in, garbage out: PDFs with broken table extraction, missing headers, OCR errors
- **Fix**: inspect parsed output for a sample of documents; invest in parsing quality
