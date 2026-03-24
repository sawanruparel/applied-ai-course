---
title: "Key Inference Patterns"
section: Architecture Patterns
layout: cards
---

# Key Inference Patterns

## Chain-of-Thought (CoT)

- Model generates reasoning steps before the answer
- "Let me think step by step..."
- 2-3x improvement on math/logic tasks
- Now trained natively in reasoning models (not just prompted)

## Self-Consistency

- Sample N reasoning paths, take majority vote
- Trades compute for reliability
- Works with any CoT-capable model
- Diminishing returns past ~10-20 samples

## Tree-of-Thoughts (ToT)

- Explore multiple reasoning branches in parallel
- Evaluate and prune unpromising paths
- BFS or DFS over reasoning states
- Effective for planning and creative problem-solving

## Reflection / Self-Critique

- Model evaluates its own output and iterates
- "Is this correct? Let me check..."
- Can catch errors that single-pass misses
- Foundation of agent loops: act -> observe -> reflect -> act

## Sources

- [Chain-of-Thought Prompting Elicits Reasoning in LLMs (Wei et al., 2022)](https://arxiv.org/abs/2201.11903)
- [Self-Consistency Improves Chain of Thought Reasoning (Wang et al., 2022)](https://arxiv.org/abs/2203.11171)
- [Tree of Thoughts: Deliberate Problem Solving with LLMs (Yao et al., 2023)](https://arxiv.org/abs/2305.10601)
- [Reflexion: Language Agents with Verbal Reinforcement Learning (Shinn et al., 2023)](https://arxiv.org/abs/2303.11366)
