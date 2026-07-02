# User Flows

## Purpose

This document defines the primary workflows within the platform.

Each flow represents a complete task a user can accomplish.

These flows serve as the foundation for UX design, engineering implementation, and quality assurance.

---

# Flow Categories

## Core Flows

Core Flows define the primary value of the platform.

Without these flows, the product cannot fulfill its purpose.

1. Create Session
2. Continue Session
3. Upload Snapshot
4. Write Notes
5. Edit Lyrics
6. Manage Attachments

---

## Supporting Flows

Supporting Flows improve collaboration and organization.

7. Search
8. Comment on Session
9. Invite Collaborator
10. Create Music Project

---

## Administrative Flows

Administrative Flows manage the user account and workspace.

11. Edit Profile
12. Manage Settings
13. Archive Session
14. Delete Session

---

# Flow Template

Every flow follows the same structure.

- Objective
- Entry Points
- Preconditions
- Main Flow
- Alternative Flows
- Success Outcome
- Failure Cases
- Related Design Principles

---

# CORE FLOWS

---

# Flow 1 — Create Session

## Objective

Allow musicians to begin a new creative Session with minimal friction while encouraging meaningful naming.

---

## Entry Points

- Dashboard
- Sessions Page

---

## Preconditions

- User is authenticated.

---

## Main Flow

Dashboard

↓

Click **New Session**

↓

Enter Session Name

↓

Create Session

↓

Session Overview

↓

Begin Creating

↓

(Optional)

Upload First Snapshot

↓

(Optional)

Write Notes

↓

(Optional)

Write Lyrics

---

## Alternative Flows

- Skip Snapshot upload.
- Skip Notes.
- Skip Lyrics.
- Return later to continue the Session.

---

## Success Outcome

A new Session is created and ready for creative work.

---

## Failure Cases

- Network unavailable.
- Session creation failed.

---

## Design Note

A Session requires a name before creation.

Naming is considered part of the creative process rather than administrative work.

Session names remain editable throughout the lifetime of the Session.

---

## Related Principles

- Creativity Comes First
- Session Is the Center
- Capture First, Organize Later

---

# Flow 2 — Continue Session

## Objective

Resume unfinished creative work with minimal effort.

---

## Entry Points

- Dashboard
- Sessions Page
- Search Results
- Music Project

---

## Preconditions

- Session already exists.

---

## Main Flow

Open Session

↓

Review Session Overview

↓

Review Latest Snapshot

↓

Continue Creating

---

## Alternative Flows

- Continue from Dashboard
- Continue from Search
- Continue from Music Project

---

## Success Outcome

The user immediately resumes creative work.

---

## Failure Cases

- Session unavailable.
- Permission denied.

---

## Related Principles

- Continue, Don't Restart
- Session Is the Center

---

# Flow 3 — Upload Snapshot

## Objective

Preserve creative progress without losing previous work.

---

## Entry Points

- Session Overview
- Snapshots

---

## Preconditions

- Session exists.

---

## Main Flow

Open Snapshots

↓

Upload Audio

↓

(Optional)

Add Snapshot Notes

↓

Save

↓

Timeline Updated

---

## Alternative Flows

- Upload without notes.
- Retry failed upload.

---

## Success Outcome

A new Snapshot is added to the Session history.

---

## Failure Cases

- Upload failed.
- Unsupported file format.
- Storage limit exceeded.

---

## Related Principles

- Preserve Creative History

---

# Flow 4 — Write Notes

## Objective

Capture creative ideas while working.

---

## Entry Points

- Session
- Notes

---

## Preconditions

- Session exists.

---

## Main Flow

Open Notes

↓

Write

↓

Auto Save

↓

Continue Creating

---

## Success Outcome

Notes are saved within the Session.

---

## Failure Cases

- Auto-save failed.

---

## Related Principles

- Reduce Mental Effort

---

# Flow 5 — Edit Lyrics

## Objective

Develop lyrics without leaving the Session.

---

## Entry Points

- Session
- Lyrics

---

## Preconditions

- Session exists.

---

## Main Flow

Open Lyrics

↓

Edit

↓

Auto Save

↓

Continue Creating

---

## Success Outcome

Lyrics remain connected to the Session.

---

## Failure Cases

- Auto-save failed.

---

## Related Principles

- Session Is the Center

---

# Flow 6 — Manage Attachments

## Objective

Keep supporting creative assets together.

---

## Entry Points

- Session
- Attachments

---

## Preconditions

- Session exists.

---

## Main Flow

Open Attachments

↓

Upload File

↓

Attachment Available

---

## Alternative Flows

- Download Attachment.
- Delete Attachment.

---

## Success Outcome

Supporting files remain available inside the Session.

---

## Failure Cases

- Upload failed.
- Unsupported file format.

---

## Related Principles

- Session Is the Center

---

# SUPPORTING FLOWS

---

# Flow 7 — Search

## Objective

Find creative work quickly.

Main Flow

Search

↓

Enter Keyword

↓

Results

↓

Open Result

---

# Flow 8 — Comment on Session

## Objective

Provide contextual feedback.

Main Flow

Session

↓

Comments

↓

Write Comment

↓

(Optional)

Add Timestamp

↓

Post

---

# Flow 9 — Invite Collaborator

## Objective

Share a Session.

Main Flow

Session

↓

Collaborators

↓

Invite

↓

Assign Role

↓

Send Invitation

---

# Flow 10 — Create Music Project

## Objective

Organize related Sessions.

Main Flow

Music Projects

↓

Create Project

↓

Add Sessions

↓

Done

---

# ADMINISTRATIVE FLOWS

---

# Flow 11 — Edit Profile

Update profile information.

---

# Flow 12 — Manage Settings

Configure workspace preferences.

---

# Flow 13 — Archive Session

Hide inactive Sessions while preserving history.

---

# Flow 14 — Delete Session

Permanently remove a Session after confirmation.

---

# User Flow Principles

Every flow should:

- Support creativity.
- Preserve momentum.
- Minimize unnecessary steps.
- Reduce context switching.
- Preserve creative history.

---

# Decisions

- Core Flows define the MVP.
- Supporting Flows improve productivity.
- Administrative Flows should never interrupt creative work.
- Naming a Session is a required creative step.

---

# Open Questions

None.

---

# Impact

This document influences:

- Wireframes
- Navigation
- Permission Model
- Database Design
- API Design

---

# Related Documents

- 00-DESIGN_PRINCIPLES.md
- 01-INFORMATION_ARCHITECTURE.md