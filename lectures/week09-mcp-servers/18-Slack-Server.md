---
title: "Slack MCP Server"
section: Building Enterprise Connectors
layout: cards
---

# Slack MCP Server

## search_messages

```typescript
server.tool(
  "search_messages",
  "Search Slack messages across all " +
  "channels the bot has access to. " +
  "Returns message text, author, " +
  "channel, and timestamp.",
  {
    query: z.string()
      .describe("Search query text"),
    count: z.number().default(10)
      .describe("Max results (1-100)"),
  },
  async ({ query, count }) => {
    const result =
      await slack.search.messages({
        query,
        count: Math.min(count, 100),
      });
    const messages =
      result.messages.matches.map(m => ({
        text: m.text,
        user: m.username,
        channel: m.channel.name,
        ts: m.ts,
        permalink: m.permalink,
      }));
    return { content: [{
      type: "text",
      text: JSON.stringify(
        messages, null, 2
      ),
    }]};
  }
);
```

## post_message

```typescript
server.tool(
  "post_message",
  "Post a message to a Slack channel. " +
  "Requires the channel name or ID.",
  {
    channel: z.string()
      .describe("Channel name or ID"),
    text: z.string()
      .describe("Message text (markdown)"),
    thread_ts: z.string().optional()
      .describe(
        "Thread timestamp to reply to"
      ),
  },
  async ({ channel, text, thread_ts }) => {
    const result =
      await slack.chat.postMessage({
        channel,
        text,
        thread_ts,
      });
    if (!result.ok) {
      return {
        content: [{ type: "text",
          text: `Failed: ${result.error}`,
        }],
        isError: true,
      };
    }
    return { content: [{
      type: "text",
      text: `Message posted to ` +
        `#${channel}`,
    }]};
  }
);
```

## list_channels

```typescript
server.tool(
  "list_channels",
  "List public Slack channels the " +
  "bot can access. Returns channel " +
  "name, topic, and member count.",
  {
    limit: z.number().default(50)
      .describe("Max channels to return"),
  },
  async ({ limit }) => {
    const result =
      await slack.conversations.list({
        types: "public_channel",
        limit: Math.min(limit, 200),
        exclude_archived: true,
      });
    const channels =
      result.channels?.map(c => ({
        id: c.id,
        name: c.name,
        topic: c.topic?.value,
        num_members: c.num_members,
      })) ?? [];
    return { content: [{
      type: "text",
      text: JSON.stringify(
        channels, null, 2
      ),
    }]};
  }
);
```

## Sources

- [Slack Web API](https://docs.slack.dev/apis/web-api/)
- [Slack Web API Methods](https://api.slack.com/methods)
- [`@slack/web-api` npm Package](https://www.npmjs.com/package/@slack/web-api)
