---
title: "Building a Server"
section: Implementation
layout: standard
---

# A 50-Line MCP Server

The Python SDK ships decorators that hide most of the protocol. A working server is small enough to fit on one slide.

```python
# server.py — a minimal MCP server exposing a single tool
import asyncio
import httpx
from mcp.server import Server
from mcp.server.stdio import stdio_server
from mcp.types import Tool, TextContent

app = Server("weather-mcp")

@app.list_tools()
async def list_tools() -> list[Tool]:
    return [Tool(
        name="get_weather",
        description="Current weather for a city. Returns a 1-line summary.",
        inputSchema={
            "type": "object",
            "properties": {"city": {"type": "string"}},
            "required": ["city"],
        },
    )]

@app.call_tool()
async def call_tool(name: str, arguments: dict) -> list[TextContent]:
    if name != "get_weather":
        raise ValueError(f"unknown tool: {name}")
    async with httpx.AsyncClient() as http:
        r = await http.get(
            "https://wttr.in/" + arguments["city"],
            params={"format": "%C %t"},
        )
    return [TextContent(type="text", text=r.text.strip())]

async def main():
    async with stdio_server() as (read, write):
        await app.run(read, write, app.create_initialization_options())

asyncio.run(main())
```

## Wire it into Claude Desktop

```json
// ~/Library/Application Support/Claude/claude_desktop_config.json
{
  "mcpServers": {
    "weather": {
      "command": "python",
      "args": ["/path/to/server.py"]
    }
  }
}
```

Restart Claude Desktop. The tool appears in the model's available-tools list immediately; users can ask "what's the weather in SF?" and the model will call `get_weather` without further setup.

## What you didn't have to write

- The JSON-RPC envelope, request/response routing, id correlation
- The `initialize` capability negotiation
- The stdio framing (one JSON message per line, with content-length headers)
- The `notifications/tools/list_changed` plumbing (if your tools were dynamic)

## What to do next

- **Add input validation** — pydantic models in the tool body, with friendly error messages
- **Add an HTTP transport** — swap `stdio_server()` for `mcp.server.streamable_http.streamable_http_server()` to host it remotely
- **Add tests** — the SDK ships a `mcp.testing.in_process_client` that wires a client and server in-process with no transport

Sources

- [MCP Python SDK](https://github.com/modelcontextprotocol/python-sdk)
- [MCP TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk)
- [Claude Desktop MCP setup](https://modelcontextprotocol.io/quickstart/user)
