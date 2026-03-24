---
title: "When Small Models Win"
section: Framing
layout: standard
---

# When Small Models Win

## Cost Efficiency
- High-volume, low-complexity tasks (classification, extraction, reformatting)
- Batch processing millions of documents where per-token cost dominates
- Startups and projects with tight budgets

## Latency
- Small models respond in 10–50ms vs 500ms–5s for frontier models
- Real-time applications: autocomplete, inline suggestions, chat
- Time-to-first-token matters for user experience

## Privacy and Compliance
- On-premise deployment keeps data off third-party servers
- HIPAA, GDPR, SOC2 compliance without data processing agreements
- Air-gapped environments in defense, finance, healthcare

## Edge and On-Device
- Mobile apps, IoT devices, embedded systems
- Offline capability — no network dependency
- Browser-based inference with WebGPU/WebLLM

## Specialized Tasks
- Fine-tuned small models often beat general-purpose large models on narrow tasks
- Structured output (JSON, SQL, code) with constrained generation
- Domain-specific extraction where the task is well-defined
