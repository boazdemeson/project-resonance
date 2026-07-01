# Domain Model

## Purpose

This document defines the core business entities of the platform.

The platform exists to support the creative process of making music.

The primary entity is the **Session**.

---

# Domain Hierarchy

Workspace

├── Sessions

│   ├── Snapshots

│   ├── Timeline

│   ├── Comments

│   ├── Notes

│   ├── Lyrics

│   ├── Attachments

│   └── Collaborators

│

└── Music Projects (Optional)

---

# Workspace

A Workspace is the personal creative space of a musician or team.

It contains every Session and optional Music Project.

---

# Session

A Session is the primary creative entity of the platform.

A Session represents the complete evolution of a musical idea.

A Session may begin as:

- a melody
- a beat
- a riff
- a demo
- a recording
- a complete song

The platform never assumes the outcome.

Everything revolves around the Session.

---

# Snapshot

A Snapshot captures the state of a Session at a specific point in time.

Creating a Snapshot never overwrites previous work.

Snapshots preserve creative history.

---

# Timeline

The Timeline records the evolution of a Session.

Examples:

- Session created
- Snapshot uploaded
- Comment added
- Lyrics updated
- Status changed

---

# Comments

Comments represent feedback.

Comments may optionally reference timestamps.

---

# Notes

Free-form notes created during the creative process.

Examples:

- Recording ideas
- Mix reminders
- TODOs

---

# Lyrics

Lyrics belong directly to the Session.

Version history should preserve lyric changes.

---

# Attachments

Supporting files.

Examples:

- MIDI
- Cover concepts
- Chords
- PDFs
- DAW files

---

# Collaborators

People invited to participate in a Session.

Collaboration is optional.

The platform should provide value even when working alone.

---

# Music Project

A Music Project is an optional organizational entity.

Examples:

- Album
- EP
- Client Work
- Beat Pack
- Demo Collection

Music Projects organize Sessions around a creative goal.

Sessions remain the source of truth.

---

# Guiding Principle

The platform manages creative work—not files.

Everything exists to support the evolution of a Session.