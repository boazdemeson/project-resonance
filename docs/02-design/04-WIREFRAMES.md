# Wireframes

## Purpose

This document defines the low-fidelity wireframes for the platform.

The goal of these wireframes is to validate layout, hierarchy, navigation, and user experience before visual design begins.

These wireframes intentionally exclude colors, typography, icons, spacing, branding, and implementation details.

They represent structure only.

---

## Design Scope

- Desktop-first
- ASCII wireframes only
- Low-fidelity
- Structure before visuals

---

## Wireframe Rules

Every wireframe should:

- Represent a single screen.
- Focus on layout and information hierarchy.
- Follow the Information Architecture.
- Support the defined User Flows.
- Exclude visual styling.
- Remain implementation-independent.

---

# Application Shell

Every authenticated page uses the same application shell.

```
+----------------------------------------------------------------------------------------------+
| LOGO                           Global Search                        Notifications   Profile   |
+----------------------+-----------------------------------------------------------------------+
| Dashboard            |                                                                       |
| Sessions             |                                                                       |
| Music Projects       |                          Main Content                                 |
| Notifications        |                                                                       |
| Settings             |                                                                       |
|                      |                                                                       |
|                      |                                                                       |
+----------------------+-----------------------------------------------------------------------+
```

---

# Landing Page

## Purpose

Introduce the platform and encourage users to create an account.

## Primary Goal

Register or Login.

```
+----------------------------------------------------------------------------------------------+
| LOGO                                                                         Login           |
+----------------------------------------------------------------------------------------------+

                Organize Your Creative Process.

        Every Session. Every Snapshot. One Place.

                  [ Create Account ]

                    Already have an account?

                          [ Login ]

```

---

# Login

## Purpose

Allow existing users to access the platform.

```
+------------------------------------------------------------+

                    Welcome Back

Email

[________________________________________]

Password

[________________________________________]

[ Login ]

Forgot Password?

Create Account

+------------------------------------------------------------+
```

---

# Register

## Purpose

Create a new account.

```
+------------------------------------------------------------+

                 Create Your Account

Display Name

[________________________________________]

Email

[________________________________________]

Password

[________________________________________]

☐ I agree to the Terms of Service

[ Create Account ]

Already have an account?

Login

+------------------------------------------------------------+
```

---

# Email Verification

## Purpose

Verify ownership of the user's email.

```
+------------------------------------------------------------+

Verify Your Email

We've sent a verification link to

user@email.com

[ Resend Email ]

Return to Login

+------------------------------------------------------------+
```

---

# Forgot Password

## Purpose

Allow users to recover their account.

```
+------------------------------------------------------------+

Forgot Password

Email

[________________________________________]

[ Send Reset Link ]

Return to Login

+------------------------------------------------------------+
```

---

# Dashboard

## Purpose

Help users continue creating immediately.

```
+----------------------------------------------------------------------------------------------+
| LOGO                          Search                               🔔              👤        |
+----------------------+-----------------------------------------------------------------------+
| Dashboard            | Welcome back, Judas                                                  |
| Sessions             | Continue where you left off.                                         |
| Music Projects       |                                                                       |
| Notifications        | +---------------------------------------------------------------+     |
| Settings             | | Continue Session                                              |     |
|                      | | Midnight Rain                                                |     |
|                      | | Mixing                                                       |     |
|                      | | Last edited 2 hours ago                                      |     |
|                      | | [ Continue ]                                                 |     |
|                      | +---------------------------------------------------------------+     |
|                      |                                                                       |
|                      |                 [ + New Session ]                                 |
|                      |                                                                       |
|                      | Recent Sessions                                                    |
|                      |-------------------------------------------------------------------|
|                      | Ocean Eyes                                                         |
|                      | Bedroom Demo                                                       |
|                      | Untitled Idea                                                      |
|                      |                                                                   |
|                      | Pinned Sessions                                                   |
|                      |                                                                   |
|                      | Recent Activity                                                   |
+----------------------+-----------------------------------------------------------------------+
```

---

# Sessions

## Purpose

Browse every Session.

```
+----------------------------------------------------------------------------------------------+
| Search Sessions...                                                            + New Session  |
+----------------------------------------------------------------------------------------------+

Filters

Sort

--------------------------------------------------------------------------------

Midnight Rain

Mixing

Last Updated

------------------------------------------------------------

Ocean Eyes

Writing

------------------------------------------------------------

Bedroom Demo

Recording

------------------------------------------------------------
```

---

# Session Detail

## Purpose

Primary creative workspace.

```
+----------------------------------------------------------------------------------------------+
| Session: Midnight Rain                                              Share      Settings      |
+----------------------------------------------------------------------------------------------+

Status : Mixing

Genre : Pop

Last Updated : Today

--------------------------------------------------------------------------------

Tabs

[ Overview ] [ Snapshots ] [ Timeline ] [ Notes ] [ Lyrics ]

[ Attachments ] [ Comments ] [ Collaborators ]

--------------------------------------------------------------------------------

Main Workspace

(Content changes depending on selected tab.)

```

---

# Music Projects

## Purpose

Organize related Sessions.

```
+----------------------------------------------------------------------------------------------+

Summer EP

Progress

Sessions

------------------------------------------------------------

Midnight Rain

Ocean Eyes

Bedroom Demo

------------------------------------------------------------

[ Add Session ]

```

---

# Search

## Purpose

Global search.

```
Search

[______________________________________________]

------------------------------------------------------------

Sessions

Music Projects

Lyrics

Notes

Comments

Attachments

------------------------------------------------------------
```

---

# Notifications

## Purpose

Display user notifications.

```
Notifications

------------------------------------------------------------

John commented on Midnight Rain.

------------------------------------------------------------

You were invited to Summer EP.

------------------------------------------------------------

Snapshot uploaded successfully.

------------------------------------------------------------
```

---

# Settings

## Purpose

Manage account and workspace preferences.

```
Settings

------------------------------------------------------------

Profile

Security

Notifications

Appearance

Storage

Account

------------------------------------------------------------

(Content)

```

---

# Wireframe Principles

Every screen should:

- Keep the Session at the center of the experience.
- Minimize unnecessary navigation.
- Preserve creative flow.
- Reduce cognitive load.
- Follow a consistent layout.
- Keep important actions visible.

---

# Decisions

- Desktop-first.
- Sidebar navigation.
- Persistent top navigation.
- Global Search available from every screen.
- Session remains the primary workspace.

---

# Open Questions

None.

---

# Impact

This document influences:

- Design System
- Navigation
- Permission Model
- Database Design
- API Design

---

# Related Documents

- 00-DESIGN_PRINCIPLES.md
- 01-INFORMATION_ARCHITECTURE.md
- 02-USER_FLOWS.md
- 03-PLATFORM_FLOWS.md