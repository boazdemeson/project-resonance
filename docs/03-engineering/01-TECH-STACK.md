# Technology Stack

## Purpose

This document defines the technologies used to build Resonance.

Each technology is selected based on the project's goals, engineering principles, maintainability, community support, and compatibility with AI-assisted development.

Technology choices should prioritize long-term maintainability over novelty.

---

# Technology Selection Principles

Every technology should satisfy the following criteria:

- Mature and production-ready
- Well documented
- Strong community support
- Type-safe whenever possible
- Compatible with AI-assisted development
- Easy to replace if necessary
- Suitable for solo and small-team development

Avoid adopting technology solely because it is new or trending.

---

# Technology Overview

| Layer | Technology |
|---------|------------|
| Language | TypeScript |
| Frontend | Next.js |
| UI Library | React |
| Styling | Tailwind CSS |
| UI Components | shadcn/ui |
| Icons | Lucide React |
| Backend | NestJS |
| API | REST |
| Database | PostgreSQL |
| ORM | Prisma |
| Authentication | Better Auth |
| Object Storage | Supabase Storage |
| Validation | Zod |
| Package Manager | pnpm |
| Monorepo | Turborepo |
| Testing | Vitest, Playwright |
| API Testing | Bruno |
| Code Formatting | Prettier |
| Linting | ESLint |
| Version Control | Git |
| Repository Hosting | GitHub |
| Frontend Hosting | Vercel |
| Backend Hosting | Railway |
| Database Hosting | Railway PostgreSQL |
| CI/CD | GitHub Actions |

---

# Programming Language

## TypeScript

### Why

- Shared language across frontend and backend.
- Strong type safety.
- Excellent AI support.
- Large ecosystem.
- Reduces runtime errors.
- Easier onboarding for contributors.

---

# Frontend

## Next.js

### Responsibilities

- User Interface
- Routing
- Rendering
- API communication

### Why

- React ecosystem.
- Excellent documentation.
- Great developer experience.
- Easy deployment.
- Built-in routing.
- Excellent performance.

---

## React

Used for component-based interface development.

Reasons

- Mature ecosystem.
- Huge community.
- Excellent AI support.
- Reusable components.

---

## Tailwind CSS

Used for styling.

Reasons

- Utility-first.
- Consistent design.
- Fast development.
- Easy maintenance.

---

## shadcn/ui

Used as the base component library.

Reasons

- Accessible.
- Customizable.
- No vendor lock-in.
- Works naturally with Tailwind.

---

## Lucide React

Used for icons.

Reasons

- Consistent icon style.
- Lightweight.
- Open source.

---

# Backend

## NestJS

Responsibilities

- REST API
- Authentication
- Authorization
- Business Logic
- Validation

Reasons

- Modular architecture.
- Dependency Injection.
- Excellent TypeScript support.
- Highly maintainable.
- Ideal for medium and large applications.

---

# API

## REST

Reasons

- Simple.
- Predictable.
- Easy to document.
- Easy to consume.
- Excellent tooling.

GraphQL is intentionally deferred.

---

# Database

## PostgreSQL

Reasons

- Mature.
- Reliable.
- ACID compliant.
- Excellent performance.
- Strong relational modeling.

All structured application data is stored in PostgreSQL.

---

## Prisma

Responsibilities

- ORM
- Database Migrations
- Type-safe queries

Reasons

- Excellent TypeScript integration.
- Great developer experience.
- Strong AI familiarity.
- Simple migrations.

---

# Authentication

## Better Auth

Responsibilities

- Registration
- Login
- Session Management
- Password Reset
- Email Verification

Reasons

- Modern.
- Secure.
- TypeScript-first.
- Easy integration.

---

# Storage

## Supabase Storage

Stores

- Audio files
- Attachments
- Cover Art
- Images

Reasons

- Scalable.
- Reliable.
- Simple API.
- Cost effective.

Large files are never stored inside PostgreSQL.

---

# Validation

## Zod

Used for:

- API validation
- Form validation
- Shared schemas

Reasons

- Type-safe.
- Lightweight.
- Excellent TypeScript support.

---

# Package Management

## pnpm

Reasons

- Faster installation.
- Efficient disk usage.
- Excellent monorepo support.

---

# Monorepo

## Turborepo

Reasons

- Shared packages.
- Shared types.
- Shared UI components.
- Scalable project organization.

---

# Testing

## Vitest

Used for:

- Unit Testing
- Service Testing

---

## Playwright

Used for:

- End-to-End Testing
- UI Testing

---

## Bruno

Used for:

- API Testing
- Manual endpoint testing

Bruno is preferred over Postman because collections are stored as plain text and integrate well with Git.

---

# Code Quality

## ESLint

Maintains consistent code quality.

---

## Prettier

Maintains consistent formatting.

---

# Version Control

## Git

Primary version control system.

---

## GitHub

Repository hosting.

Issue tracking.

Pull requests.

Documentation.

CI integration.

---

# Hosting

## Frontend

Vercel

Reasons

- Optimized for Next.js.
- Global CDN.
- Easy deployments.

---

## Backend

Railway

Reasons

- Simple deployment.
- Managed infrastructure.
- PostgreSQL integration.

---

## Database

Railway PostgreSQL

Reasons

- Managed PostgreSQL.
- Automated backups.
- Easy scaling.

---

## Object Storage

Supabase Storage

Reasons

- Reliable.
- Scalable.
- Cost effective.

---

# CI/CD

## GitHub Actions

Used for

- Linting
- Testing
- Build verification
- Deployment automation

---

# Future Technologies

Potential future additions

- Redis
- OpenSearch
- Sentry
- Resend
- Stripe
- Cloudflare R2
- FFmpeg Workers

These are intentionally excluded from the MVP.

---

# Technology Decisions

- TypeScript across the entire stack.
- Monorepo architecture.
- REST API.
- PostgreSQL.
- Prisma ORM.
- Better Auth.
- Supabase Storage.
- Tailwind CSS.
- shadcn/ui.
- Desktop-first optimization.

---

# Rejected Alternatives

| Technology | Reason |
|-------------|--------|
| GraphQL | Unnecessary complexity for MVP |
| Redux | Too heavy for current requirements |
| MongoDB | Relational data fits PostgreSQL better |
| Firebase Firestore | Less suitable for relational domain model |
| Bootstrap | Less flexible than Tailwind CSS |
| JavaScript | Lower type safety |
| Express.js | Less opinionated than NestJS |
| Yarn | pnpm offers better monorepo support |

---

# Architecture Decision Record

## ADR-002

### Decision

Adopt a full TypeScript stack using Next.js, NestJS, PostgreSQL, and Prisma.

### Status

Accepted

### Context

Resonance is developed primarily by a solo founder using AI-assisted development.

Consistency, maintainability, and developer experience are prioritized over adopting multiple languages or frameworks.

### Consequences

Positive

- Shared language across the stack.
- Strong type safety.
- Easier onboarding.
- Better AI-generated code quality.
- Reduced context switching.

Negative

- Team members unfamiliar with TypeScript will face a learning curve.
- Strong typing requires additional upfront discipline.

---

# Related Documents

- 00-ARCHITECTURE.md
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