# Frontend Architecture

## Purpose

This document defines the frontend architecture of Resonance.

It describes how the user interface is organized, how features are structured, how data flows through the application, and how reusable components are built.

The frontend prioritizes consistency, maintainability, scalability, and AI-assisted development.

Implementation technologies are documented separately in `01-TECH-STACK.md`.

---

# Frontend Principles

The frontend should:

- Be feature-oriented.
- Be component-driven.
- Be accessible.
- Be responsive.
- Be predictable.
- Be reusable.
- Minimize duplication.
- Separate UI from business logic.

---

# Frontend Architecture

The frontend follows a Feature-Driven Architecture.

```
Pages

↓

Features

↓

Components

↓

Shared UI

↓

Services

↓

REST API
```

Each layer has a single responsibility.

---

# Frontend Layers

## Pages

Pages define routes.

Responsibilities

- Route handling
- Layout composition
- Feature composition

Pages should contain almost no business logic.

---

## Features

Features represent business capabilities.

Examples

- Authentication
- Sessions
- Snapshots
- Notes
- Lyrics
- Music Projects
- Comments

Each feature owns its own components, hooks, services, and validation.

---

## Components

Components render the interface.

Responsibilities

- Display data
- Handle user interaction
- Emit events

Components should never contain business rules.

---

## Shared UI

Shared UI contains reusable design system components.

Examples

- Button
- Card
- Input
- Modal
- Dialog
- Badge
- Avatar

These components should remain product-agnostic.

---

## Services

Services communicate with the backend.

Responsibilities

- HTTP requests
- Response transformation
- Error handling

Business rules should never exist inside services.

---

# Application Structure

```
app/

↓

Pages

↓

Features

↓

Components

↓

Shared Packages
```

The application grows by adding Features—not by expanding pages.

---

# Feature Structure

Every feature follows the same organization.

Example

```
sessions/

├── components/
├── hooks/
├── services/
├── validators/
├── types/
├── utils/
├── constants/
└── index.ts
```

Every feature should be independently understandable.

---

# Component Types

The frontend uses four component categories.

---

## Page Components

Represent complete pages.

Examples

- Dashboard Page
- Session Detail
- Music Project Detail

---

## Feature Components

Specific to one business feature.

Examples

- Session Header
- Snapshot Timeline
- Lyrics Editor
- Collaborator List

---

## Shared Components

Reusable throughout the application.

Examples

- Button
- Modal
- Table
- Avatar
- Badge

---

## Layout Components

Provide application structure.

Examples

- Sidebar
- Top Navigation
- Page Container
- Content Area

---

# Data Flow

```
User Action

↓

Component

↓

Hook

↓

Service

↓

REST API

↓

Backend

↓

Response

↓

Component

↓

UI Update
```

Data always flows in one direction.

---

# Hooks

Custom hooks encapsulate frontend behavior.

Examples

```
useSession()

useSnapshot()

useMusicProject()

useNotifications()

useSearch()
```

Hooks coordinate UI state and service communication.

Hooks should never contain business rules.

---

# Forms

Forms should:

- Validate user input.
- Display meaningful errors.
- Prevent duplicate submissions.
- Remain responsive.

Validation should use shared schemas whenever possible.

---

# Navigation

Navigation follows the Information Architecture.

Global Navigation

- Dashboard
- Sessions
- Music Projects
- Notifications
- Settings

Feature navigation remains local to each feature.

---

# State Ownership

Each piece of state should have exactly one owner.

Examples

Component State

- Dialog visibility
- Input values

Feature State

- Session details
- Snapshot list

Global State

- Authenticated user
- Theme
- Notifications

Avoid duplicating state.

---

# Error Handling

Frontend errors should:

- Be recoverable.
- Be understandable.
- Never expose technical details.

Users should always know what happened and what to do next.

---

# Loading States

Every asynchronous action should communicate progress.

Examples

- Skeleton loading
- Spinner
- Progress indicator

Avoid blank screens.

---

# Empty States

Every feature should define an empty state.

Examples

No Sessions

→ Encourage creating a Session.

No Music Projects

→ Encourage creating a Music Project.

No Snapshots

→ Encourage uploading the first Snapshot.

Empty states should guide users toward the next action.

---

# Accessibility

The frontend should support:

- Keyboard navigation
- Focus management
- Semantic HTML
- Screen readers
- Sufficient color contrast

Accessibility is a product requirement.

---

# Responsive Strategy

Primary Target

Desktop

Secondary Target

Tablet

Mobile support may be introduced in future releases.

Desktop remains the design priority.

---

# Performance Principles

Optimize for:

- Fast initial load.
- Lazy loading where appropriate.
- Component reuse.
- Efficient rendering.

Premature optimization should be avoided.

---

# Frontend Security

The frontend should never:

- Trust client-side validation.
- Store sensitive information insecurely.
- Expose private storage URLs.
- Bypass backend authorization.

Security is always enforced by the backend.

---

# Future Expansion

The architecture supports future applications.

Examples

- Mobile
- Desktop
- Admin Portal
- Public Profiles

Shared packages should minimize duplicated UI and business logic.

---

# Frontend Decisions

- Feature-Driven Architecture.
- Component-based UI.
- Shared Design System.
- Thin Pages.
- Hooks encapsulate frontend behavior.
- Services communicate with the backend.
- State has a single owner.
- Desktop-first experience.

---

# Architecture Decision Record

## ADR-009

### Decision

Adopt a Feature-Driven Frontend Architecture.

### Status

Accepted

### Context

Resonance is expected to grow while remaining maintainable by a solo developer using AI-assisted development.

A feature-oriented architecture improves scalability, discoverability, and consistency.

### Consequences

Positive

- Clear ownership.
- High component reuse.
- Easier onboarding.
- Better AI-generated code.
- Natural scalability.

Negative

- Slightly more folders.
- Requires discipline to avoid cross-feature coupling.

---

# Related Documents

- 00-ARCHITECTURE.md
- 01-TECH-STACK.md
- 02-FOLDER-STRUCTURE.md
- 03-DATABASE-SCHEMA.md
- 04-AUTHENTICATION.md
- 05-STORAGE.md
- 06-BACKEND.md
- 08-STATE-MANAGEMENT.md
- 09-TESTING.md
- 10-DEPLOYMENT.md
- 11-CODING-STANDARDS.md