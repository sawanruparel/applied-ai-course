---
title: "Metadata Filtering"
section: Vector Databases
layout: standard
---

# Metadata Filtering

Real-world retrieval is almost never "find the most similar vectors." It's "find the most similar vectors **within these constraints**."

### Why Metadata Filtering Matters

- Multi-tenant apps: only search documents belonging to the current user
- Temporal relevance: only retrieve documents from the last 90 days
- Access control: respect document permissions at retrieval time
- Domain scoping: search only within "engineering docs" or "HR policies"

### Pre-Filtering vs Post-Filtering

| Approach | How It Works | Pros | Cons |
|----------|-------------|------|------|
| **Pre-filter** | Apply metadata filter first, then vector search on subset | Guarantees all results match filter; accurate top-k | Can be slow if filter is very selective (tiny subset) |
| **Post-filter** | Vector search first, then filter results | Fast vector search; simple implementation | May return fewer than k results; wastes compute |

- **Qdrant, Weaviate**: optimized pre-filtering with payload indexes
- **Pinecone**: pre-filtering with metadata indexes
- **pgvector**: combine WHERE clauses with vector similarity (natural SQL pre-filtering)

### Best Practices for Metadata

1. **Index high-cardinality fields** you'll filter on frequently (user_id, department, doc_type)
2. **Use structured types**: dates as timestamps (not strings), categories as enums
3. **Avoid over-filtering**: very narrow filters reduce the candidate pool and hurt recall
4. **Store retrieval-relevant metadata only** in the vector DB; keep full documents elsewhere
5. **Plan for access control early**: retrofitting tenant isolation is painful

### Common Metadata Schema

```
{
  "source": "confluence",
  "doc_type": "engineering_runbook",
  "team": "platform",
  "created_at": "2025-11-15T10:30:00Z",
  "updated_at": "2026-01-20T14:00:00Z",
  "author": "jane.doe",
  "access_level": "internal",
  "section_title": "Database Failover Procedure"
}
```
