---
title: "UX Patterns for HITL"
section: Human-in-the-Loop Patterns
layout: cards
---

# UX Patterns for Human-in-the-Loop

How humans interact with agent pause points in practice.

## Inline Approval

The simplest pattern: agent proposes, user confirms in chat.

- "I'd like to send this email to Alice. Proceed? [Yes / No / Edit]"
- Works well for single actions
- Low friction, stays in conversation flow
- Risk: approval fatigue if too frequent

## Diff Review

Show before/after for modifications. Borrowed from code review.

- Side-by-side or unified diff of proposed changes
- Highlight additions, deletions, modifications
- Best for: file edits, database updates, config changes
- Example: Agent shows PR-style diff before applying code changes

## Suggested Actions

Present multiple options with reasoning. User picks.

- "I found 3 approaches. Option A is fastest, Option B is most thorough..."
- Preserves human agency and decision-making
- Agent provides analysis, human provides judgment
- Works well when there's no single "right" answer

## Batch Dashboard

For high-volume review, provide a dedicated UI.

- Table view of pending items with accept/reject buttons
- Bulk approve/reject with filters
- Priority sorting and SLA indicators
- Best for: content moderation, data processing, email triage
