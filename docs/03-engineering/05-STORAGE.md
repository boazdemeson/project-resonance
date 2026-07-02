# Storage

## Purpose

This document defines the storage architecture of Resonance.

It describes how binary assets are uploaded, stored, accessed, protected, versioned, retained, and permanently removed throughout their lifecycle.

Storage is designed to preserve creative work while remaining scalable, secure, and independent of any specific storage provider.

---

# Storage Principles

Storage should:

- Preserve creative work.
- Keep structured data separate from binary files.
- Prevent accidental data loss.
- Scale independently from the database.
- Support future collaboration.
- Abstract infrastructure from business logic.

The application should never depend directly on a specific cloud storage provider.

---

# Storage Architecture

```
                Browser
                    │
                    ▼
              Backend API
                    │
        ┌───────────┴───────────┐
        ▼                       ▼
 PostgreSQL             Binary Storage
 (Metadata)             (Files)
```

Application metadata and binary assets are stored independently.

---

# Storage Components

## Metadata Storage

Stores structured information including:

- File metadata
- Ownership
- Relationships
- Upload history
- Storage references

Metadata is stored inside PostgreSQL.

---

## Binary Storage

Stores:

- Audio Snapshots
- Attachments
- Cover Art
- Profile Images

Binary Storage should support:

- Large files
- High availability
- Scalability
- Secure access

The storage provider is implementation-specific.

---

# Storage Service

The application communicates with storage through a dedicated Storage Service.

Responsibilities include:

- Upload
- Download
- Delete
- Generate Access URLs
- Validate Uploads

Business logic must never communicate directly with the storage provider.

---

# Asset Types

## Audio Snapshot

Represents a version of a Session.

Characteristics

- Immutable
- Versioned
- Protected
- Restorable

---

## Attachment

Represents supporting project resources.

Examples

- MIDI
- PDFs
- Images
- Reference Audio
- DAW Project Files

Attachments may be replaced or deleted.

---

## Cover Art

Represents artwork associated with a Music Project.

Only one active Cover Art exists per Music Project.

Replacing Cover Art archives the previous asset before removal.

---

## Profile Image

Represents a user's avatar.

Only one active Profile Image exists per user.

Replacing a Profile Image removes the previous image after successful upload.

---

# Upload Lifecycle

```
User Selects File

↓

Validation

↓

Authorization

↓

Storage Upload

↓

Metadata Creation

↓

Timeline Event

↓

Success
```

Uploads are considered successful only after both metadata and binary assets have been persisted.

---

# Download Lifecycle

```
Download Request

↓

Authentication

↓

Authorization

↓

Generate Temporary Access

↓

File Delivery
```

Binary assets are never publicly accessible.

---

# File Validation

Every upload is validated before persistence.

Validation includes:

- Authentication
- Authorization
- File Type
- File Size
- Upload Limits

Future validation may include:

- Malware Scanning
- Duplicate Detection
- Audio Analysis

---

# Supported Asset Categories

## Audio

- WAV
- MP3
- FLAC
- AAC
- OGG

---

## Images

- PNG
- JPG
- JPEG
- WEBP

---

## Documents

- PDF
- TXT
- DOCX

---

## Production Files

- MIDI
- ZIP
- DAW Project Files

Supported formats may expand over time.

---

# Metadata Model

Every stored asset maintains metadata.

Common attributes include:

- Identifier
- Owner
- Session
- Original Filename
- File Size
- MIME Type
- Storage Reference
- Upload Time

Metadata is the authoritative record.

---

# Storage References

Binary assets are referenced indirectly.

The database stores only a storage reference.

The frontend never receives permanent storage paths.

File access occurs through:

- Temporary signed URLs
- Authorized API endpoints

---

# Storage Ownership

Every asset belongs to exactly one parent resource.

| Asset | Owner |
|---------|---------|
| Audio Snapshot | Session |
| Attachment | Session |
| Cover Art | Music Project |
| Profile Image | User |

Assets cannot exist without an owning resource.

---

# Deletion Policy

## Audio Snapshots

Snapshots are immutable.

Snapshots cannot be permanently deleted through standard application workflows.

---

## Attachments

Deleting an Attachment removes:

- Metadata
- Binary Asset

---

## Cover Art

Replacing Cover Art removes the previous asset after successful replacement.

---

## Profile Images

Replacing a Profile Image removes the previous image after successful upload.

---

# Session Lifecycle

Deleting a Session moves it to Trash.

During the retention period:

- Metadata remains.
- Binary assets remain.

After permanent deletion:

- Metadata is removed.
- Binary assets are deleted.

---

# Orphan Prevention

The system must prevent orphaned assets.

Every binary asset must reference a valid database record.

Every database record must reference an existing binary asset.

Regular cleanup processes should detect and remove inconsistencies.

---

# Security

Storage must:

- Require authentication.
- Verify authorization.
- Encrypt communication.
- Validate uploads.
- Protect private assets.

Storage providers should never be exposed directly to clients.

---

# Backup Strategy

Structured Data

- Database Backups

Binary Assets

- Provider Redundancy

Future improvements

- Cross-region replication
- Scheduled backups
- Disaster recovery

---

# Performance Strategy

Storage should optimize for:

- Large uploads
- Streaming downloads
- Efficient retrieval
- Minimal database load

Binary assets should never pass through unnecessary processing layers.

---

# Future Enhancements

Potential future improvements include:

- Audio Waveform Generation
- Automatic Transcoding
- Virus Scanning
- Duplicate Detection
- CDN Integration
- Audio Preview Generation
- Storage Analytics
- Background Processing

These features are outside the MVP.

---

# Storage Decisions

- Metadata and binary assets are stored separately.
- Binary assets are accessed indirectly.
- Permanent storage paths are never exposed.
- Audio Snapshots are immutable.
- Every asset has a single owning resource.
- Storage providers remain abstracted from business logic.

---

# Architecture Decision Record

## ADR-006

### Decision

Separate metadata storage from binary asset storage.

### Status

Accepted

### Context

Creative assets are significantly larger than relational data and require different scalability characteristics.

### Consequences

Positive

- Better scalability.
- Smaller database.
- Easier provider migration.
- Improved performance.
- Cleaner architecture.

Negative

- Additional synchronization between metadata and binary storage.
- Slightly more complex upload workflow.

---

## ADR-007

### Decision

Never expose permanent storage URLs to clients.

### Status

Accepted

### Context

Creative assets are private and should remain independent of storage provider implementation.

### Consequences

Positive

- Better security.
- Storage provider abstraction.
- Easier migration.
- Centralized authorization.
- Future CDN compatibility.

Negative

- Additional API interaction for asset retrieval.

---

# Related Documents

- 00-ARCHITECTURE.md
- 01-TECH-STACK.md
- 03-DATABASE-SCHEMA.md
- 04-AUTHENTICATION.md
- 06-BACKEND.md
- 09-API_DESIGN.md