# Course Refresh — 2026-05-18

Generated manually (ANTHROPIC_API_KEY not available in sandbox) against 15 lectures.
Each section summarises recent developments (Feb–May 2026) relevant to the slides.
The instructor reviews and decides what to incorporate.

---

## Week 01: landscape

- **[Slide 01]** Update frontier model table to include GPT-5.4 (March 2026) and GPT-5.5 (April 23, 2026) — GPT-5.5 introduces a 1-million-token context window and posts 85% on ARC-AGI-2 as of May 13, 2026, topping the leaderboard. ([Introducing GPT-5.5 | OpenAI](https://openai.com/index/introducing-gpt-5-5/))

- **[Slide 02]** Add Claude Opus 4.7 (April 16, 2026) and Gemini 3.1 Pro (February 2026) to the reasoning-model comparison — Claude Opus 4.7 leads SWE-Bench Verified at 80.8%; Gemini 3.1 Pro leads GPQA Diamond at 94.3% and is the only natively multimodal model (text, image, audio, video). ([GPT-5.5 vs Claude Opus 4.7 vs Gemini 3.1 Pro for Builders | MindStudio](https://www.mindstudio.ai/blog/gpt-5-5-review-developers-builders))

- **[Slide 03]** Add ARC-AGI-2 to the benchmark section — released as a harder successor to ARC-AGI (human average 66%), it has become the de-facto leaderboard for abstract reasoning; GPT-5.5 leads at 85%. ([ARC-AGI-2 | arcprize.org](https://arcprize.org/arc-agi/2)) ([arXiv:2505.11831](https://arxiv.org/abs/2505.11831))

- **[Slide 04]** Expand the test-time compute section — new Train-to-Test (T2) scaling laws show it is compute-optimal to train smaller models on more data and budget savings toward inference-time sampling; the Kinetics Scaling Law adds KV-cache bandwidth as an explicit cost variable. ([arXiv:2604.01411 — Test-Time Scaling Makes Overtraining Compute-Optimal](https://arxiv.org/html/2604.01411v1))

- **[Slide 05]** Update open-model section — Llama 4 (Scout 17B active/109B total MoE, Maverick 17B active/400B total MoE) shipped April 2026; Alibaba's Qwen 3.5 (397B) and Qwen 3.6 (27B, 77.2% SWE-bench) shipped March–May 2026 under Apache 2.0. ([Best Open-Source LLM in May 2026 | codersera](https://codersera.com/blog/best-open-source-llm-2026-llama-4-qwen-3-5-deepseek-v4-gemma-4-mistral/))

- **[Slide 06]** Note DeepSeek V3.2 (January 2026) outperforms GPT-5 on several reasoning tasks while remaining open-weight; anticipated DeepSeek R2 (1.2T-param MoE, ~78B active) has not yet shipped as of May 2026. ([DeepSeek-V3.2 Outperforms GPT-5 on Reasoning Tasks | InfoQ](https://www.infoq.com/news/2026/01/deepseek-v32/))

- **[Slide 07]** Update the compound-systems / multi-model routing discussion — production teams now route across GPT-5.4 (agentic execution), Claude Opus 4.7 (long reasoning), and Gemini 3.1 Pro (multimodal/large context), treating model selection as a runtime decision. ([Multi-Model Orchestration in 2026 | ALM Corp](https://almcorp.com/blog/multi-model-orchestration-gpt-5-4-claude-opus-4-7-gemini-3-1/))

---

## Week 02: prompting

- **[Slide 02]** Highlight DSPy 2.x MIPROv2 and GEPA (July 2025) as the practical path to automated prompt optimization in 2026 — GEPA uses LLM reflection over trajectory traces to outperform RL-based tuning on several benchmarks; the framework now integrates with LangChain, LlamaIndex, and standalone pipelines. ([DSPy | Stanford NLP GitHub](https://github.com/stanfordnlp/dspy))

- **[Slide 03]** Update the CoT effectiveness numbers — 2026 practitioner analyses consistently report CoT improves math/logic accuracy by 15–40%; self-consistency (multiple CoT samples + majority vote) is now a standard reliability pattern in production. ([Advanced Prompt Engineering Techniques 2026 | PySquad / Medium](https://medium.com/@pysquad/advanced-prompt-engineering-techniques-for-llms-in-2026-1df5ebb414d1))

- **[Slide 04]** Add a slide or callout on SIMBA (DSPy optimizer) — uses stochastic mini-batch sampling to find challenging examples with high output variability, then applies the LLM to propose self-reflective improvement rules; complements MIPROv2 for noisy evaluation settings. ([DSPy Optimizers documentation](https://dspy.ai/learn/optimization/optimizers/))

- **[Slide 05]** Mention the emerging "Tool Augmented Prompting" pattern as a 2026 standard — structuring prompts to explicitly hand off sub-tasks to tools (search, code execution) rather than asking the model to simulate them is now documented as a distinct prompting category alongside CoT and ReAct. ([Prompt Engineering Guide 2026 | Meta Intelligence](https://www.meta-intelligence.tech/en/insight-prompt-engineering))

- **[Slide 06]** Update the reliability / prompt stability discussion — teams building agentic pipelines now treat prompt stability as a CI concern, pinning model versions and running automated regression tests against golden outputs; DSPy signatures make this tractable. ([Automatic Prompt Optimization with DSPy | Engineering Notes](https://notes.muthu.co/2026/02/automatic-prompt-optimization-with-dspy-building-self-tuning-agent-pipelines/))

---

## Week 03: dev-stack

- **[Slide 02]** Update framework positioning — by mid-2026 the recommended pattern is to import `langchain-core` + `langgraph` rather than the monolithic `langchain` package; LangChain owns orchestration while LlamaIndex Workflows owns the data/ingestion layer; together they are used in the majority of production stacks. ([LangChain vs LlamaIndex in 2026 | zenvanriel.com](https://zenvanriel.com/ai-engineer-blog/langchain-vs-llamaindex-2026-update/))

- **[Slide 03]** Add coverage of Microsoft Agent Framework (MAF) — formed from the AutoGen + Semantic Kernel merger announced late 2025; targets .NET enterprise shops, brings type-safe plugins, middleware, and observability alongside AutoGen's multi-agent patterns. ([AI Agent Frameworks in 2026 | Medium/ATNO](https://medium.com/@atnoforgenai/10-ai-agent-frameworks-you-should-know-in-2026-langgraph-crewai-autogen-more-2e0be4055556))

- **[Slide 04]** Note that LlamaIndex Workflows transformed LlamaIndex from a retrieval library into an event-driven full-stack application framework — state management, workflow orchestration, and structured event passing are now first-class features. ([LlamaIndex vs LangChain 2026 | Contabo Blog](https://contabo.com/blog/blog/llamaindex-vs-langchain-which-one-to-choose-in-2026/))

- **[Slide 05]** Discuss MCP as a stack-level force — the Model Context Protocol's standardization of tool integration has reduced the dependency on heavy framework abstractions for tool-calling; agent SDKs (Composio, Prefect) now offer 500+ pre-built MCP integrations, eroding one of LangChain's original value propositions. ([Why LLM Frameworks Are Being Replaced by Agent SDKs | MindStudio](https://www.mindstudio.ai/blog/llm-frameworks-replaced-by-agent-sdks))

- **[Slide 06]** Add Hugging Face TRL v1.0 (April 2026) to the training-stack section — unified post-training API for SFT, reward modeling, DPO, and GRPO; integrates Unsloth kernels for 2× speed and 70% memory reduction. ([Hugging Face Releases TRL v1.0 | MarkTechPost](https://www.marktechpost.com/2026/04/01/hugging-face-releases-trl-v1-0-a-unified-post-training-stack-for-sft-reward-modeling-dpo-and-grpo-workflows/))

---

## Week 04: knowledge-rep

- **[Slide 02]** Add Cohere Embed v4 (multimodal) as a key new embedding model — supports interleaved text+image inputs, Matryoshka dimensions (256–1536), and int8/binary output formats; available on AWS Bedrock and Azure AI Foundry. ([Announcing Embed Multimodal v4 | Cohere Docs](https://docs.cohere.com/changelog/embed-multimodal-v4))

- **[Slide 03]** Update vector database landscape — Chroma completed a Rust-core rewrite delivering 4× performance; Weaviate now natively combines BM25 + dense vectors + metadata filtering in a single query; MongoDB added one-click Automated Embedding powered by Voyage AI. ([Best Vector Databases in 2026 | MarkTechPost](https://www.marktechpost.com/2026/05/10/best-vector-databases-in-2026-pricing-scale-limits-and-architecture-tradeoffs-across-nine-leading-systems/))

- **[Slide 04]** Add Pinecone Inference to the embeddings-as-a-service section — hosted embedding and reranking models now available inside Pinecone Serverless, eliminating the separate embedding pipeline step for many use cases. ([Top 10 Vector Databases 2026 | DataCamp](https://www.datacamp.com/blog/the-top-5-vector-databases))

- **[Slide 05]** Refresh context-management discussion to note that 1M-token context windows (GPT-5.5, Gemini 3.1 Pro) are now production-available, shifting when to use vector retrieval vs. stuffing full documents directly into context — the economics favor retrieval below ~50 pages but long-context is viable for single large documents. ([AI Models in 2026 | gurusup.com](https://gurusup.com/blog/ai-comparisons))

- **[Slide 06]** Mention NVIDIA NV-Embed-v2 (Mistral-7B derived) as a strong open-weight embedding model for multilingual retrieval and enterprise on-prem deployments. ([10 Best Embedding Models 2026 | Openxcell](https://www.openxcell.com/blog/best-embedding-models/))

---

## Week 05: rag

- **[Slide 02]** Update the failure-mode statistics — 2026 industry analysis consistently identifies retrieval (not generation) as the failure point in 73% of RAG breakdowns; this reframes where engineering effort should go and validates the focus on retrieval quality. ([RAG Production Guide 2026 | Lushbinary](https://lushbinary.com/blog/rag-retrieval-augmented-generation-production-guide/))

- **[Slide 03]** Elevate Agentic RAG as the 2026 production baseline — multi-agent RAG with specialized agents for query decomposition, retrieval, validation, and synthesis in parallel has become the dominant enterprise pattern, superseding naive single-retriever pipelines. ([Agentic Retrieval-Augmented Generation: A Survey | arXiv:2501.09136](https://arxiv.org/html/2501.09136v4))

- **[Slide 04]** Add a Corrective RAG (CRAG) pattern slide — embeds self-evaluation of retrieved documents before generation; if retrieved evidence is judged weak, the agent re-queries or falls back to web search; substantially reduces hallucinations in high-stakes domains. ([RAG in 2026: Practical Blueprint | DEV Community](https://dev.to/suraj_khaitan_f893c243958/-rag-in-2026-a-practical-blueprint-for-retrieval-augmented-generation-16pp))

- **[Slide 05]** Reinforce the "knowledge source as primary investment" framing — the 2026 enterprise consensus is that the quality of the knowledge base (chunking strategy, freshness, deduplication) matters more than model choice for RAG performance. ([RAG in 2026: Enterprise AI | Techment](https://www.techment.com/blogs/rag-in-2026/))

- **[Slide 06]** Add reranking as a standard RAG stage — cross-encoder rerankers (Pinecone Inference, Cohere Rerank) placed after initial retrieval and before generation are now treated as a near-mandatory production step rather than an optional optimization. ([Top Vector Databases 2026 | Second Talent](https://www.secondtalent.com/resources/top-vector-databases-for-llm-applications/))

---

## Week 06: graphrag

- **[Slide 02]** Update Microsoft GraphRAG release notes — the March 2026 release adds performance optimizations and new query capabilities; LazyGraphRAG is now stable and reduces indexing cost to ~0.1% of full GraphRAG at 70–90% of query quality, making graph-based RAG viable for cost-sensitive workloads. ([Project GraphRAG | Microsoft Research](https://www.microsoft.com/en-us/research/project/graphrag/)) ([microsoft/graphrag releases | GitHub](https://github.com/microsoft/graphrag/releases))

- **[Slide 03]** Add LightRAG as a primary alternative to Microsoft GraphRAG — simpler flat-graph extraction, roughly 1/100th the indexing cost, better suited for domain-specific Q&A than broad analytical queries. ([Graph RAG in 2026: What Works in Production | paperclipped.de](https://www.paperclipped.de/en/blog/graph-rag-production/))

- **[Slide 04]** Expand the graph database alternatives section — highlight FalkorDB (purpose-built GraphRAG + native vector search, ~$73/mo starter), Memgraph (in-memory, Kafka streaming, 95%+ Neo4j Cypher compatibility), and ArcadeDB (Apache 2.0, multi-model: Cypher/SQL/Gremlin). ([Neo4j Alternatives in 2026 | ArcadeDB](https://arcadedb.com/blog/neo4j-alternatives-in-2026-a-fair-look-at-the-open-source-options/))

- **[Slide 05]** Mention Graphiti and Mem0 as emerging graph-memory alternatives designed for real-time agent memory accumulation (not batch document processing) — relevant when GraphRAG's batch indexing model is too slow for dynamic agent environments. ([Best Knowledge Graph Tools for RAG 2026 | Fastio](https://fast.io/resources/best-knowledge-graph-tools-rag/))

- **[Slide 06]** Note LlamaIndex KnowledgeGraphIndex now ships with plug-in backends for Neo4j, Memgraph, and Nebula, enabling sub-50-line GraphRAG prototypes without infrastructure-level decisions. ([Graph RAG in 2026: Practitioner's Guide | Medium/Graph Praxis](https://medium.com/graph-praxis/graph-rag-in-2026-a-practitioners-guide-to-what-actually-works-dca4962e7517))

---

## Week 07: evaluation

- **[Slide 02]** Update benchmark saturation discussion — MMLU is now effectively saturated (88%+ scores from frontier models); the community has shifted to GPQA Diamond (94.3% by Gemini 3.1 Pro) and ARC-AGI-2 (85% by GPT-5.5) as the live difficulty signals. ([LLM Evaluation Benchmarking 2026 | Zylos Research](https://zylos.ai/research/2026-01-16-llm-evaluation-benchmarking))

- **[Slide 03]** Refresh LLM-as-Judge framing — 2026 best practice recommends using an ensemble of judge models rather than a single judge, and calibrating judges against human ratings on a held-out set; LLM-as-Judge achieves 80–90% human-agreement at 500–5000× lower cost. ([LLM Evaluation Framework 2026 | Meta Intelligence](https://www.meta-intelligence.tech/en/insight-llm-evaluation))

- **[Slide 04]** Add DeepEval as a recommended open-source framework — implements 50+ research-backed metrics, supports both deterministic and LLM-as-Judge evaluation, integrates with CI pipelines; alongside RAGAS and TruLens it now forms the standard open-source evaluation triad for RAG systems. ([RAGAS, TruLens, DeepEval: LLM Evaluation Frameworks | Atlan](https://atlan.com/know/llm-evaluation-frameworks-compared/))

- **[Slide 05]** Add the three-layer evaluation architecture as a recommended pattern — automated benchmarks (broad, cheap) → LLM-as-Judge (moderate depth, low cost) → human evaluation (deep, expensive); each layer feeds failures to the next. ([LLM Evaluation Frameworks 2025 vs 2026 | MLAI Digital](https://www.mlaidigital.com/blogs/llm-evaluation-frameworks-2025-vs-2026-what-matters-now-2026))

- **[Slide 06]** Note the shift from model-level to system-level evaluation — 2026 evaluation frameworks increasingly score full agent pipelines (end-to-end task success, tool call correctness, latency, cost) rather than individual response quality; track this trend in week 07 exercises. ([Best LLM Evaluation Tools of 2026 | Medium/Online Inference](https://medium.com/online-inference/the-best-llm-evaluation-tools-of-2026-40fd9b654dce))

---

## Week 08: mcp

- **[Slide 02]** Update governance section — Anthropic donated MCP to the Agentic AI Foundation (AAIF) under the Linux Foundation (December 2025), co-founded with Block and OpenAI; all major providers (Google, Microsoft, AWS, Cloudflare) have since endorsed the spec. ([Donating the Model Context Protocol | Anthropic](https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation))

- **[Slide 03]** Update adoption statistics — as of April 2026: 10,000+ active public MCP servers, 97 million monthly SDK downloads (Python + TypeScript), 78% of enterprise AI teams report at least one MCP-backed agent in production, 28% of Fortune 500 companies have MCP servers in production workflows. ([MCP Adoption Statistics 2026 | Digital Applied](https://www.digitalapplied.com/blog/mcp-adoption-statistics-2026-model-context-protocol))

- **[Slide 04]** Add MCP Apps (January 2026) — extends MCP beyond text, allowing tools to return interactive UI components (dashboards, forms, charts) that render inside the conversation window; relevant for enterprise reporting and workflow approval use cases. ([Model Context Protocol: Evolution and Rise | Medium/ByteBridge](https://bytebridge.medium.com/model-context-protocol-mcp-evolution-capabilities-and-the-rise-of-peta-ff2967b45d48))

- **[Slide 05]** Cover the 2026 MCP roadmap (published March 9, 2026) — priority 1 is evolving Streamable HTTP for stateless horizontal scaling (no sticky sessions); priority 2 is standardizing MCP Server Cards for metadata and capability discovery. ([MCP Remote Revolution | Zylos Research](https://zylos.ai/research/2026-03-08-mcp-remote-evolution-streamable-http-enterprise-adoption)) ([MCP Roadmap | modelcontextprotocol.io](https://modelcontextprotocol.io/development/roadmap))

- **[Slide 06]** Note Claude's 75+ built-in MCP connectors and Anthropic's Tool Search + Programmatic Tool Calling API features released to help optimize production-scale MCP deployments at runtime. ([Model Context Protocol: Complete 2026 Guide | SurePrompts](https://sureprompts.com/blog/blog/model-context-protocol-mcp-complete-guide-2026))

---

## Week 09: mcp-servers

- **[Slide 02]** Update the enterprise adoption numbers — the public MCP registry has surpassed 9,400 servers (up from ~50 in early 2025); Composio offers 500+ pre-built managed integrations for Slack, GitHub, Jira, Salesforce, and ServiceNow. ([9 Best MCP Servers for Enterprise 2026 | Prefect](https://www.prefect.io/resources/best-mcp-deployment-platforms-enterprise-2026))

- **[Slide 03]** Add MCP Gateway as an architectural pattern — an enterprise MCP gateway sits between agents and servers, centralizing auth, enforcing tool-level access policies, capturing audit trails, and routing traffic; Bifrost, Mintmcp, and Maxim are leading gateway products in 2026. ([Best MCP Gateways for Enterprise Engineering Teams 2026 | MintMCP](https://www.mintmcp.com/blog/gateways-enterprise-engineering-with-mcp))

- **[Slide 04]** Add a section on prebuilt connectors for Salesforce, SAP, Snowflake, and ServiceNow — managed connectors from CData and others ship with schema definitions and auth templates, dramatically shortening time-to-production compared to hand-rolled MCP server code. ([How Enterprises Should Implement MCP Integration 2026 | CData](https://www.cdata.com/blog/mcp-integration-roadmap-2026))

- **[Slide 05]** Cover `.well-known/mcp.json` server discovery — a 2026 convention allowing clients to auto-discover available MCP servers at a domain, analogous to `robots.txt`; being adopted in larger multi-server deployments. ([MCP Server Discovery: Implement .well-known/mcp.json | Ekamoira](https://www.ekamoira.com/blog/mcp-server-discovery-implement-well-known-mcp-json-2026-guide))

- **[Slide 06]** Update security section — enterprise MCP deployments in regulated industries are using Bifrost-style gateways with on-prem/air-gapped deployment support; emphasize that every tool invocation should go through a governed control plane. ([Enterprise MCP Implementation Guide | CData](https://www.cdata.com/blog/implementing-mcp-enterprise-environments))

---

## Week 10: multi-agent

- **[Slide 02]** Update LangGraph section — LangGraph reached v0.4 (April 2026) with redesigned HITL checkpoints that surface automatically in `.invoke()` responses, durable Postgres/Redis state persistence, and improved graph-based audit trails; it now leads CrewAI in GitHub stars. ([LangGraph v0.4: HITL Checkpoints and State Persistence | AI Tech Connect](https://aitechconnect.in/news/langgraph-v04-hitl-checkpoints-state-persistence))

- **[Slide 03]** Update AutoGen section — AutoGen v1.0 GA ships the v2 API as default; Microsoft merged AutoGen with Semantic Kernel to form the Microsoft Agent Framework (MAF), targeting enterprise .NET workloads with production-grade middleware and observability. ([AI Agent Frameworks 2026 | PEC Collective](https://pecollective.com/blog/ai-agent-frameworks-compared/))

- **[Slide 04]** Update CrewAI section — CrewAI shipped enterprise-grade observability and scheduling; powers roughly 2 billion agentic executions and is used by 60%+ of Fortune 500 companies; CrewAI Flows is the recommended architecture for production multi-agent pipelines. ([Multi-Agent AI in 2026 | DEV Community](https://dev.to/ottoaria/multi-agent-ai-in-2026-build-production-systems-with-crewai-langgraph-autogen-5e40))

- **[Slide 05]** Add a framework-selection heuristic slide — LangGraph for graph-shaped stateful workflows with audit requirements; CrewAI for role-based crews where task assignment should be declarative; AutoGen/MAF for .NET-centric enterprise environments or conversational GroupChat patterns. ([LangGraph vs CrewAI vs AutoGen | Towards AI](https://pub.towardsai.net/langgraph-vs-crewai-vs-autogen-which-ai-agent-framework-should-your-enterprise-use-in-2026-3a9ebb407b09))

- **[Slide 06]** Introduce multi-model routing as a production multi-agent pattern — orchestrators in 2026 dynamically route subtasks across GPT-5.4, Claude Opus 4.7, and Gemini 3.1 Pro based on cost, latency, and capability requirements. ([From GPT-5.5 to DeepSeek V4: Multi-Model Routing in 2026 | AIThority](https://aithority.com/machine-learning/from-gpt-5-5-to-deepseek-v4-how-developers-are-building-smarter-ai-agents-with-multi-model-routing-in-2026/))

---

## Week 11: hitl-memory

- **[Slide 02]** Refresh LangGraph HITL implementation details for v0.4 — `interrupt()` function pauses graph execution and now surfaces `Interrupt` objects automatically in `.invoke()` return values; `AsyncPostgresSaver` is the recommended production checkpointer; `MemorySaver` should be development-only. ([LangGraph v0.4: HITL Checkpoints | AI Tech Connect](https://aitechconnect.in/news/langgraph-v04-hitl-checkpoints-state-persistence)) ([Persistence | LangChain Docs](https://docs.langchain.com/oss/python/langgraph/persistence))

- **[Slide 03]** Add the "Human-on-the-Loop" vs "Human-in-the-Loop" distinction that has emerged in 2026 practice — HITL requires synchronous approval before each action; HOTL monitors asynchronously and intervenes only on anomalies; most production agentic systems now prefer HOTL for throughput with HITL reserved for high-stakes irreversible actions. ([Human-in-the-Loop vs Human-on-the-Loop | Waxell](https://www.waxell.ai/blog/human-in-the-loop-vs-human-on-the-loop-ai-agents))

- **[Slide 04]** Update agent memory architecture to the dual-layer production standard — Hot Path (in-session vector + BM25 + entity retrieval, low latency) + Cold Path (cross-session consolidation, fact merging, staleness pruning); both paths are coordinated by a dedicated Memory Node. ([State of AI Agent Memory 2026 | Mem0](https://mem0.ai/blog/state-of-ai-agent-memory-2026))

- **[Slide 05]** Add Mem0 benchmarks — on the LoCoMo benchmark, Mem0's multi-signal retrieval (semantic similarity + BM25 + entity matching) outperforms OpenAI's native memory by ~26% accuracy at lower latency and token cost; LoCoMo, LongMemEval, and BEAM are the standard memory benchmarks in 2026. ([What Is Agent Memory Infrastructure? | MindStudio](https://www.mindstudio.ai/blog/agent-memory-infrastructure-mem0-vs-openai))

- **[Slide 06]** Highlight Cloudflare Agents as a serverless HITL platform — provides built-in durable execution, human-approval hooks, and hibernation for long-running agents; relevant as an alternative to self-hosted LangGraph deployments. ([Human in the Loop | Cloudflare Agents Docs](https://developers.cloudflare.com/agents/concepts/human-in-the-loop/))

---

## Week 12: small-models

- **[Slide 02]** Update model roster — add Mistral Small 4 (March 16, 2026): hybrid model unifying instruct, reasoning, multimodal, and coding; Llama 4 Scout (17B active / 109B MoE) fits in ~10 GB VRAM and is runnable on consumer hardware via Ollama; Qwen 3.6 27B (May 2026) hits 77.2% SWE-bench. ([Mistral Small 4 Benchmarks | llm-stats.com](https://llm-stats.com/models/mistral-small-latest)) ([New Open Source LLM Releases April 2026 | fazm.ai](https://fazm.ai/blog/new-open-source-llm-releases-april-2026))

- **[Slide 03]** Add cost comparison data — running an SLM on a private endpoint for 10,000 daily queries typically costs $500–$2,000/month vs $5,000–$50,000 for equivalent frontier API usage; this ~10–32× cost differential is now a standard business-case data point. ([Small Language Models vs LLMs: Business Guide 2026 | lucas8.com](https://lucas8.com/small-language-models-vs-llms/))

- **[Slide 04]** Highlight Phi-4-mini (3.8B) as a benchmark-beating edge model — runs at 15–20 tok/s on M1 MacBook Air at Q4_K_M, matches GPT-4o on structured extraction benchmarks, and fits comfortably on entry-level hardware. ([Small Language Models in 2026: Phi-4 and Gemma 3 | MasterPrompting](https://masterprompting.net/blog/small-language-models-phi4-gemma-on-device-2026))

- **[Slide 05]** Update the data sovereignty discussion — on-device inference now delivers frontier-comparable performance for many tasks, making data-sovereignty (all inference on-prem) a viable production choice rather than a niche constraint. ([Best Local LLM Models 2026 | SitePoint](https://www.sitepoint.com/best-local-llm-models-2026/))

- **[Slide 06]** Add the "right-sizing ladder" framing from 2026 practitioner guidance — Prompt engineering → RAG → SLM fine-tune → Distill; skip to the lowest rung that meets quality requirements rather than defaulting to frontier models. ([Best Open-Source Small Language Models 2026 | BentoML](https://www.bentoml.com/blog/the-best-open-source-small-language-models))

---

## Week 13: distillation

- **[Slide 02]** Add GRPO (Group Relative Policy Optimization, from DeepSeek R1) as an important alignment technique alongside DPO — removes the reward model and value model entirely, saving memory and accelerating training; now supported natively in Unsloth and Hugging Face TRL v1.0 (April 2026). ([Reinforcement Learning GRPO | Unsloth Documentation](https://unsloth.ai/docs/get-started/reinforcement-learning-rl-guide)) ([Hugging Face TRL v1.0 | MarkTechPost](https://www.marktechpost.com/2026/04/01/hugging-face-releases-trl-v1-0-a-unified-post-training-stack-for-sft-reward-modeling-dpo-and-grpo-workflows/))

- **[Slide 03]** Update QLoRA efficiency numbers — a single A100 80GB fine-tunes Llama 3 8B in ~6 hours on 50k examples for ~$12 using Unsloth + QLoRA; Unsloth's extended-context GRPO now supports up to 110K context on an 80GB H100, 7× longer than vanilla implementations. ([Unsloth vs Traditional Fine-Tuning | Yotta Labs](https://www.yottalabs.ai/post/unsloth-vs-traditional-fine-tuning-faster-grpo-training-explained))

- **[Slide 04]** Cover KD-LoRA as a hybrid technique — combines LoRA adapters with knowledge distillation signal from a teacher model, achieving performance comparable to full fine-tuning at significantly lower resource requirements; published as arXiv:2410.20777. ([KD-LoRA: A Hybrid Approach | arXiv:2410.20777](https://arxiv.org/abs/2410.20777))

- **[Slide 05]** Reinforce DPO over RLHF for alignment — DPO has largely displaced RLHF in 2026 production teams (cheaper, more stable, comparable quality); TRL v1.0 treats DPO, GRPO, ORPO, and reward modeling as first-class pipelines in the same unified API. ([LLM Fine-Tuning Best Practices 2026 | hjLabs](https://hjlabs.in/AIML/blog/post/llm-fine-tuning-best-practices.html))

- **[Slide 06]** Update the "when to fine-tune vs RAG" guidance — 2026 consensus: use RAG first for dynamic knowledge; fine-tune for style, format, or domain vocabulary that RAG cannot handle; distill when deploying to constrained edge hardware. ([Fine-Tuning LLMs in 2026: When RAG Isn't Enough | BigData Boutique](https://bigdataboutique.com/blog/fine-tuning-llms-when-rag-isnt-enough))

---

## Week 14: safety

- **[Slide 02]** Introduce the OWASP Top 10 for Agentic Applications 2026 — a dedicated, peer-reviewed framework (100+ contributors) that supersedes the LLM Top 10 for agent contexts; key additions include Agent Goal Hijack, Tool Misuse, Delegated Trust failures, and Rogue Agents. ([OWASP Top 10 for Agentic Applications 2026 | OWASP GenAI](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/)) ([OWASP Top 10 for Agents | Palo Alto Networks Blog](https://www.paloaltonetworks.com/blog/cloud-security/owasp-agentic-ai-security/))

- **[Slide 03]** Update prompt injection attack data — November 2025 study showed rephrasing malicious requests as rhyming stanzas raised attack success to 62%; roleplay framing achieves 89.6% bypass rates; adversarial poetry and character-flip obfuscation are now documented attack vectors. ([Red Teaming Vulnerability: Prompt Poetry Breaks AI Guardrails | AI CERTs](https://www.aicerts.ai/news/red-teaming-vulnerability-prompt-poetry-breaks-ai-guardrails/))

- **[Slide 04]** Replace single-filter guardrail advice with a seven-layer defense model — input handling, output filtering, capability sandboxing, privilege separation, canary tokens, policy engines, and continuous red teaming; no single layer is sufficient against indirect prompt injection. ([Prompt Injection Defense for AI Agents 2026 | Rapid Claw](https://rapidclaw.dev/blog/prompt-injection-defense-production-agents-2026))

- **[Slide 05]** Add EU AI Act enforcement timeline — conformity assessments for high-risk AI systems are due by August 2, 2026; adversarial testing is now a legal requirement for high-risk categories (employment, credit scoring, healthcare, critical infrastructure). ([AI Regulations and Governance 2026 | Sombra](https://sombrainc.com/blog/ai-regulations-2026-eu-ai-act))

- **[Slide 06]** Add the Least-Agency principle from the OWASP 2026 agentic framework — agents should be granted only the minimum autonomy required for their defined task; pair with Strong Observability (detailed logging of goal state, tool-use patterns, and decision pathways) as a non-negotiable security control. ([OWASP Top 10 for Agentic Applications 2026 | NeuralTrust](https://neuraltrust.ai/blog/owasp-top-10-for-agentic-applications-2026))

- **[Slide 07]** Note that runtime guardrail products (Straiker, Noma Security, Lakera) have emerged as a distinct product category in 2026, offering drop-in middleware for agentic pipelines; worth comparing to the open-source `guardrails-ai` library in course exercises. ([Runtime AI Guardrails for Agentic Applications | Straiker](https://www.straiker.ai/solution/guardrails))

---

## Week 15: capstone

This is the student showcase week; there is no lecture content to refresh.
