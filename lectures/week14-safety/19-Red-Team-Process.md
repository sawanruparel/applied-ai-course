---
title: The Red-Teaming Process
section: Red-Teaming
layout: flow
---

# The Red-Teaming Process

## Step 1: Define Scope

Determine what you are testing and what success looks like:

- Which model/system? (chatbot, agent, RAG pipeline)
- Which safety categories? (OWASP LLM Top 10, custom policy)
- What are the threat actors? (casual users, skilled adversaries, insiders)
- What are the high-risk capabilities? (tool use, data access, code execution)

## Step 2: Plan Attacks

Design a structured attack plan covering multiple vectors:

- **Jailbreaks** -- Bypass content filters and safety training
- **Prompt injection** -- Direct and indirect manipulation
- **Data extraction** -- System prompt leaks, training data extraction
- **Agent abuse** -- Unauthorized tool use, privilege escalation
- **Bias and fairness** -- Discriminatory outputs across demographics
- **Edge cases** -- Unusual inputs, multilingual attacks, encoding tricks

## Step 3: Execute Attacks

Run the attacks systematically, documenting everything:

```
For each attack vector:
  1. Craft attack prompt(s)
  2. Submit to system under test
  3. Record full input/output pair
  4. Rate severity: Critical / High / Medium / Low / Info
  5. Determine reproducibility
  6. Note any partial successes (near-misses)
```

## Step 4: Document Findings

Create a structured report for each vulnerability:

- **Title** -- Clear description of the vulnerability
- **Category** -- OWASP LLM category or custom taxonomy
- **Severity** -- Impact x Exploitability
- **Reproduction steps** -- Exact prompts and conditions
- **Evidence** -- Screenshots, logs, full transcripts
- **Recommended fix** -- Specific mitigation steps

## Step 5: Fix and Retest

Implement mitigations and verify they work:

- Apply fixes (guardrails, prompt hardening, fine-tuning)
- Re-run the exact same attacks to confirm resolution
- Run regression tests to ensure fixes don't break normal functionality
- Add successful attacks to your automated test suite
- Schedule periodic re-testing as models and attacks evolve

## Sources

- [OWASP Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
