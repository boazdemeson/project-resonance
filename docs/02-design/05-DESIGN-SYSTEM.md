# Design System

## Purpose

This document defines the visual language, reusable interface components, and interaction patterns of the platform.

The Design System ensures consistency across every screen while supporting the product philosophy of helping musicians create without distraction.

It serves as the single source of truth for frontend design and component implementation.

---

# Design Philosophy

The platform should feel like a creative workspace rather than a project management tool.

Every interface should encourage creativity by remaining calm, organized, and focused.

The user should spend their attention creating music—not understanding the software.

The design should feel:

- Calm
- Minimal
- Spacious
- Professional
- Creative
- Modern
- Timeless

Avoid:

- Visual clutter
- Excessive colors
- Decorative elements without purpose
- Dashboard-style analytics
- Gamification
- Unnecessary animations

---

# Visual Principles

## Simplicity

Every component should have a clear purpose.

If a component does not improve the user's experience, it should not exist.

---

## Consistency

Identical interactions should behave identically throughout the application.

Users should never relearn familiar actions.

---

## Hierarchy

The interface should naturally guide users toward the most important information and actions.

Primary actions should always stand out.

Secondary actions should remain available without competing for attention.

---

## Spaciousness

Whitespace is part of the design.

Layouts should never feel crowded.

Content should have room to breathe.

---

## Focus

Every screen should have one clear primary objective.

The interface should reduce distractions while users are creating.

---

# Personality

If the platform were a person, it would be:

- Quiet
- Helpful
- Organized
- Reliable
- Creative
- Confident

The platform is **not**:

- Loud
- Flashy
- Corporate
- Playful
- Gamified
- Overly technical

---

# Design Tokens

## Spacing Scale

- XS
- S
- M
- L
- XL
- XXL

---

## Border Radius

- Small
- Medium
- Large

---

## Elevation

- None
- Low
- Medium
- High

---

## Content Width

- Narrow
- Standard
- Wide
- Full Width

---

# Typography

Typography defines hierarchy rather than specific fonts.

## Levels

- Display
- Heading 1
- Heading 2
- Heading 3
- Heading 4
- Body
- Caption
- Label

---

# Color System

Colors are defined by purpose rather than specific values.

## Primary

Used for primary actions.

Examples:

- Continue Session
- New Session

---

## Secondary

Supporting actions.

---

## Surface

Cards and containers.

---

## Background

Application background.

---

## Border

Component separation.

---

## Success

Positive feedback.

---

## Warning

Requires attention.

---

## Danger

Destructive actions.

---

## Information

Neutral system information.

---

# Iconography

Icons should support recognition rather than decoration.

Core icons include:

- Dashboard
- Session
- Snapshot
- Music Project
- Search
- Notification
- Settings
- User
- Attachment
- Comment
- Lyrics
- Notes
- Timeline
- Collaborator

Icons should always accompany important labels until usability testing suggests otherwise.

---

# Product Components

These components are unique to the platform.

## Session Card

Displays a Session summary.

Contains:

- Session Name
- Status
- Last Updated
- Latest Snapshot
- Collaborator Count
- Favorite Indicator

---

## Snapshot Card

Displays a Snapshot.

Contains:

- Snapshot Name
- Upload Time
- Notes Preview
- Download Action

---

## Music Project Card

Displays a Music Project summary.

Contains:

- Project Name
- Session Count
- Progress
- Last Updated

---

## Timeline Event

Represents an activity within a Session.

Examples:

- Snapshot Uploaded
- Notes Updated
- Lyrics Edited
- Comment Added
- Collaborator Joined

---

## Comment

Displays contextual discussion.

Supports:

- Replies
- Mentions
- Resolution

---

## Notification Item

Displays a user notification.

Supports:

- Read
- Unread

---

## Attachment Card

Displays uploaded files.

Supports:

- Download
- Preview
- Delete

---

## Collaborator Card

Displays collaborator information.

Contains:

- Display Name
- Role
- Status

---

# Generic Components

Generic components may be implemented using a UI component library.

## Navigation

- Sidebar
- Top Navigation
- Breadcrumb

---

## Inputs

- Text Field
- Text Area
- Search Field
- Password Field

---

## Buttons

- Primary
- Secondary
- Tertiary
- Danger

---

## Selection

- Checkbox
- Radio Button
- Toggle
- Dropdown

---

## Feedback

- Dialog
- Modal
- Toast
- Tooltip

---

## Containers

- Card
- Accordion
- Tabs
- Divider

---

## Data Display

- Badge
- Tag
- Avatar
- Progress Indicator

---

# Component States

Every interactive component should support the following states when applicable.

- Default
- Hover
- Focus
- Active
- Disabled
- Loading
- Success
- Error

---

# Design Principles

Every component should:

- Support creativity.
- Be reusable.
- Be consistent.
- Reduce cognitive load.
- Prioritize accessibility.
- Avoid unnecessary complexity.

---

# Decisions

- Desktop-first design.
- Sidebar navigation.
- Persistent top navigation.
- Global Search is always accessible.
- Session is the primary workspace.
- Product-specific components are separated from generic UI components.
- Colors are defined by purpose rather than brand values.

---

# Open Questions

None.

---

# Impact

This document influences:

- Navigation
- Wireframes
- Permission Model
- Database Design
- API Design
- Frontend Component Library

---

# Related Documents

- 00-DESIGN_PRINCIPLES.md
- 01-INFORMATION_ARCHITECTURE.md
- 02-USER_FLOWS.md
- 03-PLATFORM_FLOWS.md