# Navigation

## Purpose

This document defines how users move throughout the platform.

It establishes the application's navigation structure, navigation behavior, and interaction rules to ensure users can efficiently access every part of the platform while maintaining creative focus.

Navigation should remain predictable, consistent, and unobtrusive throughout the application.

---

# Navigation Philosophy

Navigation exists to support creativity—not interrupt it.

Users should always know:

- Where they are.
- How they got there.
- Where they can go next.
- How to return safely.

Creative work should never be interrupted by unnecessary navigation.

---

# Navigation Structure

The application uses a three-level navigation hierarchy.

```
Global Navigation
        │
        ├── Local Navigation
        │       │
        │       └── Context Navigation
```

---

# Global Navigation

Global Navigation is available from every authenticated screen.

It provides access to the application's primary sections.

```
Sidebar

Dashboard

Sessions

Music Projects

Notifications

Settings
```

Global Navigation remains visible at all times.

---

# Top Navigation

The top navigation provides global tools.

```
LOGO

Global Search

Notifications

Profile Menu
```

The top navigation remains persistent throughout the application.

---

# Local Navigation

Local Navigation exists inside a feature or resource.

Example:

Session Detail

```
Overview

Snapshots

Timeline

Notes

Lyrics

Attachments

Comments

Collaborators

Settings
```

Users should never leave the Session to perform common creative tasks.

---

# Context Navigation

Some pages expose additional navigation related to the current context.

Examples:

Music Project

```
Overview

Sessions

Progress
```

Settings

```
Profile

Security

Notifications

Storage

Account
```

Context Navigation should never replace Global Navigation.

---

# Navigation Behavior

## Sidebar

The sidebar remains visible on desktop.

The current page should always be highlighted.

Collapsed navigation is outside the scope of the MVP.

---

## Top Navigation

Global Search remains accessible from every authenticated screen.

Notifications display recent platform events.

The Profile Menu provides account-related actions.

---

## Logo

Selecting the logo always returns the user to the Dashboard.

---

# Navigation Rules

## Rule 1

Every page must belong to exactly one navigation hierarchy.

Users should never feel lost.

---

## Rule 2

Navigation should require the fewest reasonable interactions.

---

## Rule 3

The current location should always be visually identifiable.

---

## Rule 4

The current Session should remain visible while working.

---

## Rule 5

Users should never lose unsaved creative work due to navigation.

If navigation would discard unsaved work, the user must be warned first.

---

## Rule 6

Global Search should always be available.

---

# Search Navigation

Global Search searches across:

- Sessions
- Music Projects
- Notes
- Lyrics
- Comments
- Attachments

Selecting a search result opens the appropriate destination directly.

---

# Notifications

Notifications are accessible from the Top Navigation.

Notification types include:

- Collaboration Invite
- Comment
- Mention
- Session Shared
- System Notification

Selecting a notification navigates directly to the related content.

---

# Profile Menu

The Profile Menu provides:

- View Profile
- Settings
- Logout

---

# Keyboard Shortcuts

Desktop-first navigation should support keyboard interaction.

Initial shortcuts include:

| Shortcut | Action |
|----------|--------|
| Ctrl + K | Global Search |
| Ctrl + N | Create Session |
| Esc | Close Dialog |
| ? | Show Keyboard Shortcuts |

Additional shortcuts may be introduced in future releases.

---

# Navigation States

Navigation components should support:

- Default
- Hover
- Active
- Focus
- Disabled

The active state should always indicate the user's current location.

---

# Error Handling

When navigation cannot be completed:

- Display a clear error message.
- Preserve the user's current context whenever possible.
- Avoid data loss.

---

# Future Navigation

Potential future enhancements include:

- Recently Visited Sessions
- Favorite Sessions
- Keyboard Navigation Expansion
- Command Palette
- Multiple Workspaces
- Mobile Navigation

These features are outside the MVP.

---

# Decisions

- Desktop-first navigation.
- Fixed sidebar.
- Persistent top navigation.
- Session-centered navigation.
- Global Search is always available.
- Logo returns users to the Dashboard.
- Sidebar remains expanded in the MVP.
- Navigation should never cause accidental data loss.

---

# Open Questions

None.

---

# Impact

This document influences:

- Wireframes
- Design System
- Permission Model
- Frontend Architecture
- API Design

---

# Related Documents

- 00-DESIGN_PRINCIPLES.md
- 01-INFORMATION_ARCHITECTURE.md
- 02-USER_FLOWS.md
- 03-PLATFORM_FLOWS.md
- 04-WIREFRAMES.md
- 05-DESIGN_SYSTEM.md