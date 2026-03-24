---
title: "Agentic RAG"
section: Advanced Techniques
layout: standard
---

# Agentic RAG: Agents That Plan Retrieval Dynamically

**Concept** -- Instead of a fixed retrieval pipeline, an LLM agent dynamically plans and executes retrieval strategies based on the query, intermediate results, and available tools.

**Agent capabilities**

- **Tool selection** -- Choose between vector search, keyword search, SQL queries, API calls, and web search based on query characteristics
- **Query planning** -- Decompose complex questions into retrieval sub-tasks with dependency ordering
- **Result evaluation** -- Assess whether retrieved context is sufficient before generating
- **Retry with adaptation** -- If retrieval fails, reformulate the query or switch to an alternative source
- **Aggregation** -- Synthesize information from multiple retrieval steps into a coherent answer

**Implementation with tool-use LLMs**

```python
tools = [
    vector_search(query, collection, top_k),
    bm25_search(query, index, top_k),
    sql_query(query, database),
    web_search(query),
    document_lookup(doc_id, section),
]
# The agent decides which tools to call, in what order,
# and whether to iterate based on intermediate results
```

**LangGraph / LlamaIndex Workflows** -- Modern frameworks model agentic RAG as a state machine with conditional edges. Nodes represent retrieval/generation steps; edges represent evaluation-based routing decisions.

**Trade-offs** -- Agentic RAG is the most capable but also the most expensive and hardest to debug. Each agent decision adds latency, cost, and a potential failure point. Use it when simpler pipelines cannot handle the query complexity.

## Sources

- [LangChain / LangGraph Documentation](https://docs.langchain.com)
- [LlamaIndex Documentation](https://docs.llamaindex.ai)
