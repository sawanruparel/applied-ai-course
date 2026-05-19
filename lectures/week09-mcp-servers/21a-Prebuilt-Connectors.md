---
title: "Prebuilt Connectors & Discovery"
section: Building Enterprise Connectors
layout: standard
---

# Prebuilt Connectors & Discovery

Before hand-rolling a server, check whether a managed connector already exists. For most large enterprise systems, one does.

## Managed connectors for enterprise systems

Vendors like **CData** ship managed MCP connectors for **Salesforce, SAP, Snowflake, and ServiceNow**. These arrive with **schema definitions and auth templates** already wired up, so the LLM gets accurate table/field metadata and the operator gets a tested credential flow.

The tradeoff is the usual buy-vs-build one:

- **Managed connector** — dramatically shorter time-to-production; you configure, you don't code. Best for standard systems with standard schemas.
- **Hand-rolled server** — full control over which tables, fields, and operations are exposed; required when your system is custom or your access rules are unusual.

## `.well-known/mcp.json` server discovery

A 2026 convention lets clients **auto-discover** the MCP servers a domain offers by fetching `https://example.com/.well-known/mcp.json` — analogous to `robots.txt`. The document advertises available servers and their endpoints, so a host can enumerate an organization's capabilities without manual config.

This is being adopted in larger multi-server deployments, where wiring every client to every server by hand does not scale.

## Sources

- [MCP integration roadmap 2026: managed connectors — CData](https://www.cdata.com/blog/mcp-integration-roadmap-2026)
- [Implementing `.well-known/mcp.json` server discovery (2026 guide) — Ekamoira](https://www.ekamoira.com/blog/mcp-server-discovery-implement-well-known-mcp-json-2026-guide)
