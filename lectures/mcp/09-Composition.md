---
title: Composition
section: Core Concepts
layout: diagram
---

# Agent Capability

```text
Prompts → sets up the interaction
Resources → loads relevant context
Tools → takes action on the world
            ↓
     Useful Agent Behavior
```

Example: user selects `deploy-service` prompt, which loads the `resources/read` for the deploy config, then calls `tools/call` on `kubectl_apply`. All three primitives compose.
