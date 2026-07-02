# Permission Model

## Purpose

This document defines how access to Sessions is controlled within the platform.

The Permission Model determines who can view, edit, review, and manage creative work while maintaining clear ownership and protecting users' creations.

Permissions are intentionally simple for the MVP and are designed to scale as collaboration features evolve.

---

# Permission Philosophy

Creative work belongs to its creator.

Collaboration should be intentional, transparent, and easy to understand.

Permissions should answer one simple question:

> "What is this person allowed to do?"

Users should never be confused about their level of access.

---

# Ownership Model

Every Session has exactly one Owner.

Ownership represents ultimate authority over the Session.

Ownership can be transferred to another user, but a Session can never have multiple Owners.

Music Projects do not own Sessions.

Permissions are always assigned at the Session level.

---

# Permission Hierarchy

```
Owner
│
├── Editor
├── Reviewer
└── Viewer
```

Each role inherits only the capabilities explicitly assigned to it.

---

# Role Definitions

## Owner

The creator and primary manager of the Session.

The Owner has complete control over the Session, its collaborators, and its creative assets.

---

## Editor

An active creative collaborator.

Editors can contribute to the Session by modifying creative content but cannot manage ownership or permissions.

---

## Reviewer

A collaborator who provides feedback.

Reviewers can view the Session and participate in discussions without modifying creative assets.

---

## Viewer

A read-only participant.

Viewers can access shared content but cannot make changes or leave feedback.

---

# Permission Matrix

| Capability | Owner | Editor | Reviewer | Viewer |
|------------|:-----:|:------:|:--------:|:------:|
| View Session | ✅ | ✅ | ✅ | ✅ |
| View Timeline | ✅ | ✅ | ✅ | ✅ |
| Download Attachments | ✅ | ✅ | ✅ | ✅ |
| Edit Session Metadata | ✅ | ✅ | ❌ | ❌ |
| Upload Snapshots | ✅ | ✅ | ❌ | ❌ |
| Restore Snapshots | ✅ | ❌ | ❌ | ❌ |
| Delete Snapshots | ✅ | ❌ | ❌ | ❌ |
| Edit Notes | ✅ | ✅ | ❌ | ❌ |
| Edit Lyrics | ✅ | ✅ | ❌ | ❌ |
| Upload Attachments | ✅ | ✅ | ❌ | ❌ |
| Delete Attachments | ✅ | ✅ | ❌ | ❌ |
| Create Comments | ✅ | ✅ | ✅ | ❌ |
| Reply to Comments | ✅ | ✅ | ✅ | ❌ |
| Resolve Comments | ✅ | ✅ | ✅ | ❌ |
| Invite Collaborators | ✅ | ❌ | ❌ | ❌ |
| Remove Collaborators | ✅ | ❌ | ❌ | ❌ |
| Change Roles | ✅ | ❌ | ❌ | ❌ |
| Transfer Ownership | ✅ | ❌ | ❌ | ❌ |
| Archive Session | ✅ | ❌ | ❌ | ❌ |
| Delete Session | ✅ | ❌ | ❌ | ❌ |

---

# Permission Rules

## Rule 1

Every Session must always have exactly one Owner.

---

## Rule 2

Permissions belong to the Session.

Music Projects never assign or inherit permissions.

---

## Rule 3

Only the Owner may invite collaborators.

---

## Rule 4

Only the Owner may change collaborator roles.

---

## Rule 5

Only the Owner may transfer ownership.

---

## Rule 6

Only the Owner may permanently delete a Session.

---

## Rule 7

Editors may modify creative content but may not manage permissions.

---

## Rule 8

Reviewers may provide feedback but cannot modify creative assets.

---

## Rule 9

Viewers have read-only access.

---

# Collaboration Principles

Collaboration should support creativity without reducing ownership.

The platform prioritizes:

- Clear ownership
- Transparent permissions
- Simple collaboration
- Predictable behavior

Permission changes should never surprise collaborators.

---

# Future Considerations

Potential future enhancements include:

- Custom Roles
- Team Permissions
- Workspace-Level Permissions
- Public Sessions
- Shareable Review Links
- Time-Limited Access

These features are outside the scope of the MVP.

---

# Decisions

- Every Session has exactly one Owner.
- Ownership can be transferred.
- Permissions are assigned at the Session level.
- Music Projects do not define permissions.
- Only Owners may invite collaborators.
- Only Owners may manage collaborator roles.
- Reviewer replaces the Commenter role.
- Collaboration remains optional.

---

# Open Questions

None.

---

# Impact

This document influences:

- Database Design
- API Design
- Frontend Authorization
- Collaboration Features
- Session Management

---

# Related Documents

- 01-INFORMATION_ARCHITECTURE.md
- 02-USER_FLOWS.md
- 03-PLATFORM_FLOWS.md
- 06-NAVIGATION.md