---
title: "Takeaways"
section: Close
layout: standard
---

# What to Remember

## Five claims to defend on an exam

1. **MCP is a wire protocol, not a framework.** JSON-RPC 2.0 over stdio or streamable HTTP. It says nothing about your model, your loop, or your language
2. **Three primitives, three controllers.** *Tools* are model-controlled (actions). *Resources* are app-controlled (data). *Prompts* are user-controlled (templates). The split is about *who decides when*, not what the data is
3. **The host owns the policy boundary.** Authorization, permission UI, audit logging — none of these live in the protocol. They live in the host because the host is where user trust lives
4. **The economic case is N+M, not N×M.** N hosts and M capabilities, each written once, every combination works. The savings are larger the more agentic systems you run
5. **It's a protocol, so it inherits protocol failure modes.** Spoofed servers, prompt injection through tool output, ambient-credential leaks. Most production trouble is at this layer, not at the JSON parsing layer

## What you should be able to do after this lecture

- Sketch the `initialize` handshake from memory
- Read a `tools/call` JSON-RPC payload and explain every field
- Decide whether a capability should be a tool, resource, or prompt
- Choose between stdio and streamable HTTP for a given deployment
- Identify which permission policy applies to a tool, and why

## What's next

- **Week 9 — Building MCP Servers** is the hands-on companion to this lecture. We'll build a domain MCP server, wire it into Claude Desktop and Cursor, then exercise it from a Python agent loop
- **Week 10 — Multi-Agent Workflows** uses MCP as the substrate when multiple agents need to share capabilities

Sources

- [MCP Specification](https://modelcontextprotocol.io/specification)
- [Anthropic — MCP launch](https://www.anthropic.com/news/model-context-protocol)
- [MCP Python SDK](https://github.com/modelcontextprotocol/python-sdk)
- [MCP TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk)
- [MCP Inspector — debugging tool](https://github.com/modelcontextprotocol/inspector)
