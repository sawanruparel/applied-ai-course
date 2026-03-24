---
title: "Error Recovery in Multi-Agent Systems"
section: Architecture Deep Dive
layout: standard
---

# Error Recovery: What Happens When One Agent Fails?

## Types of Agent Failures
1. **Tool failure** — an API call times out, a file doesn't exist, a command returns an error
2. **Quality failure** — the agent produces output that doesn't meet requirements
3. **Loop failure** — the agent gets stuck repeating the same action
4. **Budget failure** — the agent exhausts its token or iteration limit

## Strategy 1: Retry with Feedback
- Catch the error, include it in the agent's next prompt
- "Your previous attempt failed with: [error]. Try a different approach."
- Set a max retry count (2-3 retries) to avoid infinite loops
- Works well for transient tool failures

## Strategy 2: Fallback Agent
- If the primary agent fails, route to a backup agent with different instructions
- Example: if the code-generation agent produces code that fails tests, hand off to a "fix-it" agent that specializes in debugging
- The fallback agent receives the original task + the error context

## Strategy 3: Supervisor Rerouting
- The supervisor detects the failure and reassigns the task
- May choose a different worker, simplify the task, or break it into smaller pieces
- Requires the supervisor to understand what went wrong (structured error reports help)

## Strategy 4: Graceful Degradation
- Return a partial result with a clear indication of what's missing
- "Research completed for 3 of 5 topics. Topics 4 and 5 failed due to API rate limits."
- Let the human decide whether to retry or accept the partial result

## Implementation Checklist
- Every agent should return structured status: `{success: bool, result: ..., error: ...}`
- Log all failures with context for debugging
- Set timeouts on every agent invocation — never wait forever
- Design the orchestrator to handle failures, not just the happy path
