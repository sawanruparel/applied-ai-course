---
title: Production Safety Architecture
section: Production Safety
layout: diagram
---

# Production Safety Architecture

## Complete Safety Pipeline from Input to Output

```mermaid
flowchart TB
    U[User Input] --> L1["Layer 1: Edge Protection<br/>rate limit, auth, WAF"]
    L1 --> L2["Layer 2: Input Classification<br/>injection, topic, PII, toxicity"]
    L2 --> L3["Layer 3: Prompt Construction<br/>hardened + sandwich + boundaries"]
    L3 --> L4["Layer 4: LLM Inference<br/>aligned model, sampling, budgets"]
    L4 --> L5["Layer 5: Output Validation<br/>LlamaGuard, PII, schema, exfil, tool auth"]
    L5 --> L6["Layer 6: Monitoring & Logging<br/>audit trail, anomalies, feedback"]
    L6 --> R[Validated Response]
    L6 -.->|alerts| Ops[On-call / SecOps]
```

## Sources

- [Constitutional AI (Bai et al., 2022)](https://arxiv.org/abs/2212.08073)
- [RLHF / InstructGPT (Ouyang et al., 2022)](https://arxiv.org/abs/2203.02155)
- [Llama Guard (Inan et al., 2023)](https://arxiv.org/abs/2312.06674)
