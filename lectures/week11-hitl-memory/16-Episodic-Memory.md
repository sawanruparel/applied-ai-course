---
title: "Episodic Memory"
section: Agent Memory
layout: standard
---

# Episodic Memory

Remember past interactions and outcomes. Learn from experience.

## What is episodic memory?
Records of specific past events and their outcomes — not just facts, but *stories* the agent can learn from.

## Episodic memory structure

```python
class Episode(BaseModel):
    episode_id: str
    timestamp: datetime
    task_description: str       # What was the agent trying to do?
    actions_taken: list[str]    # What steps did it take?
    outcome: str                # What happened?
    success: bool               # Did it work?
    user_feedback: str | None   # What did the human say?
    lessons_learned: str        # What should be remembered for next time?

# Example episode
Episode(
    task_description="Deploy hotfix to production",
    actions_taken=[
        "Ran tests locally — passed",
        "Created PR and requested review",
        "Merged without waiting for CI — MISTAKE",
        "CI failed on staging after merge"
    ],
    outcome="Rollback required. 15 minutes of downtime.",
    success=False,
    user_feedback="Always wait for CI before merging hotfixes",
    lessons_learned="Even for urgent hotfixes, wait for CI pipeline. "
                    "The 10 min wait is cheaper than a rollback."
)
```

## Using episodes for in-context learning

```python
async def retrieve_relevant_episodes(current_task: str, k: int = 3):
    """Find past episodes similar to current task."""
    episodes = await vector_store.similarity_search(
        query=current_task, k=k, filter={"collection": "episodes"}
    )
    return format_episodes_for_context(episodes)

# Inject into system prompt
system_prompt = f"""You are a deployment assistant.
Here are relevant past experiences:
{retrieved_episodes}
Learn from past mistakes and successes."""
```

## Episodic vs. semantic memory
- **Episodic:** "Last Tuesday, the deploy failed because we skipped CI"
- **Semantic:** "Always wait for CI before merging"
- Both are valuable — episodes provide context, semantic provides rules
