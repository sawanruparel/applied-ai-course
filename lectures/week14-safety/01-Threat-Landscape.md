---
title: The AI Threat Landscape
section: Framing
layout: standard
---

# The AI Threat Landscape

## What Can Go Wrong with Deployed LLM Systems

- **Prompt injection** -- Attackers manipulate model behavior through crafted inputs
- **Data exfiltration** -- Sensitive training data or system prompts leaked through clever queries
- **Unauthorized actions** -- Agents tricked into executing harmful tool calls
- **Harmful content generation** -- Bypassing safety filters to produce toxic, illegal, or dangerous output
- **Hallucination exploitation** -- Adversaries inducing confident but false outputs for fraud or misinformation
- **Supply chain attacks** -- Poisoned models, malicious plugins, compromised tool integrations

## The Stakes Are Real

| Incident | Impact |
|----------|--------|
| Bing Chat prompt leak (2023) | Full system prompt exposed via indirect injection |
| Chevrolet chatbot exploit (2023) | Bot tricked into offering $1 car purchase |
| Air Canada chatbot ruling (2024) | Airline held liable for chatbot's fabricated refund policy |
| MathGPT injection (2024) | Agent hijacked to execute arbitrary code via math problems |

> Every LLM-powered application is an attack surface. The question is not *if* but *when*.

## Sources

- [OWASP Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
- [OWASP Top 10 for Agentic Applications for 2026 (OWASP GenAI)](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/)
- [Not What You've Signed Up For: Indirect Prompt Injection (Greshake et al., 2023)](https://arxiv.org/abs/2302.12173)
