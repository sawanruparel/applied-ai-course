---
title: "Vector Search Limitations"
section: Hybrid Search
layout: standard
---

# Vector Search Limitations

**Lexical mismatch** -- Dense embeddings map semantically similar text to nearby vectors, but they can fail when the surface form matters. Searching for "ERC-20 token standard" may not retrieve a document that only mentions "Ethereum Request for Comments 20" despite being the same concept.

**Entity blindness** -- Embedding models compress named entities (product IDs, legal case numbers, API endpoint paths) into the same general region of vector space. "CVE-2024-3094" and "CVE-2024-21762" are entirely different vulnerabilities but embed almost identically.

**Negation insensitivity** -- "Systems that do NOT use Kubernetes" and "Systems that use Kubernetes" produce nearly identical embeddings. Dense retrieval cannot reliably handle negation, exclusion, or contrastive queries.

**Numeric reasoning** -- Queries like "revenue greater than $50M in Q3" require range filtering and numeric comparison. Embedding similarity has no mechanism for numeric operations.

**Rare terminology** -- Domain-specific jargon, newly coined terms, and low-frequency tokens are poorly represented in general-purpose embedding models. Out-of-vocabulary terms get subword-tokenized into meaningless fragments.

**High recall, low precision** -- Vector search casts a wide semantic net. For queries requiring exact matching (error codes, configuration keys, specific identifiers), sparse retrieval is strictly superior.
