# Folder Structure

## Purpose

This document defines the directory structure of the Resonance codebase.

A consistent folder structure improves maintainability, scalability, onboarding, and AI-assisted development.

The project follows a feature-oriented monorepo architecture.

---

# Design Principles

The project structure should:

- Separate applications from shared packages.
- Organize code by feature rather than technical layers.
- Minimize duplication.
- Encourage reuse.
- Scale naturally as the product grows.
- Be intuitive for both humans and AI.

---

# Repository Structure

```
resonance/

├── apps/
├── packages/
├── docs/
├── scripts/
├── .github/
├── .vscode/
├── .env.example
├── package.json
├── pnpm-workspace.yaml
├── turbo.json
├── README.md
└── LICENSE
```

---

# apps/

Contains deployable applications.

```
apps/

├── web/
└── api/
```

---

## apps/web

Frontend application.

```
web/

├── app/
├── components/
├── features/
├── hooks/
├── lib/
├── providers/
├── services/
├── styles/
├── types/
├── public/
└── tests/
```

---

### app/

Contains Next.js routes.

```
app/

├── (auth)/
│
├── dashboard/
│
├── sessions/
│
├── music-projects/
│
├── settings/
│
└── layout.tsx
```

---

### components/

Reusable UI components.

```
components/

├── ui/
├── layout/
├── navigation/
└── shared/
```

Never place business logic here.

---

### features/

Feature-oriented components.

```
features/

├── authentication/
├── sessions/
├── snapshots/
├── notes/
├── lyrics/
├── attachments/
├── comments/
├── collaborators/
├── music-projects/
├── notifications/
└── profile/
```

Each feature owns its own UI.

---

### hooks/

Reusable React hooks.

Examples

```
useSession()

useNotifications()

useSearch()

useCurrentUser()
```

---

### lib/

Shared frontend utilities.

Examples

```
api.ts

auth.ts

date.ts

constants.ts
```

---

### providers/

Application providers.

Examples

```
ThemeProvider

QueryProvider

AuthProvider
```

---

### services/

Frontend API clients.

```
services/

├── session.service.ts
├── auth.service.ts
├── project.service.ts
└── ...
```

Services communicate with the backend.

---

### styles/

Global styling.

```
globals.css
```

---

### tests/

Frontend tests.

```
unit/

integration/

e2e/
```

---

# apps/api

Backend application.

```
api/

├── src/
├── prisma/
├── test/
├── uploads/
└── package.json
```

---

## src/

Application source.

```
src/

├── modules/
├── common/
├── config/
├── database/
├── storage/
├── auth/
├── main.ts
└── app.module.ts
```

---

### modules/

Business modules.

```
modules/

├── users/
├── sessions/
├── snapshots/
├── notes/
├── lyrics/
├── attachments/
├── comments/
├── collaborators/
├── music-projects/
├── notifications/
└── invitations/
```

Each module contains:

```
users/

├── controller.ts
├── service.ts
├── repository.ts
├── dto/
├── entities/
├── validators/
├── mapper.ts
└── tests/
```

Each module is self-contained.

---

### common/

Shared backend utilities.

```
common/

├── guards/
├── interceptors/
├── filters/
├── decorators/
├── middleware/
├── exceptions/
└── utils/
```

---

### config/

Application configuration.

```
config/

database.ts

storage.ts

auth.ts

environment.ts
```

---

### database/

Database layer.

```
database/

prisma/

seed/

migrations/
```

---

### storage/

Storage abstraction.

```
storage/

upload.service.ts

download.service.ts

delete.service.ts
```

The application never communicates directly with object storage.

---

# packages/

Shared packages.

```
packages/

├── ui/
├── types/
├── config/
├── validation/
└── utils/
```

---

## ui/

Reusable design system.

```
ui/

Button

Card

Input

Modal

SessionCard

SnapshotCard
```

Shared across applications.

---

## types/

Shared TypeScript types.

```
Session

User

Snapshot

Comment
```

Single source of truth.

---

## validation/

Shared Zod schemas.

```
SessionSchema

LoginSchema

RegisterSchema
```

Used by both frontend and backend.

---

## utils/

Shared helper functions.

```
date.ts

string.ts

file.ts
```

---

# docs/

Project documentation.

Contains all architecture, product, and engineering documentation.

---

# scripts/

Developer automation.

Examples

```
seed

backup

cleanup

migration
```

---

# .github/

GitHub configuration.

```
workflows/

issue templates/

pull request templates/
```

---

# Naming Conventions

Folders

```
kebab-case
```

Files

```
kebab-case
```

Components

```
PascalCase.tsx
```

Hooks

```
useSomething.ts
```

Types

```
PascalCase
```

Constants

```
UPPER_SNAKE_CASE
```

---

# Folder Principles

Every folder should have one responsibility.

Avoid folders like:

```
misc/

helpers/

temp/

new/
```

Folder names should immediately communicate purpose.

---

# Import Strategy

Prefer feature-local imports.

Example

```
features/sessions/components/SessionCard
```

Avoid long relative paths.

Shared code should be imported from packages.

---

# Ownership

Every feature owns:

- UI
- Services
- Validation
- Tests

Shared functionality belongs inside packages.

---

# Future Expansion

The structure supports future applications.

```
apps/

web/

api/

mobile/

desktop/

admin/
```

No restructuring should be required.

---

# Architecture Decision Record

## ADR-003

### Decision

Adopt a feature-oriented monorepo structure using Turborepo.

### Status

Accepted

### Context

Resonance is expected to grow while remaining maintainable by a solo developer and future contributors.

A feature-first structure improves discoverability, reduces coupling, and aligns with the modular architecture.

### Consequences

Positive

- Clear ownership.
- Easy navigation.
- High code reuse.
- AI-friendly organization.
- Scales naturally.

Negative

- Initial setup is more complex than a single-package project.
- Requires discipline to keep shared packages focused.

---

# Related Documents

- 00-ARCHITECTURE.md
- 01-TECH-STACK.md
- 03-DATABASE-SCHEMA.md
- 04-AUTHENTICATION.md
- 05-STORAGE.md
- 06-BACKEND.md
- 07-FRONTEND.md
- 08-STATE-MANAGEMENT.md
- 09-TESTING.md
- 10-DEPLOYMENT.md
- 11-CODING-STANDARDS.md