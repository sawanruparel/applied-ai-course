---
title: "OpenAI o-Series: Reasoning Models"
section: The Models
layout: standard
---

# OpenAI o-Series: Reasoning Models

### o1 (September 2024)
- First commercial reasoning model with trained chain-of-thought
- Hidden "thinking tokens" -- user sees only the final answer
- AIME 2024 math: 83.3% (vs GPT-4o at 13.4%)
- GPQA Diamond (PhD-level science): 78.0%
- Latency: 10-60 seconds per response for hard problems

### o1-pro (Late 2024)
- Higher compute budget per query, available via ChatGPT Pro ($200/mo)
- Improved reliability on hardest tasks

### o3 (2025)
- Significant jump: ARC-AGI benchmark 87.5% (high-compute), vs o1 at 25%
- Configurable compute: low/medium/high reasoning effort
- Cost at high compute: ~$1000+ per ARC-AGI task
- SWE-bench Verified: substantial improvements in real-world coding

> o-series proved that inference-time scaling is a real, reliable axis of improvement -- not a parlor trick.

## Sources

- [Introducing OpenAI o1 (OpenAI, Sep 2024)](https://openai.com/index/introducing-openai-o1-preview/)
- [OpenAI o1 System Card (OpenAI, 2024)](https://arxiv.org/abs/2412.16720)
- [OpenAI API Pricing](https://openai.com/api/pricing/)
