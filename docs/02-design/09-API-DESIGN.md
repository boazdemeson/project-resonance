# API Design

## Purpose

This document defines the API architecture and conventions used throughout the platform.

It establishes the communication contract between frontend and backend systems, including resource organization, endpoint conventions, authentication, request/response formats, and error handling.

This document is implementation-independent.

It does not specify programming languages, frameworks, or database technologies.

---

# API Philosophy

The API should be:

- Predictable
- Consistent
- RESTful
- Stateless
- Secure
- Versioned
- Easy to consume

Every endpoint should follow the same conventions and behavior.

---

# Base URL

```
/api/v1
```

All API endpoints are versioned.

Future breaking changes should be introduced through a new API version rather than modifying existing endpoints.

Example

```
/api/v1/sessions
/api/v2/sessions
```

---

# Authentication

Protected endpoints require authentication.

Authentication uses Bearer Tokens.

```
Authorization: Bearer <access_token>
```

---

## Public Endpoints

Authentication is **not** required for:

- Register
- Verify Email
- Login
- Forgot Password
- Reset Password

All other endpoints require authentication.

---

# API Resources

The API exposes the following primary resources.

- Users
- Sessions
- Snapshots
- Notes
- Lyrics
- Attachments
- Comments
- Music Projects
- Notifications
- Invitations

Each resource follows REST conventions.

---

# Resource Naming

Resources use plural nouns.

Good

```
/sessions
/music-projects
/comments
```

Avoid

```
/createSession
/getProjects
/updateLyrics
```

Actions are represented through HTTP methods rather than endpoint names.

---

# HTTP Methods

| Method | Purpose |
|----------|----------|
| GET | Retrieve data |
| POST | Create resource |
| PATCH | Update resource |
| DELETE | Delete resource |

---

# Authentication Endpoints

| Method | Endpoint | Purpose |
|----------|----------|----------|
| POST | /auth/register | Create account |
| POST | /auth/login | Login |
| POST | /auth/logout | Logout |
| POST | /auth/verify-email | Verify email |
| POST | /auth/forgot-password | Request password reset |
| POST | /auth/reset-password | Reset password |

---

# Session Endpoints

| Method | Endpoint | Purpose |
|----------|----------|----------|
| GET | /sessions | List Sessions |
| POST | /sessions | Create Session |
| GET | /sessions/{sessionId} | Get Session |
| PATCH | /sessions/{sessionId} | Update Session |
| DELETE | /sessions/{sessionId} | Move Session to Trash |

---

# Snapshot Endpoints

| Method | Endpoint | Purpose |
|----------|----------|----------|
| GET | /sessions/{sessionId}/snapshots | List Snapshots |
| POST | /sessions/{sessionId}/snapshots | Upload Snapshot |
| GET | /snapshots/{snapshotId} | Get Snapshot |
| PATCH | /snapshots/{snapshotId} | Update Snapshot Metadata |
| POST | /snapshots/{snapshotId}/restore | Restore Snapshot |

Snapshots are never permanently deleted through the public API.

---

# Notes Endpoints

| Method | Endpoint | Purpose |
|----------|----------|----------|
| GET | /sessions/{sessionId}/notes | Retrieve Notes |
| PATCH | /sessions/{sessionId}/notes | Update Notes |

Each Session contains a single Notes document.

---

# Lyrics Endpoints

| Method | Endpoint | Purpose |
|----------|----------|----------|
| GET | /sessions/{sessionId}/lyrics | Retrieve Lyrics |
| PATCH | /sessions/{sessionId}/lyrics | Update Lyrics |

Each Session contains a single Lyrics document.

---

# Attachment Endpoints

| Method | Endpoint | Purpose |
|----------|----------|----------|
| GET | /sessions/{sessionId}/attachments | List Attachments |
| POST | /sessions/{sessionId}/attachments | Upload Attachment |
| DELETE | /attachments/{attachmentId} | Delete Attachment |

---

# Comment Endpoints

| Method | Endpoint | Purpose |
|----------|----------|----------|
| GET | /sessions/{sessionId}/comments | List Comments |
| POST | /sessions/{sessionId}/comments | Create Comment |
| PATCH | /comments/{commentId} | Edit Comment |
| DELETE | /comments/{commentId} | Delete Comment |

---

# Music Project Endpoints

| Method | Endpoint | Purpose |
|----------|----------|----------|
| GET | /music-projects | List Projects |
| POST | /music-projects | Create Project |
| GET | /music-projects/{projectId} | Get Project |
| PATCH | /music-projects/{projectId} | Update Project |
| DELETE | /music-projects/{projectId} | Delete Project |

---

## Music Project Session Management

| Method | Endpoint | Purpose |
|----------|----------|----------|
| POST | /music-projects/{projectId}/sessions | Add Session |
| DELETE | /music-projects/{projectId}/sessions/{sessionId} | Remove Session |

Removing a Session from a Music Project never deletes the Session.

---

# Collaborator Endpoints

| Method | Endpoint | Purpose |
|----------|----------|----------|
| GET | /sessions/{sessionId}/collaborators | List Collaborators |
| POST | /sessions/{sessionId}/collaborators | Invite Collaborator |
| PATCH | /sessions/{sessionId}/collaborators/{userId} | Change Role |
| DELETE | /sessions/{sessionId}/collaborators/{userId} | Remove Collaborator |

Only Owners may invite or manage collaborators.

---

# Notification Endpoints

| Method | Endpoint | Purpose |
|----------|----------|----------|
| GET | /notifications | List Notifications |
| PATCH | /notifications/{notificationId} | Mark as Read |
| DELETE | /notifications/{notificationId} | Delete Notification |

---

# User Endpoints

| Method | Endpoint | Purpose |
|----------|----------|----------|
| GET | /me | Current User |
| PATCH | /me | Update Profile |
| PATCH | /me/password | Change Password |
| DELETE | /me | Delete Account |

---

# Request Principles

Every request should:

- Validate input.
- Respect user permissions.
- Return meaningful errors.
- Never expose internal implementation details.

---

# Response Format

Successful responses

```json
{
  "success": true,
  "data": {}
}
```

Error responses

```json
{
  "success": false,
  "error": {
    "code": "SESSION_NOT_FOUND",
    "message": "The requested Session could not be found."
  }
}
```

---

# Pagination

Collection endpoints support pagination.

Example

```
GET /sessions?page=1&limit=20
```

---

# Filtering

Collection endpoints may support filtering.

Examples

```
GET /sessions?status=active

GET /sessions?genre=Pop

GET /music-projects?owner=me
```

---

# Sorting

Collection endpoints may support sorting.

Example

```
GET /sessions?sort=updatedAt&order=desc
```

---

# Search

Global search.

```
GET /search?q=midnight
```

Search returns matching:

- Sessions
- Music Projects
- Notes
- Lyrics
- Comments
- Attachments

---

# File Uploads

File uploads use:

```
multipart/form-data
```

Supported upload types include:

- Audio
- Images
- PDFs
- MIDI
- ZIP Archives
- DAW Project Files

---

# HTTP Status Codes

| Code | Meaning |
|--------|---------|
| 200 | OK |
| 201 | Created |
| 204 | No Content |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 409 | Conflict |
| 422 | Validation Error |
| 500 | Internal Server Error |

---

# Error Handling

Errors should:

- Clearly explain the problem.
- Suggest corrective action when possible.
- Never expose internal implementation details.

---

# Security

The API should:

- Use HTTPS exclusively.
- Require authentication for protected resources.
- Validate all incoming data.
- Sanitize user input.
- Enforce authorization using the Permission Model.

---

# Versioning

All endpoints are versioned.

Current version

```
/api/v1
```

Breaking changes require a new API version.

---

# Endpoint Summary

| Resource | GET | POST | PATCH | DELETE |
|-----------|:---:|:----:|:-----:|:------:|
| Sessions | ✅ | ✅ | ✅ | ✅ |
| Snapshots | ✅ | ✅ | ✅ | ❌ |
| Notes | ✅ | ❌ | ✅ | ❌ |
| Lyrics | ✅ | ❌ | ✅ | ❌ |
| Attachments | ✅ | ✅ | ❌ | ✅ |
| Comments | ✅ | ✅ | ✅ | ✅ |
| Music Projects | ✅ | ✅ | ✅ | ✅ |
| Collaborators | ✅ | ✅ | ✅ | ✅ |
| Notifications | ✅ | ❌ | ✅ | ✅ |
| Users | ✅ | ❌ | ✅ | ✅ |

---

# Decisions

- REST architecture.
- Versioned API.
- Stateless requests.
- JWT Bearer authentication.
- Sessions are the primary resource.
- Music Projects organize Sessions.
- Snapshots are immutable.
- Snapshots cannot be permanently deleted through the public API.
- Responses follow a consistent structure.
- All protected endpoints require authentication.

---

# Open Questions

None.

---

# Impact

This document influences:

- Backend Architecture
- Frontend Integration
- Database Schema
- Authentication
- Authorization
- API Documentation
- Testing Strategy

---

# Related Documents

- 02-USER_FLOWS.md
- 03-PLATFORM_FLOWS.md
- 07-PERMISSION_MODEL.md
- 08-DATABASE_DESIGN.md