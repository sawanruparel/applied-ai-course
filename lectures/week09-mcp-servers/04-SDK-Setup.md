---
title: "Setting Up the MCP SDK"
section: MCP Server Fundamentals
layout: standard
---

# Setting Up the MCP SDK

**TypeScript (recommended for this lab):**

```bash
mkdir my-mcp-server && cd my-mcp-server
npm init -y
npm install @modelcontextprotocol/sdk zod
npm install -D typescript @types/node
npx tsc --init
```

**Project structure:**

```
my-mcp-server/
├── src/
│   ├── index.ts          # Entry point, server setup
│   ├── tools/            # Tool definitions + handlers
│   │   ├── listTables.ts
│   │   └── runQuery.ts
│   └── db.ts             # External system connection
├── tsconfig.json
└── package.json
```

**Python alternative:**

```bash
pip install mcp
# or: uv add mcp
```

- TypeScript SDK: `@modelcontextprotocol/sdk`
- Python SDK: `mcp` (on PyPI)
- Both SDKs follow the same patterns — choose whichever you're comfortable with

## Sources

- [MCP TypeScript SDK (`@modelcontextprotocol/sdk`)](https://www.npmjs.com/package/@modelcontextprotocol/sdk)
- [MCP TypeScript SDK — GitHub](https://github.com/modelcontextprotocol/typescript-sdk)
- [MCP Python SDK (`mcp`)](https://pypi.org/project/mcp/)
- [MCP Python SDK — GitHub](https://github.com/modelcontextprotocol/python-sdk)
- [Zod — TypeScript Schema Validation](https://zod.dev/)
