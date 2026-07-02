# Coding Standards

## Purpose

This document defines the coding standards for Resonance.

It establishes the principles, conventions, and practices that ensure the codebase remains consistent, maintainable, readable, and scalable.

Coding standards exist to improve long-term software quality rather than enforce personal preferences.

---

# Engineering Philosophy

Code is written for humans first and computers second.

Every line of code should be:

- Easy to understand.
- Easy to modify.
- Easy to test.
- Easy to review.
- Easy to remove.

The best code is often the simplest code.

---

# General Principles

Follow these principles throughout the codebase.

- Prefer clarity over cleverness.
- Prefer readability over brevity.
- Prefer explicit behavior over implicit behavior.
- Prefer composition over inheritance.
- Prefer small modules over large modules.
- Avoid premature optimization.
- Write code that communicates intent.

---

# Single Responsibility Principle

Every function, class, and module should have one clear responsibility.

Bad

```
SessionService

- Upload files
- Send emails
- Update database
- Generate reports
```

Good

```
SessionService

↓

StorageService

↓

NotificationService

↓

SessionRepository
```

---

# Naming Conventions

Names should clearly describe purpose.

Avoid abbreviations unless universally understood.

Good

```
createSession()

restoreSnapshot()

uploadAttachment()
```

Avoid

```
cs()

doThing()

handleData()

temp()

misc()
```

---

# Variables

Variable names should describe the value they hold.

Good

```
currentSession

ownerId

uploadedFile
```

Avoid

```
obj

data

item

tmp

value
```

---

# Functions

Functions should:

- Perform one task.
- Be short.
- Be easy to understand.
- Have descriptive names.

Functions should avoid hidden side effects.

---

# Classes

Classes should:

- Represent a single concept.
- Expose a clear public interface.
- Hide implementation details.

Large classes should be decomposed.

---

# Files

Each file should contain one primary responsibility.

Avoid files that combine unrelated concepts.

---

# Folder Organization

Organize code by feature.

Avoid organizing by technical type alone.

Good

```
sessions/

snapshots/

music-projects/
```

Avoid

```
controllers/

services/

repositories/
```

at the root level.

---

# Comments

Comments should explain **why**, not **what**.

Good

```ts
// Snapshots are immutable to preserve creative history.
```

Avoid

```ts
// Increment i by one.
i++;
```

If code requires excessive comments, consider simplifying the implementation.

---

# Error Handling

Errors should:

- Be meaningful.
- Be actionable.
- Never expose internal details.

Use consistent error structures across the application.

---

# Logging

Log events that help diagnose problems.

Do not log:

- Passwords
- Tokens
- Secrets
- Personal data

Logs should support debugging without compromising security.

---

# Constants

Avoid magic numbers and hardcoded strings.

Good

```ts
MAX_UPLOAD_SIZE
SESSION_STATUS
DEFAULT_PAGE_SIZE
```

Avoid

```ts
if (size > 524288000)
```

---

# Immutability

Prefer immutable data whenever practical.

Avoid modifying objects unexpectedly.

Return new values instead of mutating existing ones where appropriate.

---

# Dependencies

Dependencies should flow inward.

Allowed

```
Controller

↓

Service

↓

Repository
```

Forbidden

```
Repository

↓

Controller
```

Avoid circular dependencies.

---

# Code Duplication

Duplicate knowledge—not code.

Extract reusable logic only when:

- It has a clear abstraction.
- It is used multiple times.
- The abstraction improves readability.

Avoid premature abstraction.

---

# API Communication

Frontend communicates with the backend exclusively through Services.

Components should never perform HTTP requests directly.

---

# Database Access

Repositories are the only layer that communicates with the database.

Controllers and Domain Services must never execute database queries directly.

---

# State Management

Follow the State Management Architecture.

Do not duplicate state.

The backend remains the source of truth for server state.

---

# Security

Never trust client input.

Always:

- Validate.
- Sanitize.
- Authorize.
- Authenticate.

Security is enforced at multiple layers.

---

# Performance

Optimize after measurement.

Prioritize:

1. Correctness
2. Readability
3. Maintainability
4. Performance

Avoid optimization based on assumptions.

---

# Testing Expectations

Every new feature should include appropriate tests.

Expected coverage includes:

- Business logic
- Validation
- API behavior
- Critical user flows

Code without tests should be the exception.

---

# Pull Request Guidelines

Every Pull Request should:

- Solve one logical problem.
- Be easy to review.
- Include relevant tests.
- Update documentation if required.

Large unrelated changes should be avoided.

---

# Code Review Checklist

Before approving code, verify:

- Requirements are satisfied.
- Architecture is respected.
- Naming is clear.
- No duplicated logic.
- Tests pass.
- Documentation is updated.
- No unnecessary complexity introduced.

---

# Refactoring

Refactoring should improve:

- Readability
- Simplicity
- Maintainability

Refactoring should not change behavior.

Behavioral changes require separate review.

---

# Technical Debt

Technical debt should be:

- Documented.
- Intentional.
- Temporary.

Never introduce hidden technical debt.

---

# AI-Assisted Development

AI-generated code must follow the same standards as manually written code.

Generated code should always be:

- Reviewed.
- Understood.
- Tested.
- Refactored when necessary.

AI is an assistant, not the architect.

---

# Coding Decisions

- Code favors clarity over cleverness.
- Feature-oriented organization.
- One responsibility per class.
- Thin controllers.
- Business logic isolated in Domain Services.
- Consistent naming.
- No hidden side effects.
- Security by default.
- Testing is mandatory.
- Documentation evolves with the code.

---

# Architecture Decision Record

## ADR-013

### Decision

Adopt a consistent engineering standard emphasizing readability, maintainability, and simplicity.

### Status

Accepted

### Context

Resonance is expected to evolve over many years with contributions from both humans and AI.

Consistency is essential to keeping the codebase approachable and scalable.

### Consequences

Positive

- Easier onboarding.
- Faster code reviews.
- Higher code quality.
- Better AI-generated code.
- Lower long-term maintenance costs.

Negative

- Requires discipline.
- May slow initial implementation slightly due to stricter standards.

---

# Related Documents

- 00-ARCHITECTURE.md
- 02-FOLDER-STRUCTURE.md
- 06-BACKEND.md
- 07-FRONTEND.md
- 08-STATE-MANAGEMENT.md
- 09-TESTING.md
- 10-DEPLOYMENT.md
- 12-AI-DEVELOPMENT.md