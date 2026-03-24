---
title: Production Safety Architecture
section: Production Safety
layout: diagram
---

# Production Safety Architecture

## Complete Safety Pipeline from Input to Output

```
  +================================================================+
  |                 PRODUCTION SAFETY ARCHITECTURE                   |
  +================================================================+
  |                                                                  |
  |  USER INPUT                                                      |
  |     |                                                            |
  |     v                                                            |
  |  [LAYER 1: EDGE PROTECTION]                                     |
  |  +----------------------------------------------------------+   |
  |  | - Rate limiting (per-user, per-IP)                        |   |
  |  | - Input length limits                                     |   |
  |  | - Authentication & authorization                          |   |
  |  | - WAF rules for known attack patterns                     |   |
  |  +----------------------------------------------------------+   |
  |     |                                                            |
  |     v                                                            |
  |  [LAYER 2: INPUT CLASSIFICATION]                                 |
  |  +----------------------------------------------------------+   |
  |  | - Injection detection (classifier model)                  |   |
  |  | - Topic classification (on-topic / off-topic)             |   |
  |  | - PII detection & redaction                               |   |
  |  | - Toxicity screening                                      |   |
  |  +----------------------------------------------------------+   |
  |     |                                                            |
  |     v                                                            |
  |  [LAYER 3: PROMPT CONSTRUCTION]                                  |
  |  +----------------------------------------------------------+   |
  |  | - Hardened system prompt (sandwich defense)                |   |
  |  | - Data/instruction boundary markers                       |   |
  |  | - Context window management                               |   |
  |  +----------------------------------------------------------+   |
  |     |                                                            |
  |     v                                                            |
  |  [LAYER 4: LLM INFERENCE]                                       |
  |  +----------------------------------------------------------+   |
  |  | - Aligned model (RLHF / Constitutional AI)                |   |
  |  | - Temperature & sampling controls                         |   |
  |  | - Token budget limits                                     |   |
  |  +----------------------------------------------------------+   |
  |     |                                                            |
  |     v                                                            |
  |  [LAYER 5: OUTPUT VALIDATION]                                    |
  |  +----------------------------------------------------------+   |
  |  | - Safety classification (LlamaGuard)                      |   |
  |  | - PII scanning & redaction                                |   |
  |  | - Schema enforcement                                      |   |
  |  | - Exfiltration detection                                  |   |
  |  | - Tool call authorization & confirmation                  |   |
  |  +----------------------------------------------------------+   |
  |     |                                                            |
  |     v                                                            |
  |  [LAYER 6: MONITORING & LOGGING]                                 |
  |  +----------------------------------------------------------+   |
  |  | - Full audit trail (input, output, safety verdicts)       |   |
  |  | - Anomaly detection & alerting                            |   |
  |  | - Feedback collection for continuous improvement          |   |
  |  +----------------------------------------------------------+   |
  |     |                                                            |
  |     v                                                            |
  |  VALIDATED RESPONSE --> USER                                     |
  |                                                                  |
  +================================================================+
```

## Sources

- [Constitutional AI (Bai et al., 2022)](https://arxiv.org/abs/2212.08073)
- [RLHF / InstructGPT (Ouyang et al., 2022)](https://arxiv.org/abs/2203.02155)
- [Llama Guard (Inan et al., 2023)](https://arxiv.org/abs/2312.06674)
