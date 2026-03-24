---
title: "State Machines for Agent Workflows"
section: Implementation
layout: diagram
---

# State Machines for Agent Workflows

Explicit state transitions with persistence for complex, multi-step agent tasks.

```
  ┌──────────┐   user submits   ┌──────────────┐  research done  ┌────────────┐
  │          │   request        │              │                 │            │
  │  INTAKE  │─────────────────▶│  RESEARCHING │────────────────▶│  DRAFTING  │
  │          │                  │              │                 │            │
  └──────────┘                  └──────┬───────┘                 └─────┬──────┘
                                       │                               │
                                  needs info                     draft ready
                                       │                               │
                                       ▼                               ▼
                                ┌──────────────┐                ┌────────────┐
                                │  WAITING ON  │                │  HUMAN     │
                                │  USER INPUT  │                │  REVIEW    │◀── HITL pause
                                └──────┬───────┘                └─────┬──────┘
                                       │                              │
                                  user responds              ┌───────┴───────┐
                                       │                     │               │
                                       ▼                  approved       rejected
                                ┌──────────────┐             │               │
                                │ RESEARCHING  │             ▼               ▼
                                │ (re-enter)   │       ┌──────────┐   ┌───────────┐
                                └──────────────┘       │ EXECUTING│   │ REVISING  │
                                                       └────┬─────┘   └─────┬─────┘
                                                            │               │
                                                            ▼               │
                                                       ┌─────────┐         │
                                                       │  DONE   │◀────────┘
                                                       └─────────┘
```

## Implementation with LangGraph

```python
from langgraph.graph import StateGraph, END
from typing import Literal

class WorkflowState(TypedDict):
    status: str
    request: str
    research: list[str]
    draft: str
    feedback: str | None

def route_after_review(state) -> Literal["executing", "revising"]:
    if state.get("approved"):
        return "executing"
    return "revising"

# Build the state machine
builder = StateGraph(WorkflowState)
builder.add_node("intake", intake_node)
builder.add_node("researching", research_node)
builder.add_node("drafting", draft_node)
builder.add_node("human_review", review_node)  # Interrupt here
builder.add_node("executing", execute_node)
builder.add_node("revising", revise_node)

builder.set_entry_point("intake")
builder.add_edge("intake", "researching")
builder.add_edge("researching", "drafting")
builder.add_edge("drafting", "human_review")
builder.add_conditional_edges("human_review", route_after_review)
builder.add_edge("executing", END)
builder.add_edge("revising", "drafting")  # Loop back

graph = builder.compile(
    checkpointer=checkpointer,
    interrupt_before=["human_review"]  # HITL pause point
)
```

**Why state machines?** They make agent behavior predictable, debuggable, and auditable. Every transition is explicit.

## Sources

- [LangGraph Library (LangChain)](https://langchain-ai.github.io/langgraph/)
- [LangGraph Interrupts Documentation (LangChain)](https://langchain-ai.github.io/langgraph/concepts/human_in_the_loop/)
