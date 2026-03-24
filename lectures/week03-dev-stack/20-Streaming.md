---
title: "Streaming Responses"
section: Production Concerns
layout: standard
---

# Streaming Responses

## Why Streaming Matters

- LLM responses take 2-30 seconds to fully generate
- Without streaming, users stare at a blank screen — **perceived latency is terrible**
- With streaming, the first token arrives in ~200ms — users start reading immediately
- Streaming reduces **time-to-first-byte (TTFB)** from seconds to milliseconds

## Implementation Approaches

### Server-Sent Events (SSE) — The Standard

```python
from fastapi import FastAPI
from fastapi.responses import StreamingResponse
from pydantic_ai import Agent

app = FastAPI()
agent = Agent("openai:gpt-4o")

@app.get("/chat")
async def chat(query: str):
    async def event_stream():
        async with agent.run_stream(query) as result:
            async for text in result.stream_text(delta=True):
                yield f"data: {json.dumps({'text': text})}\n\n"
        yield "data: [DONE]\n\n"
    return StreamingResponse(event_stream(), media_type="text/event-stream")
```

### WebSockets — For Bidirectional Communication

- Better for multi-turn chat where client sends messages during generation
- More complex to implement, but lower overhead for ongoing conversations

## Streaming with Structured Output

- You **cannot** stream structured (JSON) output token-by-token meaningfully
- Common pattern: stream a text explanation, then return structured data at the end
- PydanticAI supports **partial streaming** — yields validated partial results as fields complete

## UX Considerations

- Show a typing indicator before the first token arrives
- Buffer a few tokens before rendering to avoid single-character flicker
- Provide a "Stop generating" button for long responses
- Display token/cost counters in development mode

## Sources

- [PydanticAI Documentation — Streaming](https://ai.pydantic.dev/)
- [FastAPI StreamingResponse Documentation](https://fastapi.tiangolo.com)
- [MDN Web Docs — Server-Sent Events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events)
