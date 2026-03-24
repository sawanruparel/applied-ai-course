---
title: "Tool Use as a Fundamental Capability"
section: Architecture Patterns
layout: standard
---

# Tool Use: LLMs That Act in the World

### Why tool use changes everything:
- LLMs alone are limited to knowledge frozen at training time
- Tools give models access to **live data, computation, and external systems**
- Tool use + reasoning = agents that can solve real problems autonomously

### Core tool categories:

- **Search & retrieval:** web search, vector DB queries, document lookup
- **Code execution:** Python sandboxes, shell commands, REPL environments
- **API calls:** REST/GraphQL endpoints, SaaS integrations, database queries
- **File operations:** read, write, edit files in a codebase or filesystem
- **Browser/computer use:** navigate websites, fill forms, operate GUIs

### How it works in practice:
1. Model receives a task and a list of available tools (function schemas)
2. Model decides which tool to call and with what arguments
3. Tool executes, returns results to the model
4. Model reasons about results, decides next action or produces final answer

### State of the art:
- Claude: parallel tool use, multi-step tool chains, computer use
- GPT-4o/o3: function calling with structured outputs
- Gemini: grounded generation with Google Search
- Open models catching up via fine-tuning on tool-use datasets
