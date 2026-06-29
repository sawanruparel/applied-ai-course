# Course Refresh — 2026-06-29

Generated manually (ANTHROPIC_API_KEY not present in sandbox) by reading each lecture's `slides.json` + `00-Intro.md` and performing targeted web searches across four parallel research agents plus direct searches. Covers developments since approximately March 2026. Sources linked inline. The instructor decides what to incorporate — this report does not edit any slide files.

---

## Week 01: landscape

**Topic:** The 2026 AI Landscape — From Stochastic Parrots to Reasoning Machines

1. **Update slide 11 (Claude Evolution) through Fable 5 — and add the export-control note.** Claude Fable 5 launched June 9, 2026 as state-of-the-art across nearly all reasoning benchmarks (SWE-Bench Pro 80.3%, 1M-token context, 128K output). It was suspended June 12, 2026 under a U.S. government export-control directive citing national security concerns about a jailbreak method; all customer access worldwide was disabled. Claude Opus 4.8 (May 28, 2026) remains the current production-available top tier. ([Fable 5 vs competitors](https://espressio.ai/blog/claude-fable-5-vs-gpt-5-vs-gemini-3-frontier-benchmarks/); [suspension coverage](https://dev.to/alexmercedcoder/a-frontier-model-goes-dark-ai-week-of-june-16-2026-1gk9))

2. **Update slide 09 (OpenAI o-Series) through GPT-5.5 / GPT-5.6.** GPT-5.5 launched April 2026 with 62 tok/s and a 27.9 s TTFT; GPT-5.6 is in limited government-approved preview as of late June 2026. Both maintain the 1M-token context window. GPQA Diamond: Gemini 3.1 Pro leads at 94.3%, GPT-5.5 at 92.8%, Fable 5 at 91.3%. ([OpenAI GPT-5.6 preview](https://www.axios.com/2026/06/26/openai-gpt-sol-terra-luna-trump); [2026 benchmark showdown](https://teamai.com/blog/large-language-models-llms/the-2026-ai-frontier-model-war-2/))

3. **Update slide 12 (Gemini Flash) → Gemini 3.1 Pro.** Google announced Gemini 3.1 Pro at Google I/O (May 2026); limited enterprise preview as of late June, general availability pending. Features a 2M-token context window (largest of any production frontier model) and wins on extreme reasoning and GPQA Diamond. Gemini 2.5 Flash remains the lowest-latency mainstream option (consistently <600 ms TTFT). ([Best AI models June 2026](https://www.buildfastwithai.com/blogs/best-ai-models-june-2026))

4. **Update slide 10 (DeepSeek R1) → DeepSeek V4 Pro.** DeepSeek V4 (March 2026, ~1T total / 32B active via MoE Sparse FP8) cuts memory 40% and boosts inference 1.8×. V4 Pro (April 24, 2026) scores 80.6% on SWE-Bench Verified, rivaling frontier closed models at a fraction of the API cost ($0.28/$0.42 per M tokens input/output). ([DeepSeek V4 overview](https://artificialanalysis.ai/models/deepseek-v4-pro))

5. **Update slide 08 (Inference Compute) with 2026 cost-inversion data.** OpenAI's 2026 inference spend reached ~$2.3 billion — 15× their training cost — and projections show inference compute hitting 75% of total AI compute by 2030. This shifts the core economics argument from training-era scaling laws to test-time compute and MoE efficiency. ([Frontier reasoning scaling analysis](https://medium.com/@siddantvardey/the-frontier-reasoning-models-scaling-laws-whats-actually-coming-next-93bba260644b))

6. **Update slide 17 (Compound Systems) with 2026 adoption data.** Gartner projects >40% of enterprise applications will embed AI agents by end of 2026 (up from <5% in 2025). The ACM launched an inaugural Conference on AI and Agentic Systems (CAIS 2026), citing compound AI as the new norm. Production multi-agent pipelines show 50%+ P95 latency reduction and 30–40% cost savings vs. single-agent. ([CAIS 2026 announcement](https://www.eurekalert.org/news-releases/1116428); [agentic AI trends](https://www.firecrawl.dev/blog/agentic-ai-trends))

7. **Update slide 13 (Open Models) with mid-2026 leaders.** The open-source frontier has moved decisively: Llama 4 Scout (10M-token context, natively multimodal, MoE), Qwen 3.5 (397B total / 17B active, 1M context, Apache-2.0), Gemma 4 26B-A4B (fits 16 GB laptop), and Mistral Small 4 (119B total / 6B active, 256K context) now compete with mid-tier closed models. ([Best open-source LLMs 2026](https://computingforgeeks.com/open-source-llm-comparison/))

---

## Week 02: prompting

**Topic:** Advanced Prompt Engineering — Prompting as Logic

1. **Update slide 08 (Tree of Thoughts) status.** Tree of Thoughts is now largely superseded for most tasks by reasoning-native models (o-series, Claude extended thinking, DeepSeek R1) that explore branches internally. Reframe the slide as historical context and a precursor to internal search rather than a live implementation pattern. ([Prompt engineering 2026 retrospective](https://www.digitalapplied.com/blog/prompt-engineering-h1-2026-retrospective-patterns-data))

2. **Update slide 04–05 (CoT Intro / Why CoT) for native-reasoning models.** When using frontier reasoning models, explicit "think step by step" instructions provide reduced marginal benefit and can occasionally interfere. The slide set should distinguish: (a) classic CoT for instruction-following models, (b) extended/adaptive thinking APIs for reasoning models. Claude Opus 4.7 responds best to XML-tagged instructions; GPT-5.5 prefers concise JSON schemas. ([Claude XML prompting patterns](https://lushbinary.com/blog/advanced-prompt-engineering-techniques-developer-guide/))

3. **Update slide 13 (Structured Output) — this is now the #1 technique.** H1 2026 pattern-adoption data shows structured outputs + tool calling is the single most impactful prompt engineering technique in production, having replaced fragile string parsing. Four techniques now dominate: structured outputs, chain-of-thought, reasoning routing, anti-fabrication scaffolds. ([H1 2026 prompt engineering retrospective](https://www.digitalapplied.com/blog/prompt-engineering-h1-2026-retrospective-patterns-data))

4. **Update slide 22 (Version Control) to cover prompt operations (PromptOps) maturity.** In H1 2026 prompt engineering stopped being a single-author craft and became a team practice. Major tooling includes Langfuse (acquired by ClickHouse January 2026, note uncertain roadmap), LangSmith, Maxim AI, PromptLayer, and Humanloop. Add regression detection as a default CI expectation. ([Prompt management tools 2026](https://www.truefoundry.com/blog/prompt-management-tools))

5. **Update slide 18 (Guardrails) with enterprise adoption data.** Oracle Cloud Infrastructure added AI guardrails (content moderation, prompt injection, PII detection) in February 2026. Amazon Bedrock Guardrails expanded to six safeguard policies. EU AI Act high-risk obligations — including runtime safety controls and audit trails — apply from August 2, 2026, making guardrails legally required for many deployments. ([Guardrails implementation guide 2026](https://www.getmaxim.ai/articles/the-complete-ai-guardrails-implementation-guide-for-2026/))

---

## Week 03: dev-stack

**Topic:** The Developer Stack — Architectural Design for AI Applications

1. **Update slide 09 (Claude Agent SDK) with AWS native deployment.** Anthropic launched Claude Platform on AWS (Q2 2026), bringing the Messages API, Files API, Batches API, Claude Managed Agents, and Agent Skills through native AWS endpoints with IAM billing. Workload Identity Federation (WIF) now replaces static API keys with short-lived scoped credentials. Managed Agents operate in customer-controlled sandboxes connecting to private MCP servers. ([Claude Platform AWS announcement](https://releasebot.io/updates/anthropic))

2. **Update slide 07–08 (PydanticAI).** PydanticAI v2.0.0b5 pre-release landed June 2, 2026; v1.106.0 stable released June 4, 2026. New features: on-demand (deferred) loading for instructions/tools/model-settings, streaming structured output with immediate validation, and expanded provider support (Grok 4.3, Google fixes). The repo crossed 17K GitHub stars and ships weekly releases. A2A protocol integration and Logfire observability are now built-in. ([PydanticAI releases](https://github.com/pydantic/pydantic-ai/releases))

3. **Update slide 05–06 (LangChain / LangGraph) with v1.0 stable and new features.** LangChain and LangGraph both reached v1.0 with 220M+ monthly PyPI downloads combined. Key additions: a new streaming API v3 (typed per-channel projections), ContextHubBackend backed by LangSmith Hub, finer-grained node execution controls (timeouts, error recovery), and deepagents — a batteries-included harness for long-horizon tasks with subagent orchestration. ([LangChain changelog](https://docs.langchain.com/oss/python/releases/changelog))

4. **Add Microsoft Agent Framework to slide 10 (Head to Head).** Microsoft merged Semantic Kernel and AutoGen into a single Microsoft Agent Framework in 2026. The prior slide likely references them as separate products. Also add Strands (Amazon-backed) alongside LangGraph, CrewAI, and OpenAI Agents SDK in multi-framework comparisons. ([Agent framework comparison 2026](https://www.speakeasy.com/blog/ai-agent-framework-comparison))

5. **Update slide 18 (Observability) with 2026 acquisition activity.** Three notable observability changes: (a) Langfuse acquired by ClickHouse (January 2026) — roadmap uncertain; (b) Galileo acquired by Cisco/Splunk (deal closed May 22, 2026); (c) Helicone acquired by Mintlify (March 2026), transitioned to maintenance mode. Current top-tier alternatives: Opik by Comet, LangSmith, Arize Phoenix/AX, Braintrust. ([AI observability tools 2026](https://www.confident-ai.com/knowledge-base/compare/best-ai-observability-tools-2026))

---

## Week 04: knowledge-rep

**Topic:** Knowledge Representation — From Embeddings to Context Management

1. **Update slide 06 (Embedding Models) with MTEB v2 and multimodal embeddings.** MTEB v2 launched in 2026; scores are not directly comparable to MTEB v1. Google Gemini Embedding 2 Preview (March 10, 2026) leads — the first all-modality embedding model supporting text, image, video, audio, and PDF natively with 3072-dimensional MRL output. Jina Embeddings v4 (on Qwen2.5-VL-3B) is the leading open-weight multimodal option. Other top performers: Cohere Embed-v4, Qwen3-Embedding-8B. ([MTEB leaderboard 2026](https://zc277584121.github.io/rag/2026/03/20/embedding-models-benchmark-2026.html))

2. **Update slide 11 (Vector DB Landscape) with 2026 platform changes.** Key updates: Weaviate HFresh disk-based vector index hit GA (June 2026) with built-in MCP Server to GA; Chroma v1.5.9 (May 2026) includes 4× speedup from Rust core rewrite; pgvector 0.8.0 delivers up to 9× faster queries and iterative scan with WHERE clauses (the old result-skipping gamble is fixed); Pinecone Serverless v2 reduced latency and cost with a Singapore AP region. ([pgvector 0.8.0 release](https://www.postgresql.org/about/news/pgvector-080-released-2952/); [Weaviate 1.36](https://weaviate.io/blog/weaviate-1-36-release))

3. **Update slide 08 (Chunking) with February 2026 benchmark results.** A 7-strategy benchmark found recursive 512-token splitting achieves 69% accuracy — highest overall. Semantic chunking placed second (54%) with 43-token average fragments. The 2026 best-practice recommendation: start with recursive 512-token splits; graduate to semantic/hierarchical only when metrics justify it. Working token range: 512–1024; performance cliff at ~2,500 tokens. ([Best chunking strategies RAG 2026](https://www.firecrawl.dev/blog/best-chunking-strategies-rag))

4. **Update slide 14 (Hybrid Search) with 2026 production baseline.** Two-stage hybrid retrieval (BM25 + vector with RRF fusion) achieves Recall@5 0.816, MRR@3 0.605 — outperforming all single-stage methods. This is now the production standard in 2026. Most engineering gains come from chunking strategy, hybrid retrieval, rerankers, and long-context tradeoff decisions in combination. ([Hybrid search reference 2026](https://www.digitalapplied.com/blog/hybrid-search-bm25-vector-reranking-reference-2026))

5. **Update slide 19 (Reranking) with 2026 leaderboard leaders.** Zerank-2 leads the Agentset Reranker Leaderboard (ELO 1638); Cohere Rerank 4 Pro is second (ELO 1629, best for 100+ languages, 4096-token chunks); Voyage Rerank-2.5 (ELO 1544) with a lite variant cutting latency ~50%. Best open-weight reranker: Mixedbread mxbai-rerank-large-v2, deployable on a single GPU. ([Reranker leaderboard 2026](https://www.bestaiweb.ai/how-to-add-reranking-to-your-rag-pipeline-with-cohere-rerank-4-pro-voyage-rerank-2-5-and-zerank-2-in-2026/))

---

## Week 05: rag

**Topic:** RAG 2.0 — Self-Correcting Retrieval for Production

1. **Add slide on A-RAG framework.** Du et al. (February 2026) formalized three principles for truly agentic retrieval: (1) autonomous strategy selection — agent chooses retrieval approach based on task; (2) iterative execution — multiple retrieval rounds adapting on intermediate results; (3) interleaved tool use — ReAct-style action → observation → reasoning loop. This supersedes treating retrieval as a fixed pipeline step. ([Agentic RAG survey 2026](https://arxiv.org/pdf/2506.10408))

2. **Update slide 09–10 (Corrective RAG) with FVA-RAG and SC-RAG.** Two notable 2026 papers extend CRAG: FVA-RAG (Falsification-Verification Alignment, December 2025) adds a falsification pass to mitigate sycophantic hallucinations; SC-RAG addresses interior–exterior knowledge conflicts via explicit evidence extraction and self-correction. LangGraph-based Corrective RAG is now a widely adopted reference implementation. ([FVA-RAG](https://arxiv.org/pdf/2512.07015); [SC-RAG](https://www.sciencedirect.com/science/article/abs/pii/S0306457325003103))

3. **Update slide 22 (Pipeline Architecture) — LlamaIndex + LangGraph as the production split.** The dominant 2026 enterprise pattern is LlamaIndex for retrieval and indexing (35% accuracy boost in their own benchmarks) + LangGraph for orchestration + RAGAS/LangSmith for evaluation. LangChain chain composition is largely superseded for agent use cases. RAGAS reached 400K+ monthly downloads and 20M+ evaluations run. ([RAG evaluation guide 2026](https://datavlab.ai/post/rag-evaluation-methods-metrics-2026-guide))

4. **Update slide 20 (Streaming RAG).** Nightly re-indexing is now considered a design failure in production. Change-Data-Capture (CDC) connectors with built-in embedding functions enable millisecond-level continuous re-indexing. Production latency budget: <2 s end-to-end for real-time apps; streaming databases (Confluent, Redis Streams) as the real-time RAG infrastructure layer. ([Real-time RAG architecture 2026](https://www.confluent.io/blog/build-vs-buy-real-time-rag-streaming/))

5. **Update slide 26 (Cost Optimization) with 2026 market scale data.** The enterprise RAG market reached $1.94B in 2025 and is projected at $9.86B by 2030 (38.4% CAGR). Notable: 60% of RAG deployments in 2026 include systematic evaluation from day one (up from <30% in early 2025). Three tiers of deployment now coexist: turnkey platforms (Glean, Vectara), hyperscaler services (Bedrock, Azure AI Search), and DIY frameworks. ([RAG market analysis 2026](https://medium.com/real-time-data-evolution/rag-architecture-in-2026-how-to-keep-retrieval-actually-fresh-3a9bae9ec8f9))

---

## Week 06: graphrag

**Topic:** GraphRAG & Global Context — When Structure Beats Similarity

1. **Update slide 10 (LazyGraphRAG) and add cost-reduction framing.** LightRAG's dual-level retrieval (local entity + global concept) directly over the graph eliminates precomputed community summaries, cutting indexing token cost ~6,000× vs. original Microsoft GraphRAG while maintaining or improving accuracy on global-scope questions. LazyGraphRAG and Fast GraphRAG cover the 50–100× cost reduction range. Original GraphRAG: ~$33K indexing for large corpora in 2024; LightRAG equivalent: ~$5. ([GraphRAG buyer's guide 2026](https://medium.com/@tongbing00/graphrag-in-2026-a-practical-buyers-guide-to-knowledge-graph-augmented-rag-43e5e72d522d))

2. **Update slide 12 (HippoRAG) with HippoRAG-2 results.** HippoRAG-2 (2025/2026) leverages Personalized PageRank over an open knowledge graph constructed from LLM-extracted triples. Achieves 10–30× cheaper multi-hop reasoning vs. GraphRAG and 6–13× lower latency. Evidence Recall: 87.9–90.9% for Level 2–3 questions on complex datasets. Now training-free. ([HippoRAG-2 paper](https://arxiv.org/html/2605.17072v1))

3. **Update slide 09 (Microsoft GraphRAG) with architecture changes.** The microsoft/graphrag project removed the NetworkX dependency and moved to DataFrame-based graph implementations for developer experience. Multi-hop reasoning accuracy: 87% success rate vs. 23% for traditional systems. Community summaries now mix abstract and detailed reports for a 10–20% improvement in global query quality. ([Microsoft GraphRAG project](https://www.microsoft.com/en-us/research/project/graphrag/))

4. **Add "When to Use Graphs" decision framework slide.** A June 2026 arxiv survey (Zhu et al., arXiv:2506.05690) provides a comprehensive comparison of graph vs. vector RAG on multi-hop reasoning, entity resolution, and long-context tasks. Key finding: graph retrieval excels on entity-relationship queries and multi-step synthesis; vector retrieval wins on dense semantic search. Most 2026 production stacks route by query type. ([When to use graphs in RAG](https://arxiv.org/html/2506.05690v3))

5. **Update slide 18 (Future) with 2026 research directions.** Notable new papers: TagRAG (tag-guided hierarchical KG RAG, Jan 2026), HugRAG (hierarchical causal KG design, Feb 2026), and Temporal-Causal Entity-Event KGs (June 2026) for temporal-causal consistency. GraphRAG-rs (Rust implementation) is gaining traction for performance-critical deployments. Think-on-Graph 3.0 introduces multi-agent dual-evolving context retrieval on heterogeneous graphs. ([TagRAG](https://arxiv.org/pdf/2601.05254); [HugRAG](https://arxiv.org/pdf/2602.05143); [Temporal-Causal KG](https://arxiv.org/pdf/2506.05939))

---

## Week 07: evaluation

**Topic:** Evaluation & LLM-as-a-Judge — Measuring What Matters

1. **Update slide 22 (Braintrust) and slide 19 (DeepEval) — the de facto 2026 stack.** Python-native engineering teams converge on DeepEval for CI/CD evaluation gating + Braintrust for production traceability and stakeholder dashboards. Braintrust connects evaluation scoring with production tracing, dataset management, cross-functional review, and CI-based release enforcement in a single system. ([DeepEval alternatives 2026](https://www.braintrust.dev/articles/deepeval-alternatives-2026))

2. **Update slide 18 (RAGAS Deep) with 2026 maturity data.** RAGAS reached 400K+ monthly downloads and 20M+ evaluations run. Core metrics remain Faithfulness (>0.9), Answer Relevancy (>0.85), Context Precision (>0.8), Context Recall (>0.8). 60% of RAG deployments in 2026 include systematic evaluation from day one (up from <30% in early 2025). Notable new benchmarks: T²-RAGBench, LegalBench-RAG, WixQA. ([RAGAS 2026](https://callsphere.ai/blog/rag-evaluation-frameworks-2026-ragas-trulens-deepeval))

3. **Update slide 20 (Phoenix Arize) with acquisition and competitor landscape.** Galileo was acquired by Cisco (via Splunk, deal closed May 22, 2026) with uncertain roadmap going forward. Arize Phoenix remains strong. The consolidation means the landscape shifted: Opik by Comet, Langfuse (now ClickHouse-owned), and LangSmith are the full-lifecycle evaluation + tracing platforms; Braintrust focuses on quality-gated releases. ([AI evaluation tools 2026](https://www.confident-ai.com/knowledge-base/compare/best-ai-evaluation-tools-2026))

4. **Update slide 16 (Mitigating Bias) with 2026 multi-judge pattern data.** The "Python-native de facto standard" explicitly uses two complementary tools (lightweight framework for CI + platform for human annotation and regression tracking) to keep evaluation sustainable as applications grow. Multi-judge with diverse lenses (correctness, safety, groundedness) is the production pattern for high-stakes decisions. ([LLM evaluation tools comparison 2026](https://inference.net/content/llm-evaluation-tools-comparison/))

5. **Mention Promptfoo for red-team eval in slide 21 (Custom Evals).** Promptfoo emerged as the leading open-source tool for security/red-team validation and CI-based prompt regression testing. RAGAS focuses on retrieval/generation quality; Promptfoo focuses on adversarial robustness. Both are now standard complements. ([Best RAG evaluation tools 2026](https://www.braintrust.dev/articles/best-rag-evaluation-tools))

---

## Week 08: mcp

**Topic:** Model Context Protocol — The Runtime Layer for Agentic Systems

1. **Add slide on MCP 2026-07-28 Release Candidate — the biggest revision since launch.** The RC delivers a stateless protocol core (servers no longer need sticky sessions or shared session stores — they run behind plain round-robin load balancers), MCP Apps (servers ship interactive HTML UIs rendered in sandboxed iframes), and a Tasks extension (long-running work with explicit lifecycle). An Extensions framework now lets capabilities stabilize as extensions before entering the spec. ([MCP 2026 RC announcement](https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/))

2. **Update slide 11 (Auth) — Enterprise-Managed Authorization now stable.** The Enterprise-Managed Authorization extension is GA and being adopted by Anthropic, Microsoft, and Okta. It enables centralized management of authorization for all MCP servers with single sign-on, replacing per-server credential management. Remote MCP servers must now publish RFC 9728 Protected Resource Metadata and enforce RFC 8707 audience binding. ([MCP enterprise auth](https://modelcontextprotocol.io/docs/tutorials/security/authorization))

3. **Update slide 19 (Ecosystem) with current scale data.** The MCP ecosystem grew from ~100 servers at launch (November 2024) to 19,831+ servers indexed on the Glama registry (March 2026) with 97 million monthly SDK downloads. Major SaaS platforms now provide official servers: GitHub, Slack, Google Drive, PostgreSQL, Notion, Jira, Salesforce. All major labs (Anthropic, OpenAI, Google, Microsoft) now back the protocol. ([MCP news and updates 2026](https://openclaw.direct/mcp-guide/model-context-protocol-news))

4. **Update slide 20 (Security) with April 2026 RCE disclosure.** OX Security disclosed a systemic RCE vulnerability in the MCP SDK's stdio transport in April 2026, affecting all language SDKs (Python, TypeScript, Java, Rust) and an estimated 150M+ downloads across 7,000+ public servers. Security rule: validate all inputs, prevent SSRF, use least-privilege scoping, and audit every tool call. ([Akamai MCP security advisory](https://www.akamai.com/blog/security-research/new-mcp-specification-security-teams-must-prepare))

5. **Update slide 10 (Transports) — SSE is deprecated; Streamable HTTP is the standard.** The November 2025 spec introduced Streamable HTTP to replace Server-Sent Events (SSE) for remote transports. The 2026 RC makes the stateless HTTP model the core. stdio remains the standard for local inter-process communication (Claude Desktop, Claude Code). ([MCP developer guide 2026](https://lushbinary.com/blog/mcp-model-context-protocol-developer-guide-2026/))

---

## Week 09: mcp-servers

**Topic:** Building MCP Servers — Hands-On Lab

1. **Update slide 04 (SDK Setup) — FastMCP 3.0 is now the recommended Python path.** FastMCP 3.0 (January 2026) dramatically simplifies server development: a single decorator handles schema generation, validation, and documentation. For TypeScript, `@modelcontextprotocol/sdk` + Zod remains the type-safe standard. C# SDK v1.0 (March 2026) is production-ready, shipping two NuGet packages: `ModelContextProtocol` and `ModelContextProtocol.AspNetCore` for HTTP hosting. ([MCP server handbook April 2026](https://use-apify.com/blog/mcp-server-handbook-2026))

2. **Update slide 05 (Transport) — replace SSE with Streamable HTTP.** Streamable HTTP (introduced November 2025 spec) replaces the legacy SSE transport for all remote deployments. Stdio remains correct for local IPC. Lab examples using SSE-based transport should be updated; the new stateless HTTP model also removes the need for sticky sessions. ([Complete MCP guide 2026](https://dev.to/x4nent/complete-guide-to-mcp-model-context-protocol-in-2026-architecture-implementation-and-4a11))

3. **Update slide 19 (Authentication) — OAuth 2.1 is the 2026 remote server standard.** Remote MCP servers must implement OAuth 2.1 as the authentication standard (since June 2025 spec). Servers must publish RFC 9728 Protected Resource Metadata and enforce RFC 8707 audience binding. The Enterprise-Managed Authorization extension (now stable) handles SSO at the organizational level. ([MCP authorization docs](https://modelcontextprotocol.io/docs/tutorials/security/authorization))

4. **Add security advisory note to slide 23 (Security).** The April 2026 OX Security RCE in stdio transport affects all language SDKs (Python, TypeScript, Java, Rust). An estimated 150M+ SDK downloads and 7,000+ public servers were potentially vulnerable. Patch status: verify SDK versions against published advisories before the lab. Validate all inputs, prevent SSRF, use least-privilege scoping. ([MCP security best practices 2026](https://www.shareuhack.com/en/posts/best-mcp-servers-guide-2026))

5. **Add or update slide 21a (Prebuilt Connectors) with 2026 ecosystem scale.** 19,831+ servers are now indexed on Glama. Major enterprise connectors available out-of-the-box: GitHub, Slack, Google Drive, PostgreSQL, Notion, Jira, Salesforce — the lab "build vs. buy" decision framing should reflect that many target systems already have production-quality MCP servers. ([MCP server ecosystem reference 2026](https://hidekazu-konishi.com/entry/mcp_server_ecosystem_reference_2026.html))

---

## Week 10: multi-agent

**Topic:** Multi-Agent Workflows — From Solo Agents to Agent Teams

1. **Update slide 03 (Landscape) with 2026 lab offerings.** By early 2026, every major lab ships a "multi-agent SKU": Anthropic Claude Sub-agents (Dynamic Workflows with up to 1,000 parallel subagents), OpenAI Agents SDK, Google Agent Development Kit (ADK), LangGraph supervisor templates, CrewAI Crews, AutoGen/Microsoft Agent Framework GroupChats. Mastra (Node.js-native) is also entering production use. ([Top agentic frameworks 2026](https://blog.jetbrains.com/pycharm/2026/06/top-agentic-frameworks-for-building-applications-2026/))

2. **Add a benchmark reference slide using MAFBench.** MAFBench (Multi-Agent Framework Benchmark) is the first unified benchmark revealing 100× latency differences and 30% accuracy gaps across frameworks for the same tasks. Also note: multi-agent systems outperform single agents on complex multi-domain tasks but underperform on sequential reasoning tasks (39–70% performance reduction per Google research). ([Multi-agent orchestration guide 2026](https://www.codebridge.tech/articles/mastering-multi-agent-orchestration-coordination-is-the-new-scale-frontier))

3. **Update slide 06 (Hierarchical) and slide 10 (Pattern Selection) — hub-and-spoke dominates production.** Almost all production multi-agent systems in 2026 use the hub-and-spoke orchestrator-worker model, not the complex swarm architectures that dominate academic papers. The competitive/debate patterns are valuable for specific reasoning tasks but rarely practical for throughput-sensitive production work. ([Multi-agent systems patterns 2026](https://agentsindex.ai/blog/multi-agent-systems))

4. **Update slide 17 (MCP Multi-Agent) for protocol maturity.** The 2026 MCP spec RC added a formal A2A (Agent-to-Agent) communication extension addressing the coordination gap. PydanticAI ships native A2A protocol integration. The STEM Agent architecture paper (arXiv:2603.22359) proposes a self-adapting, tool-enabled, extensible architecture for multi-protocol agent systems. ([Which LLM multi-agent protocol to choose](https://arxiv.org/pdf/2510.17149))

5. **Update slide 24 (Cost Control) with 2026 routing economics.** 70–80% of production LLM queries in multi-agent systems never need a frontier model. Hybrid routing classifies request complexity and routes to the cheapest tier that handles it (local/edge → mid-tier → frontier). Production systems achieving 50%+ P95 latency reduction and 30–40% cost savings over uniform frontier usage. ([Hybrid cloud-edge LLM architecture](https://tianpan.co/blog/2026-04-10-hybrid-cloud-edge-llm-architecture-routing-inference))

---

## Week 11: hitl-memory

**Topic:** Human-in-the-Loop & Memory — Safe Agents with Persistent State

1. **Update slide 21 (Mem0) with v3 algorithm results.** Mem0 released a major v3 algorithm (April 2026) with substantial benchmark improvements: 94.8 on LongMemEval and 91.6 on LoCoMo — jumps of +27 and +20 points vs. the previous version. v2.0.7 is current as of June 2026 with 59,600+ GitHub stars. New time-aware retrieval ranks correct dated instances for current/past/future queries. Official integrations now cover 21 frameworks including LangChain, LangGraph, and CrewAI. ([Mem0 benchmarks 2026](https://mem0.ai/blog/ai-memory-benchmarks-in-2026); [state of agent memory 2026](https://mem0.ai/blog/state-of-ai-agent-memory-2026))

2. **Update slide 20 (LangGraph Memory) with 2026 persistence layer architecture.** LangGraph's 2026 persistence layer explicitly decouples short-term working memory (checkpoints for thread-scoped state) from long-term persistent memory (stores for cross-thread user preferences and facts). According to LangChain's 2026 State of Agent Engineering report, over 60% of production agent failures stem from inadequate state management or missing long-term memory. ([LangGraph persistence docs](https://docs.langchain.com/oss/python/langgraph/persistence))

3. **Mention Letta and Zep as specialized memory framework alternatives (slide 19 Memory Architecture).** The leading 2026 specialized frameworks are: LangMem (best on LangGraph stack), Letta (best for OS-style explicit memory management), Mem0 (best managed service for fast integration), and Zep (best when temporal awareness and knowledge graphs matter). Three memory scopes are now standard: episodic, semantic, and procedural. ([AI agent memory frameworks 2026](https://atlan.com/know/best-ai-agent-memory-frameworks-2026/))

4. **Update slide 25 (Privacy) and add EU AI Act compliance context.** EU AI Act enforcement for high-risk systems begins August 2, 2026. Obligations include audit trail generation and runtime safety controls. HITL approval gates are now often legally required (not just best practice) for high-stakes agentic decisions — e.g. financial transactions above thresholds, medical recommendations. ([HITL AI compliance 2026](https://www.synvestable.com/human-in-the-loop.html))

5. **Update slide 05 (Confidence Routing) with 2026 caution on confidence calibration.** Confidence-based routing is gaining adoption (route low-confidence actions to human review queues) but 2026 practice warns: treat confidence numbers skeptically. Models can be confidently wrong. Best practice: combine confidence thresholds with semantic similarity to known "escalation trigger" patterns, not raw logit scores alone. ([HITL design patterns 2026](https://tendem.ai/blog/hitl-human-in-the-loop-complete-guide))

---

## Week 12: small-models

**Topic:** The Small Model Strategy — Right-Sizing AI for Production

1. **Update slides 04–08 (Llama, Qwen, Phi, Mistral, Gemma) with 2026 releases.** All families released major updates in 2026: Llama 4 Scout (April 2025/2026, 10M token context, natively multimodal, MoE 17B active / 109B total); Qwen 3.5 (February 2026, 397B total / 17B active, 1M context, Apache-2.0); Phi-4 Mini (3.8B, 128K context, MIT license, ~3 GB at Q4); Mistral Small 4 (March 2026, 119B total / 6B active via MoE, 256K context); Gemma 4 QAT (June 5, 2026, E2B sub-1GB for text-only, 26B-A4B fits 16GB laptops). ([Small language models guide 2026](https://localaimaster.com/blog/small-language-models-guide-2026))

2. **Update slide 09 (Comparison) and slide 12 (Benchmarking) with current benchmark leaders.** Qwen 3 7B leads HumanEval among 7/8B models (strongest small code-gen model). Phi-4 Mini beats GPT-4o on MATH and GPQA at 3.8B. Gemma 3 4B stands out for RAM efficiency (4.2 GB total). Llama 4 Scout's 10M-token context is unmatched for long-document tasks. Qwen3 is the fastest-growing Ollama model family as of June 2026. ([Best SLMs 2026](https://www.bentoml.com/blog/the-best-open-source-small-language-models))

3. **Update slide 13 (Model Routing) with the 70-80% rule.** 70–80% of production LLM queries never need a frontier model. Hybrid cloud-edge routing systems classify request complexity in real time and route each query to the cheapest tier that handles it. Cost comparison: local edge models are 50–100× cheaper than frontier APIs for the queries they can handle. ([Hybrid cloud-edge routing](https://tianpan.co/blog/2026-04-10-hybrid-cloud-edge-llm-architecture-routing-inference))

4. **Update slide 18 (Quantization) with Quantization-Aware Training (QAT) as the 2026 standard.** QAT simulates quantization effects during training so models adapt their weight distributions — better than post-training quantization alone. Google's Gemma 4 QAT release is the flagship example. A 13B model quantized to 4-bit drops from 26 GB to 7.9 GB while retaining ~95% of original quality. ([QAT for edge deployment](https://moschip.com/blog/ai-engineering/model-quantization-for-edge-ai/))

5. **Update slide 17 (Local Inference) and slide 18 (Quantization) with Ollama update.** Ollama v0.30.8 (June 12, 2026) added MiniMax M3 (open-weight, 1M-token context + native vision), NVIDIA Nemotron 3 Ultra, and DeepSeek V4 Pro. The local inference ecosystem now covers 90%+ of the use cases that required cloud APIs in 2024. ([Top Ollama models 2026](https://www.promptquorum.com/local-llms/top-open-source-models-ollama))

---

## Week 13: distillation

**Topic:** Knowledge Distillation & Fine-Tuning — Teaching Small Models Big Tricks

1. **Update slide 16 (DPO) — DPO/ORPO/KTO have largely replaced SFT→PPO pipelines.** By 2026 most production teams use DPO (Direct Preference Optimization) or descendants ORPO and KTO rather than classic RLHF (SFT then PPO). The simpler implementation and comparable quality without a separate reward model training phase drives adoption. Torchtune now explicitly supports supervised fine-tuning, DPO, PPO, GRPO, knowledge distillation, and quantization-aware training in one framework. ([Fine-tuning 2026: LoRA, QLoRA, DPO, GRPO compared](https://futureagi.com/blog/fine-tuning-llms-unlocking-peak-performance/))

2. **Add a Reinforcement Fine-Tuning (RFT) slide near slide 16.** RFT is a 2026 paradigm shift: reward models for getting verifiable outcomes correct rather than imitating a reference answer. Unlike DPO which optimizes for preference pairs, RFT is task-outcome-driven and particularly effective for math, reasoning, and code domains. DeepSeek R1's RL-based training is the canonical example showing this outperforms teacher imitation on those domains. ([Reinforcement Fine-Tuning emergence 2026](https://futureagi.com/blog/fine-tuning-llms-unlocking-peak-performance/))

3. **Update slide 17 (Tools) with February 2026 framework updates.** Unsloth (February 10, 2026): 12× faster MoE training, embedding model support, ultra-long context RL, and Llama 4 Scout/Maverick support. Axolotl v0.29.0 (February 25, 2026): stability improvements, Llama-Vision, Qwen2-VL, and Pixtral native support. Feature parity: all three major frameworks (Unsloth, Axolotl, LLaMA-Factory) now support LoRA, QLoRA, full fine-tuning, GRPO, DPO, and vision models. ([Fine-tuning framework evaluation 2026](https://dev.to/ultraduneai/eval-003-fine-tuning-in-2026-axolotl-vs-unsloth-vs-trl-vs-llama-factory-2ohg))

4. **Update slide 25 (Model Merging) with multi-teacher distillation framing.** Recent 2026 research frames model merging as multi-teacher knowledge distillation: the merged model acts as a student integrating knowledge from multiple fine-tuned teachers. Formally, minimizing student-teacher KL divergence tightens the upper bound on merged model excess risk. DeepSeek-R1's distilled versions (e.g., 7B achieving 94.5 on MATH-500) showed distilled small models can outperform models directly trained on the same data. ([Model merging as KD](https://arxiv.org/pdf/2512.21288); [DeepSeek-R1 distillation results](https://zylos.ai/research/2026-02-08-model-distillation/))

5. **Update slide 04 (Synthetic Data) — synthetic data is now the default scaling primitive.** The 2026 mantra "better data beats more data" has solidified. A typical production pipeline: write 200 seed conversations → expand via Self-Instruct against GPT-5 → generate DPO preference pairs with Claude Opus 4.7 as judge → filter for faithfulness and instruction adherence → train on 80K quality-filtered rows (lower cost than manual labeling, broader topic coverage). Key risk: model collapse from recursive training — mitigate by mixing teacher models, including real-data seeds, and running diversity checks. ([Synthetic data for LLM fine-tuning 2026](https://futureagi.com/blog/synthetic-data-fine-tuning-llms/))

---

## Week 14: safety

**Topic:** Safety & Red-Teaming — Defending AI Systems in Production

1. **Update slide 01b (OWASP Agentic 2026) with the full ASI01–ASI10 taxonomy.** The OWASP Foundation released the Top 10 for Agentic Applications (December 2025 / 2026), a companion list to the LLM Top 10 that addresses unique risks of autonomous systems: ASI01 Memory & Context Poisoning, ASI04 Agentic Supply Chain Compromise, ASI05 Unexpected Code Execution, ASI06 Memory & Context Poisoning, ASI07 Insecure Inter-Agent Communication, ASI08 Cascading Agent Failures, ASI09 Human-Agent Trust Exploitation, ASI10 Rogue Agents. ([OWASP Agentic Top 10 2026](https://www.trydeepteam.com/docs/frameworks-owasp-top-10-for-agentic-applications); [OWASP security landscape Q2 2026](https://genai.owasp.org/resource/ai-security-solutions-landscape-for-ai-and-agentic-red-teaming-q2-2026/))

2. **Update slide 04–08 (Prompt Injection) with 2026 scale and supply chain data.** Prompt injection attacks surged 340% year-over-year according to OWASP's 2026 LLM Security Report — the fastest-growing cyberattack category. Attack success rates exceed 85% against state-of-the-art defenses under adaptive attack strategies (meta-analysis of 78 studies). Critical supply chain example: in March 2026, a backdoor sat on PyPI for three hours in the LiteLLM package (used by CrewAI, DSPy, Microsoft GraphRAG) — 47K downloads in the window. ([Prompt injection attacks 2026](https://www.aimagicx.com/blog/prompt-injection-attacks-ai-agent-security-guide-2026); [LiteLLM supply chain incident](https://helpnetsecurity.com/2026/06/11/owasp-prompt-injection-ai-security-failures/))

3. **Update slide 12 (LlamaGuard) → LlamaGuard 3.** LlamaGuard 3 outperforms GPT-4 on content classification benchmarks with a third of the false-positive rate. It is the current production-recommended content classification component for layered defense strategies. ([LlamaGuard 3 benchmarks](https://aisecurityandsafety.org/en/guides/llm-guardrails/))

4. **Update slide 22 (Garak) — distinguish Garak (model-level) from PyRIT (application-level) from DeepTeam (agentic).** Garak (NVIDIA) tests models with 120+ static probes — but does not understand RAG pipelines, agent tool graphs, or MCP integrations. PyRIT provides a framework for application-level red-teaming with four abstractions (targets, converters, scorers, orchestrators). DeepTeam and dreadnode's tools specifically test full agentic workflows including indirect prompt injection through documents, RAG poisoning, memory poisoning, and MCP abuse. ([AI red-teaming tools comparison 2026](https://beyondscale.tech/blog/ai-red-teaming-tools-comparison-2026); [Redefining red-teaming in the agentic era](https://arxiv.org/html/2605.04019v1))

5. **Add EU AI Act compliance deadline to slide 24 (Safety Architecture) and slide 27 (Takeaways).** EU AI Act enforcement for high-risk systems is live from **August 2, 2026**. Obligations include audit trail generation, human oversight mechanisms (HITL), runtime safety controls, and incident reporting. For agentic AI systems deployed in high-risk contexts, guardrails are now a legal requirement, not a best practice. Also: expect a SafeBench-Agent benchmark (testing prompt injection and jailbreaks at task-completion level) before end of 2026. ([EU AI Act enforcement 2026](https://www.getmaxim.ai/articles/the-complete-ai-guardrails-implementation-guide-for-2026/))

---

## Week 15: capstone

**Topic:** Capstone Showcase — Putting It All Together

1. **Update slide 02 (Model Landscape) with June 2026 state.** Current production-available frontier: Claude Opus 4.8 (Fable 5 is suspended), GPT-5.5 (GPT-5.6 in limited preview), Gemini 3.1 Pro (enterprise preview), DeepSeek V4 Pro (open-weight, near-frontier at fraction of cost). Note Fable 5 export control suspension as a live example of regulatory risk in AI systems. ([Best AI models June 2026](https://www.buildfastwithai.com/blogs/best-ai-models-june-2026))

2. **Update slide 05 (Evaluation) with the current evaluation stack.** Recommended 2026 capstone evaluation approach: RAGAS for RAG quality metrics, DeepEval for CI gating, Braintrust for cross-team dashboards and regression tracking. Include at least one benchmark from: SWE-Bench Pro (code agents), OSWorld-Verified (computer-use agents), GPQA Diamond (scientific reasoning), or GAIA (general-purpose agents). ([LM evaluation tools 2026](https://inference.net/content/llm-evaluation-tools-comparison/))

3. **Update slide 07 (Safety Checklist) to include the OWASP Agentic Top 10.** The current safety checklist should incorporate agentic-specific risks: prompt injection defenses (especially indirect via RAG), MCP security review (patch for OX Security stdio RCE), agentic supply chain audit (pin all AI framework versions), inter-agent communication authentication, and EU AI Act compliance if deploying in high-risk EU contexts. ([OWASP Agentic 2026](https://docs.modulos.ai/frameworks/owasp-top-10-agentic/index))

4. **Update slide 03 (Patterns) with 2026 dominant production patterns.** Four patterns dominate 2026 production capstone-quality systems: (1) Orchestrator-worker with hub-and-spoke topology; (2) RAG with streaming freshness (CDC-based re-indexing, no nightly batch); (3) Hybrid routing (70-80% of queries to small/local models, frontier only when needed); (4) Memory-augmented agents (Mem0 or LangGraph persistence for cross-session continuity). 

5. Nothing else materially changed in the capstone lecture content — the synthesized view of all prior weeks remains current, just update the model names and benchmarks on slides 02–05 as noted above.

---

_Report generated 2026-06-29. Covers developments approximately March–June 2026. Web searches conducted via WebSearch tool; agent subagents used for parallel topic research. All suggestions are for the instructor's review — no lecture slides were edited._
