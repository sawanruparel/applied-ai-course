---
title: Safety Monitoring in Production
section: Production Safety
layout: standard
---

# Safety Monitoring in Production

## Detecting Attacks and Failures in Real Time

Guardrails prevent known attacks. Monitoring catches **unknown attacks and emergent failures**.

## What to Monitor

### Safety Signals
- **Guardrail trigger rate** -- Spike = possible attack campaign
- **Refusal rate** -- Sudden increase may indicate jailbreak attempts
- **Output toxicity scores** -- Track distribution over time
- **Tool call patterns** -- Unusual tools, frequencies, or argument patterns
- **Response similarity** -- Repeated identical responses may indicate prompt leaking

### Operational Signals
- **Latency per request** -- Injection attempts often produce longer responses
- **Token usage anomalies** -- Attacks may consume excessive tokens
- **Error rates** -- Failed guardrail checks, malformed outputs
- **User session patterns** -- Rapid-fire requests, unusual conversation flows

## Anomaly Detection Pipeline

```python
from dataclasses import dataclass
from datetime import datetime

@dataclass
class SafetyEvent:
    timestamp: datetime
    user_id: str
    event_type: str       # "injection_detected", "toxicity_flagged", etc.
    severity: str         # "critical", "high", "medium", "low"
    details: dict

async def monitor_request(request, response, safety_checks):
    events = []

    # Track guardrail triggers
    for check in safety_checks:
        if check.triggered:
            events.append(SafetyEvent(
                timestamp=datetime.utcnow(),
                user_id=request.user_id,
                event_type=check.name,
                severity=check.severity,
                details={"input": request.text, "verdict": check.result}
            ))

    # Check for anomalous patterns
    user_history = await get_recent_events(request.user_id, minutes=10)
    if len(user_history) > THRESHOLD:
        await trigger_alert("rapid_fire_attack", request.user_id)

    await store_events(events)
```

## Alerting Rules

| Condition | Action |
|-----------|--------|
| 5+ injection attempts from same user in 10 min | Rate limit user, alert security |
| Toxicity score > 0.9 on output | Block response, log for review |
| System prompt detected in output | Immediate block, critical alert |
| Unusual tool call pattern | Flag for human review |
| Guardrail trigger rate 3x baseline | Page on-call engineer |
