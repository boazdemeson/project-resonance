# Information Architecture

## Purpose

This document defines the overall structure of the application.

It describes the primary navigation, major screens, and how information is organized throughout the platform.

The goal is to create an intuitive structure that minimizes navigation while keeping the Session at the center of the experience.

---

# Information Architecture Overview

```
Workspace
│
├── Dashboard
│
├── Sessions
│   ├── All Sessions
│   └── Session Detail
│       ├── Overview
│       ├── Snapshots
│       ├── Timeline
│       ├── Notes
│       ├── Lyrics
│       ├── Attachments
│       ├── Comments
│       ├── Collaborators
│       └── Settings
│
├── Music Projects
│
├── Search
│
├── Notifications
│
└── Settings
```

---

# Primary Navigation

The application uses a persistent navigation available from every screen.

## Dashboard

Purpose

The Dashboard provides an overview of the user's creative workspace and helps them immediately continue creating.

Primary Actions

- Continue Session
- Create New Session

Contains

- Continue Session
- Recent Sessions
- Pinned Sessions
- Recent Activity

The Dashboard should encourage action rather than simply display information.

---

## Sessions

Purpose

The primary workspace of the platform.

Contains every Session owned or shared with the user.

Capabilities

- Browse Sessions
- Search Sessions
- Filter Sessions
- Sort Sessions
- Archive Sessions
- Favorite Sessions
- Create Session

---

## Session Detail

Purpose

The complete creative workspace for a single Session.

Users should rarely need to leave this page while creating music.

A Session contains the following sections.

### Overview

High-level information.

Contains

- Session Name
- Description
- Status
- Genre
- BPM
- Key
- Mood
- Tags
- Last Updated

---

### Snapshots

Purpose

Preserve the evolution of the Session.

Contains

- Snapshot History
- Upload Snapshot
- Restore Snapshot
- Download Snapshot
- Snapshot Notes

---

### Timeline

Purpose

Display the chronological history of the Session.

Contains

- Snapshot Created
- Notes Updated
- Lyrics Updated
- Comment Added
- Collaborator Joined
- Status Changed

---

### Notes

Purpose

Capture ideas during the creative process.

Contains

- Rich Text Notes
- Checklists
- References

---

### Lyrics

Purpose

Store and edit lyrics associated with the Session.

Contains

- Lyrics Editor
- Song Structure
- Chords (Future)

---

### Attachments

Purpose

Store supporting files.

Examples

- MIDI
- DAW Project
- PDF
- Images
- ZIP
- Reference Audio

---

### Comments

Purpose

Centralize discussion.

Contains

- Comments
- Replies
- Timestamp Comments
- Resolved Comments

---

### Collaborators

Purpose

Manage people participating in the Session.

Contains

- Members
- Roles
- Invitations

---

### Settings

Purpose

Configure Session-specific options.

Contains

- Archive Session
- Delete Session
- Session Metadata

---

## Music Projects

Purpose

Organize related Sessions.

Music Projects are optional.

They never become the primary workspace.

Examples

- Album
- EP
- Demo Collection
- Client Work

Capabilities

- Create Music Project
- Rename Music Project
- Add Sessions
- Remove Sessions
- View Progress

---

## Search

Purpose

Provide global search across the Workspace.

Searchable Items

- Sessions
- Music Projects
- Notes
- Lyrics
- Comments
- Attachments

Search should always be accessible.

---

## Notifications

Purpose

Keep users informed without interrupting creativity.

Examples

- New Comment
- Mention
- Collaboration Invite
- Session Shared

Notifications should be informative rather than distracting.

---

## Settings

Purpose

Manage Workspace preferences.

Contains

- Profile
- Appearance
- Notifications
- Security
- Storage
- Account

---

# Navigation Principles

The Dashboard helps users decide what to do next.

Sessions are the primary destination.

Music Projects support organization.

Search is always available.

Users should rarely leave a Session while actively creating.

---

# Design Decisions

- Dashboard is the application's home.
- The Dashboard prioritizes continuing existing work.
- The Session is the primary workspace.
- Music Projects remain secondary.
- Search is globally available.
- Most creative work happens inside a Session.
- Navigation should minimize context switching.

---

# Success Metrics

The architecture is considered successful when:

- Users can reach any Session within three interactions.
- Users can resume their latest Session in one click.
- Users can create a new Session in under ten seconds.
- Users rarely need to leave a Session while creating.
- Users always know where they are within the application.

---

# Open Questions

None.

---

# Impact

This document influences:

- User Flows
- Wireframes
- Navigation
- Permission Model
- Database Design
- API Design

---

# Related Documents

- 00-DESIGN_PRINCIPLES.md
- ../01-product/04-DOMAIN_MODEL.md
- ../01-product/05-FEATURE_INVENTORY.md