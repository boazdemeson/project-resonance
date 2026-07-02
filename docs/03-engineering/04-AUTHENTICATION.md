# Authentication

## Purpose

This document defines the authentication architecture of Resonance.

It describes how users create accounts, verify their identity, sign in, recover access, manage authentication sessions, and securely access the platform.

Authentication verifies identity.

Authorization is defined separately in the Permission Model.

---

# Authentication Principles

Authentication should be:

- Secure
- Simple
- Familiar
- Reliable
- Transparent

Authentication exists to protect users and their creative work while minimizing friction.

---

# Authentication Strategy

Resonance uses:

- Email & Password Authentication
- Mandatory Email Verification
- Secure Session Authentication

Authentication is provided by **Better Auth**.

Future authentication providers (Google, Apple, GitHub, Passkeys) may be introduced without changing the authentication architecture.

---

# Authentication Lifecycle

```
Register
    │
    ▼
Email Verification
    │
    ▼
Login
    │
    ▼
Authenticated Session
    │
    ├── Logout
    ├── Session Expired
    └── Password Changed
```

---

# Registration

## Required Information

- Display Name
- Email Address
- Password

A Workspace is automatically created for every new account.

Registration alone does not activate the account.

Email verification is required before the first login.

---

# Email Verification

Every account must verify ownership of its email address.

Verification protects:

- Account ownership
- Password recovery
- Collaboration invitations
- Creative assets

Verification Flow

```
Register

↓

Verification Email

↓

Verification Link

↓

Email Verified

↓

Login
```

Verification links:

- Single use
- Time limited
- Cryptographically signed

Users may request a new verification email if the previous link expires.

---

# Login

Users authenticate using:

- Email
- Password

Successful authentication creates an authenticated session.

Only verified accounts may log in.

---

# Logout

Logging out immediately invalidates the active session.

After logout, protected resources require authentication again.

---

# Password Policy

Passwords must satisfy minimum security requirements.

Minimum Requirements

- Minimum length
- Uppercase letter
- Lowercase letter
- Number
- Special character

Passwords are:

- Never stored in plain text.
- Securely hashed.
- Never recoverable.

---

# Password Recovery

Users who forget their password may request a password reset.

Recovery Flow

```
Forgot Password

↓

Reset Email

↓

Reset Link

↓

Create New Password

↓

Login
```

Reset links are:

- Single use
- Time limited
- Cryptographically signed

Once a password is changed, previously used reset links become invalid.

---

# Account Recovery

Account recovery is based on verified email ownership.

If a user loses access to:

- their password, and
- their verified email,

automatic recovery is not possible.

Recovery requires manual support verification.

This process intentionally prioritizes protection of creative work over convenience.

---

# Session Management

Successful authentication creates a secure authenticated session.

The authentication system manages:

- Session creation
- Session validation
- Session expiration
- Session revocation

Future versions may support:

- Multiple active devices
- Trusted devices
- Session history

---

# Authentication States

A user account may exist in one of the following states.

```
Pending Verification

↓

Active

↓

Suspended

↓

Deleted
```

Pending Verification

Email not yet verified.

Active

Normal platform access.

Suspended

Access temporarily disabled.

Deleted

Account scheduled for permanent removal according to retention policies.

---

# Protected Routes

Authentication is required for:

- Dashboard
- Sessions
- Music Projects
- Notifications
- Settings
- Profile

Unauthenticated users attempting to access protected routes are redirected to the Login page.

---

# Security Principles

Authentication should:

- Verify identity before granting access.
- Never expose passwords.
- Never reveal whether an email exists during login or password recovery.
- Protect every authenticated request.
- Operate exclusively over HTTPS.

---

# Security Features

MVP

- Email Verification
- Secure Password Hashing
- HTTPS
- Secure Sessions
- Password Reset
- Session Expiration

Future

- Multi-Factor Authentication (MFA)
- Passkeys
- Google Login
- Apple Login
- GitHub Login
- Trusted Devices
- Login History
- Security Notifications

---

# Error Handling

Authentication errors should:

- Be understandable.
- Avoid revealing sensitive information.
- Guide users toward recovery.

Example

Instead of

"Email does not exist."

Use

"Invalid email or password."

---

# Authentication Decisions

- Email is the unique user identifier.
- Email verification is mandatory.
- Display Name is collected during registration.
- Better Auth manages authentication.
- Password recovery uses verified email.
- Automatic recovery requires verified email ownership.
- Manual support is required when verified email access is permanently lost.

---

# Architecture Decision Record

## ADR-005

### Decision

Adopt email/password authentication with mandatory email verification.

### Status

Accepted

### Context

Users trust Resonance with valuable creative work.

Identity verification must be simple, reliable, and secure.

### Consequences

Positive

- Prevents fake accounts.
- Simplifies account recovery.
- Protects ownership.
- Familiar user experience.

Negative

- Slightly longer onboarding.
- Requires email delivery infrastructure.

---

# Related Documents

- 00-ARCHITECTURE.md
- 01-TECH-STACK.md
- 03-DATABASE-SCHEMA.md
- 07-PERMISSION_MODEL.md
- 09-API_DESIGN.md