---
title: "Testing Multi-Agent Systems"
section: Production Concerns
layout: standard
---

# Testing Multi-Agent Systems

## The Testing Pyramid for Agents

### Level 1: Unit Test Each Agent in Isolation
- Mock the tools and feed the agent a known input
- Assert the output matches expected structure and content
- Test edge cases: empty input, malformed data, tool errors
- Fast to run, cheap, catches most regressions
```python
def test_researcher_agent():
    mock_search = Mock(return_value=[{"title": "Paper A", "summary": "..."}])
    result = researcher_agent.run(
        query="quantum computing trends",
        tools={"web_search": mock_search}
    )
    assert "sources" in result
    assert len(result["sources"]) >= 3
```

### Level 2: Test Agent Pairs (Interface Tests)
- Verify that Agent A's output format is valid input for Agent B
- These catch schema mismatches between agents
- Run the real Agent A, then validate its output against Agent B's expected input schema
- Example: Researcher output should be a list of dicts with "title", "url", "summary" keys

### Level 3: Integration Test the Full Workflow
- Run the complete pipeline end-to-end with real (or recorded) tool responses
- Use deterministic inputs with known expected outputs
- Assert on the final output quality, not intermediate steps
- These are slow and expensive — run them nightly, not on every commit

### Level 4: Evaluation Suites
- Build a dataset of 20-50 representative inputs with expected outputs
- Score outputs using an LLM judge or human ratings
- Track quality over time as you change agent prompts or models
- Regression detection: alert if average quality drops below threshold

## Anti-Pattern: Only Testing the Happy Path
- Test what happens when the web search returns zero results
- Test what happens when the coding agent produces code that fails tests
- Test what happens when an agent exceeds its iteration limit
- Test what happens when two agents produce contradictory information
