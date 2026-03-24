---
title: "Serving LoRA Adapters"
section: Production Distillation
layout: standard
---

# Serving LoRA Adapters at Runtime

## The multi-adapter pattern

Keep one base model in memory. Swap LoRA adapters per request for different tasks.

```
                     +--> LoRA: Customer Support
                     |
Base Model (8B) -----+--> LoRA: Code Review
                     |
                     +--> LoRA: Medical Triage
                     |
                     +--> LoRA: Legal Summary
```

**Memory:** Base model (4.5 GB quantized) + each adapter (~20 MB) = serve 50 tasks in 5.5 GB

## vLLM with LoRA adapters

```python
from vllm import LLM, SamplingParams
from vllm.lora.request import LoRARequest

# Load base model once
llm = LLM(
    model="meta-llama/Llama-3.1-8B-Instruct",
    enable_lora=True,
    max_lora_rank=64,
    max_loras=4,  # Max concurrent adapters in memory
)

# Serve different tasks by swapping adapters
support_request = LoRARequest("support", 1, "./lora-support")
code_request = LoRARequest("code", 2, "./lora-code")

# Route based on task
output = llm.generate(
    "Help me with my billing issue",
    SamplingParams(temperature=0.3, max_tokens=512),
    lora_request=support_request,
)
```

## Ollama with custom models

```bash
# Create a Modelfile
cat > Modelfile <<EOF
FROM llama3.1:8b
ADAPTER ./my-lora-adapter.gguf
SYSTEM "You are a customer support agent for Acme Corp."
PARAMETER temperature 0.3
EOF

ollama create acme-support -f Modelfile
ollama run acme-support "I need to cancel my subscription"
```

## Production serving checklist

- [ ] Adapter hot-loading (no server restart to add new adapters)
- [ ] Request routing (which adapter for which request)
- [ ] Adapter version management (A/B test new adapters)
- [ ] Fallback to base model if adapter fails
- [ ] Latency monitoring per adapter
- [ ] Adapter caching strategy (LRU eviction for memory management)

## Adapter versioning strategy

```
/adapters/
  /customer-support/
    v1.0.0/  (initial training)
    v1.1.0/  (added edge cases)
    v2.0.0/  (retrained on new product line)
  /code-review/
    v1.0.0/
```

Tag adapters like software releases. Roll back if quality regresses.

## Sources

- [vLLM: High-Throughput LLM Serving](https://github.com/vllm-project/vllm)
- [Ollama](https://github.com/ollama/ollama)
- [LoRA: Low-Rank Adaptation of Large Language Models (Hu et al., 2021)](https://arxiv.org/abs/2106.09685)
