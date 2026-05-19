---
title: "Memory Architecture"
section: Agent Memory
layout: diagram
---

# Memory Architecture

Combining multiple memory types in one agent system.

```mermaid
flowchart TB
    subgraph Core[Agent core]
      W["Working memory<br/>system prompt + retrieved + recent"]
    end
    Conv["Conversation memory<br/>session + summary"]
    Sem["Semantic memory<br/>entities, facts<br/>(KV or graph DB)"]
    Epi["Episodic memory<br/>past task outcomes<br/>(vector DB)"]
    MM["Memory manager<br/>store · retrieve · resolve · decay"]
    W --> MM
    MM --> Conv
    MM --> Sem
    MM --> Epi
    Conv --> W
    Sem --> W
    Epi --> W
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
