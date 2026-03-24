---
title: "System Prompt Engineering"
section: Advanced Patterns
layout: standard
---

# System Prompt Engineering: Persona, Constraints, Output Format

The system prompt is the most powerful control surface. It sets the behavioral contract for the entire conversation.

## Anatomy of an Effective System Prompt

```
You are a senior security analyst at a Fortune 500 company.    ← PERSONA

Your task is to review code diffs for security vulnerabilities. ← TASK

Rules:                                                          ← CONSTRAINTS
- Only flag issues with CWE identifiers
- Severity must be: critical, high, medium, low
- Do not suggest refactors unrelated to security
- If no vulnerabilities found, return {"issues": []}

Output format:                                                  ← FORMAT
{
  "issues": [
    {
      "cwe": "CWE-89",
      "severity": "critical",
      "line": 42,
      "description": "SQL injection via unsanitized user input",
      "fix": "Use parameterized query"
    }
  ]
}
```

## Design Principles

- **Persona** anchors the model's behavior and domain vocabulary
- **Explicit constraints** reduce hallucination and scope creep
- **Output format** with an example makes parsing deterministic
- **Negative constraints** ("do not...") are as important as positive ones
- **Edge case handling** (what to do when input is empty, ambiguous, or out of scope)

## Common Pitfalls

- Overly long system prompts that the model ignores toward the end
- Contradictory instructions (e.g., "be concise" and "explain thoroughly")
- Missing edge case instructions — the model improvises when unguided
