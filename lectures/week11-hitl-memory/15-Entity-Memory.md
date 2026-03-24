---
title: "Entity Memory"
section: Agent Memory
layout: standard
---

# Entity Memory

Track structured facts about people, projects, and concepts across conversations.

## What is entity memory?
A knowledge base of entities the agent has learned about, updated as new information emerges.

## Entity extraction pattern

```python
from pydantic import BaseModel

class EntityFact(BaseModel):
    entity_name: str          # "Alice Chen"
    entity_type: str          # "person", "project", "concept"
    attribute: str            # "role"
    value: str                # "Engineering Manager"
    source_conversation: str  # Thread ID where this was learned
    confidence: float         # How confident we are
    last_updated: datetime

# Extract entities from conversation
ENTITY_PROMPT = """Analyze this message and extract any facts about
people, projects, or concepts mentioned.

Message: {message}
Known entities: {existing_entities}

Return new or updated facts as structured data."""

async def extract_entities(message: str, existing: list[EntityFact]):
    response = await llm.ainvoke(
        ENTITY_PROMPT.format(message=message, existing_entities=existing)
    )
    return parse_entity_facts(response)
```

## Example entity store

| Entity | Type | Attributes |
|--------|------|-----------|
| Alice Chen | person | role: Eng Manager, team: Platform, prefers: async comms |
| Project Atlas | project | status: in-progress, deadline: Q2, stack: Python/React |
| GDPR Compliance | concept | applies_to: EU users, requires: data deletion endpoint |

## Storage options
- **Key-value store** — Simple, fast lookup by entity name
- **Graph database** — Rich relationships between entities (Neo4j)
- **Structured JSON** — Entity per document, easy to version
- **SQL** — Entity table with attribute columns, queryable

**Key challenge:** Entity resolution — "Alice", "Alice Chen", and "the engineering manager" may all be the same entity.
