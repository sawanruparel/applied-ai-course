---
title: "Tool Permission Levels"
section: Human-in-the-Loop Patterns
layout: standard
---

# Tool Permission Levels

Not all tools carry equal risk. Permission levels should match the blast radius.

## Three-tier permission model:

### Tier 1: Read (Auto-execute)
No confirmation needed. Low risk, no side effects.
- `search_documents` — Query knowledge base
- `get_weather` — Fetch weather data
- `list_files` — Browse directory contents
- `read_database` — SELECT queries only

### Tier 2: Write (Confirm)
Show the user what will change. Require confirmation.
- `send_email` — Show draft, confirm recipients
- `create_file` — Show content, confirm path
- `update_record` — Show diff of changes
- `schedule_meeting` — Show details, confirm attendees

### Tier 3: Delete / Irreversible (Approve + Review)
Require explicit approval with full context and impact assessment.
- `delete_records` — Show what will be deleted, count affected rows
- `deploy_code` — Show changes, require sign-off
- `transfer_funds` — Show amount, source, destination
- `modify_permissions` — Show before/after access levels

## Implementation:

```python
TOOL_PERMISSIONS = {
    "search":         {"level": "auto",    "tier": 1},
    "read_file":      {"level": "auto",    "tier": 1},
    "send_email":     {"level": "confirm", "tier": 2},
    "write_file":     {"level": "confirm", "tier": 2},
    "delete_records": {"level": "approve", "tier": 3},
    "deploy":         {"level": "approve", "tier": 3},
}

async def execute_tool(tool_name: str, params: dict):
    perm = TOOL_PERMISSIONS[tool_name]
    if perm["level"] == "auto":
        return await tool.run(params)
    elif perm["level"] == "confirm":
        await show_preview(tool_name, params)
        if await get_confirmation():
            return await tool.run(params)
    elif perm["level"] == "approve":
        await show_impact_assessment(tool_name, params)
        if await get_explicit_approval(require_reason=True):
            return await tool.run(params)
```
