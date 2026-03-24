---
title: "Memory Types"
section: Agent Memory
layout: cards
---

# Memory Types

Inspired by human cognition: different memory systems for different purposes.

## Working Memory (Context Window)

The agent's "RAM" — what it can see right now.

- Current conversation context
- Active tool results and intermediate state
- Limited by token window (128K-1M tokens)
- **Volatile**: gone when the session ends
- Analogy: what's on your desk right now

## Short-Term Memory (Conversation)

Tracks the current interaction across turns.

- Full message history for this session
- Maintains coherence within a conversation
- Strategies: full history, sliding window, summary
- **Session-scoped**: persists within one conversation
- Analogy: what you discussed in a meeting

## Long-Term Memory (Persistent)

Survives across sessions. The agent's durable knowledge.

- User preferences, past decisions, learned facts
- Stored externally: databases, vector stores, files
- Requires explicit storage and retrieval mechanisms
- **Permanent**: available across all future sessions
- Analogy: your notes, journals, and personal knowledge base
