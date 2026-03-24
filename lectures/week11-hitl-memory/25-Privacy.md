---
title: "Privacy Considerations"
section: Implementation
layout: standard
---

# Privacy Considerations

What to remember, what to forget, and giving users control.

## The memory privacy paradox
- More memory = better personalization = better user experience
- More memory = more data stored = more privacy risk
- Users want both: "Remember my preferences" AND "Don't be creepy"

## What to remember (opt-in by default):
- Explicit preferences stated by user ("I prefer Python")
- Workflow configurations and tool settings
- Task-relevant facts shared in context
- Past decisions and their outcomes

## What NOT to remember:
- Sensitive personal data (SSN, health info, financial details)
- Temporary emotional states or venting
- Information shared about third parties without their consent
- Anything the user asks you to forget

## User control patterns

```python
class MemoryPrivacyManager:
    async def forget(self, user_id: str, query: str):
        """Delete specific memories matching query."""
        memories = await self.store.search(query, user_id=user_id)
        for mem in memories:
            await self.store.delete(mem.id)
        return f"Deleted {len(memories)} memories matching '{query}'"

    async def export_memories(self, user_id: str) -> dict:
        """GDPR-style: export all stored memories for a user."""
        return await self.store.get_all(user_id=user_id)

    async def clear_all(self, user_id: str):
        """Nuclear option: delete everything for a user."""
        await self.store.delete_all(user_id=user_id)

    async def set_retention_policy(self, user_id: str, policy: RetentionPolicy):
        """User controls how long memories persist."""
        # e.g., auto-delete after 30 days, keep preferences only
        await self.policies.set(user_id, policy)
```

## Design principles for memory privacy:

1. **Transparency** — Tell users what you remember and why
2. **Control** — Users can view, edit, and delete their memories
3. **Minimization** — Only store what is needed for the task
4. **Retention limits** — Auto-expire memories that are no longer relevant
5. **Audit trail** — Log when memories are created, accessed, and deleted
6. **Scope boundaries** — Work memories stay in work context, personal stays personal

## Regulatory requirements:
- **GDPR (EU)** — Right to erasure, data portability, consent requirements
- **CCPA (California)** — Right to know what is collected, right to delete
- **HIPAA (Healthcare)** — Special handling for health-related information
- Best practice: Build for the strictest regulation you might face
