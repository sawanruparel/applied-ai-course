---
title: "The Debate Pattern"
section: Real-World Implementations
layout: standard
---

# The Debate Pattern

Agents argue different positions to improve output quality through structured disagreement.

## How It Works
1. **Agent A** (Advocate) presents a position or solution
2. **Agent B** (Devil's Advocate) argues against it, finding weaknesses
3. **Agent A** responds to criticisms and strengthens its argument
4. After N rounds, a **Judge agent** synthesizes the strongest points from both sides

## Why Debate Improves Quality
- Forces exploration of alternative perspectives that a single agent would miss
- Surfaces hidden assumptions — the devil's advocate questions things the advocate takes for granted
- Reduces overconfidence — the advocate must defend its claims with evidence
- The final synthesis is more nuanced than either position alone

## Practical Implementation
```python
def debate(question, rounds=3):
    advocate_history = []
    critic_history = []

    for round in range(rounds):
        # Advocate presents/defends position
        advocate_msg = advocate_agent.run(
            question=question,
            criticism=critic_history[-1] if critic_history else None
        )
        advocate_history.append(advocate_msg)

        # Critic challenges the position
        critic_msg = critic_agent.run(
            position=advocate_msg,
            round=round
        )
        critic_history.append(critic_msg)

    # Judge synthesizes
    return judge_agent.run(
        question=question,
        debate_history=list(zip(advocate_history, critic_history))
    )
```

## Good Use Cases
- **Architecture decisions** — "Should we use microservices or a monolith?"
- **Risk assessment** — one agent identifies risks, the other argues they're manageable
- **Content quality** — advocate writes, critic finds logical gaps
- **Code design** — one proposes an approach, the other stress-tests edge cases

## When to Skip It
- Simple factual questions (no room for debate)
- Time-critical tasks (debate adds 3-5x latency)
- Tasks where there's a clear correct answer (use validation instead)
