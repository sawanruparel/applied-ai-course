# Course Refresh — 2026-06-22

**Scope:** Developments in each lecture's topic area since approximately March 2026 (~3 months).
**Method:** Manual web research (canonical `npm run course:refresh` script requires `ANTHROPIC_API_KEY`, which was not available in this sandbox run).
**Action required:** Instructor review only. No lecture files were modified.

---

## Week 01: Landscape

Significant model releases and compute-scaling research since the slides were written.

1. **Claude Fable 5 released June 9, 2026 — update the Claude Evolution and Model Comparison slides.** Fable 5 is Anthropic's new frontier model with always-on adaptive thinking, a 1M-token context window, and 128K output tokens, priced at $10 input / $50 output per million tokens. **Critical note:** On June 12, 2026, Anthropic received a US government export-control directive requiring suspension of Fable 5 and Mythos 5 access; Opus, Sonnet, and Haiku remain available. Slide 11 (Claude Evolution) should reflect this. Source: [Introducing Claude Fable 5 and Claude Mythos 5 (Anthropic)](https://platform.claude.com/docs/en/about-claude/models/introducing-claude-fable-5-and-claude-mythos-5)

2. **Claude Opus 4.8 shipped May 28, 2026 — update "agentic upgrades" on Slide 11.** First Claude model where browser agents reach production territory (84% on Online-Mind2Web). Roughly 4× less likely than Opus 4.7 to let flaws in its own code pass unremarked. Source: [Current Claude Model Version (June 2026)](https://tygartmedia.com/current-claude-model-version/)

3. **GPT-5.4 released March 5, 2026 — update Slide 14 (Model Comparison).** Records 83% on OpenAI's GDPval test for knowledge-work tasks; headline feature is native computer use (model controls a computer, not just generates text). Source: [New AI Model Releases March 2026](https://renovateqr.com/blog/ai-model-releases-2026)

4. **Gemini 3.5 Pro announced at Google I/O May 19, 2026 — update Slide 12 (Gemini Flash).** Tops reasoning benchmarks (Gemini 3.1 at 94.3% GPQA Diamond); Gemini 3.5 Pro in limited Vertex preview with GA expected imminently. Source: [June 2026 AI Model Flood (Essa Mamdani)](https://www.essamamdani.com/blog/june-2026-ai-model-flood-gpt-gemini-claude)

5. **Train-to-Test (T2) scaling laws — consider adding to Slide 07 (Scaling Laws) or Slide 08 (Inference Compute).** Researchers at UW-Madison/Stanford introduced T2, a framework jointly optimizing parameter size, training data volume, and test-time inference samples together. A 7B model with 100× inference compute can match a 70B model at standard inference. Source: [Train-to-Test scaling explained (VentureBeat)](https://venturebeat.com/orchestration/train-to-test-scaling-explained-how-to-optimize-your-end-to-end-ai-compute-budget-for-inference)

6. **Inference demand reshaping hardware procurement — update Slide 08.** Inference demand projected to exceed training demand by 118× by 2026; GPU procurement is shifting toward inference-optimized hardware. Slide 08 framing around "inference compute" is timely but these numbers ground it. Source: [Inference-Time Scaling (Introl Blog)](https://introl.com/blog/inference-time-scaling-research-reasoning-models-december-2025)

7. **Test-time compute categorization research — update or add to Slide 08/09.** Survey categorizes TTC into three regimes: parallel scaling (self-consistency), sequential scaling (iterative refinement), and internal scaling (dynamic difficulty adjustment). No universal scaling law yet for TTC vs training. Source: [A Survey of Test-Time Compute (arXiv:2501.02497)](https://arxiv.org/pdf/2501.02497)

---

## Week 02: Prompting

The conceptual foundations are stable; updates concern automation and native reasoning.

1. **Native CoT in frontier models renders some slides partially obsolete — update Slide 06 (CoT Variants).** By 2026, every major LLM provider has built native reasoning-chain support into their models. OpenAI o-series and Claude extended thinking have internalized CoT into inference. The distinction between "prompting for CoT" and "the model just does it" needs addressing. Source: [Chain-of-Thought Prompting Guide 2026 (orq.ai)](https://orq.ai/blog/what-is-chain-of-thought-prompting)

2. **Hierarchical Chain-of-Thought Prompting paper (April 2026) — worth mentioning in Slide 06 or as a research pointer.** Proposes breaking problems into sub-problems hierarchically before CoT, improving both accuracy and efficiency on complex multi-step reasoning. Source: [Hierarchical CoT Prompting (arXiv:2604.00130)](https://arxiv.org/html/2604.00130v1)

3. **Automatic prompt optimization at scale — update Slide 15 (Meta Prompting) or add to Slide 22 (Version Control).** GAN-CoT (iteratively refines CoT templates via generative adversarial training) and Select-Prompt (mines hard samples, optimizes prompts for them) are production-ready automatic optimization techniques in 2026. Source: [Prompt Engineering Techniques 2026 (k2view)](https://www.k2view.com/blog/prompt-engineering-techniques/)

4. **PRIME: Policy-Reinforced Iterative Multi-agent Execution (Feb 2026) — add to Slide 28 (Research).** Uses iterative multi-agent execution with policy reinforcement for algorithmic reasoning — a convergence of prompting and multi-agent patterns. Source: [PRIME (arXiv:2602.11170)](https://arxiv.org/pdf/2602.11170)

---

## Week 03: Dev Stack

Several framework versions have advanced significantly.

1. **LangGraph v0.4 (April 2026) — update Slide 06 (LangChain/LangGraph) and Slide 07 (LangGraph Deep).** Adds redesigned HITL checkpoints that surface automatically in `.invoke()` responses, durable Postgres/Redis state persistence, improved graph-based audit trails, per-node timeouts with `NodeTimeoutError`, and node-level error handler callbacks. LangGraph now leads CrewAI in GitHub stars. Source: [LangGraph vs PydanticAI 2026 (agentsindex.ai)](https://agentsindex.ai/compare/langgraph-vs-pydanticai)

2. **LangChain 1.0 GA — note in Slide 05.** The framework hit a 1.0 stability milestone; this is worth flagging given student wariness about stability. Source: [LangChain Changelog](https://docs.langchain.com/oss/python/releases/changelog)

3. **FastMCP 3.x (April 2026) should replace raw MCP SDK in the stack comparison.** FastMCP is now a standalone package (not just bundled in the official MCP SDK). `fastmcp` 3.x is the actively maintained successor; the `mcp.server.fastmcp` bundled module is deprecated. Update Slide 09 (Claude Agent SDK) and any MCP-building content. Source: [FastMCP GitHub](https://github.com/jlowin/fastmcp)

4. **OpenAI Agents SDK now a direct competitor — add to Slide 10 (Head to Head).** The comparison of LangGraph vs OpenAI Agents SDK vs PydanticAI is a common 2026 search query; omitting the OpenAI SDK from the comparison may confuse students. Source: [LangGraph vs OpenAI Agents SDK vs PydanticAI 2026](https://open-techstack.com/blog/langgraph-vs-openai-agents-sdk-vs-pydanticai-2026/)

5. **Google ADK and Mastra as emerging frameworks — add to Slide 04 (Framework Explosion).** Both have crossed the threshold of production adoption: Mastra is TypeScript-first and integrates natively with Mem0. Source: [Best AI Agent Frameworks 2026 (LangChain)](https://www.langchain.com/resources/ai-agent-frameworks)

---

## Week 04: Knowledge Representation

Embedding efficiency and chunking have concrete new best practices.

1. **Late chunking technique — add to Slide 08 (Chunking) or Slide 09 (Chunking Tradeoffs).** Runs the full document through the transformer first, then applies chunk boundaries and mean-pools token embeddings within each span. Benchmarks show improved retrieval across all boundary strategies vs. chunking before embedding. Source: [Best Chunking Strategies for RAG 2026 (Firecrawl)](https://www.firecrawl.dev/blog/best-chunking-strategies-rag)

2. **MRL-truncated embeddings for index size reduction — add to Slide 06 (Embedding Models) or Slide 13 (Indexing Strategies).** Teams are migrating from 1536-dim OpenAI embeddings to 256-dim MRL-truncated embeddings, reducing index size by ~6× (23 GB → 4 GB) with improved query latency. Matters for cost and latency at scale. Source: [8 Embedding Models for Production RAG 2026 (tensoria.fr)](https://tensoria.fr/en/blog/embedding-models-2026-guide)

3. **Multi-vector indexing native support — update Slide 11 (Vector DB Landscape) or Slide 13.** Weaviate, Qdrant, and Vespa support multi-vector indexing natively as of 2026; Pinecone and Chroma do not. The slide should reflect current capabilities if it lists specific DBs. Source: [Vector Databases in 2026 (devx.com)](https://www.devx.com/uncategorized/vector-databases-beyond-ai-hype-2026/)

4. **Gartner prediction now realized — update framing in Slide 01 (Problem) or Slide 11.** Gartner forecast that >30% of new enterprise apps using GenAI would be supported by vector databases by 2026 (up from <5% in 2023); this is now current reality rather than a forecast, which changes how it should be framed. Source: [Vector Databases Beyond AI Hype 2026 (devx.com)](https://www.devx.com/uncategorized/vector-databases-beyond-ai-hype-2026/)

---

## Week 05: RAG

Agentic RAG has solidified as the dominant production pattern.

1. **A-RAG paper (Feb 2026) — add to Slide 16 (Agentic RAG) or Slide 28 (Research).** Proposes three explicit retrieval tools — keyword search, semantic search, chunk read — enabling the agent to adaptively search and retrieve across granularities. Published arXiv 2602.03442. Source: [A-RAG: Scaling Agentic RAG (arXiv:2602.03442)](https://arxiv.org/abs/2602.03442)

2. **Agentic RAG as dominant enterprise pattern in 2026 — update Slide 03 (RAG 2 Vision) framing.** Specialized agents handle query decomposition, retrieval, validation, and synthesis in parallel. Naive RAG pipelines fail roughly 40% of the time at retrieval; the solution space has moved firmly toward agentic loops. Source: [RAG Production Guide 2026 (Lushbinary)](https://lushbinary.com/blog/rag-retrieval-augmented-generation-production-guide/)

3. **20 Advanced RAG Types survey — add to Slide 28 (Research).** Turingpost published a comprehensive taxonomy of 20 RAG types in 2026 (agentic, GraphRAG, multimodal, multilingual, etc.) useful as a landscape map for students. Source: [20 Advanced RAG Types 2026 (TuringPost)](https://www.turingpost.com/p/ragtypes)

4. **Long-document memory and multimodal grounding — mention in Slide 16 (Agentic RAG) or Slide 17 (Multi Source).** Two directions advanced RAG is moving beyond vector search: long-document memory (replacing chunk retrieval with full-document context at longer contexts) and multimodal grounding (image/table/chart retrieval). Source: [What Is RAG? 2026 (atlan.com)](https://atlan.com/know/what-is-rag/)

---

## Week 06: GraphRAG

LightRAG added multimodal support; a new "when to use graphs" benchmark has been published.

1. **LightRAG v1.5 adds multimodal document retrieval — update Slide 11 (LightRAG).** Starting from v1.5, LightRAG officially supports analysis and retrieval for multimodal documents via Multi-Engine Document Parsing. This expands its applicability beyond text corpora. Source: [LightRAG GitHub (HKUDS)](https://github.com/hkuds/lightrag)

2. **New comprehensive benchmark: "When to use Graphs in RAG" (June 2026 arXiv) — add to Slide 16 (Evaluation) or Slide 28.** Systematic empirical study on when graph-augmented retrieval outperforms vector RAG; provides a decision framework. Published June 2026. Source: [When to use Graphs in RAG (arXiv:2506.05690)](https://arxiv.org/html/2506.05690v3)

3. **Cost landscape update — revise Slide 14 (Cost Anatomy) numbers.** 2026 alternatives (LazyGraphRAG, LightRAG, Fast GraphRAG) cut indexing cost 50–6,000× vs Microsoft GraphRAG while keeping accuracy on global-scope questions comparable. The slide's cost framing should reflect this shift. Source: [GraphRAG in 2026: A Practical Buyer's Guide (Medium)](https://medium.com/@tongbing00/graphrag-in-2026-a-practical-buyers-guide-to-knowledge-graph-augmented-rag-43e5e72d522d)

4. **Decision rule update — refine Slide 15 (Decision Framework).** Current practical heuristic: LightRAG for cost-sensitive deployments; Microsoft GraphRAG when community summaries are required. GraphRAG performs best above 1K documents and below 1M tokens; beyond that, LightRAG wins on cost. Source: [GraphRAG and LightRAG in 2026 (callsphere.ai)](https://callsphere.ai/blog/vw6g-microsoft-graphrag-knowledge-graph-2026)

---

## Week 07: Evaluation

Benchmark saturation is the new headline; framework guidance has crystallized.

1. **Frontier models saturating benchmarks — update Slide 01 (Why Eval) framing.** In 2026, frontier models are saturating classic benchmarks, meaning evaluation is shifting from "does it score above X" to behavioral testing and domain-specific evals. This supports the course's emphasis on custom evals. Source: [LLM Evaluation in 2026 (Medium)](https://medium.com/@nairmilind3/llm-evaluation-in-2026-e631a78c67dc)

2. **DeepEval now has 15 benchmarks; RAGAS has 0 — update Slide 19 (DeepEval) / Slide 18 (RAGAS Deep) comparison.** DeepEval covers 14+ metrics (hallucination, bias, toxicity, RAG) with native CI/CD via Pytest. RAGAS remains better for deep RAG-specific academic-grade metric definitions. The combined recommendation: start with DeepEval for automated CI evals, add RAGAS for RAG apps. Source: [DeepEval vs RAGAS 2026 (genai.qa)](https://genai.qa/blog/deepeval-vs-ragas/)

3. **Recommended evaluation stack in 2026 — add to Slide 22 (Custom Evals) or Slide 27 (Takeaways).** For most teams: DeepEval for automated CI evals + RAGAS for retrieval-heavy systems + commercial platform (Braintrust, Arize Phoenix) when human annotation workflows and regression dashboards are needed. Source: [LLM Evaluation Frameworks Compared 2026 (atlan.com)](https://atlan.com/know/llm-evaluation-frameworks-compared/)

---

## Week 08: MCP

The MCP specification is actively evolving; two major changes need to be covered.

1. **MCP specification release candidate — update Slide 23 (Future) and Slide 04 (Wire Format).** RC for the next MCP spec includes: stateless protocol core, Extensions framework, Tasks extension, MCP Apps, authorization hardening, and a formal deprecation policy. Final specification ships July 28, 2026. Source: [2026 MCP Release Candidate (MCP Blog)](https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/)

2. **Stateless HTTP transport replacing SSE — critical update to Slide 10 (Transports).** HTTP+SSE was deprecated in the 2025-03-26 spec and is being sunset across major providers in 2026. New servers must use Streamable HTTP exclusively; this affects any demo code in the slides. Source: [MCP's biggest growing pains will soon be solved (The New Stack)](https://thenewstack.io/model-context-protocol-roadmap-2026/)

3. **Extensions framework — add to Slide 06 (Primitives) or Slide 23.** New capabilities now ship as opt-in extensions and stabilize there before (possibly never) moving into the core spec. This changes how students should think about adopting new MCP features. Source: [2026 MCP Roadmap (MCP Blog)](https://blog.modelcontextprotocol.io/posts/2026-mcp-roadmap/)

4. **Tasks extension — add to Slide 14 (Sampling) or Slide 23.** Reshapes the call lifecycle around the stateless model: a server can respond to `tools/call` with a task handle; the client drives it via `tasks/get`, `tasks/update`, `tasks/cancel`. This is important for long-running tools. Source: [2026 MCP Roadmap (MCP Blog)](https://blog.modelcontextprotocol.io/posts/2026-mcp-roadmap/)

5. **Mcp-Method and Mcp-Name headers — add to Slide 10 (Transports) or Slide 12 (Multi-Server).** New routing headers allow traffic to be routed without deep inspection of the request body — important for gateways, rate limiting, and service meshes. Source: [Complete Guide to MCP in 2026 (essamamdani.com)](https://www.essamamdani.com/blog/complete-guide-model-context-protocol-mcp-2026)

6. **MCP Server Cards (from the March 2026 roadmap) — update Slide 19 (Ecosystem).** A standard metadata + capability-discovery descriptor per server, enabling hosts and registries to introspect what a server offers before connecting. The 2026 roadmap slide already references this but the feature is now further along. Source: [MCP's Upcoming 2026 Release Is a Big Deal (Medium)](https://medium.com/@balajibal/mcps-upcoming-2026-release-is-a-big-deal-1d15990f121f)

---

## Week 09: MCP Servers

Transport deprecation and the FastMCP package change need immediate attention.

1. **HTTP+SSE transport sunset in 2026 — update Slide 05 (Transport) with urgency.** The SSE transport was deprecated in the 2025-03-26 spec; major providers are sunsetting it in 2026. Any demo code using SSE needs to migrate to Streamable HTTP. This may affect lab exercises. Source: [Building MCP Servers in Python: Production Primer 2026 (DEV Community)](https://dev.to/tufailkhan457/building-mcp-servers-in-python-a-production-primer-for-2026-4kh2)

2. **FastMCP 3.x standalone package — update Slide 04 (SDK Setup).** `fastmcp` 3.x (April 2026) is now the standalone actively-maintained successor; `mcp.server.fastmcp` bundled inside the official SDK is deprecated. Students should `import from fastmcp` not from the bundled module to avoid version conflicts. Source: [FastMCP GitHub (PrefectHQ)](https://github.com/jlowin/fastmcp)

3. **OAuth 2.1 required for remote servers — update Slide 19 (Authentication).** MCP's `mcp.server.auth` implements OAuth 2.1 resource-server functionality. For remote (web-accessible) servers, API keys are not a secure authentication method; implement OAuth 2.0 flow. Slide 19 should clarify this distinction. Source: [How to Build an MCP Server (techsy.io)](https://techsy.io/en/blog/how-to-build-an-mcp-server)

4. **MCP Server Cards for capability discovery — add to Slide 22 (Remote Servers).** Standard metadata descriptor per server; affects how remote servers are discovered and verified. Relevant to the "registries" topic already implied in the deployment content. Source: [MCP Cheat Sheet 2026 (webfuse.com)](https://www.webfuse.com/mcp-cheat-sheet)

---

## Week 10: Multi-Agent

The biggest update in this area is the emergence of Google's A2A protocol and the Linux Foundation governance of both MCP and A2A.

1. **Google A2A Protocol v1.0 — add as a new slide or update Slide 03 (Landscape) and Slide 17 (MCP Multi Agent).** Agent-to-Agent protocol (April 2025 announcement, v1.0 with Signed Agent Cards in 2026) now has 150+ member organizations including Anthropic, Google, OpenAI, Microsoft, AWS, under Linux Foundation's Agentic AI Foundation (AAIF). The two-layer architecture (MCP for tool integration + A2A for agent coordination) is the emerging reference standard. Source: [A2A Protocol Explained (stellagent.ai)](https://stellagent.ai/insights/a2a-protocol-google-agent-to-agent); [Agent Interoperability Protocols 2026 (zylos.ai)](https://zylos.ai/research/2026-03-26-agent-interoperability-protocols-mcp-a2a-acp-convergence/)

2. **Five dominant production patterns in 2026 — update Slide 10 (Pattern Selection).** Fan-out, pipeline, debate, supervisor, and swarm are the five patterns dominating production systems. Practical guidance: start with supervisor, add fan-out for genuinely parallel tasks, use swarm only for 50+ truly independent sub-tasks. Source: [Multi-Agent Orchestration: 5 Patterns 2026 (digitalapplied.com)](https://www.digitalapplied.com/blog/multi-agent-orchestration-5-patterns-that-work)

3. **Google ADK and Mastra as new framework entrants — update Slide 03 (Landscape).** The framework comparison in the slide doesn't mention Google ADK or Mastra; both have production deployments in 2026 and are named in head-to-head comparisons alongside LangGraph, CrewAI, and Claude Agent SDK. Source: [Best Multi-Agent Frameworks 2026 (gurusup.com)](https://gurusup.com/blog/best-multi-agent-frameworks-2026)

4. **Enterprise adoption milestone — update Slide 01 (Why Multi Agent) framing.** Gartner predicts 40% of enterprise applications will be integrated with task-specific AI agents by end of 2026 (up from <5% in 2025). Source: [AI Agent Frameworks 2026 (insoftex.com)](https://insoftex.com/ai-agent-frameworks-2026-langchain-vs-langgraph/)

---

## Week 11: HITL & Memory

Mem0 released a major algorithm update; the memory system landscape has expanded.

1. **Mem0 April 2026 algorithm update — update Slide 21 (Mem0).** New token-efficient memory algorithm based on single-pass hierarchical extraction and multi-signal retrieval (semantic similarity + BM25 keyword matching + entity matching, all normalized and fused). May 2026 benchmarks: 92.5% LoCoMo, 94.4% LongMemEval, <7K tokens per retrieval vs. 25K+ for full-context. Source: [State of AI Agent Memory 2026 (mem0.ai)](https://mem0.ai/blog/state-of-ai-agent-memory-2026)

2. **Built-in entity linking replaces external graph store in Mem0 — update Slide 21.** During `add()`, Mem0 now extracts entities and stores them in a parallel entity collection. At search time, entity matches boost relevant memories inside the final combined score. External graph store dependency removed. Source: [AI Memory Benchmarks 2026 (mem0.ai)](https://mem0.ai/blog/ai-memory-benchmarks-in-2026)

3. **Memory system landscape expanded to 5 named systems — add to Slide 21 or add new slide.** The five systems worth comparing in 2026: Mem0, Zep, Letta, Cognee, Cloudflare Agent Memory. Each has distinct architectural trade-offs worth covering. Source: [Agent Memory 2026: Mem0, Letta, Zep compared (innobu.com)](https://www.innobu.com/en/articles/agent-memory-2026-mem0-letta-zep-hermes-openclaude-comparison.html)

4. **LangGraph v0.4 HITL checkpoints — update Slide 20 (LangGraph Memory) and Slide 08 (Breakpoints).** Redesigned HITL checkpoints surface automatically in `.invoke()` responses; durable Postgres/Redis state persistence is now built-in. Relevant to both the memory and HITL sections. Source: [LangGraph vs PydanticAI 2026 (agentsindex.ai)](https://agentsindex.ai/compare/langgraph-vs-pydanticai)

5. **Mastra TypeScript-first Mem0 integration — add to Slide 21 or Slide 19 (Memory Architecture).** `@mastra/mem0` provides first-party TypeScript integration with Mem0, eliminating the need to manage a Python server for TypeScript-first teams. Source: [mem0 in 2026 (callsphere.ai)](https://callsphere.ai/blog/vw3g-mem0-agent-memory-open-source-library-2026)

---

## Week 12: Small Models

Multiple new model releases have expanded the small-model landscape substantially.

1. **Qwen 3.5 small series released March 2026 — add to Slide 05 (Qwen).** Alibaba released the Qwen3.5 small series (0.8B–9B, all Apache 2.0 licensed) in March 2026. All models share the same architecture; the 3B variant sits in the center of the lineup. Broadens the open-weight option landscape. Source: [Small Language Models Business Guide (digitalapplied.com)](https://www.digitalapplied.com/blog/small-language-models-business-guide-gemma-phi-qwen)

2. **Gemma 4 launched April 2026 — update Slide 08 (Gemma).** Gemma 4 models are multimodal (text + image input, text output), representing a significant capability upgrade from Gemma 3 for tasks involving visual content. Source: [Small Language Models Guide 2026 (localaimaster.com)](https://localaimaster.com/blog/small-language-models-guide-2026)

3. **Phi-4-mini benchmarks — update Slide 06 (Phi).** Phi-4-mini (3.8B) leads the sub-4B class on MMLU (67.3%, 5-shot) and GSM8K (88.6%), with a 128K context window. Strongest small-model option for math and reasoning tasks. Source: [Small Language Models: Phi-4 vs Gemma 3 vs Llama 3.3 (meta-intelligence.tech)](https://www.meta-intelligence.tech/en/insight-slm-enterprise)

4. **Llama 4 Scout production adoption growing — update Slide 04 (Llama) framing.** Scout's April 2026 release has been followed by rapid ecosystem adoption (quantized versions via Ollama, fine-tuning tooling). The 10M context window use case is now real and documented in production. Source: [Best Small Language Models 2026 (tinyweights.dev)](https://tinyweights.dev/posts/best-small-language-models-2026/)

5. **Unsloth for faster QLoRA — consider adding to Slide 17 (Local Inference) or link to Week 13.** Unsloth delivers 2–5× faster training and ~70% lower VRAM for single-GPU QLoRA fine-tuning. Relevant when discussing local-inference fine-tuning trade-offs. Source: [LLM Fine-Tuning Best Practices 2026 (hjlabs.in)](https://hjlabs.in/AIML/blog/post/llm-fine-tuning-best-practices.html)

---

## Week 13: Distillation

The pipeline recommendations and tooling have solidified around a "synthetic-data-first" approach.

1. **Synthetic data is now the default, not an advanced technique — update Slide 04 (Synthetic Data) framing.** In 2026, synthetic data from a strong teacher (GPT-4o or Claude Sonnet) for SFT is the standard starting point, not an advanced option. The framing of the slide as "synthetic data" may need to acknowledge it's now table stakes. Source: [Synthetic Data for LLM Fine-Tuning 2026 (futureagi.com)](https://futureagi.com/blog/synthetic-data-fine-tuning-llms/)

2. **Recommended 2026 pipeline order — add to Slide 27 (Takeaways) or Slide 23 (Distillation Pipeline).** The community consensus pipeline is: Prompt → RAG → Fine-tune → Distill. The highest-ROI fine-tuning is a thin LoRA/QLoRA adapter on top of a strong base model, paired with retrieval. This is a cleaner sequencing than what may be implied. Source: [Fine-Tuning LLMs in 2026: When RAG Isn't Enough (BigData Boutique)](https://bigdataboutique.com/blog/fine-tuning-llms-when-rag-isnt-enough)

3. **IPO alongside DPO — update Slide 16 (DPO).** Identity Preference Optimization (IPO) is now mentioned alongside DPO as a preference-alignment method in 2026 fine-tuning guides. Worth a sentence on when to prefer each. Source: [LLM Fine-Tuning 2026: LoRA, RLHF, DPO (futureagi.com)](https://futureagi.com/blog/llm-fine-tuning-guide-2025/)

4. **Unsloth for QLoRA efficiency — add to Slide 12 (LoRA) or Slide 13 (QLoRA).** Unsloth delivers 2–5× faster QLoRA training and ~70% lower VRAM; it's become the de-facto tool for single-GPU fine-tuning. Source: [How to Fine-Tune LLMs in 2026: Costs, GPUs, and Code (Spheron)](https://www.spheron.network/blog/how-to-fine-tune-llm-2026/)

5. **Agentic Knowledge Distillation paper (Feb 2026) — add to Slide 28 (Research).** Proposes using autonomous agents to generate and filter training data for distilling small models, applied to SMS threat detection. Pattern generalizes. Source: [Agentic Knowledge Distillation (arXiv:2602.10869)](https://arxiv.org/html/2602.10869)

---

## Week 14: Safety

The OWASP Agentic Top 10 is the biggest addition — Slide 01b already references it, but the full list should be current.

1. **OWASP Top 10 for Agentic Applications 2026 — update Slide 01b (OWASP Agentic 2026) with the official 2026 list.** The full ASI:2026 list: ASI01 Agent Goal Hijack, ASI02 Tool Misuse & Exploitation, ASI03 Agent Identity & Privilege Abuse, ASI04 Agentic Supply Chain Compromise, ASI05 Unexpected Code Execution, ASI06 Memory & Context Poisoning, ASI07 Insecure Inter-Agent Communication, ASI08 Cascading Agent Failures, ASI09 Human-Agent Trust Exploitation, ASI10 Rogue Agents. Verify these align with what's in the current slide. Source: [OWASP Top 10 for Agentic Applications 2026 (genai.owasp.org)](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/)

2. **OWASP AI Security Solutions Landscape Q2 2026 — add to Slide 28 (Research).** OWASP Gen AI Security Project published a landscape of AI and agentic red-teaming tools in Q2 2026. A useful reference for students looking at tooling. Source: [AI Security Solutions Landscape Q2 2026 (genai.owasp.org)](https://genai.owasp.org/resource/ai-security-solutions-landscape-for-ai-and-agentic-red-teaming-q2-2026/)

3. **EU AI Act compliance deadline August 2026 — add to Slide 28 (Research) or Slide 27 (Takeaways).** High-risk system compliance obligations are due August 2026. GPAI adversarial testing obligations (Article 55) are already in effect. If teaching safety in May/June 2026, students are entering a profession where this is live compliance, not future speculation. Source: [8 Red Teaming Strategies for LLMs (galileo.ai)](https://galileo.ai/blog/llm-red-teaming-strategies)

4. **Behavioral monitoring over prompt-pattern matching — update Slide 25 (Monitoring).** 2026 best-practice is to watch how the model acts (response entropy, self-contradiction, sudden topic pivots, spikes in policy violations) rather than matching prompt patterns. More resilient against adversarial prompts. Source: [Best AI Guardrails in 2026 (generalanalysis.com)](https://generalanalysis.com/guides/best-ai-guardrails)

5. **DeepTeam with `OWASP_ASI_2026` test suite — add to Slide 22 (Garak) or new slide.** DeepTeam (open-source LLM red-teaming framework) ships an `OWASP_ASI_2026` test suite for agentic applications alongside the classic LLM Top 10. Complements Garak for agentic threat coverage. Source: [OWASP Top 10 for Agents 2026 (trydeepteam.com)](https://www.trydeepteam.com/docs/frameworks-owasp-top-10-for-agentic-applications)

6. **Security threat modeling for agent protocols — add to Slide 20 (Attack Categories).** A Feb 2026 arXiv paper gives a comparative threat-modeling analysis of MCP, A2A, Agora, and ANP protocols — useful for the multi-agent security discussion. Source: [Security Threat Modeling for Emerging AI-Agent Protocols (arXiv:2602.11327)](https://arxiv.org/pdf/2602.11327)

---

## Week 15: Capstone

No structural changes needed; the capstone synthesizes prior weeks. Three items are worth a brief note in the checklist slides.

1. **Model routing slide (Slide 02) — add note on Fable 5 / Mythos 5 access suspension.** Students building capstone projects cannot currently access Fable 5 or Mythos 5 due to export-control directive (June 12, 2026). Opus 4.8, Sonnet 4.6, and Haiku 4.5 remain available. Update the routing recommendation accordingly.

2. **Architecture slide (Slide 04) — add the MCP + A2A two-layer reference architecture.** If students are building multi-agent capstones, the MCP (tool integration) + A2A (agent coordination) two-layer model is now the reference architecture worth calling out.

3. **Safety Checklist (Slide 07) — add OWASP ASI:2026 checklist items for agentic projects.** Students building agentic capstones should validate against ASI01–ASI10 in addition to the classic LLM Top 10.

---

*Generated: 2026-06-22. Research via web search. All source links are to primary or authoritative secondary sources. The instructor should verify any claim before incorporating it into lecture slides.*
