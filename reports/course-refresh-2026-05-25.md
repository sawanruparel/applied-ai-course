# Course Refresh — 2026-05-25

Generated manually (ANTHROPIC_API_KEY not available in sandbox) against 15 lectures.
Research window: roughly **March–May 25, 2026**, with emphasis on developments since
the May 18 report. New items from the week of May 18–25 are flagged **[NEW THIS WEEK]**.
The instructor reviews and decides what to incorporate.

---

## Week 01: landscape

- **[Slide 09 / o-Series]** **[NEW THIS WEEK]** GPT-5.5 Instant shipped May 5, 2026 as the new ChatGPT default, cutting hallucinations another 60% versus GPT-5.4 and launching with 1M-token context; it now tops ARC-AGI-2 at 85%. Update the o-Series slide to note that the "GPT-5.x" naming has permanently replaced the o-series branding for general-release models—o3/o4-mini remain as low-cost reasoning variants. ([AI News May 2026 | WhatLLM.org](https://whatllm.org/blog/new-ai-models-may-2026))

- **[Slide 13 / Open Models]** **[NEW THIS WEEK]** Google released Gemma 4 under Apache 2.0 this week, positioning it as the most capable fully permissive model available to developers. Add Gemma 4 to the open-models comparison alongside Llama 4 Scout/Maverick and Qwen 3.6. ([AI Updates Today May 2026 | llm-stats.com](https://llm-stats.com/llm-updates))

- **[Slide 13 / Open Models]** Qwen 3.6 27B shipped May 2026 with 77.2% SWE-bench Verified—the highest open-weight coding score so far and a strong argument for the "open models catching up" narrative. Update the open-model benchmarks table. ([Open-Weight Models H1 2026 | digitalapplied.com](https://www.digitalapplied.com/blog/open-weight-models-h1-2026-retrospective-deepseek-qwen-llama))

- **[Slide 12 / Gemini Flash]** **[NEW THIS WEEK]** Gemini 3.1 Flash Lite launched May 8, 2026—the lowest-cost Gemini 3 inference option, positioned between the ultra-cheap Gemini Flash Lite 2.0 and the full Gemini 3.1 Flash. Refreshes the Gemini efficiency tier discussion. ([AI News May 2026 | aitoolsrecap.com](https://aitoolsrecap.com/Blog/ai-news-may-2026))

- **[Slide 11 / Claude Evolution]** **[NEW THIS WEEK]** Andrej Karpathy announced he joined Anthropic on May 20, 2026, citing the "next few years at the LLM frontier as especially formative." This is a notable industry signal worth a sentence in the Claude/Anthropic slide. ([AI News Briefs May 2026 | Radical Data Science](https://radicaldatascience.wordpress.com/2026/05/18/ai-news-briefs-bulletin-board-for-may-2026/))

- **[Slide 14 / Model Comparison]** Gemini 3.5 Flash is now GA, achieving 76.2% on Terminal-Bench 2.1 and beating Gemini 3.1 Pro on coding and agentic tasks at 4× the throughput, with pricing at $1.50/$9 per 1M tokens. This belongs in the price-to-performance comparison table. ([Best AI Models April 2026 | af.net](https://af.net/realtime/ai-model-benchmarks-april-2026-comparing-gpt-5-claude-4-6-gemini-3/))

- **[Slide 16–17 / Beyond Chat & Compound Systems]** **[NEW THIS WEEK]** Anthropic's internal "Claude Mythos" model became a catalyst for new US federal legislation; it was restricted from general release due to autonomous offensive security capabilities. This illustrates the emerging "capability gate" concept—some models will be separately regulated from commercial deployments. ([AI News May 2026 | crescendo.ai](https://www.crescendo.ai/news/latest-ai-news-and-updates))

---

## Week 02: prompting

- **[Slide 01 / Intro]** The framing shift from "prompt engineering" to **"context design"** is now widely adopted in 2026 practitioner writing. SDG Group's analysis frames context design as choosing what information to surface, when, and how—upstream of the prompt itself. Worth noting at the start of the lecture as a vocabulary update. ([The Evolution of Prompt Engineering to Context Design | SDG Group](https://www.sdggroup.com/en/insights/blog/the-evolution-of-prompt-engineering-to-context-design-in-2026))

- **[Slide 09 / CoT Limitations]** Frontier reasoning models (o3, Claude Opus 4.7 with Adaptive Thinking, GPT-5.x) now perform chain-of-thought internally without explicit user-side CoT prompting. Update this slide to reflect that explicit CoT prompting is most valuable in mid-tier and open-weight models, while frontier models internalize it; the practitioner skill is now knowing *when* to suppress extended thinking (latency-sensitive paths) vs. enable it. ([Prompt Engineering 2026 | Lakera](https://www.lakera.ai/blog/prompt-engineering-guide))

- **[Slide 15 / Meta-Prompting]** **Reflection prompts** have become a first-class 2026 prompting pattern—meta-prompts that ask the model to review or critique its own answer before finalizing it. Distinct from self-consistency (multiple samples) in that it uses a single forward pass with explicit critique instructions. ([Prompt Engineering 2026 | Analytics Vidhya](https://www.analyticsvidhya.com/blog/2026/01/master-prompt-engineering/))

- **[Slide 17 / Reliability]** Add **Maieutic Prompting** to the reliability taxonomy—pushes the model through Socratic dialogue to uncover and reject internally inconsistent reasoning chains. Complements self-consistency for tasks where multiple plausible answers exist. ([Prompt Engineering Techniques 2026 | k2view](https://www.k2view.com/blog/prompt-engineering-techniques/))

- **[Slide 13 / Structured Output]** 2026 best practice now treats **Tool Augmented Prompting** as a distinct category—structuring prompts to explicitly delegate sub-tasks to tools (code interpreter, web search) rather than asking the model to simulate the tool. More reliable than asking GPT to "pretend to search the web." ([Prompt Engineering Guide 2026 | pasqualepillitteri.it](https://pasqualepillitteri.it/en/news/1090/prompt-engineering-2026-frameworks-complete-guide))

---

## Week 03: dev-stack

- **[Slide 05 / LangChain & LangGraph]** LangChain 1.0 and LangGraph 1.0 both reached stable releases; the LangChain ecosystem has crossed 220M monthly downloads in early 2026. Update version numbers and describe the recommended split: `langchain-core` + `langgraph` for new projects rather than the monolithic `langchain` package. ([Lessons Learned from Upgrading to LangChain 1.0 | Towards Data Science](https://towardsdatascience.com/lessons-learnt-from-upgrading-to-langchain-1-0-in-production/))

- **[Slide 07 / PydanticAI]** PydanticAI reached stable V1 (September 2025). In head-to-head comparisons PydanticAI consistently wins on **type safety and structured output validation**—inputs are type-annotated, outputs schema-validated, errors raised immediately. Position this clearly against LangGraph's strength (stateful graph execution). ([PydanticAI vs LangChain 2026 | Groundy](https://groundy.com/articles/pydantic-ai-vs-langchain/))

- **[Slide 10 / Head-to-Head]** **Google ADK (Agent Development Kit)** launched in 2026 as a new first-party framework for building Gemini-native agents, joining OpenAI Agents SDK (also 2026) and Anthropic's Agent SDK. The frameworks-from-labs trend means production teams now have first-party SDK options from all three frontier providers—update the comparison table. ([10 AI Agent Frameworks 2026 | Medium/ATNO](https://medium.com/@atnoforgenai/10-ai-agent-frameworks-you-should-know-in-2026-langgraph-crewai-autogen-more-2e0be4055556))

- **[Slide 10 / Head-to-Head]** **AutoAgents (Rust)** benchmarked favorably against Python-native frameworks in 2026, winning on latency and memory in high-throughput agentic workloads. Worth a callout for latency-sensitive production deployments. ([Benchmarking AI Agent Frameworks 2026 | DEV Community](https://dev.to/saivishwak/benchmarking-ai-agent-frameworks-in-2026-autoagents-rust-vs-langchain-langgraph-llamaindex-338f))

- **[Slide 04 / Framework Explosion]** Microsoft merged AutoGen with Semantic Kernel to form the **Microsoft Agent Framework (MAF)**. Covers enterprise .NET shops with type-safe plugins, middleware, and observability. Update the "AutoGen" row in the framework comparison. ([AI Agent Frameworks 2026 | Medium/ATNO](https://medium.com/@atnoforgenai/10-ai-agent-frameworks-you-should-know-in-2026-langgraph-crewai-autogen-more-2e0be4055556))

---

## Week 04: knowledge-rep

- **[Slide 06 / Embedding Models]** **Google Gemini Embedding 2** (March 2026) is the first all-modality embedding model supporting all five modalities—text, image, video, audio, and PDF—in a single model with 100+ language support, native Matryoshka Representation Learning (MRL), and 3072-dimensional output. This is the clearest example of the "multimodal search" shift. ([Best Embedding Models 2026 | Mixpeek](https://mixpeek.com/curated-lists/best-embedding-models))

- **[Slide 06 / Embedding Models]** **Nomic Embed Text V2** is the first embedding model to use a **Mixture-of-Experts (MoE) architecture**—multilingual, instruction-aware, and supports flexible output dimensions. Illustrates that architectural innovations from LLM pre-training are flowing into embedding models. ([Best Open-Source Embedding Models 2026 | BentoML](https://www.bentoml.com/blog/a-guide-to-open-source-embedding-models))

- **[Slide 06 / Embedding Models]** **Jina Embeddings v4** (built on Qwen2.5-VL-3B, 3.8B params) uses three LoRA adapters to switch between retrieval scenarios at runtime—a new "adaptive embedding" pattern worth adding to the model taxonomy. ([Best Embedding Models 2026 | Mixpeek](https://mixpeek.com/curated-lists/best-embedding-models))

- **[Slide 07 / Similarity]** For production RAG in 2026, **Cohere embed-v4** and **BGE-M3** both support hybrid (dense + sparse) retrieval in a single model, eliminating the need to manage two separate embedding pipelines. Update the hybrid-retrieval architecture slide. ([8 Embedding Models 2026 Benchmark | tensoria.fr](https://tensoria.fr/en/blog/embedding-models-2026-guide))

- **[Slide 08 / Chunking]** The 1M-token context window (GPT-5.5, Gemini 3.1 Pro) has reshifted the chunking economics discussion: retrieval is most cost-effective for corpora beyond ~50 pages, but for single large documents it is now viable to put the full document in context. Add a "context window vs. retrieval" decision tree to the chunking slide. ([AI Models in 2026 | gurusup.com](https://gurusup.com/blog/ai-comparisons))

---

## Week 05: rag

- **[Slide 16 / Agentic RAG]** Agentic RAG with specialized subagents for query decomposition, retrieval, validation, and synthesis has become the dominant enterprise production pattern in 2026. The "single-retriever naive RAG" is now explicitly considered legacy. Add a reference to the arXiv survey [Agentic RAG: A Survey (arXiv:2501.09136)](https://arxiv.org/html/2501.09136v4) as recommended reading.

- **[Slide 02 / RAG Evolution]** **[NEW THIS WEEK]** Google Research published "Deeper Insights into RAG: The Role of Sufficient Context"—finding that hallucinations in RAG systems are often caused by insufficient retrieved context rather than model failure. Selective generation (withholding answers when context is weak) is the recommended mitigation. ([Deeper Insights into RAG | Google Research](https://research.google/blog/deeper-insights-into-retrieval-augmented-generation-the-role-of-sufficient-context/))

- **[Slide 04 / Vector Limitations]** A 2026 systematic literature review (arXiv:2508.06401) covers techniques, metrics, and challenges across the full RAG landscape through early 2026—useful as a single-citation survey for students doing the RAG module project. ([Systematic Review of RAG | arXiv:2508.06401](https://arxiv.org/pdf/2508.06401))

- **[Slide 06 / Hybrid Architecture]** The 2026 enterprise consensus is that **retrieval quality is the bottleneck in 73% of RAG failures**, not generation. Reframe the architecture discussion around retrieval engineering (chunking, hybrid search, reranking) as the primary investment, with model selection secondary. ([RAG Production Guide 2026 | Lushbinary](https://lushbinary.com/blog/rag-retrieval-augmented-generation-production-guide/))

- **[Slide 07 / Reranking]** Cross-encoder rerankers (Pinecone Inference, Cohere Rerank 3.5) after initial retrieval are now treated as a near-mandatory production step. Update the architecture diagram to include reranking as a default stage, not an optional optimization. ([RAG Production Guide 2026 | Lushbinary](https://lushbinary.com/blog/rag-retrieval-augmented-generation-production-guide/))

---

## Week 06: graphrag

- **[Slide 10 / LazyGraphRAG]** GraphRAG 2.0's **dynamic community selection** feature evaluates each community report for relevance before inclusion, removing irrelevant sub-communities—resulting in a reported 77% reduction in token cost. Update the cost anatomy slide with this figure. ([GraphRAG 2.0 | Search Engine Journal](https://www.searchenginejournal.com/graphrag-update-ai-search/533129/))

- **[NEW THIS WEEK — new slide candidate]** **"When to use Graphs in RAG"** (arXiv:2506.05690) provides a comprehensive analysis of which query types benefit from graph structure versus flat vector search. The finding: graph RAG dominates for multi-hop reasoning; vector RAG wins on single-document factual lookup. A decision-framework slide could cite this as the empirical grounding. ([When to use Graphs in RAG | arXiv:2506.05690](https://arxiv.org/pdf/2506.05690))

- **[Slide 09 / Microsoft GraphRAG]** **GraphRAG-Router** (new paper, April 2026) uses reinforcement learning to dynamically route queries across GraphRAG and standard LLMs based on learned cost-efficiency tradeoffs—adds a practical production pattern beyond the current static local/global search dichotomy. ([GraphRAG arXiv Daily Papers | GitHub](https://github.com/bansky-cl/graphrag-arxiv-daily-paper))

- **[Slide 03 / Enter GraphRAG]** **LogicRAG** (accepted AAAI'26) and **LinearRAG** (relation-free graph construction) are two new GraphRAG variants worth adding to the ecosystem map. LinearRAG trades some recall for significantly cheaper indexing by omitting explicit relation types. ([Awesome-GraphRAG | GitHub](https://github.com/DEEP-PolyU/Awesome-GraphRAG))

- **[Slide 04 / Entity Extraction]** **Spreading Activation for Document Retrieval in KG-RAG** (arXiv:2512.15922) demonstrates that spreading-activation traversal of the knowledge graph at retrieval time significantly outperforms simple neighbor lookup—relevant to students building GraphRAG pipelines. ([Spreading Activation for KG-RAG | arXiv:2512.15922](https://arxiv.org/pdf/2512.15922))

- **[Slide 14 / Cost Anatomy]** **Empowering GraphRAG with Knowledge Filtering and Integration** (arXiv:2503.13804, March 2026) directly addresses the over-retrieval cost problem—a knowledge-filtering pre-pass reduces irrelevant triples before LLM synthesis, cutting costs without accuracy loss. ([Empowering GraphRAG with Knowledge Filtering | arXiv:2503.13804](https://arxiv.org/pdf/2503.13804))

---

## Week 07: evaluation

- **[Slide 05 / RAGAS Framework]** **RAGAS v0.2.12** added `conversation_faithfulness` and `conversation_relevancy` metrics for multi-turn chat-based RAG—filling a major gap for evaluating dialogue systems rather than single-turn Q&A. Update the RAGAS coverage section. ([Best RAG Evaluation Tools 2026 | Braintrust](https://www.braintrust.dev/articles/best-rag-evaluation-tools))

- **[Slide 11 / Judge Intro]** **DeepEval v2.1** introduced **DAG-based metric evaluation** that uses deterministic decision trees to reduce LLM-judge calls per evaluation run—addresses the cost and non-determinism complaints about pure LLM-as-judge approaches. Add DeepEval as a recommended framework alongside RAGAS. ([DeepEval alternatives 2026 | Braintrust](https://www.braintrust.dev/articles/deepeval-alternatives-2026))

- **[Slide 02 / Eval Landscape]** The de-facto 2026 production tooling pattern is **DeepEval for CI evals + Braintrust for production traceability**. Braintrust connects scoring, dataset management, cross-functional review, and CI-based release enforcement in one system; worth adding to the eval landscape overview. ([RAGAS vs DeepEval vs Braintrust 2026 | DEV Community](https://dev.to/ultraduneai/eval-006-llm-evaluation-tools-ragas-vs-deepeval-vs-braintrust-vs-langsmith-vs-arize-phoenix-3p11))

- **[Slide 09 / End-to-End]** The eval lifecycle has solidified into three layers in 2026: **offline benchmarks** (broad, cheap) → **LLM-as-Judge** (moderate depth, low cost) → **human eval** (deep, expensive). A slide explicitly naming these three layers and their trigger conditions would help students plan eval pipelines. ([LLM Evaluation 2025 vs 2026 | MLAI Digital](https://www.mlaidigital.com/blogs/llm-evaluation-frameworks-2025-vs-2026-what-matters-now-2026))

- **[Slide 02 / Eval Landscape]** **Terminal-Bench 2.1** has emerged in 2026 as a coding-agent benchmark (Gemini 3.5 Flash 76.2%, Gemini 3.1 Pro lower) alongside GPQA Diamond. Add both to the benchmark landscape slide as successors to saturated MMLU-era tests. ([AI Model Benchmarks April 2026 | af.net](https://af.net/realtime/ai-model-benchmarks-april-2026-comparing-gpt-5-claude-4-6-gemini-3/))

- **[Slide 03 / What To Measure]** System-level evaluation—scoring full agent pipelines for end-to-end task success, tool-call correctness, latency, and cost—is now standard alongside response-quality metrics. Update the "what to measure" slide to include agentic dimensions. ([Best LLM Evaluation Frameworks 2026 | futureagi.com](https://futureagi.com/blog/llm-evaluation-frameworks-metrics-best-practices/))

---

## Week 08: mcp

- **[NEW THIS WEEK — high priority]** **MCP Release Candidate locked May 21, 2026**, with the final specification to publish July 28, 2026. A ten-week validation window is open now for SDK maintainers; Tier 1 SDKs (Python, TypeScript) must ship support within this window. This is the most significant MCP spec event of 2026—add a current-state callout to the opening slide. ([MCP Spec Release Candidate | MCP Blog](https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/))

- **[Slide 10 / Transports]** The RC's headline architectural change: **MCP is now stateless at the protocol layer**. A stateless HTTP transport variant allows MCP servers to scale horizontally behind standard load balancers without persistent SSE connections. Update the transport slide to flag this as the production-recommended deployment pattern from July 2026 onward. ([MCP Roadmap 2026 | modelcontextprotocol.io](https://modelcontextprotocol.io/development/roadmap))

- **[Slide 07 / Tools]** The **Tasks extension** (in RC) reshapes how long-running tool calls work: a server can answer `tools/call` with a task handle, and the client drives it with `tasks/get`, `tasks/update`, and `tasks/cancel`. This changes the handler implementation pattern. Update the Tools slide and the Lifecycle slide. ([MCP Spec Release Candidate | MCP Blog](https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/))

- **[Slide 06 / Primitives]** **MCP Apps** (server-rendered UIs) is now a formal extension in the RC, allowing tools to return interactive UI components (dashboards, forms, charts) that render in the client conversation window. Relevant for enterprise workflow-approval use cases. ([MCP Roadmap 2026 | MCP Blog](https://blog.modelcontextprotocol.io/posts/2026-mcp-roadmap/))

- **[Slide 11 / Auth]** The RC's authorization update aligns OAuth and OpenID Connect more closely and introduces a **formal deprecation policy** so teams can plan upgrades. The previous auth model (from the 2025 spec) is now on a deprecation timeline. Update the auth slide with the deprecation horizon. ([MCP Roadmap 2026 | a2a-mcp.org](https://a2a-mcp.org/blog/mcp-2026-roadmap))

- **[Slide 17 / Comparison]** Add **A2A (Agent2Agent) v1.0** to the comparison matrix—it is now production-grade, adopted by 150+ organizations, donated to the Linux Foundation, and uses Signed Agent Cards for cryptographic verification. A2A handles *agent-to-agent* delegation while MCP handles *agent-to-tool*; the two protocols are complementary, not competing. ([A2A Protocol 2026 | IBM](https://www.ibm.com/think/topics/agent2agent-protocol))

---

## Week 09: mcp-servers

- **[NEW THIS WEEK — lab impact]** The **MCP RC (locked May 21)** changes server implementation patterns: the stateless HTTP transport means new servers should no longer assume a persistent SSE connection. Update the lab's server skeleton to use stateless HTTP transport by default rather than stdio/SSE if targeting post-July 2026 deployments. ([MCP Spec Release Candidate | MCP Blog](https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/))

- **[Slide 07 / Tool Handler]** Under the RC's **Tasks extension**, a tool handler can return a task handle for long-running operations instead of blocking. Add a "synchronous vs. async task" handler example to the lab—the client then polls `tasks/get` rather than waiting for `tools/call` to return. ([MCP Spec Release Candidate | MCP Blog](https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/))

- **[Slide 16 / SQL Demo]** The public MCP registry has surpassed 9,400 servers; **Composio** now offers 500+ pre-built managed integrations (Slack, GitHub, Jira, Salesforce, ServiceNow). Before building a custom server, students should check whether a Composio connector already exists—this changes the lab framing from "always build" to "build or compose." ([9 Best MCP Servers Enterprise 2026 | Prefect](https://www.prefect.io/resources/best-mcp-deployment-platforms-enterprise-2026))

- **[Slide 14 / SQL Safety]** An **MCP Gateway** pattern has emerged as the enterprise security standard—a gateway layer sits between agents and MCP servers, centralizing auth, enforcing tool-level access policies, and capturing audit trails. Reference Bifrost and Mintmcp as leading 2026 products. Add to the safety section. ([Best MCP Gateways Enterprise 2026 | MintMCP](https://www.mintmcp.com/blog/gateways-enterprise-engineering-with-mcp))

- **[Slide 03 / Server Anatomy]** The **`.well-known/mcp.json` discovery convention** is gaining adoption: clients can auto-discover available MCP servers at a domain without manual registration, analogous to `robots.txt`. Mention as an optional server feature in the anatomy overview. ([MCP Server Discovery 2026 | Ekamoira](https://www.ekamoira.com/blog/mcp-server-discovery-implement-well-known-mcp-json-2026-guide))

---

## Week 10: multi-agent

- **[NEW THIS WEEK — high priority]** The Five Eyes (US, UK, Australia, Canada, New Zealand) cyber agencies jointly published **"Careful Adoption of Agentic AI Services"** addressing five risk categories in agentic systems: excessive autonomy, insufficient audit trails, over-provisioned tool access, cross-agent trust delegation, and data exfiltration via agent outputs. This government-level guidance is now relevant for any production multi-agent system discussion. ([AI News May 2026 | crescendo.ai](https://www.crescendo.ai/news/latest-ai-news-and-updates))

- **[Slide 10 / Pattern Selection]** The dominant 2026 production architecture has converged: a **single orchestrator owns the full conversation context and spawns ephemeral isolated subagents** for parallel subtasks—adopted by Anthropic, OpenAI Agents SDK, LangGraph, and AutoGen/MAF. Peer-to-peer GroupChat patterns have lost ground in production deployments. ([Multi-Agent AI 2026 | FlowHunt](https://www.flowhunt.io/blog/multi-agent-ai-system/))

- **[Slide 09 / Swarm]** **Claude Managed Agents multi-agent orchestration** entered public beta (May 6, 2026) with built-in cross-agent task delegation, outcome tracking, and durable state—Anthropic's first-party hosted solution for the orchestrator-subagent pattern. Add as a reference implementation in the swarm/orchestration discussion. ([Anthropic Claude Managed Agents | 9to5Mac](https://9to5mac.com/2026/05/07/anthropic-updates-claude-managed-agents-with-three-new-features/))

- **[Slide 03 / Landscape]** **A2A (Agent2Agent) v1.0** reached production status in early 2026 with Signed Agent Cards for cryptographic identity verification, adopted by Microsoft, AWS, Salesforce, SAP, and ServiceNow. Update the ecosystem landscape slide—A2A is now the inter-agent communication complement to MCP. ([A2A Protocol 2026 | Stellagent](https://stellagent.ai/insights/a2a-protocol-google-agent-to-agent))

- **[Slide 15 / Error Recovery]** Memory-augmented multi-agent systems show ~40% better performance on enterprise tasks compared to context-free architectures. Add this data point to the error-recovery or agent-design slide to justify the memory investment. ([Multi-Agent AI 2026 | FlowHunt](https://www.flowhunt.io/blog/multi-agent-ai-system/))

- **[Slide 05 / Hierarchical]** Update CrewAI: **CrewAI Flows** is now the recommended architecture for production pipelines; the framework powers roughly 2 billion agentic executions and is used by 60%+ of Fortune 500 companies per vendor claims. Verify independently before citing, but the adoption trajectory is notable. ([Multi-Agent AI 2026 | DEV Community](https://dev.to/ottoaria/multi-agent-ai-in-2026-build-production-systems-with-crewai-langgraph-autogen-5e40))

---

## Week 11: hitl-memory

- **[NEW THIS WEEK — primary update]** **Anthropic "Dreaming" for Claude Managed Agents** launched May 6, 2026 as a research preview. It is a scheduled memory consolidation process: Claude periodically reviews past sessions, extracts patterns (recurring mistakes, preferred workflows, team preferences), and writes updated memories before the next conversation. Developers can apply changes automatically or require review. Concrete example of the "memory-as-infrastructure" shift discussed in lecture. ([Anthropic Dreaming Feature | SiliconANGLE](https://siliconangle.com/2026/05/06/anthropic-letting-claude-agents-dream-dont-sleep-job/)) ([What is Claude Dreaming? | MindStudio](https://www.mindstudio.ai/blog/what-is-claude-dreaming-anthropic-managed-agents))

- **[Slide 03 / Why Memory]** **Mem0's "State of AI Agent Memory 2026"** benchmark confirms the dual-layer production standard: a hot path (in-session vector + BM25 + entity retrieval) paired with a cold path (cross-session consolidation, fact merging, staleness pruning). Mem0's multi-signal retrieval outperforms OpenAI's native memory by ~26% on the LoCoMo benchmark. ([State of AI Agent Memory 2026 | Mem0](https://mem0.ai/blog/state-of-ai-agent-memory-2026))

- **[Slide 08 / Breakpoints]** **LangGraph v0.4** redesigned HITL checkpoints: `interrupt()` now surfaces `Interrupt` objects automatically in `.invoke()` return values, removing boilerplate; `AsyncPostgresSaver` is the recommended production checkpointer. Update code examples if they reference older LangGraph APIs. ([Human-in-the-Loop LangGraph 2026 | GrowwStacks](https://growwstacks.com/blog/human-in-the-loop-ai-agents-langgraph))

- **[Slide 02b / HITL vs HOTL]** **Redis** published a production HITL pattern guide (2026) confirming the HITL vs HOTL distinction: HITL requires synchronous approval per action; HOTL monitors asynchronously and intervenes on anomalies. Most enterprise deployments use HOTL for throughput-sensitive paths, with HITL reserved for irreversible high-stakes actions. ([AI Human in the Loop Patterns | Redis Blog](https://redis.io/blog/ai-human-in-the-loop/))

- **[Slide 07 / Feedback Loops]** **Memory staleness** is flagged as an open research problem: highly relevant memories that become confidently wrong over time are harder to detect than missing memories. Mention as an active challenge in the feedback-loops slide—Dreaming's review mechanism is an early production response to this. ([7 State Persistence Strategies | Indium](https://www.indium.tech/blog/7-state-persistence-strategies-ai-agents-2026/))

---

## Week 12: small-models

- **[NEW THIS WEEK]** **Gemma 4** (Google, Apache 2.0, released this week) is described as the most capable fully permissive open model available to developers as of May 2026. Add to the "when small models win on sovereignty" section as the top open-weight choice for teams that need commercial-use-safe licensing. ([AI Updates May 2026 | llm-stats.com](https://llm-stats.com/llm-updates))

- **[Slide 05 / Qwen]** **Qwen 3.6 27B** (May 2026) achieves 77.2% SWE-bench Verified—higher than any previously released sub-30B model and competitive with frontier models on coding. Update the Qwen slide benchmarks. **Qwen3-2507** adds a thinking/non-thinking mode toggle, making it the first small-model family with explicit reasoning-mode control. ([Qwen3 GitHub | QwenLM](https://github.com/QwenLM/Qwen3))

- **[Slide 06 / Phi]** **Phi-4-mini (3.8B)** runs at 15–20 tokens/s on an M1 MacBook Air at Q4_K_M quantization and matches GPT-4o on structured extraction benchmarks. The "fits-on-a-laptop" threshold has now been crossed by a model capable enough for real production workloads. ([Small Language Models 2026 | MasterPrompting](https://masterprompting.net/blog/small-language-models-phi4-gemma-on-device-2026))

- **[Slide 03 / Spectrum]** **Qwen3.5 MoE (397B-A17B)**—activating only 17B parameters per forward pass—is the current open-weight MoE best-in-class, scoring 92.4 on GPQA Diamond, tied with Claude Opus 4.7 at half the API cost. Add to the "SLM vs frontier" cost-performance slide. ([Best AI Models in 2026 | Medium](https://medium.com/@sanjeevpatel3007/best-ai-models-in-2026-the-complete-honest-ranking-d67b63cf3543))

- **[Slide 12 / Benchmarking]** **Gartner** predicts organizations will use task-specific SLMs 3× more than general LLMs by 2027—cite as analyst-grade market signal for the business-case section. ([Top 15 SLMs 2026 | DataCamp](https://www.datacamp.com/blog/top-small-language-models))

- **[Slide 09 / Comparison]** **Gemini 3.1 Flash Lite** (Google, May 8, 2026) is a new ultra-low-cost frontier-tier option, distinct from open-weight SLMs but competing with them on price-per-token for API-based deployments. Add to the spectrum slide as the "cheapest hosted frontier" option. ([AI News May 2026 | aitoolsrecap.com](https://aitoolsrecap.com/Blog/ai-news-may-2026))

---

## Week 13: distillation

- **[Slide 11 / LoRA]** **L1RA: Dynamic Rank Assignment in LoRA Fine-Tuning** (arXiv:2509.04884) shows that dynamically adjusting LoRA rank per layer during training outperforms fixed-rank LoRA at the same parameter budget. A short discussion of why static rank is suboptimal would strengthen the LoRA How slide. ([L1RA | arXiv:2509.04884](https://arxiv.org/pdf/2509.04884))

- **[Slide 13 / QLoRA]** **Frontiers in AI (2026)** published an efficiency strategy paper for fine-tuning LLMs (frai.2026.1665992) that combines gradient checkpointing, mixed-precision, and LoRA into a reproducible recipe. Useful as a primary citation for the training-setup slide. ([Efficient Fine-Tuning Strategy | Frontiers in AI](https://www.frontiersin.org/journals/artificial-intelligence/articles/10.3389/frai.2026.1665992/full))

- **[Slide 15 / SFT]** **GRPO (Group Relative Policy Optimization)** has displaced pure SFT as the recommended approach for teaching reasoning behaviors in 2026, removing the reward model and value model entirely; supported natively in Unsloth and Hugging Face TRL v1.0. Update the SFT slide to introduce GRPO as an alternative for reasoning-heavy fine-tuning objectives. ([LLM Fine-Tuning Best Practices 2026 | hjLabs](https://hjlabs.in/AIML/blog/post/llm-fine-tuning-best-practices.html))

- **[Slide 08 / Techniques]** **DPO, ORPO, and KTO** have replaced RLHF in most 2026 production alignment work—cheaper, more stable, and available in TRL v1.0's unified API. Add a one-slide comparison of DPO vs GRPO: DPO for preference alignment, GRPO for reasoning capability. ([LLM Fine-Tuning Best Practices 2026 | hjLabs](https://hjlabs.in/AIML/blog/post/llm-fine-tuning-best-practices.html))

- **[Slide 04 / Synthetic Data]** **Distillation Step-by-Step (DSS)** constructs datasets that include both output labels AND intermediate reasoning rationales from the teacher model. Students training small models for reasoning tasks should prefer DSS over label-only distillation. ([Fine-Tuning LLMs | DEV Community](https://dev.to/iamfaham/fine-tuning-llms-lora-quantization-and-distillation-simplified-12nf))

- **[Slide 05 / Generation Pipeline]** A hybrid three-technique pipeline is now 2026 standard practice: **synthetic data from strong teachers → distillation → self-improving loops** (letting the student model generate data graded by the teacher). Add as a "production distillation pipeline" summary slide. ([LLM Fine-Tuning Best Practices 2026 | hjLabs](https://hjlabs.in/AIML/blog/post/llm-fine-tuning-best-practices.html))

---

## Week 14: safety

- **[NEW THIS WEEK — high priority]** **Five Eyes joint guidance: "Careful Adoption of Agentic AI Services"** was published this week, co-signed by CISA, NCSC (UK), ASD (Australia), CCCS (Canada), and NCSC (NZ). It identifies five agentic AI risk categories: excessive autonomy, insufficient audit trails, over-provisioned tool access, cross-agent trust delegation, and data exfiltration. This is now mandatory reading for production agentic deployments and directly updates the threat-landscape slide. ([AI News May 2026 | crescendo.ai](https://www.crescendo.ai/news/latest-ai-news-and-updates))

- **[Slide 04 / Injection Intro]** **PISmith** (arXiv:2603.13026, March 2026) presents a reinforcement learning-based red-teaming framework specifically for prompt injection defenses—the adversary agent learns to craft injections that bypass candidate defenses. Add as a reference for the "how red teams operate" section. ([PISmith | arXiv:2603.13026](https://arxiv.org/pdf/2603.13026))

- **[Slide 01 / Threat Landscape]** Updated attack success statistics for 2026: role-play framing achieves **89.6% jailbreak success**; multi-turn jailbreaks reach **97% within five conversational turns**; prompt injection appeared in 73% of production AI deployments in 2025. GPT-5 was jailbroken within 24 hours of release. Update the threat landscape data. ([AI Red Teaming Statistics 2026 | Mindgard](https://mindgard.ai/blog/ai-red-teaming-statistics)) ([Prompt Injection Defense 2026 | Rapid Claw](https://rapidclaw.dev/blog/prompt-injection-defense-production-agents-2026))

- **[Slide 09 / Injection Defense]** A **seven-layer agentic defense model** is the 2026 production standard: (1) input handling to separate trusted/untrusted text, (2) output filtering before action, (3) capability sandboxing, (4) privilege separation/least authority, (5) canary tokens, (6) policy engines for deterministic pre-action checks, (7) continuous red teaming. No single layer is sufficient. ([Prompt Injection Defense 2026 | Rapid Claw](https://rapidclaw.dev/blog/prompt-injection-defense-production-agents-2026))

- **[Slide 01b / OWASP Agentic]** The **OWASP Top 10 for Agentic Applications 2026** is now published (100+ contributors). It supersedes the LLM Top 10 for agent contexts; key new entries include Agent Goal Hijack, Tool Misuse, Delegated Trust failures, and Rogue Agents. Update the OWASP slide to reference this successor document. ([OWASP Top 10 Agentic 2026 | NeuralTrust](https://neuraltrust.ai/blog/owasp-top-10-for-agentic-applications-2026))

- **[Slide 03 / Defense In Depth]** **91% of enterprise AI tools are unmanaged by security or IT teams** (2026 industry report). Add this statistic to the "why defense in depth matters" framing—it reframes security from a technical concern to an organizational governance problem. ([AI Security 2026 | Lexology](https://www.lexology.com/library/detail.aspx?g=63fe0da4-6d04-4fb1-aa7a-fd5981234859))

- **[Slide 14 / Governance / EU AI Act]** EU AI Act conformity assessments for high-risk AI systems are **due August 2, 2026**—a live compliance deadline. For healthcare, employment, credit scoring, and critical infrastructure AI, adversarial testing is now a legal requirement. Mention as a concrete regulatory pressure point, especially for student capstone projects. ([AI Regulations 2026 | Sombra](https://sombrainc.com/blog/ai-regulations-2026-eu-ai-act))

---

## Week 15: capstone

No lecture content to refresh. However, point students to landscape updates from Weeks 1, 10, and 14 this week—particularly the Five Eyes agentic AI guidance and the MCP RC—as directly relevant to capstone architecture decisions and safety checklists.

---

*Report generated 2026-05-25. Sources listed inline. Does not repeat items already covered in the 2026-05-18 report except where new data is available.*
