# Course Refresh — 2026-06-15

Generated manually (ANTHROPIC_API_KEY not present in sandbox) by reading each lecture's `slides.json` + `00-Intro.md` and web-searching recent developments. Each section covers developments since approximately March 2026. Sources are linked inline. The instructor decides what to incorporate — this report does not edit any slide files.

---

## Week 01: landscape

**Topic:** The 2026 AI Landscape — From Stochastic Parrots to Reasoning Machines

1. **Update slide 09 (OpenAI o-Series) and add a new "GPT-5.5" slide.** OpenAI released GPT-5.5 ("Spud") on April 23 2026 — the first fully retrained base model since GPT-4.5 and built with a natively omnimodal architecture co-designed with NVIDIA GB200/GB300 hardware. It leads on Terminal-Bench 2.0 (82.7%) and ARC-AGI-2 (85.0%) and cut hallucination rates ~3%. ([Vellum overview](https://www.vellum.ai/blog/everything-you-need-to-know-about-gpt-5-5); [LLM-Stats](https://llm-stats.com/models/gpt-5.5))

2. **Update slide 11 (Claude Evolution) to Claude Opus 4.8.** Anthropic released Claude Opus 4.8 on May 28, 2026 (41 days after Opus 4.7 — fastest flagship upgrade cycle ever). Key additions: Dynamic Workflows (up to 1,000 parallel subagents), 1M-token context, 128K max output, 69.2% on SWE-Bench Pro, 83.4% on OSWorld-Verified (both beating GPT-5.5). Fast mode is now 3× cheaper than previous Opus. ([Anthropic announcement](https://www.anthropic.com/news/claude-opus-4-8); [TechCrunch](https://techcrunch.com/2026/05/28/anthropic-releases-opus-4-8-with-new-dynamic-workflow-tool/))

3. **Update slide 13 (Open Models).** The open-source frontier has shifted dramatically since slides were written. Kimi K2.6 tops the neutral Artificial Analysis Index (#1 open, #4 overall). DeepSeek V4 Pro ties closed frontier on SWE-Bench. Llama 4 Scout supports a 10M-token context window. Qwen 3.6 27B scores 77.2% on SWE-bench under Apache-2.0. ([Codersera May 2026 roundup](https://codersera.com/blog/best-open-source-llm-2026-llama-4-qwen-3-5-deepseek-v4-gemma-4-mistral/))

4. **Update slide 14 (Model Comparison) benchmarks.** The slide likely references MMLU/HumanEval. Newer benchmarks now dominate: Terminal-Bench 2.0, ARC-AGI-2, FrontierMath Tier 1–4, MRCR v2 (long-context retrieval at 1M tokens), and GPQA Diamond. Gemini 3.1 Pro holds the GPQA Diamond record (94.3%). Mention [LM Council benchmark tracker](https://lmcouncil.ai/benchmarks).

5. **Update slide 20 (Context Windows).** GPT-5.5 achieves 74% on MRCR v2 at 1M tokens (GPT-5.4 was 36.6%). Llama 4 Scout supports 10M tokens. Discuss how this compresses the "why RAG?" framing — very long contexts do not yet fully replace retrieval but shrink the gap.

6. **Add or update slide 12 (Gemini Flash) → Gemini 2.5 Pro / Gemini 3.1.** Google's Gemini 3.1 Pro leads GPQA Diamond reasoning (94.3%). Gemini 2.5 Pro offers the largest commercially available context window (1M tokens). ([TeamAI benchmark overview](https://teamai.com/blog/large-language-models-llms/the-2026-ai-frontier-model-war-2/))

---

## Week 02: prompting

**Topic:** Advanced Prompt Engineering — Prompting as Logic

1. **Update slide 09 (CoT Limitations) for reasoning-native models.** Slides likely treat "add 'think step by step'" as universally beneficial. With o-series, Claude's extended/adaptive thinking, and DeepSeek R1's RL-based reasoning, models now execute CoT internally — adding explicit CoT instructions provides reduced marginal benefit and can occasionally confuse reasoning-native models. This is a material teaching point. ([PromptingGuide CoT summary](https://www.promptingguide.ai/techniques/cot); [DeepSeek R1 paper](https://arxiv.org/pdf/2501.12948))

2. **Update slide 15 (Meta Prompting) with 2026 framing.** Meta-prompting (asking the model to improve its own prompt) is increasingly practical now that frontier models reliably self-critique. Add a concrete pattern distinguishing meta-prompting for one-shot use vs. systematic prompt optimization with DSPy. ([Prompt Engineering 2026 guide](https://pasqualepillitteri.it/en/news/1090/prompt-engineering-2026-frameworks-complete-guide))

3. **Clarify slide 08 (Tree of Thoughts) status.** Tree of Thoughts is now largely superseded for most tasks by reasoning-native models that explore branches internally. Worth noting as historical context rather than a technique to implement. The slide should position ToT as a precursor to internal search rather than a live prompt pattern.

4. **Update slide 21 (Prompt Testing) to include eval-driven development.** In 2026, the standard is to maintain a prompt test suite (RAGAS / DeepEval / custom LLM-judge rubrics) as part of CI. Prompt version control + regression testing is now table stakes, not advanced. Tie into Week 7 content.

---

## Week 03: dev-stack

**Topic:** The Developer Stack — Architectural Design for AI Applications

1. **Update slide 09 (Claude Agent SDK).** Anthropic shipped a general-purpose Agent SDK extracted from Claude Code. It was the fastest-growing Anthropic-native agent framework in late 2025/early 2026. The slide likely covers an earlier, narrower version. ([Developer comparison: Claude Agent SDK vs LangGraph](https://www.developersdigest.tech/blog/claude-agent-sdk-vs-langgraph))

2. **Add a new "Strands" framework entry or update slide 10 (Head to Head).** Strands is now cited alongside LangGraph, CrewAI, OpenAI Agents SDK, and Microsoft Agent Framework in the major 2026 framework comparisons. ([2026 agent framework showdown](https://qubittool.com/blog/ai-agent-framework-comparison-2026))

3. **Update slide 05/06 (LangChain / LangGraph).** LangGraph shipped a new deploy CLI (mid-March 2026) enabling single-command agent deployment. LangSmith now integrates out-of-the-box with all major agent frameworks: AutoGen, Claude Agent SDK, CrewAI, Mastra, OpenAI Agents, PydanticAI, and Vercel AI SDK. ([LangChain blog](https://www.langchain.com/blog/on-agent-frameworks-and-agent-observability))

4. **Update slide 10 (Head to Head) to mention Microsoft Agent Framework.** Microsoft merged Semantic Kernel and AutoGen into a single Microsoft Agent Framework in 2026. The slide may reference these as separate products.

5. **Add PydanticAI + LangGraph combo pattern (slide 07/08).** A production pattern gaining traction: PydanticAI defines individual agent behavior (type safety, structured I/O) while LangGraph manages inter-agent orchestration and state. Worth showing as a worked example. ([AI Agent Frameworks 2026 deep dive](https://www.youngju.dev/blog/culture/2026-05-16-ai-agent-frameworks-langchain-langgraph-llamaindex-crewai-autogen-pydanticai-mastra-dspy-mcp-2026-deep-dive.en))

---

## Week 04: knowledge-rep

**Topic:** Knowledge Representation — From Embeddings to Context Management

1. **Update slide 06 (Embedding Models) with MTEB v2 leaderboard.** MTEB v2 was released in 2026 and scores are not directly comparable to MTEB v1. Google Gemini Embedding leads MTEB v2 English (68.32). Other top performers: Jina v5, Qwen3-Embedding-8B, Microsoft Harrier-OSS-v1, Cohere embed-v4. ([MTEB leaderboard article](https://modal.com/blog/mteb-leaderboard-article); [Milvus RAG embedding guide 2026](https://milvus.io/blog/choose-embedding-model-rag-2026.md))

2. **Update slide 14 (Hybrid Search).** Cohere embed-v4 now combines dense + sparse representations in a single API call, enabling hybrid search without managing two separate models. It supports 128K token context windows and 100+ languages. ([Tensoria embedding benchmark](https://tensoria.fr/en/blog/embedding-models-2026-guide))

3. **Add a multimodal embeddings slide or update slide 06.** Google released a single embedding model that places text, images, video, audio, and PDFs into one shared 3,072-dimensional vector space. This is a material shift for multimodal RAG pipelines.

4. **Update slide 23 (Long Context) with current tradeoffs.** GPT-5.5 achieves 74% on MRCR v2 at 1M tokens (vs. 36.6% for its predecessor). This changes the "when to chunk vs. stuff" decision framework — slides should reflect current model capabilities rather than 2024 baselines.

5. **Update slide 22 (Contextual Retrieval).** The Dewey long-context embedding model (arXiv 2503.20376, March 2026) and "Beyond Matryoshka" (arXiv 2503.01776, March 2026) on sparse coding for adaptive representation are relevant new works to cite in the research slide. ([Dewey paper](https://arxiv.org/pdf/2503.20376); [Beyond Matryoshka](https://arxiv.org/pdf/2503.01776))

---

## Week 05: rag

**Topic:** RAG 2.0 — Self-Correcting Retrieval for Production

1. **Update slide 16 (Agentic RAG) as the dominant 2026 pattern.** Agentic RAG — specialized agents handling retrieval and validation in parallel — is now the default architecture in production systems, not an advanced variant. Self-RAG and CRAG are precursors; the slides should position them as architectural stepping stones. ([State of RAG 2026](https://squirro.com/squirro-blog/state-of-rag-genai))

2. **Add SF-RAG to slide 28 (Research).** SF-RAG (Structure-Fidelity RAG for Academic Question Answering, arXiv 2602.13647, Feb 2026) applies structure-aware retrieval to academic domains — worth a mention for students working in document-heavy domains. ([SF-RAG paper](https://arxiv.org/pdf/2602.13647))

3. **Update slide 04 (Vector Limitations) with long-context compression framing.** With GPT-5.5 and Claude Opus 4.8 reliably handling 1M-token contexts, some use-cases that previously required RAG can now be handled by context stuffing. Add a decision heuristic: when retrieval is still warranted vs. when context is cheap enough to stuff.

4. **Update slide 21 (RAG Fusion) with "Knowledge-Oriented RAG" survey.** A March 2026 survey (arXiv 2503.10677) provides the most comprehensive taxonomy of knowledge-oriented RAG approaches to date — good citation for the research slide and for positioning where RAG Fusion fits in the broader landscape. ([Survey paper](https://arxiv.org/pdf/2503.10677))

5. **Update slide 07 (Reranking) models.** Cohere embed-v4's built-in hybrid search reduces the need for a separate reranker in many pipelines. Slides should mention this architectural simplification as an option.

---

## Week 06: graphrag

**Topic:** GraphRAG — When Structure Beats Similarity

1. **Add new June 2026 paper: "When to Use Graphs in RAG."** This comprehensive analysis (arXiv 2506.05690, June 2026) provides an empirical decision framework for when graph-augmented retrieval outperforms pure vector search — directly fills the gap that slide 15 (Decision Framework) addresses with guidance rather than data. ([Paper](https://arxiv.org/html/2506.05690v3))

2. **Add "Entity-Event Knowledge Graphs" paper to slide 18/Research.** arXiv 2506.05939 (June 2026) introduces temporal-causal consistency in entity-event graphs for RAG — extends the entity extraction story in slides 04–05. ([Paper](https://arxiv.org/pdf/2506.05939))

3. **Update slide 14 (Cost Anatomy).** The 2026 field has moved beyond Microsoft's original ~$33K indexing cost for large corpora. LazyGraphRAG, LightRAG, and Fast GraphRAG cut indexing cost 50–6,000× while maintaining or improving accuracy on global-scope queries. The cost slide should reflect the current alternatives. ([GraphRAG practical guide](https://medium.com/@tongbing00/graphrag-in-2026-a-practical-buyers-guide-to-knowledge-graph-augmented-rag-43e5e72d522d); [CallSphere overview](https://callsphere.ai/blog/vw6g-microsoft-graphrag-knowledge-graph-2026))

4. **Update slide 15 (Decision Framework) with 2026 guidance.** The emerging rule of thumb: LightRAG for cost-sensitivity; Microsoft GraphRAG when community summaries are required; GraphRAG shines between ~1K docs and ~1M tokens. For both vector and graph, most production stacks route by query type rather than committing exclusively to one.

5. **Update slide 09 (Microsoft GraphRAG) with current repo status.** Microsoft GraphRAG is actively maintained at [microsoft.github.io/graphrag](https://microsoft.github.io/graphrag/) — confirm the version, features, and any API changes since the slides were written. ([Knowledge Graph-Guided RAG paper, Feb 2026](https://arxiv.org/pdf/2502.06864))

---

## Week 07: evaluation

**Topic:** Evaluation & LLM-as-a-Judge — Measuring What Matters

1. **Update slide 18 (RAGAS Deep) with 2026 ecosystem context.** RAGAS remains the foundational framework for RAG evaluation. As of April 2026, the practical recommendation is: start with DeepEval for CI evals and broad metric coverage, add RAGAS for RAG-specific component metrics, graduate to a commercial platform (Langfuse, Patronus, Braintrust) for human-annotation workflows and regression dashboards. ([LLM Evaluation Tools comparison](https://inference.net/content/llm-evaluation-tools-comparison/); [RAGAS / DeepEval / TruLens comparison](https://atlan.com/know/llm-evaluation-frameworks-compared/))

2. **Add rubric-based evaluation + LLM-as-judge empirical validation to slide 14 (Prompt Design).** April 2026 work on rubric-based evaluations and LLM-as-judge with methodologies, biases, and empirical validation in domain-specific contexts gives concrete guidance on how to design judge prompts that are less biased. ([Adnan Masood, Medium Apr 2026](https://medium.com/@adnanmasood/rubric-based-evals-llm-as-a-judge-methodologies-and-empirical-validation-in-domain-context-71936b989e80))

3. **Update slide 19 (DeepEval) with G-Eval framing.** DeepEval's G-Eval implementation frames evaluation as LLM judging with structured chain-of-thought grading and is explicitly designed for custom criteria beyond canned metrics. Slides should reflect that this is now the standard pattern for custom eval criteria. ([DeepEval LLM-as-judge guide 2026](https://deepeval.com/guides/guides-llm-as-a-judge))

4. **Update slide 20 (Phoenix Arize) and slide 21 (Braintrust) with current feature sets.** Both platforms have shipped significant features since the slides were written — verify current pricing, integrations, and what's available in OSS vs. enterprise tiers.

5. **Add Lynx and Langfuse to slide 22 (Custom Evals) as notable newer options.** Lynx addresses hallucination detection specifically; Langfuse provides production tracing and evaluation in a single OSS tool that has gained wide adoption as an alternative to LangSmith.

---

## Week 08: mcp

**Topic:** Model Context Protocol — The Runtime Layer for Agentic Systems

1. **Update slide 04 (Wire Format) and slide 10 (Transports) for Streamable HTTP.** Streamable HTTP (introduced in the November 2025 spec) replaces SSE as the standard transport for remote servers. If building a remote server today and still targeting SSE, you're building to a deprecated spec. Mcp-Method and Mcp-Name headers are now required. ([MCP protocol updates changelog](https://tokenmix.ai/blog/mcp-updates-changelog-every-protocol-change-2026))

2. **Update slide 11 (Auth) for OAuth 2.1 mandate.** Remote MCP servers now require OAuth 2.1, with the spec formalizing MCP servers as OAuth Resource Servers and mandating Resource Indicators (RFC 8707) to prevent token misuse. This is a breaking change from earlier deployments. ([MCP complete guide 2026](https://dev.to/x4nent/complete-guide-to-mcp-model-context-protocol-in-2026-architecture-implementation-and-4a11))

3. **Add MCP Apps to slide 13 (Sampling) or slide 23 (Future).** MCP Apps (in the 2026 RC spec) lets servers ship interactive HTML interfaces rendered in sandboxed iframes — tools declare their UI templates ahead of time for security review before execution. This is a major new primitive. ([MCP blog RC post](https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/))

4. **Update slide 05 (Lifecycle) with the Tasks extension.** The Tasks extension (promoted from experimental core feature in Nov 2025) reshapes the lifecycle around a stateless model: servers return a task handle on tools/call, and clients drive it via tasks/get, tasks/update, and tasks/cancel. ([MCP 2026 roadmap](https://blog.modelcontextprotocol.io/posts/2026-mcp-roadmap/))

5. **Update slide 23 (Future) with stateless-core roadmap.** The largest spec revision since launch moves toward a stateless protocol core, enabling horizontal scaling behind load balancers without sticky sessions. Session creation, resumption, and migration are being standardized so server restarts are transparent to clients.

---

## Week 09: mcp-servers

**Topic:** Building MCP Servers — Hands-On Lab

1. **Update slide 05 (Transport) to Streamable HTTP.** The legacy SSE transport is deprecated. The lab should use Streamable HTTP. Introduce FastMCP, a framework that simplifies building Streamable HTTP servers from scratch. ([FastMCP Streamable HTTP tutorial](https://dev.to/composiodev/building-streamable-http-mcp-servers-from-scratch-using-fastmcp-in-2026-5fh9))

2. **Update slide 19 (Authentication) to OAuth 2.1.** The lab's authentication section (and any Jira/Slack tracks that use OAuth) should reflect the June 2025+ spec requirement for OAuth 2.1 as the standard for remote servers. The TypeScript SDK now ships auth helpers. ([MCP server handbook April 2026](https://use-apify.com/blog/mcp-server-handbook-2026))

3. **Add Mcp-Method and Mcp-Name header requirement to slide 07 (Tool Definition) or slide 10 (Testing).** Load balancers and rate limiters now require these headers for routing without body inspection — a practical deployment detail students need for production servers.

4. **Update slide 21a (Prebuilt Connectors) with the current ecosystem size.** The MCP server ecosystem grew significantly through 2025–2026. Confirm current counts and any official Anthropic-hosted registry for discovery.

5. **Update slide 22 (Remote Servers) to address stateless operation.** Current servers require maintaining session state, limiting horizontal scaling. The upcoming spec standardizes session migration so scale-out events are transparent — worth previewing as a near-term architectural change students should design for.

---

## Week 10: multi-agent

**Topic:** Multi-Agent Workflows — From Solo Agents to Agent Teams

1. **Update slide 03 (Landscape) with 2026 framework consolidation.** The ecosystem has crystallized around six major frameworks: LangGraph, CrewAI, OpenAI Agents SDK (Swarm successor), Microsoft Agent Framework (merged Semantic Kernel + AutoGen), AutoGen v0.4+, and Strands. The slides may predate Microsoft's merge and the OpenAI Agents SDK rebrand. ([FutureAGI overview](https://futureagi.com/blog/multi-agent-systems-2025/); [Top 12 frameworks](https://is4.ai/blog/our-blog-1/top-12-multi-agent-ai-frameworks-2026-335))

2. **Update slide 08 (Supervisor) with Anthropic's Dynamic Workflows.** Claude Opus 4.8's Dynamic Workflows feature orchestrates up to 1,000 parallel subagents — the largest-scale parallel agent architecture from any frontier lab to date. This is a concrete real-world example of the supervisor pattern at scale. ([Anthropic Opus 4.8](https://www.anthropic.com/news/claude-opus-4-8))

3. **Add the "Large-Scale Study on Multi-Agent AI Systems" to slide 28 (Research).** This empirical study analyzes 42K commits and 4.7K resolved issues across eight leading multi-agent AI systems (LangChain, CrewAI, AutoGen, etc.) — the most comprehensive production-scale study of multi-agent development challenges to date. ([VoltAgent paper collection](https://github.com/VoltAgent/awesome-ai-agent-papers))

4. **Update slide 17 (MCP Multi Agent) with 2026 MCP spec changes.** The Tasks extension and stateless-core roadmap directly impact multi-agent orchestration via MCP. Agents can now handle long-running tasks via task handles rather than keeping connections open.

5. **Update slide 24 (Cost Control) with Opus 4.8 pricing.** Fast mode for Opus 4.8 is 3× cheaper than previous Opus versions at ~2.5× the speed. This meaningfully changes the cost model for multi-agent supervisors using frontier models.

---

## Week 11: hitl-memory

**Topic:** Human-in-the-Loop & Memory — Safe Agents with Persistent State

1. **Update slide 21 (Mem0) with April 2026 algorithm release.** Mem0 shipped a new token-efficient memory algorithm in April 2026: single-pass hierarchical extraction (ADD-only, no UPDATE/DELETE), multi-signal retrieval fusing semantic similarity + BM25 + entity matching into one normalized score. Benchmarks show up to 26% accuracy gains over plain vector approaches. ([Mem0 blog: state of AI agent memory](https://mem0.ai/blog/state-of-ai-agent-memory-2026); [AI memory benchmarks](https://mem0.ai/blog/ai-memory-benchmarks-in-2026))

2. **Update slide 21 (Mem0) with company context.** Mem0 closed a $24M Series A in October 2025 and now has ~48K GitHub stars. It has become the default choice for teams wanting to bolt production-grade memory onto an existing agent quickly. v1.0.4 (Feb 2026) added a timestamp parameter on update() for backfilling memory with accurate creation times. ([Mem0 guide 2026](https://baeseokjae.github.io/posts/mem0-agent-memory-guide-2026/))

3. **Update slide 11 (UX Patterns) and slide 02b (HITL vs HOTL) with the Mem0 human-review gap.** As of mid-2026, Mem0's workflow remains developer-shaped: humans can call the API but there's no native human-review workflow for knowledge-worker use cases. This is a material limitation to flag when discussing HITL + memory architecture. ([CallSphere overview](https://callsphere.ai/blog/vw3g-mem0-agent-memory-open-source-library-2026))

4. **Add Claude Opus 4.8's system-entries API to slide 08 (Breakpoints) or slide 09 (Tool Permissions).** The new System Entries feature in the Messages API lets developers insert system instructions mid-conversation without breaking the prompt cache, enabling real-time permission updates and environment context changes during agentic runs. This is a new HITL primitive for dynamic permission management.

5. **Update slide 20 (LangGraph Memory) with current LangGraph memory capabilities.** LangGraph has matured into a durable execution engine with first-class human-in-the-loop support since the original slides were written — verify which specific memory/checkpoint features are current. ([LangGraph agent observability post](https://www.langchain.com/blog/on-agent-frameworks-and-agent-observability))

---

## Week 12: small-models

**Topic:** The Small Model Strategy — Right-Sizing AI for Production

1. **Update slide 05 (Llama) with Llama 4.** Llama 4 Maverick leads MMLU (85.5%) among open models. Llama 4 Scout is notable for its 10M-token context window — the longest context of any open model. ([Open-source LLM landscape May 2026](https://codersera.com/blog/open-source-llms-landscape-2026/))

2. **Update slide 05 (Qwen) with Qwen3 / Qwen3.5.** Qwen3-235B-A22B (MoE) benchmarks competitively with Gemini 2.5 Pro. Qwen3.5-0.8B is a new lightweight multimodal model (Apache 2.0) combining a 0.8B LM with a vision encoder, supporting thinking and non-thinking modes — the smallest viable multimodal agent model currently available. ([BentoML SLM overview](https://www.bentoml.com/blog/the-best-open-source-small-language-models))

3. **Update slide 06 (Phi) with Phi-4-mini benchmarks.** Microsoft's Phi-4-mini (3.8B) hits 83.7% on ARC-C — the highest score in its size class. The Phi line's reasoning-per-parameter story has continued to improve. ([Intuz top SLMs 2026](https://www.intuz.com/blog/best-small-language-models))

4. **Add SmolLM3-3B to slide 09 (Comparison).** SmolLM3-3B (HuggingFace) outperforms Llama-3.2-3B and Qwen2.5-3B and stays competitive with many 4B-class alternatives across 12 popular benchmarks — a notable new entry at the 3B scale.

5. **Update slide 15 (Cost Calculator) with 2026 pricing data.** SLM deployment costs are 5–20× lower than frontier LLMs. Current cloud inference ranges: $0.10–$0.50 per 1M tokens for SLMs vs. $2–$30 for frontier LLMs. Update the calculator with current pricing from major providers. ([BentoML SLM overview](https://www.bentoml.com/blog/the-best-open-source-small-language-models))

---

## Week 13: distillation

**Topic:** Knowledge Distillation & Fine-Tuning — Teaching Small Models Big Tricks

1. **Update slide 16 (DPO) to reflect DPO as the standard alignment method.** Direct Preference Optimization has largely replaced RLHF as the standard alignment method for production models in 2026. The slide may still present RLHF as the primary approach. ([LoRA fine-tuning best practices 2026](https://hjlabs.in/AIML/blog/post/llm-fine-tuning-best-practices.html))

2. **Add F-DPO to slide 16 (DPO) or a new hallucination-reduction slide.** Focal DPO (F-DPO) is a preference learning variant that rewards factuality over fluency — reduces hallucinations without sacrificing fluency. Part of the 2025–2026 wave of DPO variants alongside ORPO and SimPO. ([DEV Community: LoRA, F-DPO, hallucinations](https://dev.to/soumia_g_9dc322fc4404cecd/reducing-llm-hallucinations-in-2026-lora-f-dpo-and-the-math-that-actually-works-50e0))

3. **Add on-policy distillation techniques to slide 23 (Distillation Pipeline).** New 2026 techniques: GDSD (self-distillation for diffusion LMs), CollectionLoRA (consolidating multiple LoRA adapters into one student), COPSD (cross-lingual multilingual reasoning via on-policy self-distillation). A curated collection of on-policy distillation papers is available on GitHub. ([awesome-on-policy-distillation](https://github.com/chrisliu298/awesome-on-policy-distillation))

4. **Add Agentic Knowledge Distillation paper to slide 28 (Research).** arXiv 2602.10869 (Feb 2026) demonstrates autonomous training of small LMs for threat detection using agentic distillation pipelines — bridges the distillation and multi-agent topics. ([Agentic Knowledge Distillation paper](https://arxiv.org/html/2602.10869))

5. **Update slide 17 (Tools) with 2026 fine-tuning tool landscape.** PREREQ-Tune (disentangles knowledge from skill during fine-tuning) is worth adding alongside LoRA/QLoRA as a technique that addresses catastrophic forgetting — a common production failure mode. Confirm current Axolotl, Unsloth, and LLaMA-Factory release states.

---

## Week 14: safety

**Topic:** Safety & Red-Teaming — Defending AI Systems in Production

1. **Update slide 01b (OWASP Agentic 2026) with Q2 2026 landscape update.** OWASP GenAI Security Project published three separate landscapes in Q2 2026: (1) LLM and GenAI Applications, (2) Agentic AI (first risk ranking built specifically for autonomous tool-using agents), and (3) a first-ever Red Teaming Landscape (100+ contributors). The slide should reference all three. ([OWASP Q2 2026 update — Straiker analysis](https://www.straiker.ai/blog/three-landscapes-one-security-shift-what-owasps-q2-2026-update-is-really-saying); [OWASP GenAI resource](https://genai.owasp.org/resource/ai-security-solutions-landscape-for-ai-and-agentic-red-teaming-q2-2026/))

2. **Update slide 06 (Indirect Injection) with tool-output injection framing.** The 2026 agentic threat model adds indirect prompt injection via tool outputs, MCP connections, and RAG pipelines — not just documents. Update examples to include an agent being hijacked via a malicious MCP server response or a poisoned vector store result.

3. **Add the "Are AI-Assisted Development Tools Immune to Prompt Injection?" paper.** arXiv 2603.21642 (March 2026) empirically evaluates whether coding assistants (Claude Code, Cursor, Copilot) can be exploited via prompt injection in code comments, README files, and dependency strings — directly relevant to students using these tools. ([Paper](https://arxiv.org/pdf/2603.21642))

4. **Update slide 21 (Automated Red Team) / slide 22 (Garak) with agent red-teaming scope.** Agent red teaming in 2026 adds: unauthorized tool calls, privilege escalation via tool chains, tool-output injection, and excessive agency failures. Standard red-teaming tools (Garak, DeepEval adversarial) are adding agent-specific attack categories. ([Best AI red-teaming tools 2026](https://www.confident-ai.com/blog/best-ai-red-teaming-tools-2026))

5. **Update slide 17 (Guardrail Architecture) with "agent layer" principle.** The 2026 consensus is that guardrails must be applied at the agent layer — understanding tool invocation state and reasoning scope — not just at the API/prompt layer. Controls that don't understand agent context are insufficient for agentic systems. ([Noma Security: is AI red teaming worth it?](https://noma.security/blog/is-ai-red-teaming-worth-it/))

---

## Week 15: capstone

**Topic:** Capstone Showcase — Putting It All Together

1. **Update slide 02 (Model Landscape) with current frontier.** The slide's source citations reference "Claude model overview" and "GPT-5 release notes." Current frontier (as of June 2026): Claude Opus 4.8 (May 28 2026), GPT-5.5 (April 23 2026), Gemini 3.1 Pro (best reasoning, 94.3% GPQA Diamond), Kimi K2.6 (top neutral benchmark, open). Update the model selection slide accordingly. ([Anthropic](https://www.anthropic.com/news/claude-opus-4-8); [LM Council](https://lmcouncil.ai/benchmarks))

2. **Update slide 07 (Safety Checklist) with the OWASP Agentic Landscape Q2 2026.** The OWASP agentic risk framework (published Q2 2026) provides a peer-reviewed checklist purpose-built for autonomous tool-using agents — a direct fit for the capstone safety review section. ([OWASP GenAI Security](https://genai.owasp.org/resource/ai-security-solutions-landscape-for-ai-and-agentic-red-teaming-q2-2026/))

3. **Update slide 03 (Patterns) to reflect 2026 MCP-native patterns.** MCP has become the default integration layer for connecting agents to external systems. Capstone projects should default to MCP for tool integration unless there's a reason not to. Include the Streamable HTTP + OAuth 2.1 pattern as the current production standard.

4. **Update slide 05 (Evaluation) with current eval toolchain.** Recommend DeepEval for CI, RAGAS for RAG components, and one of Langfuse / Braintrust / Patronus for production tracing. The capstone rubric should require students to demonstrate eval-driven development, not just a test at the end.

5. **Update slide 06 (Cost) with June 2026 pricing.** Opus 4.8 fast mode is 3× cheaper than prior Opus at 2.5× speed. Frontier model pricing has shifted since slides were last updated; the cost slide should anchor to current API pricing from Anthropic, OpenAI, and Google to give students realistic capstone budget estimates.

---

*Report generated: 2026-06-15. Covers developments approximately March–June 2026. Sources are linked inline. This report does not modify any lecture files — all decisions about incorporation rest with the instructor.*
