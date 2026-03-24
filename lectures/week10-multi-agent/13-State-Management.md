---
title: "State Management"
section: Architecture Deep Dive
layout: standard
---

# State Management: Sharing Context Without Losing Coherence

## The Core Problem
- Agent A discovers important context that Agent B needs later
- But Agent B has a fresh context window — it doesn't know what Agent A learned
- Passing the entire conversation history bloats context and confuses agents

## Strategy 1: Structured State Object
- Define a typed schema for shared state (e.g., a Pydantic model)
- Each agent reads relevant fields and writes back its outputs
- The state object is the single source of truth
```python
class PipelineState(BaseModel):
    query: str
    research_notes: list[str] = []
    draft: str = ""
    review_feedback: str = ""
    final_output: str = ""
    status: Literal["researching", "drafting", "reviewing", "done"]
```

## Strategy 2: Summary Handoffs
- When Agent A finishes, it produces a **structured summary** of its work
- Agent B receives only the summary, not Agent A's full conversation
- Keeps each agent's context small and focused
- Trade-off: some nuance is lost in summarization

## Strategy 3: Artifact Store
- Agents write intermediate outputs to a shared file system or database
- Other agents read artifacts by reference (file path, document ID)
- Works well for large outputs (code files, datasets, reports)
- Natural for code generation pipelines where agents produce actual files

## Anti-Patterns to Avoid
- **Dumping full conversation history** into the next agent's context — causes confusion
- **Relying on implicit state** ("the last agent probably did X") — be explicit
- **Mutable state without versioning** — you can't debug if you don't know what changed when
- **No state validation** — agents should validate that required fields exist before proceeding
