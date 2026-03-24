---
title: "Safety and Alignment"
section: Challenges & Course Preview
layout: standard
---

# Safety and Alignment: A Preview

### The landscape of risks:

- **Prompt injection:** adversarial inputs that hijack model behavior
- **Jailbreaking:** bypassing safety training to produce harmful outputs
- **Data poisoning:** compromised training data leading to backdoors
- **Misuse:** generating disinformation, malware, social engineering content
- **Autonomy risks:** agents taking unintended actions in the real world

### Current mitigation approaches:

- **RLHF / Constitutional AI:** training models to be helpful, harmless, and honest
- **System prompts & guardrails:** runtime constraints on model behavior
- **Red-teaming:** adversarial testing before deployment
- **Content filtering:** input/output classifiers that catch harmful content
- **Sandboxing:** limiting what agents can access and execute

### Why reasoning models add new dimensions:

- Longer reasoning chains = more surface area for manipulation
- Autonomous agents can take irreversible real-world actions
- Tool use means models interact with external systems
- "Thinking" tokens may contain reasoning the developer cannot inspect (o1)

> We will dedicate Week 12 to safety, red-teaming, and responsible deployment practices.

## Sources

- [Training Language Models to Follow Instructions with Human Feedback — RLHF (Ouyang et al., 2022)](https://arxiv.org/abs/2203.02155)
- [Constitutional AI: Harmlessness from AI Feedback (Bai et al., 2022)](https://arxiv.org/abs/2212.08073)
- [OpenAI o1 System Card (OpenAI, 2024)](https://arxiv.org/abs/2412.16720)
