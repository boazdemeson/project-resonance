# Technical Feasibility

## Purpose

The Domain Model and Feature Inventory describe *what* the product does. This document sanity-checks *what it costs to run*, since Snapshots (audio files, versioned, never deleted per "Never Lose Work") are the one part of this product that behaves nothing like typical SaaS text/row data.

---

# The Core Cost Driver: Snapshots

Per 04-DOMAIN-MODEL, a Snapshot "never overwrites previous work" and per PRODUCT_PILLARS #3, work is "never lost." Combined with unlimited Session creation, this means storage grows monotonically per active user, forever, with no built-in ceiling unless one is designed in.

## Rough sizing

- A WAV export of a typical song (44.1kHz/16-bit stereo, ~3.5 min): **~35–40MB**
- A high-res master (24-bit/48kHz): **~60MB+**
- An active Session over its lifetime might accumulate **10–30 Snapshots** (rough demos through final master) — call it **~500MB–1.5GB per finished song**, before counting Attachments (stems, DAW project files, which can be far larger — a multi-track stem pack can be hundreds of MB to several GB).

At even modest scale (the roadmap's own M3 milestone: 100 active users), if each user runs 5–10 Sessions with the above pattern, that's roughly **250GB–1.5TB** of audio storage — for 100 users. This scales close to linearly with users, not logarithmically, because deduplication across users' creative work isn't meaningful the way it is for, say, code.

## Implication for the free tier

A storage cap of a few GB per free account is likely required to keep infra costs bounded — this directly informs the free/paid line in 12-BUSINESS-MODEL. "Unlimited everything for free" is not compatible with "never lose work" at any meaningful scale.

---

# Infra Building Blocks

- **Object storage:** S3 or equivalent (Cloudflare R2, Backblaze B2 — both meaningfully cheaper than S3 for egress-heavy audio streaming workloads, worth benchmarking early rather than defaulting to S3).
- **Waveform generation:** needs a background processing pipeline (e.g. ffmpeg-based) triggered on Snapshot upload — listed as ⭐⭐ Important in Feature Inventory, but the *pipeline* for it should exist even at MVP since audio preview without a waveform is a materially worse experience.
- **Streaming/playback:** range-request-capable audio serving (standard for S3/CDN-backed audio) rather than full-file downloads, to make in-app playback fast.
- **Transcoding (later):** if the product ever needs to serve compressed previews (e.g. lower-bitrate streaming copies to save bandwidth) alongside lossless originals, that's an added pipeline stage — reasonable to defer past MVP.

---

# What's Genuinely Easy Here

- The relational data (Sessions, Notes, Lyrics, Comments, Timeline events) is straightforward CRUD — no unusual technical risk.
- Timeline-as-event-log is a well-understood pattern (append-only event table), cheap to build and cheap to query at this scale.
- Search over Sessions (MVP scope) doesn't need anything beyond standard full-text search at this user count.

**The technical risk is concentrated almost entirely in audio storage economics and playback performance — not in the collaboration/data-modeling layer**, which is good news: the hard *product* thinking (Domain Model) is sound; the hard *infra* thinking is a cost/ceiling design problem, which is solvable but must be decided before free-tier limits are public.

---

## Decisions

- Object storage choice should be benchmarked (S3 vs. R2/B2) before committing, given egress-heavy audio playback.
- A waveform-generation background pipeline should exist at MVP, not deferred, despite being labeled ⭐⭐ in the feature inventory — the preview experience depends on it.
- Storage must be capped on free tier; "unlimited, never lost" is a paid-tier promise, not a free one.

## Open Questions

- What's the actual per-GB storage + egress cost at projected M3/M4 scale (100–1,000 users), fully modeled?
- Should Attachments (which can dwarf Snapshot audio in size — full stem packs, DAW files) have a separate, stricter storage policy than Snapshots?
