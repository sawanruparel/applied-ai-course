---
title: Attack Surface of an AI Application
section: Framing
layout: diagram
---

# Attack Surface of an AI Application

Every component is a potential entry point for adversarial behavior:

```mermaid
flowchart TB
    UI[User Input] --> DI[Direct Injection]
    RD[Retrieved Docs] --> II[Indirect Injection]
    TO[Tool Outputs] --> TP[Tool Poisoning]
    DI --> SP[System Prompt]
    II --> SP
    TP --> SP
    SP --> LLM[LLM Core<br/>reasoning + generation]
    LLM --> Text[Text Output<br/>harmful content]
    LLM --> Tools[Tool Calls<br/>unauthorized actions]
    LLM --> Struct[Structured Output<br/>data leak via format]
```

**Key insight:** Attacks enter through inputs but cause damage through outputs and actions.
