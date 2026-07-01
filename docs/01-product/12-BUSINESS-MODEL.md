# Business Model & Pricing

## Purpose

00-VISION states "professional collaboration tools should be accessible regardless of budget." That's a value, not a plan. This document proposes a model consistent with the Solo-First pillar while acknowledging that audio storage is a real, non-trivial cost center.

---

# Why This Can't Be an Afterthought

Unlike most SaaS, the core object being stored (lossless/high-bitrate audio Snapshots, potentially many per Session, never deleted per the "Never Lose Work" principle) is storage- and bandwidth-heavy relative to typical text-based SaaS. Pricing and infra decisions are coupled here more tightly than in a typical CRUD product — see 13-TECHNICAL-FEASIBILITY for cost modeling. That means the free tier's storage ceiling is a product decision, not just a marketing one.

---

# Recommended Model: Freemium, storage-tiered, solo-friendly

Consistent with "Solo First" (PRODUCT_PILLARS #4) and MVP scope (solo musicians, collaboration as stretch):

## Free tier
- Unlimited Sessions
- Storage cap (e.g. a fixed GB or a Snapshot-count-per-Session limit)
- Core features: Snapshots, Timeline, Notes, Lyrics, Attachments, Search
- No collaborators, or a small cap (e.g. 1 collaborator) — matches Phase 1/2 roadmap sequencing

**Rationale:** the entire MVP is scoped for solo use (07-MVP). A generous *feature* free tier with a *storage* ceiling lets you validate the core loop (JTBD 1–4, 7, 8) without subsidizing unlimited audio storage for non-paying users.

## Paid tier (individual)
- Expanded/unlimited storage
- Unlimited Snapshot history retention (vs. free tier possibly rolling off oldest Snapshots)
- Priority processing (waveform generation, etc.)

## Paid tier (collaboration / team)
- Per-seat or per-active-collaborator pricing once Phase 2 (Collaboration) ships
- This is where JTBD 6 (gather feedback) and the Session sharing/comments features monetize

## What NOT to do at MVP stage
- Don't build usage-based/metered billing yet — too much infra complexity for a pre-validation product.
- Don't gate core Session/Timeline/Snapshot mechanics behind payment — that's the product's entire differentiation and needs to be experienced to be believed.

---

# Pricing Benchmarks (comparable categories)

- Splice: ~$10–17/mo for sample + sync plans.
- Dropbox Plus: ~$12/mo (2TB).
- BandLab: free with paid "Pro" tier historically in the $10–13/mo range for expanded storage/export limits.

A reasonable anchor for an individual paid tier is **$8–15/month**, positioned below general cloud storage (because you're not competing on GB/$, you're competing on workflow) but validated against what a working musician already spends on tools (DAW, plugins, distribution service like DistroKid ~$20-36/yr).

---

# Unresolved Questions This Doc Can't Answer Alone

- What's the actual free-tier storage ceiling that feels generous but bounds cost? (Depends on average Snapshot size — needs the technical feasibility numbers.)
- Will bands/teams pay collectively (one subscriber covers the Session) or per-seat? Per-seat is simpler to build but may suppress invites, which undercuts the collaboration value prop.
- Is there a non-recurring path (e.g., pay-per-project) that fits how some independent musicians think about spend (per-release, not monthly)?

---

## Decisions

- Freemium with a storage-based (not feature-based) ceiling on the free tier, to protect the core "solo-first" value prop from day one.
- Collaboration/team pricing is deferred until Phase 2 ships, matching the roadmap.
- Individual paid tier anchored at $8–15/month pending real cost data.

## Dependencies

- Needs storage cost modeling from technical feasibility work before the free-tier cap is finalized.
- Needs at least directional signal from musician interviews (see market validation doc) on willingness to pay before committing to a number.
