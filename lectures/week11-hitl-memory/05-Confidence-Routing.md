---
title: "Confidence-Based Routing"
section: Human-in-the-Loop Patterns
layout: diagram
---

# Confidence-Based Routing

Auto-execute when confident. Escalate when uncertain.

```
                    ┌──────────────────┐
                    │   Agent Output   │
                    │   + Confidence   │
                    │     Score        │
                    └────────┬─────────┘
                             │
              ┌──────────────┼──────────────┐
              │              │              │
         conf > 0.9     0.5-0.9        conf < 0.5
              │              │              │
              ▼              ▼              ▼
      ┌──────────────┐ ┌──────────┐ ┌──────────────┐
      │ AUTO-EXECUTE │ │ SUGGEST  │ │  ESCALATE    │
      │              │ │ + CONFIRM│ │  to Human    │
      │ Log action   │ │          │ │              │
      │ for audit    │ │ "I think │ │ "I'm not     │
      │              │ │ X. OK?"  │ │ sure. Help?" │
      └──────────────┘ └──────────┘ └──────────────┘
```

### How to get confidence scores:

```python
from pydantic import BaseModel, Field

class AgentDecision(BaseModel):
    action: str
    reasoning: str
    confidence: float = Field(
        description="0.0-1.0 confidence in this action being correct"
    )
    uncertainty_reason: str | None = Field(
        description="Why confidence is below 1.0, if applicable"
    )

def route_by_confidence(decision: AgentDecision):
    if decision.confidence >= 0.9:
        return execute_automatically(decision)
    elif decision.confidence >= 0.5:
        return suggest_and_confirm(decision)
    else:
        return escalate_to_human(decision)
```

### Calibration matters
- LLMs are often overconfident — calibrate thresholds empirically
- Use structured output to force explicit confidence reasoning
- Track accuracy at each confidence level to tune thresholds over time
