---
title: Knowledge Graph Primer
section: Core Concepts
layout: cards
---

## Nodes (Entities)
People, organizations, concepts, locations, events — anything worth naming. Each node has a type and properties. Example: `(Einstein, type: Person, field: Physics)`.

## Edges (Relationships)
Typed, directed connections between entities. Example: `Einstein --developed--> Theory of Relativity`. Edges can carry properties like weight, source, and timestamp.

## Triples
The atomic unit of a knowledge graph: `(subject, predicate, object)`. Example: `(Aspirin, treats, Headache)`. Every fact in the graph is one or more triples.

## Properties & Metadata
Nodes and edges carry attributes — descriptions, source document references, confidence scores. This metadata enables filtering and provenance tracking at query time.
