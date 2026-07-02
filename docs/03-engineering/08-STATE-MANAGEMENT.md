# State Management

## Purpose

This document defines the state management architecture of Resonance.

It describes how application state is organized, owned, updated, synchronized, and shared across the frontend.

The goal is to keep state predictable, maintainable, and easy to reason about while minimizing duplication and unnecessary complexity.

Implementation libraries are documented separately in `01-TECH-STACK.md`.

---

# State Management Principles

State should be:

- Predictable
- Minimal
- Single-source
- Easy to debug
- Easy to replace
- Scoped appropriately

State should never exist in multiple places without a clear synchronization strategy.

---

# State Philosophy

Not every piece of data should become global state.

Every piece of state should have exactly one owner.

The smallest appropriate scope should always be preferred.

---

# State Hierarchy

State is divided into four categories.

```
Server State

↓

Application State

↓

Feature State

↓

Component State
```

Each category has different responsibilities.

---

# Server State

Server State represents data owned by the backend.

Examples

- Sessions
- Music Projects
- Snapshots
- Notes
- Lyrics
- Attachments
- Comments
- Notifications

Characteristics

- Persistent
- Shared
- Cached
- Synchronized with backend

The frontend never becomes the source of truth for Server State.

---

# Application State

Application State is shared across the application.

Examples

- Authenticated User
- Theme
- Sidebar State
- Active Workspace
- User Preferences

Application State should remain small.

Only truly global information belongs here.

---

# Feature State

Feature State belongs to a single feature.

Examples

Session Feature

- Selected Snapshot
- Active Tab
- Playback Position
- Recording Status

Music Project Feature

- Current Filter
- Sort Order
- Selected Sessions

Feature State should never leak into unrelated features.

---

# Component State

Component State belongs to a single component.

Examples

- Modal visibility
- Input values
- Dropdown state
- Hover state
- Expanded sections

Component State should never be promoted unless necessary.

---

# State Ownership

Every state object has one owner.

```
Server

↓

Application

↓

Feature

↓

Component
```

State should always be modified by its owner.

Other layers consume state—they do not own it.

---

# Data Flow

State follows a unidirectional flow.

```
User Action

↓

Component

↓

Feature Logic

↓

API Request

↓

Backend

↓

Response

↓

State Update

↓

UI Re-render
```

State updates should always follow predictable paths.

---

# Derived State

Whenever possible, derive values instead of storing them.

Good

```
Completed Sessions

↓

Calculated from Session List
```

Avoid

```
Completed Sessions

Stored separately
```

Derived state reduces duplication and synchronization issues.

---

# State Synchronization

Server State should synchronize automatically.

The frontend should:

- Cache responses.
- Refresh stale data.
- Invalidate outdated data.
- Avoid unnecessary requests.

Synchronization should be transparent to users.

---

# Optimistic Updates

Certain interactions may update the UI before the server responds.

Suitable examples

- Comment creation
- Note editing
- Lyrics editing
- Session renaming

If the request fails, the UI should rollback gracefully.

Optimistic updates should only be used when failure recovery is straightforward.

---

# Caching

Server responses may be cached.

Caching should:

- Reduce unnecessary requests.
- Improve responsiveness.
- Respect freshness requirements.

Cache invalidation should occur after successful mutations.

---

# State Persistence

Certain Application State may persist across sessions.

Examples

- Theme
- Sidebar collapse state
- Preferred view mode

Temporary UI state should not be persisted.

---

# URL State

Some UI state belongs in the URL.

Examples

- Search query
- Filters
- Sorting
- Pagination

Benefits

- Shareable URLs
- Browser navigation
- Deep linking

Transient UI state should never be encoded in URLs.

---

# Form State

Forms own their own temporary state.

Examples

- Draft values
- Validation errors
- Dirty status

Successful submission transfers ownership to the backend.

---

# Loading State

Every asynchronous operation should expose loading state.

Examples

- Initial page loading
- File uploads
- Snapshot restoration
- Search

Loading indicators should communicate progress clearly.

---

# Error State

Errors should remain close to where they occur.

Examples

Component Error

- Invalid input

Feature Error

- Failed Session update

Application Error

- Authentication expired

Errors should never silently disappear.

---

# Real-Time Readiness

The architecture should support future real-time synchronization.

Potential additions

- Live collaboration
- Presence indicators
- Typing indicators
- Live comments

Current state architecture should not prevent future real-time features.

---

# Offline Readiness

Future versions may support:

- Draft editing
- Local caching
- Background synchronization

Offline support is outside the MVP.

---

# Performance Principles

State should minimize:

- Re-renders
- Duplicate requests
- Duplicate state
- Unnecessary synchronization

State updates should affect only components that depend on them.

---

# State Anti-Patterns

Avoid

- Multiple sources of truth.
- Global state for local UI.
- Derived values stored as state.
- Business logic inside UI components.
- Manual synchronization between duplicated state.

---

# State Decisions

- Server State is the backend's responsibility.
- Every state object has a single owner.
- Global state should remain minimal.
- Feature State remains inside its feature.
- Component State remains local.
- URL represents navigational state.
- Derived state should not be stored.

---

# Architecture Decision Record

## ADR-010

### Decision

Adopt a layered state management strategy based on ownership and scope.

### Status

Accepted

### Context

Resonance contains multiple independent features with varying state lifecycles.

A single global state solution would increase complexity and reduce maintainability.

### Consequences

Positive

- Predictable state flow.
- Reduced duplication.
- Better performance.
- Easier testing.
- Easier AI-assisted development.
- Clear ownership boundaries.

Negative

- Developers must choose the correct state scope.
- Slightly more architectural discipline required.

---

# Related Documents

- 01-TECH-STACK.md
- 02-FOLDER-STRUCTURE.md
- 06-BACKEND.md
- 07-FRONTEND.md
- 09-TESTING.md