---
title: Key Papers and References
section: Production Safety
layout: standard
---

# Key Papers and References

## Foundational Papers

| Paper | Authors | Year | Key Contribution |
|-------|---------|------|------------------|
| [LlamaGuard: LLM-based Input-Output Safeguard](https://arxiv.org/abs/2312.06674) | Inan et al. (Meta) | 2023 | Safety classifier built on Llama, taxonomy of unsafe categories |
| [Not What You've Signed Up For: Compromising Real-World LLM-Integrated Applications with Indirect Prompt Injection](https://arxiv.org/abs/2302.12173) | Greshake et al. | 2023 | Defined indirect injection, demonstrated attacks on real systems |
| [Ignore This Title and HackAPrompt: Exposing Systemic Weaknesses of LLMs through a Global Scale Prompt Hacking Competition](https://arxiv.org/abs/2311.16119) | Schulhoff et al. | 2023 | Largest prompt injection competition, taxonomy of attack types |
| [Universal and Transferable Adversarial Attacks on Aligned Language Models](https://arxiv.org/abs/2307.15043) | Zou et al. | 2023 | Automated adversarial suffix generation, transferable across models |
| [Many-shot Jailbreaking](https://www.anthropic.com/research/many-shot-jailbreaking) | Anthropic | 2024 | Demonstrated that long contexts enable jailbreaking via many examples |

## Standards and Frameworks

| Resource | Organization | Description |
|----------|-------------|-------------|
| [OWASP Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/) | OWASP | Industry-standard vulnerability taxonomy for LLM apps |
| [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) | NIST | US government framework for AI risk assessment |
| [AI Safety Levels (ASL)](https://www.anthropic.com/news/anthropics-responsible-scaling-policy) | Anthropic | Tiered safety commitment framework |
| [Secure by Design for AI](https://www.cisa.gov/securebydesign) | CISA | Security guidance for AI system development |
| [EU AI Act](https://artificialintelligenceact.eu/) | European Union | Regulatory requirements for high-risk AI systems |

## Tools and Libraries

| Tool | Maintainer | Purpose |
|------|-----------|---------|
| [Garak](https://github.com/NVIDIA/garak) | NVIDIA | LLM vulnerability scanning |
| [PyRIT](https://github.com/Azure/PyRIT) | Microsoft | AI red-teaming orchestration |
| [NeMo Guardrails](https://github.com/NVIDIA/NeMo-Guardrails) | NVIDIA | Programmable conversation safety |
| [Guardrails AI](https://github.com/guardrails-ai/guardrails) | Guardrails AI | Output validation framework |
| [Presidio](https://github.com/microsoft/presidio) | Microsoft | PII detection and anonymization |
| [LangKit](https://github.com/whylabs/langkit) | WhyLabs | LLM telemetry and monitoring |

## Recommended Reading Order

1. [OWASP LLM Top 10](https://owasp.org/www-project-top-10-for-large-language-model-applications/) (understand the threat landscape)
2. [Greshake et al. on indirect injection](https://arxiv.org/abs/2302.12173) (understand the core vulnerability)
3. [LlamaGuard paper](https://arxiv.org/abs/2312.06674) (understand model-based safety classification)
4. [NIST AI RMF](https://www.nist.gov/itl/ai-risk-management-framework) (understand governance and compliance requirements)
