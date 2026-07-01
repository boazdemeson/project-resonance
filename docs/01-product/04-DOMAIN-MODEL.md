# Domain Model

## Purpose

This document defines the core concepts of the product.

These concepts describe the language of the platform and should remain consistent across product discussions, UI, APIs, and database design.

This is **not** a database schema. It is a business domain model.

---

# Domain Hierarchy

Workspace
└── Collection
    └── Song
        ├── Version
        ├── Collaborator
        ├── Comment
        ├── Attachment
        ├── Milestone
        └── Activity

---

# Workspace

A Workspace represents the personal home of a musician or team.

Every user owns or belongs to one or more Workspaces.

A Workspace contains multiple Collections.

### Examples

- Judas
- Midnight Studio
- My Band

---

# Collection

A Collection groups related Songs.

Collections provide organization without forcing a specific workflow.

A Collection may represent:

- Album
- EP
- Singles
- Demo Ideas
- Beat Pack
- Client Project
- Soundtrack

A Collection contains multiple Songs.

---

# Song

The Song is the central entity of the platform.

Everything revolves around a Song.

A Song contains:

- Versions
- Collaborators
- Comments
- Attachments
- Timeline
- Milestones

Every Song progresses through a creative lifecycle.

---

# Version

A Version represents the state of a Song at a specific point in time.

Uploading a new audio file creates a new Version.

Versions are immutable.

Older Versions are never overwritten.

Each Version may include:

- Audio file
- Title
- Description
- Uploaded by
- Upload date

Examples:

Version 1
Label: Demo

Version 5
Label: Mix 2

Version 12
Label: Final Master

---

# Collaborator

A Collaborator is someone participating in the creation of a Song.

Examples include:

- Artist
- Producer
- Mixing Engineer
- Mastering Engineer
- Guitarist
- Songwriter

Collaborators may have different permissions.

---

# Comment

A Comment represents feedback.

Comments may belong to:

- Song
- Version

Comments may optionally reference an audio timestamp.

Example:

01:42

"The vocal sounds slightly buried here."

---

# Attachment

Attachments are supporting files related to a Song.

Examples:

- Lyrics
- Chord Sheets
- MIDI
- Cover Art
- Session Notes
- Project Files

Attachments are not Versions.

---

# Milestone

A Milestone marks an important achievement during a Song's lifecycle.

Examples:

- First Demo
- Recording Complete
- Mixing Complete
- Approved
- Released

Milestones help tell the story of the Song.

---

# Activity

Activity represents every meaningful event.

Examples:

- Song created
- Version uploaded
- Comment added
- Collaborator invited
- Milestone reached

Activities form the Song Timeline.

---

# Timeline

The Timeline is the chronological history of a Song.

Unlike traditional version history, the Timeline captures both creative progress and collaboration.

The Timeline tells the complete story of how a Song evolved.

---

# Song Status

A Song always has one current Status.

Possible statuses include:

- Idea
- Writing
- Recording
- Production
- Mixing
- Mastering
- Review
- Released
- Archived

---

# Guiding Principle

Users should think in terms of Songs—not folders or files.

The platform organizes creative work, not storage.