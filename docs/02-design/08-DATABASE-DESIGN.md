# Database Design

## Purpose

This document defines the conceptual data model of the platform.

It describes the core entities, ownership model, relationships, lifecycle, and data integrity rules that support the product.

This document intentionally excludes implementation details such as SQL syntax, database engines, datatypes, indexes, and migrations.

---

# Design Principles

The data model should:

- Preserve creative history.
- Keep ownership explicit.
- Minimize data duplication.
- Support collaboration.
- Prevent accidental data loss.
- Scale without major restructuring.

---

# Domain Model

```
Workspace
│
└── User
      │
      ├── Session
      │      ├── Snapshot
      │      ├── Note
      │      ├── Lyrics
      │      ├── Attachment
      │      ├── Comment
      │      ├── Collaborator
      │      └── Timeline Event
      │
      ├── Music Project
      │      └── Session
      │
      ├── Notification
      │
      └── Invitation
```

---

# Entity Definitions

---

## Workspace

### Purpose

Represents the internal ownership boundary of a user's data.

The Workspace is automatically created during registration and is never exposed directly through the user interface.

### Relationships

Workspace

- owns many Users

### Rules

- Automatically created.
- Automatically deleted when appropriate.
- Invisible to end users.

---

## User

### Purpose

Represents a registered musician.

### Relationships

User

- belongs to one Workspace
- owns many Sessions
- belongs to many Sessions as a Collaborator
- owns many Music Projects
- receives many Notifications
- receives many Invitations

---

## Session

### Purpose

Represents a single creative work in progress.

A Session is the central entity of the platform.

### Contains

- Metadata
- Snapshots
- Notes
- Lyrics
- Attachments
- Comments
- Collaborators
- Timeline Events

### Relationships

Session

- belongs to one Owner
- belongs to zero or many Music Projects
- contains many Snapshots
- contains many Notes
- contains many Attachments
- contains many Comments
- contains many Collaborators
- contains many Timeline Events

### Rules

- Every Session has exactly one Owner.
- Session names are editable.
- Session permissions are managed independently.
- Music Projects never own Sessions.

---

## Snapshot

### Purpose

Represents a preserved version of a Session.

Snapshots provide version history and protect creative progress.

### Relationships

Snapshot

- belongs to one Session
- created by one User

### Rules

- Snapshots are immutable.
- Existing Snapshots cannot be overwritten.
- Restoring a Snapshot creates a new state rather than modifying history.

---

## Note

### Purpose

Stores written ideas associated with a Session.

### Relationships

Note

- belongs to one Session

---

## Lyrics

### Purpose

Stores lyrical content associated with a Session.

### Relationships

Lyrics

- belongs to one Session

---

## Attachment

### Purpose

Stores supporting creative files.

Examples include:

- MIDI
- Project Files
- Images
- PDFs
- Reference Audio

### Relationships

Attachment

- belongs to one Session

---

## Comment

### Purpose

Stores contextual discussion.

### Relationships

Comment

- belongs to one Session
- created by one User

Supports:

- Replies
- Mentions
- Resolution

---

## Collaborator

### Purpose

Defines a user's access to a Session.

### Relationships

Collaborator

- belongs to one Session
- references one User

### Roles

- Owner
- Editor
- Reviewer
- Viewer

---

## Timeline Event

### Purpose

Records significant activity within a Session.

Examples:

- Snapshot Uploaded
- Lyrics Updated
- Note Edited
- Comment Added
- Collaborator Invited
- Ownership Transferred

Timeline Events are append-only.

---

## Music Project

### Purpose

Organizes related Sessions.

Music Projects provide organization only.

### Relationships

Music Project

- owned by one User
- contains many Sessions

### Rules

- Sessions may exist without a Music Project.
- Sessions may belong to multiple Music Projects.
- Music Projects never own Sessions.
- Music Projects never define permissions.

---

## Notification

### Purpose

Represents a system notification delivered to a user.

Examples

- Collaboration Invite
- Mention
- Comment
- Ownership Transfer

---

## Invitation

### Purpose

Represents a pending collaboration request.

### Relationships

Invitation

- sent by one User
- received by one User
- references one Session

---

# Ownership Model

```
Workspace
    │
    └── User
            │
            ├── Owns Session
            │
            └── Owns Music Project
```

Sessions own all creative assets.

Music Projects own no creative assets.

Collaborators own no creative assets.

---

# Relationship Summary

| Entity | Parent |
|----------|---------|
| Workspace | Platform |
| User | Workspace |
| Session | User |
| Snapshot | Session |
| Note | Session |
| Lyrics | Session |
| Attachment | Session |
| Comment | Session |
| Collaborator | Session |
| Timeline Event | Session |
| Music Project | User |
| Notification | User |
| Invitation | User |

---

# Lifecycle

## User

```
Register

↓

Workspace Created

↓

Email Verified

↓

Login

↓

Active
```

---

## Session

```
Create

↓

Active

↓

Archived

↓

Trash

↓

Permanent Delete (30 Days)
```

---

## Snapshot

```
Upload

↓

Available

↓

Restored

↓

Archived
```

Snapshots are never permanently modified.

---

# Deletion Rules

## Workspace

Deleting a Workspace removes:

- Users
- Sessions
- Music Projects
- Notifications
- Invitations

---

## Music Project

Deleting a Music Project removes only the organizational grouping.

Sessions remain unchanged.

---

## Session

Deleting a Session moves it to Trash.

Sessions remain recoverable for 30 days.

After 30 days, permanent deletion removes:

- Snapshots
- Notes
- Lyrics
- Attachments
- Comments
- Collaborators
- Timeline Events

---

## Snapshot

Snapshots cannot be permanently modified.

Owners may hide or restore Snapshots.

---

# Integrity Rules

- Every Session must have exactly one Owner.
- Every Collaborator references an existing User.
- Every Snapshot belongs to exactly one Session.
- Every Comment belongs to exactly one Session.
- Every Attachment belongs to exactly one Session.
- Every Timeline Event belongs to exactly one Session.
- Music Projects never own Sessions.
- Deleting a Music Project never deletes a Session.
- Deleting a Session deletes all child entities after the retention period.

---

# Future Extensions

The model supports future additions such as:

- AI Assistant
- Version Comparison
- Public Sharing
- Team Workspaces
- Custom Roles
- Asset Library
- Publishing
- Marketplace

These features should integrate without restructuring the existing ownership model.

---

# Decisions

- Session is the primary domain entity.
- Every Session has exactly one Owner.
- Music Projects organize Sessions but never own them.
- Workspace exists as an internal architectural boundary.
- Creative history is preserved whenever possible.
- Soft deletion is preferred over immediate permanent deletion.

---

# Open Questions

None.

---

# Impact

This document influences:

- API Design
- Backend Architecture
- Database Schema
- Storage Strategy
- Authorization
- Frontend Data Models

---

# Related Documents

- 01-INFORMATION_ARCHITECTURE.md
- 02-USER_FLOWS.md
- 03-PLATFORM_FLOWS.md
- 06-NAVIGATION.md
- 07-PERMISSION_MODEL.md