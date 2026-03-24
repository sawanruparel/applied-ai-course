---
title: "Prompt Version Control"
section: Reliability Engineering
layout: standard
---

# Prompt Version Control and Management in Production

Prompts are configuration that changes behavior. Treat them with the same discipline as infrastructure-as-code.

## Storage Strategies

```
# Option 1: Prompts in code (simple, version-controlled)
prompts/
  extraction/
    v1.0.0.txt
    v1.1.0.txt
    config.yaml        # model, temperature, max_tokens
    eval_cases.jsonl    # golden test set

# Option 2: Prompt management platform
# (Humanloop, PromptLayer, Langfuse, Braintrust)
# - GUI for non-engineers to edit prompts
# - Built-in eval tracking and A/B testing
# - Deployment with rollback
```

## Versioning Schema

```yaml
# prompts/extraction/config.yaml
name: invoice_extraction
version: 1.2.0          # semver: major.minor.patch
model: claude-sonnet-4   # pin the model version
temperature: 0.0
max_tokens: 500
prompt_file: v1.2.0.txt
eval_threshold:
  accuracy: 0.95
  validation_pass_rate: 0.99
changelog:
  - "1.2.0: Added handling for multi-currency invoices"
  - "1.1.0: Fixed edge case with missing line items"
  - "1.0.0: Initial production release"
```

## Deployment Checklist

1. Run eval suite against golden test set — must pass threshold
2. Run eval against adversarial test set — check for regressions
3. Deploy to shadow/canary — compare outputs against current production prompt
4. Gradual rollout (5% → 25% → 100%) with monitoring
5. Keep previous version as instant rollback target

## Anti-Patterns

- Editing prompts directly in production without testing
- Not pinning model versions — a model update can silently break prompts
- No eval suite — "it seems to work" is not a deployment criterion
- Monolithic prompts that resist incremental changes
