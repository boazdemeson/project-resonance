# ADR-0002: The Song Is the Core Entity

**Status:** Accepted

**Date:** 2026-07-01

---

## Context

Many collaboration platforms organize information around folders and files.

This forces musicians to think about storage rather than creative work.

---

## Decision

Every feature should revolve around the Song.

Projects contain Songs.

Songs contain revisions, comments, collaborators, files, and history.

The Song is the primary entity of the platform.

---

## Alternatives Considered

### Folder-first organization

Pros

- Familiar

Cons

- Generic
- Does not represent the creative process

### File-first organization

Pros

- Simple

Cons

- Encourages file management instead of music collaboration

---

## Consequences

### Positive

- Intuitive mental model
- Better user experience
- Easier feature expansion

### Negative

- Requires custom UI patterns
- Different from traditional cloud storage