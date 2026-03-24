---
title: Key Takeaways
section: Production Safety
layout: cards
---

# Key Takeaways

## Prompt Injection Is Unsolved

There is no complete fix for prompt injection. It is an inherent property of how LLMs process language. **Defense in depth** -- layering multiple imperfect defenses -- is the only reliable strategy. Treat every user input and retrieved document as untrusted data.

## Guardrails Are Mandatory, Not Optional

Every production LLM application needs automated input and output filtering. Use tools like LlamaGuard, NeMo Guardrails, and Guardrails AI. Do not rely solely on model alignment -- it is a probabilistic defense that can be bypassed.

## Agents Need Least Privilege

AI agents with tool access are high-value targets for hijacking. Apply the principle of least privilege: restrict tool access, require confirmation for sensitive actions, and validate every tool call. The more powerful the agent, the more critical the safety constraints.

## Red-Team Continuously

Red-teaming is not a one-time event. New attacks emerge constantly, and model updates can introduce new vulnerabilities. Combine human creativity with automated tools (Garak, PyRIT) for comprehensive coverage. Build a culture where finding failures is celebrated.

## Monitor, Detect, Respond

Production safety requires real-time monitoring, anomaly detection, and a practiced incident response plan. Log everything, set up alerts for anomalous patterns, and have a circuit breaker ready. The goal is not zero incidents -- it is fast detection and response.

## Safety Is a Team Sport

Effective AI safety requires collaboration across engineering, security, product, legal, and domain experts. No single person or tool can cover all the angles. Build safety into your development process, not as an afterthought.

## Sources

- [OWASP Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
- [Llama Guard (Inan et al., 2023)](https://arxiv.org/abs/2312.06674)
- [NeMo Guardrails -- NVIDIA](https://github.com/NVIDIA/NeMo-Guardrails)
- [Guardrails AI](https://github.com/guardrails-ai/guardrails)
- [Garak -- NVIDIA](https://github.com/NVIDIA/garak)
- [PyRIT -- Microsoft](https://github.com/Azure/PyRIT)
