---
title: "Jira MCP Server"
section: Building Enterprise Connectors
layout: cards
---

# Jira MCP Server

## search_issues

```typescript
server.tool(
  "search_issues",
  "Search Jira issues using JQL. " +
  "Returns key, summary, status, " +
  "assignee, and priority.",
  {
    jql: z.string().describe(
      "JQL query, e.g. 'project = ENG " +
      "AND status = Open'"
    ),
    maxResults: z.number().default(20),
  },
  async ({ jql, maxResults }) => {
    const res = await jira.searchJira(
      jql, { maxResults, fields: [
        "summary", "status",
        "assignee", "priority",
      ]}
    );
    return { content: [{
      type: "text",
      text: JSON.stringify(
        res.issues, null, 2
      ),
    }]};
  }
);
```

## create_issue

```typescript
server.tool(
  "create_issue",
  "Create a new Jira issue. Returns " +
  "the issue key (e.g. ENG-1234).",
  {
    project: z.string()
      .describe("Project key, e.g. ENG"),
    summary: z.string()
      .describe("Issue title"),
    description: z.string().optional()
      .describe("Detailed description"),
    issueType: z.enum([
      "Bug", "Story", "Task"
    ]).default("Task"),
    priority: z.enum([
      "High", "Medium", "Low"
    ]).default("Medium"),
  },
  async (params) => {
    const issue = await jira.addNewIssue({
      fields: {
        project: { key: params.project },
        summary: params.summary,
        description: params.description,
        issuetype: {
          name: params.issueType },
        priority: {
          name: params.priority },
      },
    });
    return { content: [{
      type: "text",
      text: `Created ${issue.key}`,
    }]};
  }
);
```

## update_status

```typescript
server.tool(
  "update_status",
  "Transition a Jira issue to a new " +
  "status (e.g. In Progress, Done).",
  {
    issueKey: z.string()
      .describe("e.g. ENG-1234"),
    status: z.string()
      .describe("Target status name"),
  },
  async ({ issueKey, status }) => {
    const transitions =
      await jira.listTransitions(issueKey);
    const target = transitions.find(
      (t: any) => t.name === status
    );
    if (!target) {
      return {
        content: [{ type: "text",
          text: `Cannot transition to ` +
            `${status}. Available: ` +
            transitions.map(
              (t: any) => t.name
            ).join(", ")
        }],
        isError: true,
      };
    }
    await jira.transitionIssue(
      issueKey, { transition: target }
    );
    return { content: [{
      type: "text",
      text: `${issueKey} → ${status}`,
    }]};
  }
);
```

## add_comment

```typescript
server.tool(
  "add_comment",
  "Add a comment to an existing " +
  "Jira issue.",
  {
    issueKey: z.string()
      .describe("e.g. ENG-1234"),
    comment: z.string()
      .describe("Comment body text"),
  },
  async ({ issueKey, comment }) => {
    await jira.addComment(
      issueKey, comment
    );
    return { content: [{
      type: "text",
      text: `Comment added to ` +
        `${issueKey}`,
    }]};
  }
);
```

## Sources

- [Jira Cloud REST API (v3)](https://developer.atlassian.com/cloud/jira/platform/rest/v3/)
- [MCP TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk)
