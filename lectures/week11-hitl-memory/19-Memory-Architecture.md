---
title: "Memory Architecture"
section: Agent Memory
layout: diagram
---

# Memory Architecture

Combining multiple memory types in one agent system.

```
                         ┌─────────────────────────────┐
                         │        AGENT CORE            │
                         │                              │
                         │   ┌──────────────────────┐   │
                         │   │   Working Memory      │   │
                         │   │   (Context Window)    │   │
                         │   │                        │   │
                         │   │  System Prompt         │   │
                         │   │  + Retrieved Memories  │   │
                         │   │  + Recent Messages     │   │
                         │   │  + Current Tool State  │   │
                         │   └──────────────────────┘   │
                         └──────────┬──────────────────┘
                                    │
                    ┌───────────────┼───────────────┐
                    │               │               │
                    ▼               ▼               ▼
         ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
         │  Conversation │  │   Semantic    │  │   Episodic   │
         │  Memory       │  │   Memory     │  │   Memory     │
         │               │  │              │  │              │
         │  This session │  │  Entities &  │  │  Past task   │
         │  messages +   │  │  facts about │  │  outcomes &  │
         │  running      │  │  user, world │  │  lessons     │
         │  summary      │  │              │  │  learned     │
         │               │  │  Key-value   │  │              │
         │  In-memory    │  │  or Graph DB │  │  Vector DB   │
         └──────────────┘  └──────────────┘  └──────────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │   Memory Manager      │
                         │                        │
                         │  - Decides what to     │
                         │    store vs discard    │
                         │  - Retrieves relevant  │
                         │    memories per query  │
                         │  - Handles conflicts   │
                         │    and updates         │
                         │  - Manages decay and   │
                         │    forgetting          │
                         └──────────────────────┘
```

## Wiring it together

```python
class AgentMemoryManager:
    def __init__(self):
        self.conversation = ConversationSummaryBuffer(llm=cheap_llm)
        self.entities = EntityStore(db=postgres)
        self.episodes = VectorStore(collection="episodes")
        self.preferences = KeyValueStore(db=redis)

    async def build_context(self, current_input: str) -> str:
        """Assemble working memory from all sources."""
        relevant_entities = await self.entities.search(current_input)
        similar_episodes = await self.episodes.similarity_search(current_input, k=3)
        user_prefs = await self.preferences.get_all()
        conv_summary = self.conversation.get_summary()

        return MEMORY_TEMPLATE.format(
            preferences=user_prefs,
            entities=relevant_entities,
            past_episodes=similar_episodes,
            conversation_summary=conv_summary,
        )

    async def store(self, interaction: Interaction):
        """After each turn, update all memory systems."""
        await self.conversation.add_messages(interaction.messages)
        await self.entities.extract_and_store(interaction)
        if interaction.is_notable:
            await self.episodes.store(interaction.to_episode())
```

**Design principle:** Each memory type answers a different question — "What did we just discuss?", "What do I know about X?", "What happened last time I tried this?"
