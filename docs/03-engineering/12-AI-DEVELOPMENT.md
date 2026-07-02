# AI Development

## Purpose

This document defines how Artificial Intelligence (AI) is used during the development of Resonance.

It establishes principles, workflows, responsibilities, and guardrails to ensure AI improves productivity without compromising software quality.

AI is a development assistant.

Humans remain responsible for all architectural and product decisions.

---

# AI Philosophy

AI should:

- Accelerate development.
- Reduce repetitive work.
- Improve developer productivity.
- Assist learning.
- Never replace engineering judgment.

Every AI-generated contribution must meet the same quality standards as manually written code.

---

# Guiding Principles

AI should be used to:

- Generate boilerplate.
- Explain unfamiliar concepts.
- Refactor code.
- Generate tests.
- Improve documentation.
- Assist debugging.
- Generate examples.
- Suggest improvements.

AI should not make product or architectural decisions independently.

---

# Human Responsibilities

Humans remain responsible for:

- Product decisions
- Architecture
- Security decisions
- Database design
- Business rules
- Code review
- Final approval
- Production deployments

AI assists.

Humans decide.

---

# AI Responsibilities

AI may assist with:

- Writing code
- Refactoring
- Documentation
- Test generation
- API implementation
- UI implementation
- Code explanations
- SQL generation
- Error diagnosis
- Performance suggestions

AI should always follow the established architecture.

---

# Source of Truth

AI must always treat project documentation as the authoritative source.

Priority order:

1. Product documentation
2. Design documentation
3. Engineering documentation
4. Existing codebase
5. General best practices

If documentation conflicts with generated code, the documentation takes precedence.

---

# AI Workflow

Every development task follows the same workflow.

```
Read Documentation

↓

Understand Context

↓

Generate Solution

↓

Human Review

↓

Refinement

↓

Testing

↓

Commit
```

AI should never skip the documentation step.

---

# Prompting Guidelines

Every implementation prompt should include sufficient context.

Recommended prompt structure:

```
Objective

Relevant Documents

Constraints

Acceptance Criteria
```

Example

```
Implement the Session creation feature.

Follow:

03-DATABASE-SCHEMA.md

06-BACKEND.md

09-API-DESIGN.md

Requirements

- Respect architecture.
- Use Domain Services.
- Generate tests.
```

Avoid prompts without architectural context.

---

# Code Generation Rules

Generated code should:

- Follow project architecture.
- Respect coding standards.
- Follow naming conventions.
- Include appropriate tests.
- Minimize complexity.
- Avoid duplication.

Generated code should not introduce new architectural patterns.

---

# Architecture Protection

AI must never:

- Invent new folder structures.
- Introduce new architectural layers.
- Change API contracts.
- Modify database architecture.
- Change permission rules.
- Change authentication behavior.

Architectural changes require human approval.

---

# Code Review

Every AI-generated contribution must be reviewed.

Review should verify:

- Correctness
- Readability
- Architecture compliance
- Security
- Test coverage
- Performance
- Simplicity

AI-generated code should never be merged without review.

---

# Testing Requirements

AI-generated code should include:

- Unit tests
- Integration tests (when appropriate)
- Documentation updates (when necessary)

Generated code is considered incomplete without appropriate tests.

---

# Documentation Updates

If generated code changes:

- API behavior
- Database schema
- User flows
- Architecture
- Deployment

The corresponding documentation must be updated.

Documentation and implementation must remain synchronized.

---

# Refactoring

AI may suggest refactoring when it improves:

- Readability
- Maintainability
- Performance
- Testability

Refactoring should preserve behavior unless explicitly requested.

---

# Security

AI-generated code must never:

- Hardcode secrets.
- Expose credentials.
- Skip authorization.
- Skip validation.
- Trust client input.
- Introduce known security risks.

Security remains a human responsibility.

---

# Dependency Management

AI should:

- Prefer existing dependencies.
- Avoid unnecessary packages.
- Justify new dependencies.
- Respect project standards.

Adding new dependencies requires human approval.

---

# Error Handling

AI-generated code should:

- Use consistent error handling.
- Return meaningful errors.
- Avoid exposing internal implementation details.

---

# Performance

AI should prioritize:

1. Correctness
2. Readability
3. Maintainability
4. Performance

Optimization should be evidence-based.

---

# Learning

AI should help developers understand generated code.

Generated code should be:

- Explainable.
- Maintainable.
- Educational.

Developers should never merge code they do not understand.

---

# AI Limitations

AI may:

- Hallucinate.
- Produce outdated solutions.
- Misinterpret requirements.
- Miss edge cases.

Human review is mandatory.

---

# Acceptable AI Use

Examples include:

- Generate CRUD endpoints
- Generate UI components
- Generate validation schemas
- Generate tests
- Explain errors
- Improve documentation
- Suggest refactoring

---

# Unacceptable AI Use

Examples include:

- Making product decisions
- Changing architecture without approval
- Bypassing code review
- Deploying directly to production
- Handling secrets automatically
- Approving its own output

---

# Development Workflow

```
Requirement

↓

Documentation Review

↓

AI Generation

↓

Human Review

↓

Refinement

↓

Testing

↓

Merge
```

Every feature follows this workflow.

---

# Prompt Library

Common prompt templates should be maintained for:

- Feature implementation
- API generation
- UI generation
- Refactoring
- Bug fixing
- Testing
- Documentation

A shared prompt library improves consistency.

---

# AI Decisions

- AI assists development.
- Humans own architecture.
- Documentation is authoritative.
- Every AI contribution is reviewed.
- Testing is mandatory.
- Documentation stays synchronized with implementation.
- AI should explain its output when requested.

---

# Architecture Decision Record

## ADR-014

### Decision

Adopt AI-assisted software development as a core engineering practice.

### Status

Accepted

### Context

Resonance is developed by a solo founder using AI extensively throughout the software development lifecycle.

The project requires a consistent workflow that maximizes AI productivity while preserving software quality.

### Consequences

Positive

- Faster implementation.
- Better documentation.
- Consistent architecture.
- Improved learning.
- Higher development velocity.

Negative

- Requires disciplined review.
- Poor prompts may produce poor results.
- Human oversight remains essential.

---

# Related Documents

- 00-ARCHITECTURE.md
- 01-TECH-STACK.md
- 02-FOLDER-STRUCTURE.md
- 06-BACKEND.md
- 07-FRONTEND.md
- 08-STATE-MANAGEMENT.md
- 09-TESTING.md
- 10-DEPLOYMENT.md
- 11-CODING-STANDARDS.md