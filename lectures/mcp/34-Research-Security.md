---
title: Security Research Deep Dive
section: Research
layout: standard
---

# Security: The Dominant Research Theme

**Three protocol-level vulnerabilities identified:**

1. **No capability attestation** — servers self-declare permissions with no verification. *So what:* a malicious server can claim it only reads files but actually exfiltrates data. You must audit server code, not trust its manifest.
2. **Sampling without origin auth** — servers can request LLM completions via `sampling/createMessage` without proving who they are. *So what:* a compromised server can inject prompts into the agent's reasoning loop.
3. **Implicit trust propagation** — in multi-server setups, one compromised server can influence the LLM to leak data from other servers. *So what:* connecting more servers doesn't just add capability, it multiplies attack surface.

**The numbers that matter:**
- MCP amplifies attack success rates by **23–41%** vs non-MCP integrations (847 scenarios tested) — [Breaking the Protocol](https://arxiv.org/abs/2601.17549)
- Tool poisoning passes into agent contexts undetected — [MCPTox benchmark](https://arxiv.org/abs/2508.14925)

> **So what for architects:** treat every MCP server as an untrusted boundary. Apply Zero Trust — verify every tool call, sandbox execution, log everything. The convenience of "just connect a server" is exactly what makes it dangerous.

## Sources

- [Breaking the Protocol — Maloyan & Namiot](https://arxiv.org/abs/2601.17549)
- [MCPTox Benchmark — Wang et al.](https://arxiv.org/abs/2508.14925)
- [SoK: Security & Safety in MCP](https://arxiv.org/abs/2512.08290)
- [MCP Specification](https://modelcontextprotocol.io)
