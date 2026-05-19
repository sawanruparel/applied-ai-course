---
title: "Connection Lifecycle"
section: Protocol
layout: standard
---

# Initialize, Use, Shut Down

Every MCP connection follows the same three-phase lifecycle. The handshake is where the client and server agree on which features they both support — there is no global "MCP version compatibility matrix" the client has to track.

```mermaid
sequenceDiagram
    autonumber
    participant C as Client (in host)
    participant S as Server
    Note over C,S: 1. Initialization
    C->>S: initialize(protocolVersion, capabilities, clientInfo)
    S-->>C: initializeResult(protocolVersion, capabilities, serverInfo)
    C->>S: notifications/initialized
    Note over C,S: 2. Operation
    C->>S: tools/list
    S-->>C: { tools: [...] }
    C->>S: tools/call(name, arguments)
    S-->>C: { content: [...] }
    S->>C: notifications/tools/list_changed
    C->>S: tools/list (refresh)
    S-->>C: { tools: [...] }
    Note over C,S: 3. Shutdown
    C->>S: (transport closes)
```

## What gets negotiated at `initialize`

- **`protocolVersion`** — both sides advertise the most recent MCP version they understand; they fall back to the lower one if they differ
- **`capabilities`** — feature flags both sides need to agree on:
  - Server side: `tools`, `resources`, `prompts`, `logging`, `experimental`, plus whether each supports change notifications
  - Client side: `sampling` (will the client run the model on a server's behalf?), `roots` (does the client expose workspace roots?)
- **`clientInfo` / `serverInfo`** — name + version strings, used for telemetry and bug reports, not for routing

## Why the explicit `notifications/initialized`

A client sends it after `initialize` returns to signal "I'm done negotiating, you can start sending notifications now." Without it, a server emitting `tools/list_changed` before the client had finished registering its handlers would drop the event.

Sources

- [MCP — Lifecycle](https://modelcontextprotocol.io/specification/2025-03-26/basic/lifecycle)
- [MCP — Server Capabilities](https://modelcontextprotocol.io/specification/2025-03-26/server)
