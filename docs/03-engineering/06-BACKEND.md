# Backend Architecture

## Purpose

This document defines the backend architecture of Resonance.

It describes how the backend is organized, how business logic is implemented, how modules communicate, and how requests flow through the system.

The backend is designed around a Modular Monolith architecture using Clean Architecture and Domain-Driven Design (DDD) principles.

Implementation technologies are documented separately in `01-TECH-STACK.md`.

---

# Design Principles

The backend should:

- Be modular.
- Keep business logic independent.
- Separate domain logic from infrastructure.
- Be easy to test.
- Be easy to extend.
- Support AI-assisted development.
- Minimize coupling between modules.

Every backend feature should follow the same architectural pattern.

---

# High-Level Architecture

```
HTTP Request
      │
      ▼
Middleware
      │
      ▼
Authentication
      │
      ▼
Authorization
      │
      ▼
Validation
      │
      ▼
Controller
      │
      ▼
Domain Service
      │
      ├───────────────┐
      ▼               ▼
Repository    Infrastructure Services
      │               │
      ▼               ▼
 Database      External Systems
      │
      ▼
HTTP Response
```

---

# Backend Layers

## Controller Layer

The Controller is the entry point for every HTTP request.

Responsibilities

- Receive requests.
- Validate request structure.
- Invoke the appropriate Domain Service.
- Return HTTP responses.

Controllers should never:

- Contain business rules.
- Query the database.
- Communicate with external services.

Controllers should remain thin.

---

## Domain Service Layer

The Domain Service contains business logic.

Responsibilities

- Execute business rules.
- Coordinate workflows.
- Enforce domain constraints.
- Manage transactions.
- Invoke repositories.
- Invoke infrastructure services.

Examples

- Create Session
- Restore Snapshot
- Invite Collaborator
- Archive Session

Business logic belongs here and nowhere else.

---

## Repository Layer

Repositories manage persistence.

Responsibilities

- Read data.
- Write data.
- Execute queries.
- Persist aggregates.

Repositories should never:

- Implement business rules.
- Perform validation.
- Call external APIs.

---

## Infrastructure Layer

Infrastructure Services integrate with systems outside the application's domain.

Examples

- Storage Service
- Email Service
- Logger Service
- Hash Service
- Token Service
- Notification Delivery Service

Infrastructure Services perform technical work only.

They never implement business rules.

---

# Domain Modules

The backend is organized by business capability.

```
Authentication

Users

Sessions

Snapshots

Notes

Lyrics

Attachments

Comments

Collaborators

Music Projects

Notifications

Invitations
```

Every module owns:

- Controller
- Domain Service
- Repository
- DTOs
- Validation
- Policies
- Tests

Modules should be self-contained.

---

# Module Structure

Example

```
sessions/

session.controller.ts

session.service.ts

session.repository.ts

session.policy.ts

dto/

entities/

validators/

interfaces/

tests/
```

---

# Request Lifecycle

Every request follows the same lifecycle.

```
HTTP Request

↓

Authentication

↓

Authorization

↓

Validation

↓

Controller

↓

Domain Service

↓

Repository

↓

Database

↓

Repository

↓

Domain Service

↓

Controller

↓

HTTP Response
```

The request lifecycle should remain consistent across every module.

---

# Domain Services

Domain Services implement product behavior.

Examples

- SessionService
- SnapshotService
- MusicProjectService
- CollaborationService

Responsibilities

- Business rules
- Transactions
- Workflow orchestration
- Permission checks

Domain Services coordinate the application.

---

# Infrastructure Services

Infrastructure Services integrate with external systems.

Examples

- StorageService
- EmailService
- LoggerService
- HashService
- TokenService

Responsibilities

- Upload files
- Send email
- Hash passwords
- Generate tokens
- Write logs

Infrastructure Services contain no business rules.

---

# Policies

Policies centralize authorization decisions.

Examples

```
Can Edit Session

Can Restore Snapshot

Can Delete Attachment

Can Invite Collaborator
```

Controllers should never implement authorization logic directly.

Services should delegate permission checks to Policies.

---

# Validation

Validation occurs before business logic.

Validation includes:

- Required fields
- Data types
- Value ranges
- Enum validation
- File validation
- Request sanitization

Invalid requests never reach Domain Services.

---

# Transactions

Operations affecting multiple resources should execute within a transaction.

Example

```
Create Session

↓

Create Notes

↓

Create Lyrics

↓

Create Timeline Event

↓

Commit
```

If any step fails, the transaction is rolled back.

---

# Timeline Integration

Important domain events should be recorded automatically.

Examples

- Session Created
- Snapshot Uploaded
- Snapshot Restored
- Lyrics Updated
- Collaborator Invited
- Ownership Transferred

Timeline recording should be handled centrally rather than duplicated throughout the codebase.

---

# Error Handling

Errors should be:

- Predictable
- Consistent
- Recoverable

Business errors should be translated into standardized API responses.

Unexpected errors should be logged.

---

# Logging

The backend should log:

- Authentication events
- Permission failures
- Storage failures
- Domain events
- Unexpected exceptions

Sensitive information must never be written to logs.

---

# Configuration

Configuration should be centralized.

Examples

- Database
- Authentication
- Storage
- Email
- Environment variables
- Feature flags

Configuration values must never be hardcoded.

---

# Module Communication

Modules communicate through Domain Services.

Allowed

```
MusicProjectService

↓

SessionService
```

Forbidden

```
MusicProjectRepository

↓

SessionRepository
```

Repositories must never communicate with repositories from other modules.

---

# Dependency Rules

Allowed

```
Controller

↓

Domain Service

↓

Repository
```

Allowed

```
Domain Service

↓

Infrastructure Service
```

Forbidden

```
Controller

↓

Repository
```

Forbidden

```
Repository

↓

Controller
```

Forbidden

```
Infrastructure Service

↓

Domain Service
```

Dependencies always flow inward toward the domain.

---

# Background Processing

Long-running operations should execute asynchronously.

Examples

- Audio processing
- Waveform generation
- Email delivery
- AI analysis
- Virus scanning

These operations should never block API requests.

---

# Performance Principles

Optimize only after measurement.

Prioritize:

1. Correctness
2. Readability
3. Maintainability
4. Performance

Premature optimization should be avoided.

---

# Security Principles

The backend should:

- Authenticate every protected request.
- Authorize every sensitive action.
- Validate every input.
- Never trust client data.
- Protect private assets.

Security is enforced at multiple layers rather than relying on a single mechanism.

---

# Backend Decisions

- Modular Monolith architecture.
- Feature-oriented modules.
- Thin Controllers.
- Domain Services contain business logic.
- Repositories manage persistence only.
- Infrastructure Services integrate external systems.
- Policies centralize authorization.
- Transactions protect multi-step workflows.
- Timeline Events are generated automatically.
- Long-running work executes asynchronously.

---

# Architecture Decision Record

## ADR-008

### Decision

Adopt a Modular Monolith architecture using Clean Architecture and Domain-Driven Design principles.

### Status

Accepted

### Context

Resonance is developed as a long-term SaaS platform with AI-assisted development.

The architecture must remain maintainable while supporting future growth.

### Consequences

Positive

- Clear separation of responsibilities.
- High testability.
- Consistent implementation.
- Easier onboarding.
- Better AI-generated code quality.
- Easier future migration to distributed services.

Negative

- More architectural discipline required.
- More files compared to a simple MVC application.

---

# Related Documents

- 00-ARCHITECTURE.md
- 01-TECH-STACK.md
- 02-FOLDER-STRUCTURE.md
- 03-DATABASE-SCHEMA.md
- 04-AUTHENTICATION.md
- 05-STORAGE.md
- 07-FRONTEND.md
- 08-STATE-MANAGEMENT.md
- 09-TESTING.md
- 10-DEPLOYMENT.md
- 11-CODING-STANDARDS.md