---
title: "Designing Individual Agents"
section: Architecture Deep Dive
layout: standard
---

# Designing Individual Agents

Every agent in a multi-agent system needs four things defined clearly.

## 1. Role — Who Is This Agent?
- A one-sentence identity: "You are a senior code reviewer focused on security vulnerabilities"
- Defines the agent's perspective, expertise, and voice
- Constrains the agent to stay in its lane — prevents role drift

## 2. Tools — What Can This Agent Do?
- Give each agent **only** the tools it needs (principle of least privilege)
- A researcher gets `web_search` and `read_url`, not `file_write`
- A coder gets `file_edit` and `run_command`, not `send_email`
- Fewer tools = fewer distractions = better tool selection

## 3. Instructions — How Should It Behave?
- Specific output format expectations (JSON, markdown, structured report)
- Quality criteria: "Flag any function longer than 50 lines"
- Boundary rules: "If you cannot complete the task, return a structured error, do not guess"

## 4. Constraints — What Are the Guardrails?
- Max iterations or token budget per agent
- Forbidden actions (e.g., "never execute DELETE queries")
- Escalation rules: "If confidence is below 70%, hand off to a human"

## The Agent Card Pattern
Define each agent as a config object or YAML file — this makes agents composable, testable, and version-controlled:

```yaml
name: security_reviewer
role: "Senior security engineer reviewing code for vulnerabilities"
model: claude-sonnet-4-20250514
tools: [read_file, grep_codebase, static_analysis]
max_tokens: 4096
instructions: |
  Review the provided code for OWASP Top 10 vulnerabilities.
  Output a structured JSON report with severity ratings.
constraints:
  max_iterations: 3
  forbidden_actions: [file_write, execute_code]
```
