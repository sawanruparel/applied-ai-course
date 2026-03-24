---
title: "Persistent State"
section: Agent Memory
layout: standard
---

# Persistent State

Checkpointing agent state for resume and replay.

## Why persist state?
- Resume interrupted workflows (network failure, timeout, user away)
- Audit what the agent did and when
- Replay and debug past agent runs
- Enable long-running tasks that span hours or days

## Checkpointing pattern

```python
from langgraph.checkpoint.postgres import PostgresSaver

# Create a checkpointer backed by Postgres
checkpointer = PostgresSaver.from_conn_string(
    "postgresql://user:pass@localhost/agent_state"
)

# Compile graph with checkpointing
graph = workflow.compile(checkpointer=checkpointer)

# Every node execution is automatically checkpointed
# Resume from any point by using the same thread_id
config = {"configurable": {"thread_id": "task-abc-123"}}
result = graph.invoke(initial_state, config)

# Later: resume from where we left off
result = graph.invoke(None, config)  # Loads last checkpoint
```

## What gets checkpointed:
- Full graph state at each node boundary
- Messages, tool results, intermediate values
- Which node to execute next
- Metadata: timestamps, version, parent checkpoint

## Checkpoint storage options

| Storage | Best for | Trade-offs |
|---------|----------|-----------|
| In-memory | Development, testing | Lost on restart |
| SQLite | Single-user, local apps | No concurrent access |
| PostgreSQL | Production, multi-user | Requires DB infrastructure |
| Redis | High-throughput, TTL-based | Data loss risk without persistence |

## Time-travel debugging

```python
# List all checkpoints for a thread
history = list(graph.get_state_history(config))

# Inspect state at any point
past_state = history[5]  # 5th checkpoint
print(past_state.values)  # What was the state?
print(past_state.next)     # What was about to run?

# Fork from a past state and replay with different input
fork_config = {"configurable": {"thread_id": "task-abc-123-retry",
                                 "checkpoint_id": past_state.config["configurable"]["checkpoint_id"]}}
graph.invoke(Command(resume=new_input), fork_config)
```

## Sources

- [LangGraph Persistence Documentation (LangChain)](https://langchain-ai.github.io/langgraph/concepts/persistence/)
- [LangGraph Library (LangChain)](https://langchain-ai.github.io/langgraph/)
