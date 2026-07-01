# Domain Model

This document defines the core concepts used throughout the product.

Every feature, screen, API, and database model should be built around these concepts.

---

# Workspace

A Workspace is the highest level container.

It belongs to one owner.

A Workspace contains Collections.

Examples:

- Alex's Workspace
- Midnight Studio
- My Music

---

# Collection

A Collection groups related songs.

A Collection can represent:

- Album
- EP
- Singles
- Beat Pack
- Demo Ideas
- Client Project

A Collection contains Songs.

---

# Song

The Song is the most important entity in the platform.

Everything revolves around the Song.

A Song contains:

- Revisions
- Collaborators
- Comments
- Activity
- Attachments

A Song progresses through different stages during its lifecycle.

---

# Revision

A Revision represents one uploaded version of a Song.

Every Revision is immutable.

Uploading a new audio file creates a new Revision.

Previous Revisions are never overwritten.

A Revision may contain:

- Audio file
- Description
- Uploaded by
- Upload date

---

# Collaborator

A Collaborator is anyone invited to contribute to a Song.

Examples:

- Artist
- Producer
- Mixing Engineer
- Mastering Engineer
- Guitarist

Collaborators may have different permissions.

---

# Comment

A Comment represents feedback attached to a Song or Revision.

Comments may optionally reference a timestamp.

Example:

01:42

"Can we reduce the vocal reverb here?"

---

# Activity

Activity represents everything that happens during the life of a Song.

Examples:

- Song created
- Revision uploaded
- Comment added
- Collaborator invited
- Song released

Activity forms the Song Timeline.

---

# Timeline

The Timeline is the chronological history of a Song.

It tells the story of the creative process.

Unlike traditional version history, the Timeline includes creative events, discussions, and milestones.

---

# Attachment

Attachments include files that support the Song.

Examples:

- Lyrics
- Cover Art
- Chord Sheets
- MIDI
- Session Notes

Attachments are not Revisions.

They exist alongside the Song.

---

# Status

A Song always has one current Status.

Example statuses:

Idea

Recording

Production

Mixing

Mastering

Review

Released

Archived

---

# Relationships

Workspace

└── Collection

└── Song

├── Revision

├── Comment

├── Activity

├── Collaborator

└── Attachment