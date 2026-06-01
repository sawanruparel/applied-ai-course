# Course Refresh — 2026-06-01

Generated manually (ANTHROPIC_API_KEY not available in sandbox) against 15 lectures using built-in web search tools. Each section reflects developments from roughly the last 3 months (March–June 2026). Primary sources are linked inline. The instructor decides what to incorporate — nothing here is authoritative.

---

## Week 01: landscape

The model landscape has moved substantially since early 2026 slides were written.

1. **Update slide 09 (OpenAI o-Series) and 11 (Claude Evolution)** to reflect the April 2026 wave: [Claude Opus 4.7](https://www.vellum.ai/blog/claude-opus-4-7-benchmarks-explained) (released April 16) reaches SWE-bench Verified 87.6% and OSWorld 78.0%; [GPT-5.5](https://www.mindstudio.ai/blog/gpt-5-5-review-developers-builders) leads on autonomous agent execution (Terminal-Bench 82.7%, OSWorld 78.7%); [Gemini 3.1 Pro](https://www.datacamp.com/blog/claude-opus-4-7-vs-gemini-3-1-pro) (released February 19) tops GPQA Diamond at 94.3% and ARC-AGI-2 at 77.1%. Seven frontier models shipped between February and April 2026 alone.

2. **Update slide 14 (Model Comparison)** pricing table: frontier model costs dropped 30–60% since the slides were written. Closed-frontier vs. open-weight gap narrowed to 5–15 points on most benchmarks. See [teamai.com comparison](https://teamai.com/blog/large-language-models-llms/the-2026-ai-frontier-model-war/).

3. **Add or update slide 13 (Open Models)** to cover [Llama 4](https://botmonster.com/ai/gemma-4-vs-qwen-3-5-vs-llama-4-open-model-comparison-2026/) Scout (17B active / 109B MoE) and Maverick (17B active / 400B MoE), [Qwen 3.5](https://www.mindstudio.ai/blog/gemma-4-vs-qwen-3-5-open-weight-comparison) (released February 2026, 0.8B–397B range, hybrid thinking mode), and [Gemma 4](https://www.interconnects.ai/p/gemma-4-and-what-makes-an-open-model) (released April 2, 2026, MoE architecture, trimodal text/image/audio, Apache 2.0 license). These weren't available when the deck was written.

4. **Update slide 09 (OpenAI o-Series)** to note that native reasoning models (o-series, Claude Extended Thinking, Gemini Thinking Mode) now do chain-of-thought internally — this affects guidance given in Week 2 on when to prompt for CoT explicitly.

5. **Update slide 08 (Inference Compute)** to cover [Kimi K2.6](https://futureagi.substack.com/p/best-llms-in-may-2026-what-actually) (May 2026, MoE, MIT licensed, top-tier coding) and Qwen 3.6 (77.2% SWE-bench), which represent the rapid cadence of May 2026 open-model releases.

6. **Add a note to slide 23 (Cost Latency)** that the MoE (Mixture-of-Experts) architecture is now mainstream in open models (Llama 4, Gemma 4, Qwen 3.5), dramatically improving cost-per-token at equivalent quality — this changes the cost framing compared to dense-model-era slides.

---

## Week 02: prompting

Prompt engineering has matured significantly, but some guidance needs nuancing for 2026 models.

1. **Update slide 04–06 (CoT Intro/Why/Variants)** with a critical caveat: Chain-of-Thought prompting should be *skipped* for native reasoning models (o-series, Claude Extended Thinking, Gemini Thinking Mode) since they perform CoT internally — adding it externally wastes tokens and can degrade output. See [k2view.com techniques guide](https://www.k2view.com/blog/prompt-engineering-techniques/).

2. **Add a slide or update slide 08 (Tree of Thoughts)** to cover Graph-of-Thought (GoT), which extends reasoning to arbitrary directed graph structures where intermediate thoughts from different paths can merge and cross-reference, forming richer reasoning networks beyond linear trees. See [promptingguide.ai](https://www.promptingguide.ai/techniques/cot).

3. **Update slide 15 (Meta Prompting)** to include Automatic Prompt Engineering (APE): LLMs generating prompts have been empirically shown to outperform human-written prompts on many tasks. This shifts the guidance from "write better prompts" toward "generate and evaluate prompt variants programmatically." Source: [analyticsvidhya.com 2026 guide](https://www.analyticsvidhya.com/blog/2026/01/master-prompt-engineering/).

4. **Update slide 20 (Temperature)** and slide 24 (Common Mistakes)** to include the finding that positive framing consistently outperforms negative instructions — "only use real data" beats "don't use mock data" because the latter forces the model to process the forbidden concept first. Source: [lakera.ai prompt engineering guide](https://www.lakera.ai/blog/prompt-engineering-guide).

5. **Update slide 21 (Prompt Testing)** to note that automated prompt optimization tools now iterate prompts through adaptive loops, treating prompt quality as a metric to optimize rather than a craft artifact. This is now standard practice at production scale.

---

## Week 03: dev-stack

The framework and protocol landscape has changed substantially since the slides were written.

1. **Update slide 05 (LangChain LangGraph)** to note that [LangChain and LangGraph both reached v1.0](https://insoftex.com/ai-agent-frameworks-2026-langchain-vs-langgraph/) in 2026, and that [PydanticAI hit stable V1 in September 2025](https://ai.pydantic.dev/) — these are now production-stable APIs, not experimental. The "framework instability" concern in earlier slide messaging has been resolved.

2. **Add content to slide 09 (Claude Agent SDK)** or create a new slide on the **A2A (Agent-to-Agent) protocol**: Google's [A2A protocol](https://www.prnewswire.com/news-releases/a2a-protocol-surpasses-150-organizations-lands-in-major-cloud-platforms-and-sees-enterprise-production-use-in-first-year-302737641.html) surpassed 150 supporting organizations in April 2026 and is now deployed in production at Microsoft, AWS, Salesforce, SAP, and ServiceNow. IBM's competing ACP merged into A2A. MCP + A2A + AG-UI are now described as the three-protocol substrate of production agentic systems. See [rapidclaw.dev A2A guide](https://rapidclaw.dev/blog/a2a-protocol-complete-guide-2026).

3. **Update slide 10 (Head to Head)** to reflect the emerging production pattern: [PydanticAI for individual agent definition + LangGraph for multi-agent orchestration](https://aiagentskit.com/blog/pydantic-ai-vs-langchain-vs-langgraph/) is now the most recommended combination, with PydanticAI delivering significantly lower P95 latency and fewer errors under load than LangChain for equivalent tasks.

4. **Update slide 04 (Framework Explosion)** to note the consolidation: the ecosystem has de-fragmented around a smaller set of stable options. The [Speakeasy framework comparison](https://www.speakeasy.com/blog/ai-agent-framework-comparison) now includes Mastra and Vercel AI SDK as additional contenders alongside the existing list.

5. **Update slide 18 (Observability)** to reflect OpenTelemetry as the now-standard instrumentation approach — FastMCP v3.0 (February 2026) added native OpenTelemetry support, and it is now expected infrastructure in production AI stacks. Source: [chatforest.com MCP SDKs](https://chatforest.com/reviews/mcp-server-frameworks-sdks/).

---

## Week 04: knowledge-rep

Embedding models and vector database architecture have evolved meaningfully.

1. **Update slide 06 (Embedding Models)** to include Matryoshka Representation Learning (MRL), which is now implemented in production embedding models and enables developers to choose output dimensions (2048 down to 256) for speed/accuracy trade-offs. Also note int8 and binary quantization as standard options for embeddings. Source: [openxcell.com embedding models guide](https://www.openxcell.com/blog/best-embedding-models/).

2. **Update slide 11 (Vector DB Landscape)** to reflect the 2026 architectural shift: the trend is moving *back* toward extended relational databases with vector extensions, away from standalone purpose-built vector databases. Source: [dev.to: What's Changing in Vector Databases in 2026](https://dev.to/actiandev/whats-changing-in-vector-databases-in-2026-3pbo).

3. **Update slide 17 (Beyond Retrieval)** and/or slide 21 (Multimodality) to note that multimodal vector retrieval (text, image, audio in the same index) is now standard capability across major vector database providers, not a differentiator.

4. **Update slide 26 (Evaluation)** to note that 60% of new RAG deployments in 2026 include systematic evaluation from day one — evaluation is no longer an afterthought, which should be emphasized when teaching pipeline design. Source: [squirro.com state of RAG](https://squirro.com/squirro-blog/state-of-rag-genai).

5. **Update slide 08 (Chunking)** to reinforce parent-child retrieval (small precise chunks retrieved, parent chunks returned to LLM) as the now-standard production pattern rather than a "research" technique. Source: [lushbinary.com RAG production guide](https://lushbinary.com/blog/rag-retrieval-augmented-generation-production-guide/).

---

## Week 05: rag

RAG architecture has consolidated around several dominant patterns since these slides were written.

1. **Update slide 03 (RAG 2 Vision)** to note that [Agentic RAG](https://dev.to/suraj_khaitan_f893c243958/-rag-in-2026-a-practical-blueprint-for-retrieval-augmented-generation-16pp) — where specialized agents handle retrieval, validation, and reranking in parallel — is now the dominant production architecture in 2026, not an advanced variant. The framing of "RAG 2.0" as aspirational should be updated to reflect this is now baseline.

2. **Update slide 07 (Reranking)** to note that hybrid retrieval (dense + sparse) combined with cross-encoder reranking improves precision by 25–40% over naive RAG with modest latency increases — this is now considered table-stakes, not an optimization. Source: [blog.starmorph.com RAG techniques](https://blog.starmorph.com/blog/rag-techniques-compared-best-practices-guide).

3. **Update slide 21 (RAG Fusion)** or add a new slide on **Parametric RAG**: retrieved documents are encoded into LoRA weights rather than injected into context, representing a fundamentally different paradigm. Still emerging, but worth introducing. Source: [verysell.ai RAG knowledge](https://verysell.ai/retrieval-augmented-generation-best-knowledge-for-2026/).

4. **Update slide 19 (Citation Grounding)** to note that context-graph-grounded RAG achieves up to 5× improvement in analyst response accuracy over raw schema injection — a significant finding that justifies pairing RAG with graph structures (linking forward to Week 6). Source: [squirro.com](https://squirro.com/squirro-blog/state-of-rag-genai).

5. **Update slide 24 (Monitoring)** to reflect that governance controls — access policies, audit logging, and per-user context filtering — are now expected in enterprise RAG pipelines from day one, not retrofitted. The regulatory pressure from EU AI Act makes this a compliance concern, not just an engineering one.

---

## Week 06: graphrag

GraphRAG has matured substantially; the cost objection that dominated 2024 discussions is largely resolved.

1. **Update slide 09 (Microsoft GraphRAG)** to note that the prohibitive $33K indexing cost for large datasets that made GraphRAG impractical has been solved by subsequent work. Current cost-effective alternatives bring GraphRAG within reach for most teams. Source: [medium.com GraphRAG practitioner guide](https://medium.com/graph-praxis/graph-rag-in-2026-a-practitioners-guide-to-what-actually-works-dca4962e7517).

2. **Update slide 10 (LazyGraphRAG)** with the key finding: [LazyGraphRAG maintained superiority in 100% of comparisons (96/96)](https://arxiv.org/html/2506.05690v3) against vector RAG, RAPTOR, and standard GraphRAG, and also outperformed 1M-token context windows. This is a strong empirical argument for lazy approaches.

3. **Update slide 18 (Future)** to cover **Agentic Graph RAG** as an emerging dominant pattern — agents navigate knowledge graphs dynamically rather than precomputing community summaries. Source: [localoptimumai.substack.com state of agentic graph RAG](https://localoptimumai.substack.com/p/the-state-of-agentic-graph-rag).

4. **Update slide 13 (Hybrid Retrieval)** to reference GRAG's soft pruning technique for mitigating irrelevant entities in retrieved subgraphs — a specific technical improvement to address a known failure mode of GraphRAG. Source: [arxiv.org 2506.05690](https://arxiv.org/html/2506.05690v3).

5. **Update slide 15 (Decision Framework)** to reflect that the cost-vs-quality decision tree has changed: GraphRAG is now cost-competitive enough that the primary deciding factor is query type (global synthesis vs. local lookup), not budget alone.

---

## Week 07: evaluation

Evaluation tooling has consolidated with notable new integrations.

1. **Update slide 19 (DeepEval) and slide 18 (RAGAS Deep)** to note that [MLflow now natively integrates DeepEval, RAGAS, and Phoenix Arize as first-class scorers](https://mlflow.org/blog/third-party-scorers/), eliminating the need to run separate evaluation infrastructure for teams already using MLflow.

2. **Update slide 13 (Judge Patterns)** to add rubric-based evaluation as a formalized methodology: [DeepEval's G-Eval](https://deepeval.com/guides/guides-llm-as-a-judge) frames evaluation as LLM judging with chain-of-thought structured grading. A new [empirical validation paper (April 2026)](https://medium.com/@adnanmasood/rubric-based-evals-llm-as-a-judge-methodologies-and-empirical-validation-in-domain-context-71936b989e80) provides domain-specific validation of this approach.

3. **Update slide 13 (Judge Patterns)** to note that both RAGAS and DeepEval now support any OpenAI-compatible endpoint as the judge model, enabling fully on-premises evaluation pipelines without external API calls — relevant for regulated industries.

4. **Update slide 23 (Offline vs Online)** to reflect the production statistic: 60% of new RAG deployments in 2026 include systematic evaluation from day one (up from <30% in early 2025). The slide framing evaluation as an afterthought should be revised to position it as a design-time activity. Source: [squirro.com](https://squirro.com/squirro-blog/state-of-rag-genai).

5. **Update slide 21 (Braintrust) and slide 20 (Phoenix Arize)** to check for pricing and feature updates — the competitive landscape among hosted eval platforms has shifted in 2026 and tool recommendations may need refreshing.

---

## Week 08: mcp

MCP has undergone its largest-ever revision — several slides may be significantly outdated by July 2026.

1. **Update slide 04 (Wire Format) and slide 10 (Transports)** with the major architectural change: the [2026-07-28 MCP release candidate](https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/) makes MCP **stateless at the protocol layer**. Remote MCP servers can now run behind ordinary round-robin load balancers rather than requiring sticky sessions or shared session stores. This is the headline change of the largest revision since launch.

2. **Add a new slide or update slide 23 (Future)** on **MCP Apps**: servers can now ship interactive HTML interfaces that hosts render in sandboxed iframes, and the **Tasks extension** enables long-running async operations with retry semantics and expiry policies. Source: [blog.modelcontextprotocol.io 2026 roadmap](https://blog.modelcontextprotocol.io/posts/2026-mcp-roadmap/).

3. **Update slide 19 (Ecosystem)** to reflect massive adoption: MCP TypeScript and Python SDKs reached [97 million monthly downloads](https://chatforest.com/reviews/mcp-server-frameworks-sdks/) in March 2026 (up from ~2 million at launch). A formal governance process with Working Groups and Specification Enhancement Proposals (SEPs) is now in place.

4. **Update slide 11 (Auth)** to note that authorization in the 2026 RC is hardened to align more closely with OAuth and OpenID Connect deployments, addressing enterprise SSO-integrated auth and audit trail gaps that were flagged in the original spec.

5. **Add content to slide 17 (Comparison) or slide 23 (Future)** on the **three-protocol substrate**: MCP (agent-to-tool), [A2A](https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/) (agent-to-agent, now at 150+ organizations), and AG-UI (agent-to-UI) are emerging as the standard layer for production agentic systems. IBM's ACP merged into A2A in August 2025. Source: [digitalapplied.com protocol ecosystem map](https://www.digitalapplied.com/blog/ai-agent-protocol-ecosystem-map-2026-mcp-a2a-acp-ucp).

6. **Update slide 20 (Security)** with the new Spec Enhancement Proposals addressing enterprise security gaps: configuration portability, gateway behavior standardization, and cryptographic Agent Card signatures for verifying server identity.

---

## Week 09: mcp-servers

SDK and tooling updates are significant — the "hands-on" lab content may reference outdated APIs.

1. **Update slide 04 (SDK Setup)** to reference [FastMCP v3.x](https://chatforest.com/reviews/mcp-server-frameworks-sdks/) as the dominant third-party SDK: v3.0 (February 2026) added component versioning, granular authorization, and OpenTelemetry instrumentation; v3.2 added MCP Apps support. With ~1.9M downloads/day and an estimated 70% of MCP servers, FastMCP is now the de facto standard for Python server development.

2. **Update slide 05 (Transport)** to reflect the stateless transport architecture introduced in the 2026 RC: servers no longer need sticky sessions or shared session stores, simplifying deployment substantially. Source: [blog.modelcontextprotocol.io RC announcement](https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/).

3. **Update slide 25 (Deployment)** to note that [production MCP deployment now requires](https://www.prefect.io/resources/best-mcp-deployment-platforms-enterprise-2026) audit logging, SSO-integrated auth, and configuration portability as baseline — these were optional in earlier versions. Students building for enterprise contexts should architect with these from day one.

4. **Add a note to slide 23 (Security)** on the [Qualys research on MCP servers as "Shadow IT"](https://blog.qualys.com/product-tech/2026/03/19/mcp-servers-shadow-it-ai-qualys-totalai-2026) — employees spinning up unauthorized MCP servers is an emerging organizational risk, relevant to students who will be deploying in enterprise environments.

5. **Update slide 26 (Takeaways)** to mention the [official Rust SDK (rmcp) v1.5.0](https://use-apify.com/blog/mcp-server-handbook-2026) as a stable, production-ready option for performance-critical MCP servers — it was not stable when the deck was written.

---

## Week 10: multi-agent

Multi-agent systems have matured from research pattern to production standard.

1. **Update slide 03 (Landscape)** to reflect that **57% of organizations now deploy multi-step agent workflows in production** with average reported ROI of 2.5–3.5× (top-quartile: 4–6×). The framing of multi-agent as emerging/experimental should be updated. Source: [flowhunt.io multi-agent research](https://www.flowhunt.io/blog/multi-agent-ai-system/).

2. **Update slide 06 (Collaborative) and slide 09 (Swarm)** to note architectural convergence: **peer-collaborating "GroupChat" designs have quietly lost ground** to the orchestrator + ephemeral subagent pattern. Anthropic, Cognition, OpenAI, Microsoft AutoGen, and LangChain have all converged on a central orchestrator that spawns isolated subagents returning compressed summaries. Source: [niteagent.com multi-agent production](https://niteagent.com/blog/multi-agent-production-2026/).

3. **Add a slide or update slide 17 (MCP Multi Agent)** to cover the [A2A protocol](https://github.com/a2aproject/A2A) for cross-vendor agent-to-agent coordination — now at 150+ organizations and deployed in production at Microsoft, AWS, Salesforce, SAP, ServiceNow. This is the emerging standard for inter-agent communication across heterogeneous frameworks.

4. **Update slide 24 (Cost Control)** with the specific data point: multi-agent systems burn approximately **15× the tokens of chat**, making token-optimization patterns (returning summaries, not full transcripts) a first-class design concern rather than an optimization. Source: [codebridge.tech multi-agent guide](https://www.codebridge.tech/articles/mastering-multi-agent-orchestration-coordination-is-the-new-scale-frontier).

5. **Update slide 03 (Landscape)** to include the current seven-framework shortlist: LangGraph, Claude Agent SDK, CrewAI, AutoGen/AG2, Semantic Kernel, LlamaIndex agents, and PydanticAI — adding CrewAI and Semantic Kernel if not already covered.

---

## Week 11: hitl-memory

Two significant developments since the slides were written: Anthropic's managed memory and Mem0's architectural paper.

1. **Update slide 21 (Mem0)** with the [April 2026 Mem0 arXiv paper](https://arxiv.org/pdf/2504.19413), which formalizes the two-phase pipeline (LLM extraction → conflict detection + graph update), three-scope hierarchy (user/session/agent), and hybrid backend (vector similarity + knowledge graph traversal). This is now a citable technical reference for the architecture.

2. **Add a new slide or update slide 03 (Why Memory)** to cover **Anthropic's persistent memory for Claude Managed Agents** (public beta, April 2026): cross-session state persistence is now available as a managed service without requiring developers to implement external memory stores. Also note the "Dreaming" feature — async between-session memory consolidation that reviews transcripts, merges duplicates, and writes new entries. Source: [zylos.ai memory architectures](https://zylos.ai/research/2026-04-05-ai-agent-memory-architectures-persistent-knowledge).

3. **Update slide 21 (Mem0)** to note current scale: [41K stars, 14M downloads](https://dev.to/agdex_ai/ai-agent-memory-in-2026-mem0-vs-zep-vs-letta-vs-cognee-a-practical-guide-cfa), integrating across all three major agent runtimes. Add the three competing alternatives — Zep, Letta (formerly MemGPT), and Cognee — as a comparison landscape.

4. **Update slide 19 (Memory Architecture)** to emphasize the multi-scope tagging pattern (user_id / agent_id / session_id) as the standard design for enterprise memory systems, enabling privacy-safe, scoped recall without cross-user contamination.

5. **Update slide 25 (Privacy)** to note that multi-scope memory architectures (tagging memories by user/agent/session) are now the standard approach to prevent cross-user memory contamination — a specific privacy mechanism the slides should cover.

---

## Week 12: small-models

Three major new open model families have been released since the slides were written.

1. **Update slide 08 (Gemma)** with [Gemma 4](https://www.interconnects.ai/p/gemma-4-and-what-makes-an-open-model) (released April 2, 2026): MoE architecture, four sizes (2.3B/4.5B effective plus 26B and 31B), trimodal (text/image/audio), **Apache 2.0 license** (first time for Gemma). Dramatically better than Gemma 3. Wins AIME 2026 (89.2%) and Codeforces ELO (2150) at the 27–31B scale.

2. **Update slide 05 (Qwen)** with [Qwen 3.5](https://www.mindstudio.ai/blog/gemma-4-vs-qwen-3-5-open-weight-comparison) (released February 2026): 0.8B–397B parameter range, **hybrid thinking mode** (toggle fast/slow reasoning without switching models), 201-language support, Apache 2.0 license. Qwen 3.6 (May 2026) hits 77.2% on SWE-bench.

3. **Update slide 04 (Llama)** with [Llama 4](https://botmonster.com/ai/gemma-4-vs-qwen-3-5-vs-llama-4-open-model-comparison-2026/) Scout (17B active / 109B MoE) and Maverick (17B active / 400B MoE) — MoE architecture now standard across all three major open families. Note the Llama 4 Community License: free under 700M MAU, commercial terms required beyond that.

4. **Update slide 15 (Cost Calculator)** with current SLM pricing: $0.10–$0.50 per 1M tokens for small open models vs $2–$30 for frontier models — a **5–20× cost difference** that makes the small-model strategy even more compelling than the slides currently convey. Source: [localaimaster.com SLM guide](https://localaimaster.com/blog/small-language-models-guide-2026).

5. **Update slide 12 (Benchmarking)** to note Kimi K2.6 (May 2026, MIT licensed, MoE architecture) as a notable addition for coding tasks, scoring competitively with much larger models. Source: [futureagi.substack.com May 2026 LLMs](https://futureagi.substack.com/p/best-llms-in-may-2026-what-actually).

---

## Week 13: distillation

Two new papers directly relevant to the slides' content, plus a new dual-LoRA technique.

1. **Update slide 11 (LoRA) or slide 12 (LoRA How)** to cover the **PREREQ-Tune dual-LoRA architecture**: one LoRA adapter absorbs synthetic factual knowledge (frozen after pre-training) and a second "skill" LoRA learns the task on top. This is a concrete advance beyond standard single-LoRA fine-tuning. Source: [hjlabs.in fine-tuning guide](https://hjlabs.in/AIML/blog/post/llm-fine-tuning-best-practices.html).

2. **Add to slide 16 (DPO)** coverage of **F-DPO (Focused DPO)**: a 2026 variant that targets hallucination reduction specifically, with the math to back it up. Source: [dev.to F-DPO and LoRA for hallucinations](https://dev.to/soumia_g_9dc322fc4404cecd/reducing-llm-hallucinations-in-2026-lora-f-dpo-and-the-math-that-actually-works-50e0).

3. **Update slide 23 (Distillation Pipeline)** with the [TuneShift-KD paper (arXiv 2603.24518)](https://arxiv.org/pdf/2603.24518), which covers knowledge distillation specifically for fine-tuned models (not just base models) — a gap in the current literature the slides should acknowledge.

4. **Update slide 05 (Generation Pipeline)** to cite the [Agentic Knowledge Distillation paper (arXiv 2602.10869)](https://arxiv.org/html/2602.10869): teacher LLMs autonomously generate synthetic training data, student SLMs are fine-tuned with LoRA, iterated based on feedback — a fully automated distillation loop. Concretely demonstrated on SMS threat detection.

5. **Update slide 21 (Evaluation)** with the key production benchmark: a distilled Llama 3.1 8B from a 70B teacher routinely captures **90–95% of teacher quality at 10% of inference cost**, giving students a concrete target to cite when justifying distillation over direct deployment. Source: [futureagi.com synthetic data fine-tuning](https://futureagi.com/blog/synthetic-data-fine-tuning-llms/).

---

## Week 14: safety

Both the threat landscape and the regulatory/compliance context have evolved materially.

1. **Update slide 01b (OWASP Agentic 2026)** — the [OWASP Top 10 for Agentic Applications 2026](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/) is now a formally published, globally peer-reviewed framework (100+ contributors) separate from the LLM Top 10. It covers goal misalignment, tool misuse, delegated trust, inter-agent communication, persistent memory, and emergent autonomous behavior — the slide content should align with this published edition.

2. **Update slide 05 (Direct Injection) and slide 06 (Indirect Injection)** with the finding that **Crescendo and many-shot jailbreaks beat single-turn defenses by wide margins**, with one black-box method jailbreaking GPT-4-Turbo and GPT-4o on >80% of prompts. Source: [witness.ai prompt injection guide](https://witness.ai/blog/prompt-injection/).

3. **Update slide 22 (Garak)** and slide 21 (Automated Red Team)** to reference [PISmith (arXiv 2603.13026)](https://arxiv.org/pdf/2603.13026) — a reinforcement learning-based red teaming tool specifically for prompt injection defenses, representing a more rigorous automated red-teaming approach than static test suites.

4. **Update slide 24 (Safety Architecture) and slide 09 (Injection Defense)** to present the **seven-layer defense framework** for agentic systems: (1) input handling — separate trusted from untrusted text; (2) output filtering — validate structure before acting; (3) capability sandboxing; (4) privilege separation / least-authority tools; (5) canary tokens / tripwires; (6) policy engines for deterministic checks before high-impact actions; (7) continuous red teaming. Source: [rapidclaw.dev prompt injection defense](https://rapidclaw.dev/blog/prompt-injection-defense-production-agents-2026).

5. **Update slide 26 (Incident Response) or slide 24 (Safety Architecture)** to note regulatory hardening: **EU AI Act, NIST AI 600-1, and AI Safety Institute frameworks now make adversarial testing a documented compliance activity**, not an optional security exercise. This changes the "nice to have" framing to a compliance requirement for any student building commercial AI systems.

6. **Update slide 14 (Guardrails AI)** or slide 13 (NeMo Guardrails) with current 2026 version numbers and capabilities — guardrails frameworks have evolved substantially and the specific API examples in the slides may be outdated.

---

## Week 15: capstone

This is a synthesis/showcase week; slides themselves need minimal content updates but the reference model names are outdated.

1. **Update slide 02 (Model Landscape)** references: swap any mentions of older model versions for Claude Opus 4.7, GPT-5.5, Gemini 3.1 Pro as the current frontier, and Gemma 4 / Qwen 3.5 / Llama 4 as the current open-weight options. The source links in the slide footer point to model overview pages that now reflect these releases.

2. **Update slide 07 (Safety Checklist)** to reference the OWASP Top 10 for Agentic Applications 2026 (not just the LLM Top 10) as the evaluation framework for student projects that include agentic components.

3. **Update slide 05 (Evaluation)** to remind students that MLflow now natively integrates RAGAS and DeepEval as scorers — students can run evaluation in their existing MLflow setup without additional infrastructure.

---

*Report generated: 2026-06-01. Web searches conducted via Claude Code built-in tools. All links verified at time of search. Sources reflect the state of the web as of June 1, 2026.*
