---
title: "Anti-Patterns"
section: Close
layout: standard
---

# Anti-Patterns

Things that seem smart but will cost you later.

## 1. Over-Abstraction

- Wrapping every LLM call in 5 layers of abstraction "for flexibility"
- You can't debug what you can't read. Keep the LLM call visible.
- **Fix**: If you can't explain what your code does in one sentence, simplify it.

## 2. Framework Lock-In

- Putting business logic inside framework-specific constructs (LangChain's Chain classes, custom graph nodes)
- When the framework changes (and it will), your logic is trapped
- **Fix**: Business logic in plain Python functions. Framework just wires them together.

## 3. Premature Agent-ification

- Using an autonomous agent loop when a simple pipeline would work
- Agents are expensive, slow, and unpredictable by design
- **Fix**: Can you write the steps as a for-loop? Then don't use an agent.

## 4. Ignoring Cost Until the Bill Arrives

- Running GPT-4o on every request during development, then panicking at the invoice
- **Fix**: Instrument token counting from day one. Set budget alerts.

## 5. The "We'll Add Evals Later" Trap

- Shipping without evals means you can't measure the impact of any change
- **Fix**: Build 20 golden examples before writing any prompt. Run evals in CI.

## 6. Stuffing Everything Into the System Prompt

- 5,000-token system prompts that try to handle every edge case
- More instructions ≠ better behavior. Models get confused by contradictions.
- **Fix**: Shorter, focused prompts. Use routing to select the right prompt per task.
