---
title: "Designing Multi-Turn Conversations"
section: Implementation
layout: standard
---

# Designing Multi-Turn Conversations

Context management strategies for long-running agent interactions.

## The context budget problem

You have a fixed token window. Every turn adds messages. How do you decide what stays?

### Strategy 1: Token-aware message management

```python
def manage_context(messages: list, max_tokens: int = 100_000):
    """Keep messages within budget using priority-based trimming."""
    total = count_tokens(messages)
    if total <= max_tokens:
        return messages

    # Priority order: system > recent user > recent assistant > older
    system_msgs = [m for m in messages if m.role == "system"]
    recent = messages[-6:]  # Always keep last 3 exchanges
    older = messages[len(system_msgs):-6]

    # Summarize older messages
    summary = summarize(older)
    return system_msgs + [SystemMessage(f"Earlier context: {summary}")] + recent
```

### Strategy 2: Scoped context injection

```python
# Only inject memory relevant to the current turn
async def build_turn_context(user_message: str, memory_manager):
    relevant_memories = await memory_manager.search(user_message, k=5)
    active_task = await memory_manager.get_active_task()

    context_parts = []
    if active_task:
        context_parts.append(f"Active task: {active_task.summary}")
    if relevant_memories:
        context_parts.append(f"Relevant context: {format_memories(relevant_memories)}")

    return "\n".join(context_parts)
```

## Conversation design patterns:

### Explicit state tracking
- Track what phase the conversation is in (gathering requirements, executing, reviewing)
- Adjust context injection based on phase
- Prune irrelevant earlier phases

### User intent continuity
- Detect when user changes topic vs. continues current thread
- On topic change: archive current context, start fresh
- On continuation: keep full relevant context

### Graceful degradation
- When context is full, inform the user
- Offer to start a new thread with a summary
- Never silently drop important context

## Anti-patterns to avoid:
- Stuffing entire conversation history into every call
- Ignoring token costs of tool results in context
- Not accounting for response tokens in budget
- Treating all messages as equally important
