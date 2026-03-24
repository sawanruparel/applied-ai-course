---
title: "Generation Techniques"
section: Synthetic Data Generation
layout: cards
---

# Generation Techniques

## Instruction Following

Generate input-output pairs where the teacher demonstrates following specific instructions.

```json
{
  "instruction": "Extract all dates mentioned in the text and return them in ISO 8601 format.",
  "input": "The meeting is on March 5th, 2026 and the deadline was January 15.",
  "output": "- 2026-03-05\n- 2026-01-15"
}
```

**Best for:** Classification, extraction, formatting tasks

**Tip:** Vary instruction phrasing -- "Extract dates", "Find all dates", "List the dates mentioned"

## Chain-of-Thought Traces

Capture the teacher's reasoning process, not just the final answer. Teaches the student *how* to think.

```json
{
  "question": "Is 127 prime?",
  "reasoning": "Check divisibility: 127/2=63.5, 127/3=42.3, 127/5=25.4, 127/7=18.1, 127/11=11.5. Since sqrt(127)<12 and no divisor found, 127 is prime.",
  "answer": "Yes, 127 is prime."
}
```

**Best for:** Math, logic, multi-step reasoning

**Tip:** Ask teacher to show work with "Think step by step before answering"

## Tool Use Examples

Teach the student when and how to call external tools (APIs, search, calculators).

```json
{
  "user": "What is the weather in Tokyo right now?",
  "assistant_action": "<tool_call>get_weather(city='Tokyo')</tool_call>",
  "tool_result": "{\"temp\": 18, \"condition\": \"cloudy\"}",
  "assistant_response": "It is currently 18C and cloudy in Tokyo."
}
```

**Best for:** Agentic workflows, RAG systems, function calling

**Tip:** Include examples where the model should NOT use a tool

## Conversation / Multi-Turn

Generate full conversations with realistic back-and-forth, clarification questions, and follow-ups.

```json
{
  "messages": [
    {"role": "user", "content": "Help me write a Python function"},
    {"role": "assistant", "content": "What should the function do?"},
    {"role": "user", "content": "Parse a CSV and return the sum of column 3"},
    {"role": "assistant", "content": "```python\nimport csv\ndef sum_column...```"}
  ]
}
```

**Best for:** Chatbots, customer support, tutoring systems

**Tip:** Include conversations with corrections and misunderstandings
