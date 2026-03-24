---
title: "Feedback Loops"
section: Human-in-the-Loop Patterns
layout: diagram
---

# Feedback Loops

Humans correct agent outputs. Agent improves from corrections.

```
     ┌─────────────────────────────────────────────────────┐
     │                  FEEDBACK LOOP                       │
     │                                                      │
     │  ┌─────────┐    ┌──────────┐    ┌───────────────┐   │
     │  │  Agent   │───▶│  Output  │───▶│  Human Review │   │
     │  │  Action  │    │          │    │               │   │
     │  └─────────┘    └──────────┘    └───────┬───────┘   │
     │       ▲                                  │           │
     │       │                          ┌───────┴───────┐   │
     │       │                          │               │   │
     │       │                       CORRECT         ACCEPT │
     │       │                          │               │   │
     │       │                          ▼               │   │
     │  ┌────┴──────┐    ┌──────────────────┐          │   │
     │  │  Update   │◀───│  Correction Data │          │   │
     │  │  - Prompts│    │  - What was wrong│          │   │
     │  │  - Rules  │    │  - Correct answer│          │   │
     │  │  - Memory │    │  - Why it matters│          │   │
     │  └───────────┘    └──────────────────┘          │   │
     │                                                  │   │
     └──────────────────────────────────────────────────┘   │
                                                            │
```

## Types of feedback:

### 1. Immediate correction
```python
# Human edits agent's draft email
correction = HumanCorrection(
    original=agent_draft,
    corrected=human_edited_version,
    explanation="Tone was too formal for this client"
)
agent.memory.store_correction(correction)
```

### 2. Rating-based feedback
```python
# Thumbs up/down on agent responses
feedback = UserFeedback(response_id="abc", rating="negative",
                        reason="Missed the key requirement")
```

### 3. Preference learning
```python
# Track which suggestions users accept vs reject
agent.preference_model.update(
    accepted_actions=accepted,
    rejected_actions=rejected
)
```

**Virtuous cycle:** Better outputs lead to more trust, which leads to more autonomy, which generates more feedback data.
