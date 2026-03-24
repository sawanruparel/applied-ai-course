---
title: "Review Queues"
section: Human-in-the-Loop Patterns
layout: standard
---

# Review Queues

Batch human review for non-urgent decisions. Not everything needs real-time approval.

## The Pattern
- Agent processes items and flags those needing review
- Items queue up in a review dashboard
- Humans review in batches at convenient times
- Agent continues with non-blocked work

## When to use review queues:
- **Content moderation** — Flag borderline posts for human review
- **Data processing** — Queue ambiguous records for manual classification
- **Email drafts** — Agent writes, human approves batch before sending
- **Report generation** — Agent compiles, human validates before distribution

## Implementation considerations:

```python
class ReviewQueue:
    def submit(self, item: ReviewItem, priority: str = "normal"):
        """Add item to queue. Agent continues other work."""
        self.queue.push(item, priority=priority)

    def process_batch(self, reviewer_id: str, batch_size: int = 20):
        """Human reviews a batch of items."""
        items = self.queue.pop(batch_size)
        return ReviewBatch(items=items, reviewer=reviewer_id)

    def apply_decisions(self, batch: ReviewBatch):
        """Apply human decisions back to the agent workflow."""
        for item, decision in batch.decisions:
            if decision.approved:
                self.agent.execute(item.pending_action)
            else:
                self.agent.handle_rejection(item, decision.feedback)
```

## Queue design tips:
- **Priority levels** — Urgent items surface first
- **SLA tracking** — Alert if items sit too long
- **Auto-escalation** — If queue grows too large, increase automation thresholds
- **Feedback capture** — Record why items were approved/rejected for training
