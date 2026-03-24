---
title: "Guardrails: Automated Safety Filtering"
section: Guardrails & Content Safety
layout: standard
---

# Guardrails: Automated Safety Filtering

## What Are Guardrails?

Guardrails are **automated input/output filters** that sit between users and the LLM, enforcing safety policies, compliance rules, and quality standards.

## Why Not Just Rely on Model Alignment?

- Model alignment (RLHF/DPO) is a **probabilistic** defense -- it reduces but never eliminates unsafe outputs
- Alignment can be bypassed through jailbreaks and adversarial prompts
- Business-specific policies (no competitor mentions, no off-topic responses) are not part of general alignment
- Compliance requirements (PII handling, regulated industries) need deterministic enforcement
- Guardrails provide **auditable, configurable, layered** protection

## Types of Guardrails

| Type | Purpose | Example |
|------|---------|---------|
| **Input rails** | Filter/transform user inputs | Block injection attempts, detect PII |
| **Output rails** | Filter/transform model outputs | Remove hallucinations, redact PII |
| **Topic rails** | Restrict conversation scope | Only discuss company products |
| **Retrieval rails** | Validate retrieved context | Check source relevance and safety |
| **Execution rails** | Gate tool/action execution | Require confirmation for purchases |

## The Guardrail Ecosystem (2025-2026)

- **LlamaGuard** -- Meta's safety classifier (model-based)
- **NeMo Guardrails** -- NVIDIA's programmable rails (Colang DSL)
- **Guardrails AI** -- Validator-based framework (Python)
- **Lakera Guard** -- API-based injection detection
- **Azure AI Content Safety** -- Microsoft's hosted filtering service

## Sources

- [Llama Guard (Inan et al., 2023)](https://arxiv.org/abs/2312.06674)
- [NeMo Guardrails -- NVIDIA](https://github.com/NVIDIA/NeMo-Guardrails)
- [Guardrails AI](https://github.com/guardrails-ai/guardrails)
- [Lakera Guard](https://www.lakera.ai/lakera-guard)
- [Azure AI Content Safety -- Microsoft](https://learn.microsoft.com/en-us/azure/ai-services/content-safety/)
