# System Architecture

## Purpose

This document defines the high-level architecture of Resonance.

It explains how the major parts of the system communicate, the responsibilities of each layer, and the architectural principles that guide implementation.

This document intentionally avoids implementation details. Those are defined in the remaining engineering documents.

---

# Architecture Goals

The architecture should:

- Be easy to understand.
- Be easy to maintain.
- Scale with product growth.
- Support AI-assisted development.
- Minimize technical debt.
- Keep business logic isolated.
- Support future collaboration features.

---

# Architecture Philosophy

Resonance follows a **modular monolith** architecture.

The application is developed as a single deployable system while keeping clear boundaries between domains.

This approach provides:

- Faster development.
- Lower operational complexity.
- Easier debugging.
- Simpler deployment.

Future services may be extracted if product growth requires it.

---

# High-Level Architecture

```
                    +----------------------+
                    |      Browser         |
                    +----------+-----------+
                               |
                               |
                          HTTPS / REST
                               |
                               ▼
                    +----------------------+
                    |      Next.js App     |
                    | (Frontend Client)    |
                    +----------+-----------+
                               |
                         REST API
                               |
                               ▼
                    +----------------------+
                    |      NestJS API      |
                    |  Business Logic      |
                    +----------+-----------+
                               |
                +--------------+--------------+
                |                             |
                ▼                             ▼
      PostgreSQL Database           Object Storage
      (Application Data)           (Audio & Files)
```

---

# System Components

The platform consists of five primary components.

## Frontend

Responsibilities

- User Interface
- Routing
- Forms
- State Management
- API Communication

Technology

- Next.js
- React
- TypeScript

---

## Backend

Responsibilities

- Business Logic
- Authentication
- Authorization
- Validation
- File Management
- API

Technology

- NestJS
- TypeScript

---

## Database

Responsibilities

- Store application data.
- Store relationships.
- Store permissions.
- Store metadata.

Technology

- PostgreSQL

---

## Object Storage

Responsibilities

Store:

- Audio
- Attachments
- Images
- Cover Art

Large files are never stored inside PostgreSQL.

---

## Authentication

Responsibilities

- Registration
- Login
- Email Verification
- Password Recovery
- Session Management
- Authorization

---

# Data Flow

A typical request follows this path.

```
Browser

↓

Frontend

↓

REST API

↓

Controller

↓

Service

↓

Repository

↓

Database

↓

Repository

↓

Service

↓

Controller

↓

Frontend

↓

Browser
```

Business logic always exists inside Services.

---

# Layer Responsibilities

## Presentation Layer

Responsible for:

- Pages
- Components
- User Interaction

Never contains business logic.

---

## API Layer

Responsible for:

- HTTP
- Validation
- Authentication
- Serialization

Never contains business rules.

---

## Service Layer

Responsible for:

- Business Rules
- Domain Logic
- Authorization Decisions

This is the heart of the application.

---

## Repository Layer

Responsible for:

- Database communication.
- Queries.
- Persistence.

Repositories never contain business logic.

---

## Storage Layer

Responsible for:

- Uploading files.
- Downloading files.
- File URLs.
- Storage lifecycle.

---

# Domain Modules

The backend is organized by feature.

Core modules include:

- Authentication
- Users
- Sessions
- Snapshots
- Notes
- Lyrics
- Attachments
- Comments
- Collaborators
- Music Projects
- Notifications

Each module owns its own:

- Controller
- Service
- Repository
- DTOs
- Validation
- Tests

---

# Architectural Principles

## Separation of Concerns

Every layer has one responsibility.

---

## Single Source of Truth

Every piece of data has one authoritative owner.

---

## Composition over Duplication

Reusable functionality should be shared.

---

## Explicit Ownership

Ownership must always be clear.

Every Session has one Owner.

---

## Preserve Creative History

History should never be destroyed without intention.

Snapshots remain immutable.

---

## Feature-Based Organization

The codebase is organized around product features rather than technical categories.

---

## API First

The frontend communicates exclusively through the REST API.

The frontend never accesses the database directly.

---

# Cross-Cutting Concerns

These concerns apply across every module.

- Authentication
- Authorization
- Logging
- Error Handling
- Validation
- File Storage
- Configuration
- Monitoring

---

# Scalability Strategy

Current Architecture

```
Modular Monolith
```

Future Growth

```
Modular Monolith

↓

Extract Services (if necessary)

↓

Microservices (only if justified)
```

Microservices are intentionally deferred.

---

# Security Principles

The system should:

- Authenticate every protected request.
- Authorize every sensitive action.
- Validate all input.
- Sanitize user-generated content.
- Never expose internal implementation details.

---

# Performance Principles

Optimize for:

- Simplicity first.
- Correctness second.
- Performance third.

Performance optimizations should only occur after measurable bottlenecks are identified.

---

# Error Philosophy

Errors should:

- Be predictable.
- Be consistent.
- Help developers.
- Help users.
- Never expose internal information.

---

# Deployment Model

The application consists of:

Frontend

↓

Backend API

↓

Database

↓

Object Storage

Each component can evolve independently.

---

# Architecture Decisions

- Modular Monolith architecture.
- REST API communication.
- Feature-based module organization.
- Business logic isolated in Services.
- PostgreSQL for structured data.
- Object Storage for large files.
- API-first frontend.
- Desktop-first product.
- Single Owner permission model.
- Immutable Snapshots.

---

# Out of Scope

This document does not define:

- Database schema
- Folder structure
- Authentication implementation
- Storage implementation
- Deployment pipeline
- Coding standards

These are covered in separate engineering documents.

---

# Related Documents

- 01-TECH-STACK.md
- 02-FOLDER-STRUCTURE.md
- 03-DATABASE-SCHEMA.md
- 04-AUTHENTICATION.md
- 05-STORAGE.md
- 06-BACKEND.md
- 07-FRONTEND.md
- 08-STATE-MANAGEMENT.md
- 09-TESTING.md
- 10-DEPLOYMENT.md
- 11-CODING-STANDARDS.md