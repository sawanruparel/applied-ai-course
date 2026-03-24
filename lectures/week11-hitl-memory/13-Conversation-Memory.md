---
title: "Conversation Memory Strategies"
section: Agent Memory
layout: two-column
---

# Conversation Memory Strategies

How to manage message history within a conversation.

## Strategy Comparison

### Full History
Keep every message. Simple but expensive.
- Pro: No information loss
- Con: Hits token limits on long conversations
- Use when: Short interactions, high-stakes accuracy

### Sliding Window
Keep only the last N messages.
- Pro: Bounded cost, always fits in context
- Con: Loses early context
- Use when: Casual chat, FAQ-style interactions

### Summary + Recent
Summarize old messages, keep recent ones verbatim.
- Pro: Preserves key context, bounded cost
- Con: Summary may lose nuance
- Use when: Long multi-turn workflows

## Implementation

```python
from langchain_core.messages import trim_messages

# Sliding window: keep last 10 messages
trimmed = trim_messages(
    messages,
    max_tokens=4000,
    strategy="last",
    token_counter=ChatOpenAI(model="gpt-4o"),
    include_system=True,  # Always keep system prompt
)

# Summary + recent hybrid
def summarize_and_trim(messages, threshold=20):
    if len(messages) > threshold:
        old = messages[:-10]
        recent = messages[-10:]
        summary = llm.invoke(
            f"Summarize this conversation:\n{old}"
        )
        return [SystemMessage(f"Previous context: {summary}")] + recent
    return messages
```

**Tip:** Always preserve the system message and the most recent user message regardless of strategy.

## Sources

- [LangChain `trim_messages` API Reference (LangChain)](https://reference.langchain.com/python/langchain-core/messages/utils/trim_messages)
- [LangGraph Memory Documentation (LangChain)](https://langchain-ai.github.io/langgraph/concepts/memory/)
