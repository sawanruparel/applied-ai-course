# Course Refresh — 2026-06-08

Generated manually (ANTHROPIC_API_KEY not available in sandbox) against 15 lectures.
Each section summarises recent developments (approx. March–June 2026) relevant to the slides,
based on web searches conducted 2026-06-08. The instructor reviews and decides what to incorporate.

---

## Week 01: landscape

- **Update frontier model table: GPT-5.5 shipped April 23, 2026.** OpenAI's GPT-5.5 ("Spud") is natively omnimodal, scores 82.7% on Terminal-Bench 2.0 and 51.7% on FrontierMath Tier 1–3, has a 1M-token context window (long-context reasoning jumped from 36.6% in GPT-5.4 to 74.0%), and is priced at $5/$30 per million input/output tokens. ([OpenAI announcement](https://openai.com/index/introducing-gpt-5-5/))

- **Update "Claude evolution" slide: Claude Opus 4.8 released May 28, 2026.** Opus 4.8 leads the Intelligence Index at score 61, achieves 88.6% on SWE-bench Verified, 74.6% on Terminal-Bench 2.1, includes a 1M-token beta context window, an explicit memory tool, and an `effort` parameter for speed/capability trade-off. **Important deprecation:** Claude Sonnet 4 and Claude Opus 4 (non-.8) are deprecated as of June 15, 2026. ([Anthropic news](https://www.anthropic.com/news/claude-opus-4-8)) ([Deprecation timeline](https://platform.claude.com/docs/en/about-claude/model-deprecations))

- **Update open-models section: Llama 4 Scout & Maverick shipped April 5, 2026.** Scout holds the open-weight context record at 10M tokens (17B active / 109B total, 16-expert MoE); Maverick (17B active / 400B total, 128 experts) beats GPT-4o on multimodal benchmarks. Both are natively multimodal and trained on 30T+ tokens across 200 languages. ([Meta blog](https://ai.meta.com/blog/llama-4-multimodal-intelligence/)) ([Hugging Face](https://huggingface.co/blog/llama4-release))

- **Update "DeepSeek R1" slide: DeepSeek V4 shipped April 24, 2026; R2 was delayed.** DeepSeek V4-Pro (1.6T params) and V4-Flash (284B) both feature 1M-token context, run on Huawei Ascend chips, are MIT-licensed, and V4-Flash is priced at $0.14/M input tokens. R2 was deferred due to performance concerns and export-control chip constraints. ([DeepSeek API docs](https://api-docs.deepseek.com/news/news260424))

- **Update Gemini section: Gemini 2.5 reached GA (Feb 19) and Gemini 3.1 Pro leads GPQA Diamond.** Gemini 2.5 Flash GA added thinking/chain-of-thought capabilities; Gemini 3.1 Pro scores 94.3% on GPQA Diamond and 77.1% on ARC-AGI-2. ([Google Developers Blog](https://developers.googleblog.com/en/gemini-2-5-thinking-model-updates/)) ([Cloud blog GA](https://cloud.google.com/blog/products/ai-machine-learning/gemini-2-5-flash-lite-flash-pro-ga-vertex-ai))

- **Add o3/o4-mini to the "System 2 / inference compute" section.** OpenAI o3 and o4-mini expose a `reasoning_effort` dial (low/medium/high) that directly controls the thinking-token budget. o4-mini matches o3 on math/science/code benchmarks at ~50% lower cost — now the recommended choice for STEM agentic workloads. ([OpenAI o3 announcement](https://openai.com/index/introducing-o3-and-o4-mini/)) ([Reasoning best practices](https://developers.openai.com/api/docs/guides/reasoning-best-practices))

- **Update inference-compute slide: algorithmic efficiency is collapsing cost faster than hardware.** Frontier GPQA-Diamond-class model pricing dropped ~31× per year via algorithmic progress alone; RL scaling requires ~10,000× more compute to match what 100× inference-time compute provides. ([Epoch AI](https://epoch.ai/gradient-updates/how-persistent-is-the-inference-cost-burden)) ([arXiv:2511.23455](https://arxiv.org/pdf/2511.23455))

- **Update compound-systems / multi-model routing discussion.** Gartner estimates 40% of enterprise applications will embed AI agents by end of 2026 (vs. <5% in 2025). Production teams route across GPT-5.5, Claude Opus 4.8, and DeepSeek V4-Flash based on task type and cost. ([Multi-model routing 2026 — AIThority](https://aithority.com/machine-learning/from-gpt-5-5-to-deepseek-v4-how-developers-are-building-smarter-ai-agents-with-multi-model-routing-in-2026/))

---

## Week 02: prompting

- **Update CoT best-practices: reasoning models require a fundamentally different prompting approach.** For o3, Claude Opus 4.8 extended-thinking, and Gemini 3.x thinking modes, do NOT enumerate step-by-step instructions — these models plan internally. State the goal; let the model strategize. ([SurePrompts guide](https://sureprompts.com/blog/ai-reasoning-models-prompting-complete-guide-2026)) ([Microsoft Tech Community](https://techcommunity.microsoft.com/blog/azure-ai-services-blog/prompt-engineering-for-openai%E2%80%99s-o1-and-o3-mini-reasoning-models/4374010))

- **Add a dedicated slide on `reasoning_effort` as a new prompt-engineering lever.** For o3/o4-mini, `reasoning_effort: "high"` vs. `"low"` is now the primary way to trade cost for quality on hard tasks — more impactful than prompt wording. The slide on "temperature" should note that temperature is largely ignored by reasoning models; separate guidance by model type. ([OpenAI API docs](https://developers.openai.com/api/docs/guides/reasoning-best-practices)) ([o3/o4-mini prompting guide](https://developers.openai.com/cookbook/examples/o-series/o3o4-mini_prompting_guide))

- **Update structured-output section: JSON Schema enforcement is now stable across major APIs.** Use structured outputs to separate reasoning from output format entirely; o3 and Claude 4.x reliably honor schema constraints. System prompts for persona/rules; user messages for constraints co-located with the task. ([Promptessor best practices](https://promptessor.com/blog/prompt-engineering-best-practices-2026))

- **Add Graph-of-Thoughts to the ToT/AoT taxonomy slide.** Graph-of-Thoughts generalizes Tree-of-Thoughts into a DAG, enabling parallel and dynamic multi-path reasoning. Add alongside Plan-and-Solve and Algorithm-of-Thoughts. ([orq.ai CoT guide](https://orq.ai/blog/what-is-chain-of-thought-prompting))

- **Add a note on CoT faithfulness research.** FaithCoT-Bench (arXiv:2510.04040) introduces instance-level faithfulness benchmarking of CoT reasoning — a growing concern when CoT is used as an interpretability mechanism. ([arXiv 2510.04040](https://arxiv.org/pdf/2510.04040))

- **Update meta-prompting / self-training slide.** "Rethinking CoT from Self-Training" (arXiv:2412.10827) shows CoT paths can be self-trained without human-labeled reasoning chains, which changes the calculus for when to annotate manually. ([arXiv 2412.10827](https://arxiv.org/pdf/2412.10827))

---

## Week 03: dev-stack

- **Update framework status: LangChain 1.2.7 / LangGraph 1.0.7 are LTS (since October 2025).** `AgentExecutor` is deprecated and in maintenance-only mode until December 2026. New projects must use `create_react_agent()` or LangGraph `StateGraph`. Warn students: upgrading pre-1.0 → 1.0 in production has non-trivial lessons. ([LangGraph 1.0 GA changelog](https://changelog.langchain.com/announcements/langgraph-1-0-is-now-generally-available)) ([TDS upgrade lessons](https://towardsdatascience.com/lessons-learnt-from-upgrading-to-langchain-1-0-in-production/))

- **Add a migration slide: AgentExecutor → `create_react_agent` → full `StateGraph`.** `create_react_agent()` is the recommended path for most cases (runs LangGraph internally); full `StateGraph` only when you need per-node control — checkpointing, streaming, HITL interrupts, multi-agent handoffs. LangGraph 1.0 also added the v3 streaming API with typed, per-channel projections. ([LangGraph 1.0 deep-dive](https://medium.com/@romerorico.hugo/langgraph-1-0-released-no-breaking-changes-all-the-hard-won-lessons-8939d500ca7c)) ([Digital Applied](https://www.digitalapplied.com/blog/langchain-1-deep-dive-agent-protocol-runtime-2026))

- **Elevate PydanticAI on the framework comparison slide.** PydanticAI provides Pydantic validation for LLM outputs with significantly faster P95 latency and lower token consumption than LangChain in production benchmarks. The emerging production pattern is PydanticAI (defines what an agent does) + LangGraph (defines how agents interact). ([PydanticAI vs LangGraph — ZenML](https://www.zenml.io/blog/pydantic-ai-vs-langgraph)) ([aiagentskit comparison](https://aiagentskit.com/blog/pydantic-ai-vs-langchain-vs-langgraph/))

- **Add the Claude Agent SDK as a first-class framework entry.** Renamed from Claude Code SDK in September 2025; ships Python + TypeScript; features subagents, persistent sessions, MCP client support, and HITL checkpoints. As of May 2026, it targets Sonnet 4.6, Opus 4.7, and Opus 4.8. Note: starting June 15, 2026, usage on subscription plans draws from a separate monthly credit. ([Anthropic Agent SDK overview](https://platform.claude.com/docs/en/agent-sdk/overview)) ([Anthropic engineering blog](https://www.anthropic.com/engineering/building-agents-with-the-claude-agent-sdk))

- **Update the 2026 framework landscape beyond LangChain/PydanticAI.** The comparison table should include CrewAI, AG2 (AutoGen successor), Strands (AWS), and the Claude Agent SDK — all active alternatives in the 2026 agent framework landscape. ([QubitTool 2026 showdown](https://qubittool.com/blog/ai-agent-framework-comparison-2026))

- **Add Hugging Face TRL v1.0 (April 2026) to the training-stack section.** Unified post-training API for SFT, reward modeling, DPO, and GRPO; integrates Unsloth kernels for 2× speed and 70% memory reduction. ([Hugging Face TRL v1.0 — MarkTechPost](https://www.marktechpost.com/2026/04/01/hugging-face-releases-trl-v1-0-a-unified-post-training-stack-for-sft-reward-modeling-dpo-and-grpo-workflows/))

---

## Week 04: knowledge-rep

- **Update the embedding model comparison table: Qwen3-Embedding-8B is now the open-weight leader.** Scores 70.6 on MTEB, surpassing OpenAI text-embedding-3-large (64.6) and Google Gemini Embedding (68.3). Supports 100+ languages, #1 on the MTEB multilingual leaderboard as of June 2025. ([Hugging Face](https://huggingface.co/Qwen/Qwen3-Embedding-8B)) ([Milvus blog](https://milvus.io/blog/choose-embedding-model-rag-2026.md))

- **Add Voyage AI voyage-3-large as the top API option for domain-specific retrieval.** Outperforms all competitors by 4–6 MTEB points on code, legal, medical, and financial text. Prefer over OpenAI text-embedding-3-large for specialized corpora. ([Voyage 3.5 comparison](https://www.buildmvpfast.com/blog/best-embedding-model-comparison-voyage-openai-cohere-2026))

- **Add Qwen3-VL-Embedding-8B for multimodal retrieval contexts.** Scored 77.8 on MMEB-V2 (Jan 2026), outperforming all models including closed-source APIs on cross-modal tasks. ([arXiv on Qwen3-VL](https://arxiv.org/pdf/2601.04720))

- **Update vector database comparison: pgvector is now tier-1 production-ready.** Multiple 2026 practitioner guides list pgvector alongside Pinecone, Qdrant, and Weaviate. Qdrant 1.12 (Rust-based, self-hosted) wins on price-performance at scale; Pinecone Serverless remains lowest-ops. ([Kalvium labs comparison](https://www.kalviumlabs.ai/blog/vector-databases-compared-pgvector-pinecone-qdrant-weaviate/)) ([Digital Applied 2026 guide](https://www.digitalapplied.com/blog/vector-databases-for-ai-agents-pinecone-qdrant-2026))

- **Update context-management section: 10M-token context (Llama 4 Scout) changes the chunking calculus.** With open-weight models supporting 10M tokens, discuss when long-context stuffing competes with RAG chunking — economics favor retrieval below ~50 pages, long-context is viable for single large documents. The economics of each approach have shifted significantly. ([Llama 4 Scout context window](https://www.llama.com/models/llama-4/))

- **Add MTEB as the canonical embedding evaluation framework.** Students evaluating embedding models should know how to read the [MTEB leaderboard](https://huggingface.co/spaces/mteb/leaderboard) — it is now the de facto reference in all 2026 benchmark tables.

---

## Week 05: rag

- **Add the Agentic RAG Survey (arXiv:2501.09136, Jan 2026) as a required-reading reference.** Provides a principled taxonomy of Agentic RAG architectures by agent cardinality, control structure, autonomy, and knowledge representation — the field's first systematic survey. ([arXiv 2501.09136](https://arxiv.org/abs/2501.09136))

- **Update CRAG slide with the three-way routing detail.** Production CRAG now has three named corrective paths: (a) correct — pass retrieved results through; (b) incorrect — discard stale results, search externally; (c) ambiguous — keep retrieved results AND search externally. This three-way routing is the production pattern, not a binary decision. ([letsdatascience.com](https://letsdatascience.com/blog/agentic-rag-self-correcting-retrieval)) ([marsdevs.com](https://www.marsdevs.com/guides/agentic-rag-2026-guide))

- **Add the Higress-RAG framework (arXiv:2602.23374, Feb 2026) as a production CRAG case study.** Combines adaptive routing, semantic caching, and dual hybrid retrieval; achieves >90% recall on enterprise datasets — the first enterprise-scale CRAG with published recall numbers. ([letsdatascience.com agentic RAG](https://letsdatascience.com/blog/agentic-rag-self-correcting-retrieval))

- **Update hybrid retrieval slide: Reciprocal Rank Fusion (RRF) is now the standard fusion algorithm.** RRF sidesteps score-incompatibility between BM25 and vector scores. Production pattern: BM25 + vector → RRF top-50/100 → reranker top-5/10. ([appscale.blog](https://appscale.blog/en/blog/hybrid-search-and-reranking-production-rag-bm25-dense-cross-encoder-2026)) ([Digital Applied](https://www.digitalapplied.com/blog/hybrid-search-bm25-vector-reranking-reference-2026))

- **Update reranking slide with 2026 competitive landscape.** Cohere Rerank 3.5, Voyage rerank-2.5, and mxbai-rerank-large-v2 are within 1–3 NDCG@10 points of each other on English corpora. Cohere Rerank 3.5 is the defensible default (~$1/1000 queries); mxbai-rerank is the open-weight option. ([bestaiweb.ai](https://www.bestaiweb.ai/how-to-add-reranking-to-your-rag-pipeline-with-cohere-rerank-4-pro-voyage-rerank-2-5-and-zerank-2-in-2026/))

- **Add the RAGSmith evaluation framework (arXiv:2511.01386) to the evaluation slide.** Provides a systematic approach to finding the optimal RAG composition per dataset — useful as an eval-design tool alongside RAGAS. ([arXiv 2511.01386](https://arxiv.org/pdf/2511.01386))

---

## Week 06: graphrag

- **Update GraphRAG release timeline.** Three significant releases in the March–May 2026 window: v3.0.6 (Mar 6, NLP streaming + phantom-entity removal), v3.0.9 (Apr 13, Parquet input + CVE-2025-14009 patch), v3.1.0 (May 28, native `CosmosTableProvider` with namespace partitioning and transactional batch writes). Update version references throughout. ([microsoft/graphrag releases](https://github.com/microsoft/graphrag/releases))

- **Update import structure for GraphRAG v3 monorepo split.** GraphRAG v3 split into discrete packages: `graphrag-cache`, `graphrag-chunking`, `graphrag-llm`, `graphrag-storage`, `graphrag-vectors`. Slides referencing the old single-package import are now incorrect. ([breaking-changes.md](https://github.com/microsoft/graphrag/blob/main/breaking-changes.md))

- **Add PathRAG (arXiv:2502.14902) as a lightweight alternative.** PathRAG prunes graph retrieval to key relational paths between query-related nodes using flow-based pruning, reducing token consumption vs. community-summarization. Good contrast slide: global summarization (GraphRAG) vs. path-local retrieval (PathRAG). ([arXiv 2502.14902](https://arxiv.org/abs/2502.14902))

- **Add HyperGraphRAG (arXiv:2503.21322, accepted NeurIPS 2025) as the "beyond binary edges" frontier.** Extends knowledge graphs to hyperedges modeling n-ary relations; outperforms GraphRAG across medicine, law, and agriculture. ([arXiv 2503.21322](https://arxiv.org/abs/2503.21322)) ([GitHub](https://github.com/LHRLAB/HyperGraphRAG))

- **Add a "when to use graph RAG" slide based on June 2026 synthesis.** A new analysis (arXiv:2506.05690, June 2026) confirms: graph RAG's advantage scales with query complexity and disappears for simple factoid retrieval. GraphRAG is not universally better than vector RAG. ([arXiv 2506.05690](https://arxiv.org/abs/2506.05690))

- **Update LazyGraphRAG framing from "experimental" to "production-grade."** LazyGraphRAG is now embedded in Microsoft Discovery (Microsoft's agentic scientific research platform), demonstrating production use at Azure scale. ([Microsoft Research GraphRAG project](https://www.microsoft.com/en-us/research/project/graphrag/))

---

## Week 07: evaluation

- **Add a positional-bias quantification slide.** A 2026 RAND study found frontier LLM judges exceed 50% error rates on challenging bias benchmarks. Positional bias alone accounts for a 10–15 percentage-point winrate swing on close pairwise comparisons. Mitigation: swap A/B positions and average the scores. ([Adaline analysis](https://www.adaline.ai/blog/llm-as-a-judge-reliability-bias))

- **Update the RAGAS slide with the v1 → v2 migration note.** RAGAS is migrating from `PydanticPrompt`-based metrics (v1) to function-based prompts (v2) — a breaking architectural change. Students building new pipelines should use the v2 API. Production thresholds remain: faithfulness ≥ 0.75, answer relevancy ≥ 0.80, context precision ≥ 0.70, context recall ≥ 0.80. ([ragas.io](https://www.ragas.io/))

- **Add MLflow's native RAGAS/DeepEval integration as a tooling option.** MLflow now integrates DeepEval, RAGAS, and Arize Phoenix scorers through a single Scorer API, giving access to 50+ metrics through one UI — significant for students on Azure ML or Databricks. ([MLflow third-party scorers](https://mlflow.org/blog/third-party-scorers/))

- **Update the DeepEval slide: version 4.0 adds agent-native evaluation.** DeepEval 4.0 introduced an agent-native eval workflow targeting coding agents and rapid debugging loops, not just batch RAG evaluation. ([DeepEval changelog](https://deepeval.com/changelog/changelog-2026))

- **Add a low-resource language limitation note.** A 2026 ACL paper demonstrates that RAGAS and LLM-judge approaches degrade significantly for non-English languages — automated evaluation is largely validated only on English corpora. ([ACL 2026 — LLM-as-a-Judge for Low-Resource Languages](https://aclanthology.org/2026.loreslm-1.15/))

- **Update the evaluation landscape segmentation.** By April 2026: RAGAS provides conceptual framework, DeepEval delivers CI/CD integration, Patronus handles hallucination detection, Langfuse covers production tracing, and Lynx addresses bias evaluation. Replace any "emerging" framing with this segmentation. ([koiro.me blog](https://blog.koiro.me/en/2026/04/30/rag-evaluation-metrics-2026/))

---

## Week 08: mcp

- **Adopt the 2025-11-25 specification as the current canonical spec.** The November 2025 spec shipped: async Tasks primitive, enhanced sampling, elicitation, server-side agent loops, Client ID Metadata Documents, client security requirements, and the extensions system. Update all spec-reference slides. ([modelcontextprotocol.io/specification/2025-11-25](https://modelcontextprotocol.io/specification/2025-11-25))

- **Add the 2026 MCP roadmap slide (published March 2026).** Four priorities: (1) stateless transport / horizontal scaling via Streamable HTTP, (2) Tasks primitive hardening with retry semantics and expiry, (3) governance maturation with a contributor ladder and Working Groups, (4) enterprise readiness (audit trails, SSO-integrated auth, gateway behavior). ([Official 2026 roadmap](https://blog.modelcontextprotocol.io/posts/2026-mcp-roadmap/))

- **Update the auth slide for OAuth 2.1 mandate.** The 2025-06-18 spec revision mandated OAuth 2.1 as the auth basis: PKCE required for all clients, RFC 9728 Protected Resource Metadata, RFC 8414 authorization-server metadata, RFC 8707 resource indicators to bind tokens to a specific MCP server. ([WorkOS MCP guide](https://workos.com/blog/everything-your-team-needs-to-know-about-mcp-in-2026))

- **Add a security threat model slide.** arXiv:2603.22489 provides a formal MCP threat model: tool poisoning (malicious instructions embedded in tool metadata), cross-tool escalation, and server impersonation. A 2026 disclosure exposed ~200,000 vulnerable MCP instances; Trend Micro found 492 MCP servers on the public internet with zero authentication. ([arXiv 2603.22489](https://arxiv.org/abs/2603.22489)) ([Practical DevSecOps](https://www.practical-devsecops.com/mcp-security-vulnerabilities/))

- **Preview the 2026-07-28 Release Candidate (announced May 2026).** Introduces stateless protocol core (servers can run behind round-robin load balancers), MCP Apps (interactive HTML UI in sandboxed iframes), the Tasks extension for async tool calls, and a formal 12-month deprecation policy. ([RC announcement](https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/))

- **Add tool annotations / security vocabulary.** The March 16, 2026 MCP blog post "Tool Annotations as Risk Vocabulary" examines how annotation hints can (and cannot) communicate tool risk to hosts — connects directly to the prompt injection content. ([blog.modelcontextprotocol.io](https://blog.modelcontextprotocol.io/))

---

## Week 09: mcp-servers

- **Update SDK version references.** TypeScript SDK v1.27.1 (Feb 24, 2026) is current stable: adds auth/pre-registration conformance testing, fixes a command injection vulnerability in URL handling, and patches silently swallowed transport errors. Python SDK is at v1.27 (April 2026). Update any pinned version numbers in lab scaffolding. ([TypeScript SDK releases](https://github.com/modelcontextprotocol/typescript-sdk/releases))

- **Add FastMCP 3.0 as the recommended Python starting point.** Released January 19, 2026: component versioning, granular authorization, OpenTelemetry instrumentation, multiple provider types (FileSystem, Skills, OpenAPI). It is now the de facto "batteries-included" Python MCP server framework — a better lab starting point than the bare `mcp` package. ([FastMCP tutorial](https://www.firecrawl.dev/blog/fastmcp-tutorial-building-mcp-servers-python))

- **Update the debugging lab to use the March 2026 MCP Inspector.** FastMCP's built-in debugging surface launches Inspector automatically at `http://127.0.0.1:6274`. Add this to lab instructions for visual tool schema and protocol conformance debugging. ([MCP Inspector docs](https://modelcontextprotocol.io/docs/tools/inspector))

- **Add an OAuth/auth conformance lab exercise.** Auth conformance is the #1 source of "works in demo, breaks in production" failures for enterprise MCP integrations. Add a lab extension where students add OAuth 2.1 + PKCE to an existing server using v1.27 auth helpers. ([Context Studios analysis](https://www.contextstudios.ai/blog/mcp-ecosystem-in-2026-what-the-v127-release-actually-tells-us))

- **Update the security checklist: add a tool-poisoning pre-deployment check.** Based on arXiv:2603.22489: validate that tool descriptions contain no hidden instructions, server outputs are sanitized before re-injection, and the MCP Inspector static analysis pass runs clean. ([Microsoft Developer Blog](https://developer.microsoft.com/blog/protecting-against-indirect-injection-attacks-mcp))

- **Add enterprise tooling reference for Jira/Slack integration exercises.** [10 MCP Server Builder Tools for Enterprise Teams in 2026](https://jinba.io/blog/top-mcp-server-tools-enterprise-2026) compares Speakeasy, Stainless, Apify hosted infrastructure, and Composio (500+ pre-built managed integrations), reducing time-to-production for students who don't want to hand-roll OAuth flows.

---

## Week 10: multi-agent

- **Replace AutoGen with Microsoft Agent Framework 1.0 as the primary Microsoft example.** On April 3, 2026, Microsoft shipped Agent Framework 1.0 GA, unifying Semantic Kernel and AutoGen into one .NET + Python SDK. AutoGen and Semantic Kernel are now in maintenance mode (security patches only, no new features). ([Visual Studio Magazine](https://visualstudiomagazine.com/articles/2026/04/06/microsoft-ships-production-ready-agent-framework-1-0-for-net-and-python.aspx)) ([Microsoft Learn](https://learn.microsoft.com/en-us/agent-framework/overview/))

- **Add Google ADK 1.0 GA as a dedicated slide.** ADK graduated to v1.0 GA across Python, Go, Java, and TypeScript at Google Cloud Next 2026 (April). Standout feature: native A2A support, enabling an ADK agent to discover and invoke LangGraph or CrewAI agents via A2A's standardized task interface. Replace any "ADK is beta" framing. ([Google Developers Blog](https://developers.googleblog.com/adk-go-10-arrives/))

- **Add the A2A (Agent-to-Agent) protocol as a new standard.** A2A v1.2 (March 2026) is governed by the Linux Foundation's Agentic AI Foundation and has surpassed 150 organizations in production use. Native A2A support is in Google ADK, LangGraph, CrewAI, LlamaIndex Agents, Semantic Kernel, and Microsoft Agent Framework. Add a slide explaining the "MCP for tools, A2A for agent communication" mental model. ([Linux Foundation A2A launch](https://www.linuxfoundation.org/press/linux-foundation-launches-the-agent2agent-protocol-project)) ([PR Newswire](https://www.prnewswire.com/news-releases/a2a-protocol-surpasses-150-organizations-302737641.html))

- **Update CrewAI to reflect A2A adoption and current scale.** As of January 2026, CrewAI powered ~2 billion agentic executions in the prior 12 months, trusted by 60%+ of Fortune 500. April 2026 update adds enterprise A2A integration, checkpoint TUI with tree view and fork support, and enriched LLM token tracking including reasoning tokens. ([CrewAI changelog](https://docs.crewai.com/en/changelog))

- **Add LangGraph production benchmarks and hardening patterns.** LangGraph surpassed CrewAI in GitHub stars in early 2026. Production deployments are handling thousands of daily transactions in finance and insurance using Postgres checkpointing, Pydantic-validated state, and supervisor loop caps to prevent infinite iteration. ([Alphabold production case study](https://www.alphabold.com/langgraph-agents-in-production/))

- **Add a synthesis slide: "MCP + A2A + ADK" as the 2026 production pattern.** The emerging consensus is ADK 1.0 for orchestration, A2A for cross-framework agent communication, and MCP for tool/data access. This three-layer model ties together Weeks 8–10. ([Google Codelabs: ADK + A2A + MCP](https://codelabs.developers.google.com/instavibe-adk-multi-agents/instructions))

---

## Week 11: hitl-memory

- **Add an "Agent Memory Vendor Landscape" slide.** Four production-ready frameworks dominate as of 2026: [Letta](https://github.com/letta-ai/letta) (OS-inspired paging model, full agent runtime), [Zep](https://hermesos.cloud/blog/ai-agent-memory-systems) (temporal knowledge graph via Graphiti engine), [Mem0](https://mem0.ai/blog/state-of-ai-agent-memory-2026) (48,000+ GitHub stars, $24M Series A, graph layer now production-ready), and [LangMem](https://vectorize.io/articles/letta-vs-langchain-memory) (LangChain's native lightweight memory SDK). Each deserves a positioning statement.

- **Update Mem0 slide with April 2026 benchmark numbers.** Mem0's token-efficient memory algorithm reports 26% relative accuracy improvement over baseline, 91% lower p95 latency, 90% token savings, +29.6-point gain on temporal queries, and +23.1-point gain on multi-hop reasoning on LoCoMo. Multi-signal retrieval fuses semantic similarity, BM25, and entity matching. ([Mem0 State of Agent Memory 2026](https://mem0.ai/blog/state-of-ai-agent-memory-2026))

- **Update the Letta slide: Letta Code pivot (June 2026).** Letta now ships [Letta Code](https://github.com/letta-ai/letta-code) — a memory-first coding agent with system-prompt learning via memory blocks, skill learning, `/sleeptime` for periodic "dreaming," `/doctor` for memory quality audits, and `/palace` for memory inspection. Model-agnostic (Claude Opus 4.x, GPT-5.x, Gemini).

- **Concretize the LangGraph interrupt/resume slide.** `interrupt()` is now stable in both Python and JS LangGraph. It pauses graph execution, serializes state to the checkpointer (PostgresSaver is the production recommendation), and surfaces a value to the client; graph resumes with `graph.invoke(Command(resume="..."), thread)`. Teach the four canonical patterns: approve/reject, edit state, review tool calls, multi-turn. ([LangChain interrupt announcement](https://changelog.langchain.com/announcements/interrupt-simplifying-human-in-the-loop-agents)) ([LangGraph interrupt docs](https://docs.langchain.com/oss/python/langgraph/interrupts))

- **Add the "Human-on-the-Loop" vs. "Human-in-the-Loop" distinction.** HITL requires synchronous approval before each action; HOTL monitors asynchronously and intervenes only on anomalies. Most production agentic systems in 2026 prefer HOTL for throughput, with HITL reserved for high-stakes irreversible actions. ([Waxell blog](https://www.waxell.ai/blog/human-in-the-loop-vs-human-on-the-loop-ai-agents))

- **Assign NirDiamant/Agent_Memory_Techniques as a lab resource.** This GitHub repo (30 runnable Jupyter notebooks) covers conversation buffers, vector stores, knowledge graphs, episodic/semantic memory, MemGPT, Mem0, Letta, Zep, and Graphiti — including LoCoMo benchmarks. ([GitHub](https://github.com/NirDiamant/Agent_Memory_Techniques))

---

## Week 12: small-models

- **Update the Gemma slide: Gemma 4 QAT checkpoints released June 5, 2026.** Google DeepMind released Gemma 4 QAT (Quantization-Aware Training) checkpoints for all sizes (E2B, E4B, 12B, 26B-A4B, 31B) on Hugging Face. QAT integrates quantization simulation into training rather than post-training, preserving BF16-level accuracy at Q4_0. Memory footprint reduced ~72%; Gemma 4 E2B fits in **1GB** using the mobile-specific format. This is a lecture-ready demonstration of why QAT beats PTQ. ([Google blog](https://blog.google/innovation-and-ai/technology/developers-tools/quantization-aware-training-gemma-4/)) ([Ollama one-liner: `ollama run gemma4:12b-qat`](https://lushbinary.com/blog/gemma-4-qat-self-hosting-guide-ollama-llama-cpp-vllm/))

- **Introduce Llama 4 Scout and Maverick as the new MoE benchmark.** Scout: 17B active / 109B total / 16 experts / 10M token context / natively multimodal. Maverick: 17B active / 400B total / 128 experts / 512K context. Key teaching point: "small active parameters" (17B) can come with enormous total capacity — a nuance for right-sizing decisions. ([Meta blog](https://ai.meta.com/blog/llama-4-multimodal-intelligence/)) ([Hugging Face model card](https://huggingface.co/meta-llama/Llama-4-Scout-17B-16E))

- **Refresh the Phi-4 slide with edge deployment numbers.** Phi-4 14B fits on a laptop GPU with 8GB VRAM and surpasses many 70B-class models on math reasoning and code due to synthetic-data-first pretraining. The 3.8B variant matches GPT-4o on structured extraction benchmarks — use as the "right-sizing" case study. ([Meta Intelligence SLM comparison](https://www.meta-intelligence.tech/en/insight-slm-enterprise))

- **Add a "top local models by RAM tier" decision table** (May 2026 actuals): 8GB VRAM → Phi-4 3.8B or Gemma 4 E4B QAT; 16GB → Gemma 3 12B or Llama 4 Scout-lite; 24GB → Gemma 3 27B (Q4) or Gemma 4 26B QAT; 80GB+ → Llama 4 Scout full or Maverick. ([Local AI Master SLM guide 2026](https://localaimaster.com/blog/small-language-models-guide-2026))

- **Add Unsloth's QAT recovery as a teaching moment.** Unsloth recovers Gemma 4 26B-A4B top-1 accuracy from 70.2% to 85.6% using its QAT pipeline, with smaller file sizes than naive PTQ. Concrete slide: show the accuracy gap between naive Q4_0 and QAT Q4_0. ([Gemma 4 QAT self-hosting guide](https://lushbinary.com/blog/gemma-4-qat-self-hosting-guide-ollama-llama-cpp-vllm/))

- **Update the MoE architecture slide.** Llama 4's release makes MoE mainstream for open-weight models. Key teaching point: Scout activates 17B of 109B total parameters, giving GPT-4-class knowledge at near-7B inference cost — directly informs right-sizing decisions.

---

## Week 13: distillation

- **Update the GRPO slide with 2026 refinements.** Post-DeepSeek-R1 variants: **DAPO** (decoupled-clip, dynamic sampling, drops KL penalty, token-level gradient) promotes exploration diversity; **Dr. GRPO** removes the variance normalization term to eliminate length bias. DeepSeek-R1 baseline for reference: AIME 2024 pass@1 goes 15.6% → 71.0% → 86.7% with majority voting. ([Multi-Layer GRPO arxiv](https://arxiv.org/pdf/2506.04746)) ([GRPO survey](https://arxiv.org/pdf/2407.16216)) ([DeepSeek-R1 arxiv](https://arxiv.org/html/2501.12948v1))

- **Add KDE-LoRA (Knowledge Distillation-Enhanced LoRA).** Hybrid approach integrating LoRA adapters with distillation signal from a stronger teacher; achieves 97% accuracy while updating only 1.7% of parameters. Bridges the distillation and PEFT sections naturally. ([ACM ICAIIP proceedings](https://dl.acm.org/doi/10.1145/3778534.3778570))

- **Update Unsloth slide with 2026 benchmarks.** Unsloth now supports GRPO + QLoRA (previously GRPO required full fine-tuning). Key numbers: 90% less VRAM vs. Flash Attention 2 baselines (54.3GB vs. 510.8GB for Llama 3.1 8B at 20K context, 8 generations/prompt). New in 2026: ~7× longer context RL training; Qwen3-8B GRPO reaches 110K context on a single H100 80GB via vLLM + QLoRA. ([Unsloth GRPO long-context docs](https://unsloth.ai/docs/get-started/reinforcement-learning-rl-guide/grpo-long-context))

- **Update the PEFT / DoRA slide.** DoRA (Weight-Decomposed LoRA) is now stable in both the PEFT library and Unsloth (`use_dora=True`). It decomposes weight updates into magnitude + direction, improving convergence on complex tasks. 2026 Unsloth consensus starting config: `α=r=16`, `target_modules="all-linear"`. ([Unsloth LoRA hyperparameters guide](https://unsloth.ai/docs/get-started/fine-tuning-llms-guide/lora-hyperparameters-guide))

- **Add a concrete synthetic data pipeline slide.** 2026 standard pipeline: (1) write seed conversations, (2) expand with Evol-Instruct or Magpie against a frontier teacher (<$0.01/example vs. $1+ for human preference data), (3) generate preference pairs with an LLM judge, (4) faithfulness + instruction-adherence quality filtering, (5) train on filtered rows only. Key stat: a 7B model fine-tuned on 2,000 distilled examples often outperforms an untuned 70B on narrow tasks. ([Digital Applied synthetic data guide 2026](https://www.digitalapplied.com/blog/synthetic-data-generation-llm-training-decision-guide-2026))

- **Update the reasoning-distillation landscape.** The 2025–2026 "reasoning distillation" wave: DeepSeek-R1, Qwen, and Llama distillations are all built by generating (input, full reasoning trace, output) triples from a frontier teacher and training a smaller student to match. Now the dominant paradigm for open small reasoning models. ([RLHF Book synthetic data chapter](https://rlhfbook.com/c/12-synthetic-data))

- **Note Muon optimizer for distillation.** arXiv:2601.09865 (Jan 2026) proposes using the Muon optimizer alongside quantization for more efficient LLM deployment — an optional further reading reference for advanced students. ([arXiv 2601.09865](https://arxiv.org/pdf/2601.09865))

---

## Week 14: safety

- **Update the EU AI Act compliance slide: August 2, 2026 enforcement deadline is imminent.** High-risk AI system obligations under Annex III Articles 9–17 and Article 26 become enforceable in less than two months from today. Penalties: up to €15M or 3% of global annual turnover. Systems in biometric ID, critical infrastructure, and law enforcement require third-party conformity assessment by a notified body. Students going into industry need this now. ([Secure Privacy EU AI Act 2026](https://secureprivacy.ai/blog/eu-ai-act-2026-compliance)) ([Kennedy's Law timeline](https://www.kennedyslaw.com/en/thought-leadership/article/2026/the-eu-ai-act-implementation-timeline-understanding-the-next-deadline-for-compliance/))

- **Update the NIST slide: AI RMF Playbook updated March 27, 2026.** Key red-teaming requirements: GOVERN 1.7 (adversarial testing + behavioral evaluation, must be documented and recurring), MEASURE 2.5 (performance testing across expected use cases), MEASURE 2.6 (testing for harmful and unintended consequences). NIST AI 600-1 (GenAI Profile) remains the reference for generative AI-specific risks. ([NIST AI 600-1](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf)) ([CSA NIST AI Agent Red-Teaming guidance, March 2026](https://labs.cloudsecurityalliance.org/research/csa-research-note-nist-ai-agent-red-teaming-standards-202603/))

- **Update the NeMo Guardrails slide: v0.20.0 (January 2026).** New: Nemotron-Content-Safety-Reasoning-4B (reasoning-capable safety model with configurable `/think` mode for explainable moderation), GLiNER for open-source PII detection, multilingual refusal messages, IORails milestone 2 (streaming + OpenTelemetry + reasoning-model support), and LangChain is now optional (replaced by built-in httpx client for OpenAI-compatible LLMs). ([NVIDIA NeMo Guardrails GitHub releases](https://github.com/NVIDIA-NeMo/Guardrails/releases))

- **Add concrete jailbreak success rates to ground the threat model.** Roleplay/fictional scenario attacks achieve 89.6% success rates against current models. GPT-5 was jailbroken within 24 hours of its release by red teams. Use these numbers to motivate guardrails as a non-optional layer. ([Netguardia red-teaming tools 2026](https://netguardia.com/security-operations/software-tools/the-best-ai-red-teaming-tools-of-2026-from-garak-to-promptfoo/))

- **Update the red-teaming tools slide with the 2026 landscape.** Garak now ships 120+ probe modules (promptinject, dan, encoding-based filter bypasses). Promptfoo has an AI-specific red-teaming mode. Add a lab exercise: `garak --model openai:gpt-4o-mini --probes promptinject` and report findings. ([Confident AI top 5 red-teaming tools 2026](https://www.confident-ai.com/knowledge-base/compare/best-ai-red-teaming-tools-2026)) ([General Analysis AI security platforms](https://generalanalysis.com/guides/best-ai-security-platforms))

- **Add agentic AI supply-chain attack patterns.** NIST CSA March 2026 guidance calls out agent-specific threats: memory poisoning (injecting false facts into long-term memory), tool-call hijacking (prompt injection via tool outputs), and multi-agent trust boundary violations. These require new red-teaming methodologies beyond classic single-turn jailbreaks. ([CSA NIST AI Agent Security research note](https://labs.cloudsecurityalliance.org/research/csa-research-note-nist-ai-agent-red-teaming-standards-202603/))

- **Add the EU AI Act adversarial testing documentation requirement as a compliance hook.** When the August 2 deadline hits, organizations must demonstrate systematic, documented adversarial testing for prompt injection, data leakage, jailbreaks, and policy violations. Guardrails = runtime defense; red-teaming = pre-deployment offense. Both are now compliance requirements. ([Adversa AI framing](https://adversa.ai/blog/ai-guardrails-vs-ai-red-teaming/))

---

## Week 15: capstone

- **Update the frontier model landscape with June 2026 actuals.** Current top tier: **Claude Opus 4.8** (May 28, 2026) — Intelligence Index 61, 88.6% SWE-bench Verified, 74.6% Terminal-Bench 2.1, 1M context, $5/$25 per M tokens (3× cheaper fast mode); **GPT-5.5** (April 23, 2026) — 81.2 AIME 2025, 82.7% Terminal-Bench 2.0, 1M context, $5/$30 per M tokens; **Gemini 3.1 Pro** — leads hardest-mode scientific reasoning. ([Anthropic Claude Opus 4.8](https://www.anthropic.com/news/claude-opus-4-8)) ([OpenAI GPT-5.5](https://openai.com/index/introducing-gpt-5-5/)) ([LM Council benchmarks](https://lmcouncil.ai/benchmarks))

- **Add the "three-tier model portfolio" production pattern.** Most professional teams in June 2026 run: (1) Budget — DeepSeek V4-Flash or Gemini Flash for high-volume classification/extraction (sub-cent/call); (2) Workhorse — Claude Sonnet 4.x or GPT-5.5 for daily tasks; (3) Premium — Claude Opus 4.8 or GPT-5.5-pro for complex long-horizon agentic workflows. Directly connects to the right-sizing week. ([iternal.ai LLM selection guide 2026](https://iternal.ai/llm-selection-guide))

- **Update evaluation section: benchmark landscape has shifted.** MMLU and HumanEval are saturated. Current discriminating benchmarks: **SWE-bench Pro** (harder software engineering), **FrontierMath Tier 4** (GPT-5.5 scores only 35.4%), **Terminal-Bench 2.1** (long-horizon CLI tasks), and **Super-Agent** (end-to-end agentic completion). Use these for capstone project evaluation framing. ([OpenAI GPT-5.5 benchmarks](https://openai.com/index/introducing-gpt-5-5/)) ([Anthropic Claude Opus 4.8 benchmarks](https://www.anthropic.com/news/claude-opus-4-8))

- **Add Gemini 3.5 Flash + Gemini Spark as the agentic deployment story.** Google I/O 2026 (May 19, 2026) dropped Gemini 3.5 Flash (cost-efficient reasoning) and Gemini Spark (a 24/7 always-on agent product). Use Gemini Spark as a discussion anchor for what "always-on agent" means for the HITL patterns in Week 11. ([LLM Stats AI updates](https://llm-stats.com/llm-updates))

- **Add a "what has NOT changed" grounding slide.** Core patterns remain stable despite headline velocity: RAG + vector stores are still the dominant production memory pattern; LoRA/QLoRA fine-tuning pipelines are essentially unchanged in structure; MCP has become the de facto tool-calling standard across Claude, GPT-5.x, and open-weight runtimes. This grounds student projects: Weeks 1–10 fundamentals are still the right foundation.

- **Discussion point: Anthropic's $65B funding round (May 28, 2026).** Announced simultaneously with Claude Opus 4.8, signals continued massive capital concentration in frontier AI. Seminar question: what are the implications for open-source vs. closed-source model availability for practitioners? ([SiliconANGLE](https://siliconangle.com/2026/05/28/anthropic-launches-claude-opus-4-8-raises-65b-new-funding/))
