---
title: Challenges
section: Limitations
layout: standard
---

# Current Challenges

- **No built-in auth standard** — OAuth support was added in March 2025, but most servers still lack it
- **Tool poisoning risk** — malicious tool descriptions can inject prompts into agent context (MCPTox benchmark)
- **No capability attestation** — servers self-declare permissions with no verification
- **Observability gap** — no standardized logging or tracing across client-server boundaries
- **Trust propagation** — multi-server setups create implicit trust chains that amplify attack surface by 23-41%

## Sources

- [MCP Specification](https://modelcontextprotocol.io)
- [Breaking the Protocol — Maloyan & Namiot, 2026](https://arxiv.org/abs/2601.17549)
- [MCPTox Benchmark — Wang et al., 2025](https://arxiv.org/abs/2508.14925)
- [OAuth 2.0 (RFC 6749)](https://datatracker.ietf.org/doc/html/rfc6749)
