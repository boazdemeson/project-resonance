# User Journey

## Purpose

This document describes the end-to-end experience of an independent musician using the platform.

The focus is on **user goals**, **emotions**, and **system behavior**, not UI implementation.

---

# Persona

**Name:** Judas

**Role:** Independent Musician

**Working Style:**

- Usually works alone
- Occasionally collaborates with others
- Creates songs continuously
- Releases singles and EPs

---

# Journey

## Phase 1 — Inspiration

### User Goal

Capture a new song idea before it is forgotten.

### User Actions

- Open the application
- Create a new Song

### System Response

- Creates a Song
- Opens the Song workspace

### User Emotion

😊 Inspired

---

## Phase 2 — First Demo

### User Goal

Save the first version of the song safely.

### User Actions

- Upload audio file
- Add optional notes

### System Response

- Creates Version 1
- Records upload date
- Adds activity to Timeline

### User Emotion

🙂 Confident

---

## Phase 3 — Continue Creating

### User Goal

Continue improving the song without losing previous work.

### User Actions

- Upload new Version
- Add version notes
- Attach lyrics
- Attach MIDI
- Attach artwork

### System Response

- Creates a new Version
- Preserves all previous Versions
- Updates Timeline

### User Emotion

😊 Creative

---

## Phase 4 — Organize

### User Goal

Keep songs organized as the music library grows.

### User Actions

Option A

- Create a new Music Project
- Add Songs

Option B

- Create Songs first
- Add them to a Music Project later

### System Response

- Songs remain independent
- Music Projects reference Songs
- No duplicate Songs are created

### User Emotion

😌 Organized

---

## Phase 5 — Collaborate (Optional)

### User Goal

Receive feedback from collaborators.

### User Actions

- Invite collaborator
- Share Song

### System Response

- Grants collaborator access
- Records invitation in Timeline

### User Emotion

🙂 Hopeful

---

## Phase 6 — Review

### User Goal

Collect feedback without losing context.

### User Actions

- Read comments
- Reply
- Resolve comments
- Add timestamp comments

### System Response

- Stores comments with the appropriate Song or Version
- Updates Timeline

### User Emotion

🤔 Focused

---

## Phase 7 — Finalize

### User Goal

Prepare the song for release.

### User Actions

- Upload final Version
- Mark Song as Released

### System Response

- Updates Song Status
- Records Release Milestone
- Preserves complete Song history

### User Emotion

🎉 Proud

---

# Journey Principles

The product should help musicians:

- Capture ideas quickly
- Never lose work
- Stay organized
- Understand the evolution of every Song
- Collaborate naturally when needed
- Spend more time making music than managing files

---

# Success Criteria

A successful user journey means the musician can:

- Create a Song in under one minute
- Upload a new Version in under thirty seconds
- Find any previous Version instantly
- Resume work after weeks away without confusion
- Invite collaborators without changing their workflow

---

## Decisions

- Songs can exist independently.
- Music Projects are optional.
- Collaboration is optional.
- Every Version is preserved.
- The Timeline tells the story of a Song.
- The product is designed for solo creators first and collaboration second.