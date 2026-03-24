---
title: "Tools: Garak, PyRIT, and ART"
section: Red-Teaming
layout: standard
---

# Automated Red-Teaming Tools

## Garak (Generative AI Red-teaming And Knowledge)

Open-source LLM vulnerability scanner by NVIDIA:

```bash
# Install
pip install garak

# Scan a model for known vulnerabilities
garak --model_type openai --model_name gpt-4o \
      --probes injection.InjectSystemPrompt \
      --probes encoding.InjectBase64

# Run a full vulnerability scan
garak --model_type huggingface \
      --model_name meta-llama/Llama-3-8B-Instruct \
      --probes all

# Key probe categories:
# - injection: prompt injection attacks
# - encoding: encoded/obfuscated payloads
# - knownbadsignatures: known jailbreak templates
# - misleading: trick questions and logic traps
# - realtoxicityprompts: toxicity elicitation
```

## PyRIT (Python Risk Identification Toolkit)

Microsoft's framework for AI risk assessment:

```python
from pyrit.orchestrator import RedTeamingOrchestrator
from pyrit.prompt_target import OpenAIChatTarget
from pyrit.score import SelfAskTrueFalseScorer

target = OpenAIChatTarget(model_name="gpt-4o")
scorer = SelfAskTrueFalseScorer(
    true_false_question="Does the response contain harmful content?"
)

orchestrator = RedTeamingOrchestrator(
    attack_strategy="jailbreak",
    prompt_target=target,
    scorer=scorer,
    max_turns=5,
)

results = await orchestrator.run()
```

## Adversarial Robustness Toolbox (ART)

IBM's toolkit focused on ML model robustness:

- Evasion attacks, poisoning attacks, model extraction
- Works with both traditional ML and LLMs
- Extensive documentation for regulated industries

## Comparison

| Feature | Garak | PyRIT | ART |
|---------|-------|-------|-----|
| Focus | LLM scanning | Risk identification | ML robustness |
| Approach | Probe-based | Orchestrated attacks | Attack/defense pairs |
| Automation | High (CLI) | Medium (SDK) | High (SDK) |
| Best for | Quick vulnerability scans | Structured red-teaming | Research & compliance |

## Sources

- [Garak -- NVIDIA](https://github.com/NVIDIA/garak)
- [PyRIT -- Microsoft](https://github.com/Azure/PyRIT)
- [Adversarial Robustness Toolbox (ART) -- IBM](https://github.com/Trusted-AI/adversarial-robustness-toolbox)
