# Vonguul Clarity — X (Twitter) Tracker

Account: **@OffbahrV** on X — same real personal account as Threads' @offbahr.
Bio is tied to a separate "Community USA Vonguul" movement project; by
decision (2026-09-08), Picks/Clarity content on X ignores that framing and
matches the Threads voice instead: first-person, skeptical-but-engaged,
direct — not neutral marketing copy, not the movement/reciprocity framing.

## Tracking ID status

X does not yet have a dedicated Amazon Associates tracking ID. Attempted to
register `vgclarityx-20` (and `vgpicksx-20` for Picks) on 2026-09-08 via
Associates Central — failed 3x with "Error occurred while creating tracking
id. Please try again later." (server-side error, not a validation issue).
Stopped retrying to avoid hammering the endpoint. Until this is resolved,
links posted to X use each site's **default** tag (`vgclarity-20` /
`vonguul-20`, no `?src=` param) rather than a channel-specific one.

**Once the tracking ID exists:** add `x: 'vgclarityx-20'` to `TAG_MAP` in
`src/layouts/BaseLayout.astro` (mirrors the pinterest/reddit/instagram
entries already there), update this file, and use `?src=x` on all links in
new posts going forward. Already-posted links keep their default tag.

## Format

Same mix as Threads (see `THREADS-POSTS.md`): mostly **opinion posts**
(first-person take tied to the article's "worth being direct about"
section where one exists, no link) with occasional **linked posts**. Always
draft and show for review before posting — real account, real followers.

## Status

| Article | Type | Posted |
|---|---|---|
| tarot-for-beginners.md | opinion | posted 2026-09-08 |
| crystals-for-beginners.md | linked | posted 2026-09-08 |
