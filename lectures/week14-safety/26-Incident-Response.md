---
title: Incident Response for AI Safety Failures
section: Production Safety
layout: flow
---

# Incident Response: When Safety Fails

## Step 1: Detect

Identify that a safety failure has occurred:

- Monitoring alert fires (guardrail bypass, anomaly detection)
- User report of harmful output
- External disclosure (security researcher, social media)
- Automated red-team finds new bypass in production model

**Key question:** Is this a single incident or a systematic vulnerability?

## Step 2: Contain

Stop the bleeding immediately:

- **Rate limit** the affected user or IP range
- **Enable stricter guardrails** (switch from "fix" to "block" mode)
- **Disable affected tools** if agent hijacking is involved
- **Activate circuit breaker** -- fall back to a safer, more restricted model
- **Preserve evidence** -- snapshot logs, full conversation transcripts

```python
# Example: Emergency circuit breaker
async def emergency_mode(config):
    config.guardrail_mode = "strict"
    config.tools_enabled = False
    config.fallback_model = "safe-model-v1"
    config.max_response_tokens = 200
    await notify_oncall("Safety incident -- emergency mode activated")
```

## Step 3: Investigate

Understand the root cause and scope:

- What was the exact attack vector?
- How many users were affected?
- What data was exposed or what actions were taken?
- Which guardrail layer failed and why?
- Is this a known attack class or a novel technique?
- Can it be reproduced reliably?

## Step 4: Remediate

Fix the vulnerability and verify the fix:

- Add the attack pattern to input filters
- Update guardrail rules or retrain safety classifiers
- Harden system prompts against the specific technique
- Add the attack to your automated red-team test suite
- Re-run full regression tests to confirm no new issues

## Step 5: Review and Improve

Turn the incident into lasting improvement:

- Write a **post-mortem** documenting timeline, impact, root cause, and fix
- Update your **threat model** with the new attack class
- Review and improve **monitoring** to catch similar attacks earlier
- Share lessons learned (internally or with the community, as appropriate)
- Schedule a **follow-up red-team session** focused on the attack class
