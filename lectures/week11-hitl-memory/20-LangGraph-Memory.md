---
title: "Memory in LangGraph"
section: Implementation
layout: standard
---

# Memory in LangGraph

Checkpointers, state persistence, and thread management.

## LangGraph's memory model

LangGraph treats memory as persistent graph state, managed through checkpointers and stores.

### Thread-level persistence (short-term)

```python
from langgraph.checkpoint.memory import MemorySaver
from langgraph.graph import StateGraph, MessagesState

# MemorySaver is development-only — state is lost when the process dies.
# Use AsyncPostgresSaver as the recommended production checkpointer (see below).
checkpointer = MemorySaver()

graph = StateGraph(MessagesState)
# ... define nodes and edges ...
app = graph.compile(checkpointer=checkpointer)

# Each thread_id maintains its own conversation state
config = {"configurable": {"thread_id": "user-123-session-1"}}
response = app.invoke({"messages": [("user", "Hello")]}, config)
# Next call with same thread_id continues the conversation
response = app.invoke({"messages": [("user", "Follow up")]}, config)
```

### Cross-thread memory (long-term) with Store

```python
from langgraph.store.memory import InMemoryStore

store = InMemoryStore()  # Use PostgresStore in production

# Store memories scoped to a user (namespace)
store.put(("user", "alice"), "preferences", {
    "language": "Python",
    "style": "concise",
    "timezone": "US/Pacific"
})

# Access store inside graph nodes
def agent_node(state, config, store):
    user_id = config["configurable"]["user_id"]
    # Retrieve cross-thread memories
    memories = store.search(("user", user_id))
    prefs = store.get(("user", user_id), "preferences")
    # Use in response generation
    ...
```

## Thread management patterns:
- **One thread per conversation** — Standard chat pattern
- **One thread per task** — Long-running workflows, resume on failure
- **Thread branching** — Fork from a checkpoint to explore alternatives
- **Thread cleanup** — Archive old threads, delete stale checkpoints

## Production setup:

`AsyncPostgresSaver` is the recommended production checkpointer — durable, async, and survives process restarts (unlike the development-only `MemorySaver`).

```python
from langgraph.checkpoint.postgres.aio import AsyncPostgresSaver

async with AsyncPostgresSaver.from_conn_string(DATABASE_URL) as checkpointer:
    await checkpointer.setup()  # Creates tables if needed
    graph = workflow.compile(checkpointer=checkpointer)
```

## Sources

- [LangGraph Memory Documentation (LangChain)](https://langchain-ai.github.io/langgraph/concepts/memory/)
- [LangGraph Persistence Documentation (LangChain)](https://langchain-ai.github.io/langgraph/concepts/persistence/)
- [LangGraph Persistence (LangChain Docs, OSS Python)](https://docs.langchain.com/oss/python/langgraph/persistence)
- [LangGraph v0.4: HITL, Checkpoints & State Persistence (AITechConnect)](https://aitechconnect.in/news/langgraph-v04-hitl-checkpoints-state-persistence)
- [LangGraph Library (LangChain)](https://langchain-ai.github.io/langgraph/)
