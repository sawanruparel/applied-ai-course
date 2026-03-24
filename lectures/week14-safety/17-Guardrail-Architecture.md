---
title: Guardrail Architecture
section: Guardrails & Content Safety
layout: diagram
---

# Guardrail Architecture

## Input Rail --> LLM --> Output Rail

```
  USER REQUEST
       |
       v
  +==========================================+
  |           INPUT RAILS                     |
  |  +------------------------------------+  |
  |  | 1. Injection detection (classifier)|  |
  |  | 2. PII detection & redaction       |  |
  |  | 3. Topic classification            |  |
  |  | 4. Rate limiting & abuse detection |  |
  |  | 5. Input length & format checks    |  |
  |  +------------------------------------+  |
  +==========================================+
       |                          |
       | PASS                     | BLOCK
       v                          v
  +------------------+    +------------------+
  |   SYSTEM PROMPT  |    | REJECTION        |
  |   (hardened,     |    | RESPONSE         |
  |    sandwiched)   |    | "I can't help    |
  |        +         |    |  with that."     |
  |   SANITIZED      |    +------------------+
  |   USER INPUT     |
  +------------------+
       |
       v
  +------------------+
  |    LLM CORE      |
  |  (generation)    |
  +------------------+
       |
       v
  +==========================================+
  |          OUTPUT RAILS                     |
  |  +------------------------------------+  |
  |  | 1. Safety classification           |  |
  |  |    (LlamaGuard / custom)           |  |
  |  | 2. PII scanning & redaction        |  |
  |  | 3. Hallucination check             |  |
  |  | 4. Schema / format validation      |  |
  |  | 5. Exfiltration detection          |  |
  |  | 6. Tool call authorization         |  |
  |  +------------------------------------+  |
  +==========================================+
       |                          |
       | PASS                     | BLOCK
       v                          v
  +------------------+    +------------------+
  | VALIDATED        |    | FALLBACK         |
  | RESPONSE         |    | RESPONSE or      |
  | --> User         |    | HUMAN ESCALATION |
  +------------------+    +------------------+
```

**Latency tip:** Run input rails in parallel where possible. Run output rails as streaming validators to minimize perceived latency.
