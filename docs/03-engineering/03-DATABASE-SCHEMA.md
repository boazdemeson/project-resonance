# Database Schema

## Purpose

This document defines the physical database schema for Resonance.

It specifies database entities, attributes, relationships, constraints, and lifecycle rules that will be implemented using PostgreSQL and Prisma.

This document serves as the source of truth for backend development.

---

# Database Philosophy

The database should:

- Preserve creative history.
- Keep ownership explicit.
- Minimize duplication.
- Normalize data where practical.
- Prevent accidental data loss.
- Scale as collaboration grows.

---

# Entity Relationship Diagram

Workspace
│
└── User
      │
      ├── Session
      │      ├── Note
      │      ├── Lyrics
      │      ├── Snapshot
      │      ├── Attachment
      │      ├── Comment
      │      ├── Collaborator
      │      └── TimelineEvent
      │
      ├── MusicProject
      │       └── MusicProjectSession
      │
      ├── Notification
      │
      └── Invitation

---

# Common Columns

Every table contains:

- id (UUID)
- createdAt
- updatedAt

Soft-deletable tables additionally contain:

- deletedAt

---

# Workspace

Purpose

Internal ownership boundary.

Columns

- id
- createdAt
- updatedAt

Relationships

Workspace

1 → N Users

Rules

Automatically created.

Invisible to users.

---

# User

Purpose

Registered musician.

Columns

- id
- workspaceId
- displayName
- email
- passwordHash
- profileImage
- bio
- emailVerifiedAt
- lastLoginAt
- createdAt
- updatedAt
- deletedAt

Relationships

Workspace 1 → N Users

User 1 → N Sessions

User N ↔ N Sessions (Collaborator)

User 1 → N MusicProjects

User 1 → N Notifications

User 1 → N Invitations

Constraints

Email must be unique.

Display Name required.

---

# Session

Purpose

Primary creative workspace.

Columns

- id
- ownerId
- title
- description
- genre
- bpm
- musicalKey
- status
- archivedAt
- deletedAt
- createdAt
- updatedAt

Relationships

Owner

1 User

Children

- Note
- Lyrics
- Snapshot
- Attachment
- Comment
- TimelineEvent
- Collaborator

Many-to-Many

MusicProject

Constraints

Exactly one Owner.

Soft delete.

---

# Note

Purpose

Stores creative notes.

Columns

- id
- sessionId
- content
- createdAt
- updatedAt

Relationships

Session 1 → 1 Note

Constraints

Exactly one Note per Session.

---

# Lyrics

Purpose

Stores song lyrics.

Columns

- id
- sessionId
- content
- createdAt
- updatedAt

Relationships

Session 1 → 1 Lyrics

Constraints

Exactly one Lyrics document per Session.

---

# Snapshot

Purpose

Stores a complete version of a Session.

Columns

- id
- sessionId
- createdBy
- versionNumber
- title
- description
- audioFileUrl
- notesSnapshot
- lyricsSnapshot
- metadataSnapshot
- createdAt

Relationships

Session 1 → N Snapshots

User 1 → N Snapshots

Constraints

Immutable.

Never updated.

Never deleted through public API.

Version number unique per Session.

---

# Attachment

Purpose

Additional project files.

Columns

- id
- sessionId
- uploadedBy
- fileName
- fileType
- fileSize
- storagePath
- createdAt
- deletedAt

Relationships

Session 1 → N Attachments

---

# Comment

Purpose

Discussion.

Columns

- id
- sessionId
- authorId
- parentCommentId
- content
- resolvedAt
- createdAt
- updatedAt

Relationships

Session 1 → N Comments

Supports threaded replies.

---

# Collaborator

Purpose

Session permissions.

Columns

- id
- sessionId
- userId
- role
- invitedBy
- acceptedAt
- createdAt

Role Enum

- OWNER
- EDITOR
- REVIEWER
- VIEWER

Constraints

Only one OWNER per Session.

---

# TimelineEvent

Purpose

Permanent activity log.

Columns

- id
- sessionId
- actorId
- eventType
- payload
- createdAt

Event Types

- SESSION_CREATED
- SNAPSHOT_CREATED
- SNAPSHOT_RESTORED
- NOTE_UPDATED
- LYRICS_UPDATED
- ATTACHMENT_UPLOADED
- COMMENT_CREATED
- COLLABORATOR_INVITED
- ROLE_CHANGED
- OWNERSHIP_TRANSFERRED
- SESSION_ARCHIVED

Timeline Events are append-only.

---

# MusicProject

Purpose

Organizes Sessions.

Columns

- id
- ownerId
- title
- description
- coverArtUrl
- releaseType
- createdAt
- updatedAt
- deletedAt

Relationships

User 1 → N MusicProjects

MusicProject N ↔ N Sessions

---

# MusicProjectSession

Purpose

Join table.

Columns

- projectId
- sessionId
- orderIndex
- createdAt

Constraints

Composite Primary Key

(projectId, sessionId)

---

# Notification

Purpose

System notifications.

Columns

- id
- userId
- type
- title
- message
- readAt
- createdAt

---

# Invitation

Purpose

Pending collaboration invite.

Columns

- id
- sessionId
- senderId
- receiverEmail
- role
- status
- expiresAt
- createdAt

Status Enum

- PENDING
- ACCEPTED
- DECLINED
- EXPIRED

---

# Enums

SessionStatus

- IDEA
- WRITING
- RECORDING
- EDITING
- MIXING
- MASTERING
- COMPLETED
- ARCHIVED

ReleaseType

- SINGLE
- EP
- ALBUM
- MIXTAPE
- PLAYLIST

CollaboratorRole

- OWNER
- EDITOR
- REVIEWER
- VIEWER

NotificationType

- COMMENT
- INVITATION
- MENTION
- SYSTEM

InvitationStatus

- PENDING
- ACCEPTED
- DECLINED
- EXPIRED

---

# Cascade Rules

Deleting Workspace

↓

Deletes Users

↓

Deletes Sessions

↓

Deletes child entities

---

Deleting Music Project

↓

Deletes only MusicProjectSession

↓

Sessions remain.

---

Deleting Session

↓

Soft Delete

↓

Trash

↓

Permanent deletion after retention period.

---

Deleting Snapshot

↓

Not supported.

---

# Indexing Strategy

Index

- email
- ownerId
- sessionId
- createdAt
- updatedAt
- status

Composite Index

(sessionId, versionNumber)

(projectId, sessionId)

---

# Soft Delete Strategy

Soft Delete

- User
- Session
- Attachment
- MusicProject

Never Soft Delete

- Snapshot
- TimelineEvent

---

# Future Schema Extensions

Reserved for:

- AI Suggestions
- Audio Analysis
- Chords
- Tempo Detection
- Publishing
- Marketplace
- Public Profiles
- Team Workspaces

The schema is designed to accommodate these additions without major restructuring.

---

# ADR-004

Decision

Use Session as the primary aggregate root.

Reason

All creative assets belong to a Session.

Music Projects organize Sessions but never own them.

Consequences

Positive

- Clear ownership.
- Simple permission model.
- Easy restoration.
- Better scalability.

Negative

- Some queries require joins.
- Snapshot records may grow significantly over time.

---

# Related Documents

- 08-DATABASE_DESIGN.md
- 09-API_DESIGN.md
- 07-PERMISSION_MODEL.md
- 00-ARCHITECTURE.md