---
title: Attack Surface of an AI Application
section: Framing
layout: diagram
---

# Attack Surface of an AI Application

Every component is a potential entry point for adversarial behavior:

```
                        ATTACK SURFACE MAP
  ================================================================

  [User Input]          [Retrieved Docs]        [Tool Outputs]
       |                      |                       |
       v                      v                       v
  +----------+         +-----------+           +------------+
  | Direct   |         | Indirect  |           | Tool       |
  | Injection|         | Injection |           | Poisoning  |
  +----------+         +-----------+           +------------+
       |                      |                       |
       +----------+-----------+-----------+-----------+
                  |                       |
                  v                       v
          +---------------+      +----------------+
          | SYSTEM PROMPT |      |   LLM CORE     |
          | (instructions)|----->| (reasoning +   |
          |               |      |  generation)   |
          +---------------+      +----------------+
                                         |
                  +----------+-----------+----------+
                  |          |                      |
                  v          v                      v
           +---------+ +-----------+        +-------------+
           | Text    | | Tool      |        | Structured  |
           | Output  | | Calls     |        | Data Output |
           +---------+ +-----------+        +-------------+
           | Harmful |  | Unauth   |        | Data leak   |
           | content |  | actions  |        | via format  |
           +---------+ +-----------+        +-------------+
```

**Key insight:** Attacks enter through inputs but cause damage through outputs and actions.
