# Vonguul Clarity — Instagram Feed Posts Tracker

Account: **@offbahr** on Instagram — same real personal account/login as Threads.
Bio link: `vonguul.com/support` (movement/support funnel, not article-specific —
feed post captions point to "link in bio" since Instagram captions don't
support real clickable links; there is no per-article bio link today).

**Distinct from Threads and from the old "Instagram = Threads" convention.**
Earlier, `?src=instagram` was used for Threads posts (see
[[vonguul-affiliate-tracking-ids]] and `THREADS-POSTS.md`) because Threads was
the initial stand-in for an Instagram presence. As of 2026-09-08, real
Instagram feed posting was added as its own thing, same account/login, but a
different content type (static image required, caption can't carry a working
link). Decision: keep using the existing `vgclarityinsta-20` tag /
`?src=instagram` convention for both Threads AND real Instagram — they are
not being split into separate tracking IDs, since they're the same account
and audience.

## Format

The @offbahr feed's native style is a polished "Scenario" decision-card video
series (Human Design content, not affiliate-related) — do not imitate that
format for Picks/Clarity content. Instead, feed posts for articles use a
**Pinterest-pin-style static image**: reuse the product/article's existing
Pinterest pin title + hero image, laid out as a dark title bar (bold white
headline, matching hero image) over the product photo, with a
"VONGUUL CLARITY / FULL BREAKDOWN → BIO" footer. Built as an HTML page,
rendered via a local screenshot, then uploaded directly to Instagram's
composer.

Caption pulls from the same Pinterest pin's description copy, ends with
"link in bio", and closes with 4-5 relevant hashtags. Crop step: always
select "Original" aspect ratio in Instagram's upload flow (default crop is
square and will cut off a landscape card's sides).

**Rendering gotcha (2026-09-08):** an HTML page sized to fill the whole
browser viewport is NOT reliable for this — the actual Chrome viewport this
session renders at can silently be an unsafe aspect ratio (e.g. 1568x737 =
2.13:1, over Instagram's 1.91:1 max), `resize_window` does not reliably fix
this, and Instagram silently rejects the upload with "isn't in an allowed
aspect ratio." The fix: render onto an HTML5 `<canvas>` with fixed pixel
dimensions (1200x750 used here, a safe 1.6:1) via JS `drawImage`/`fillText`
— canvas pixel size is independent of the browser viewport. Extract with
`canvas.toBlob()` and POST it to a same-origin local endpoint (a tiny custom
Python `http.server` subclass handling `POST /save?name=...` by writing the
request body to disk) rather than triggering a `<a download>` — Chrome's
download-permission gate blocks repeated script-triggered downloads after
the first one on a page/origin, even with a real synthetic click, and a
cross-port fetch trips Private Network Access preflight failures. Same-origin
POST avoids both. See `canvas-card.html` used in this session for the
working template (takes `img`, `headline`, `brand`, `outname` query params).

Always draft and show the rendered image + caption for review before
posting — real account, real followers, same rule as Threads.

## Status

| Article | Posted |
|---|---|
| astral-projection-getting-started.md | posted 2026-09-08 (reused PIN-BATCH-02 Pin 2 copy/title) |
| human-design-101-free-chart.md | posted 2026-09-08 (reused PIN-BATCH-01 Pin 3 copy/title) |
| hermetic-principles-the-kybalion.md | posted 2026-09-08 (reused PIN-BATCH-03 Pin 1 copy/title) |
| lucid-dreaming-getting-started.md | posted 2026-09-08 (reused PIN-BATCH-04 Pin 1 copy/title) |
| tarot-for-beginners.md | posted 2026-09-08 (reused PIN-BATCH-05 Pin 1 copy/title) |

## How to apply for new articles

1. Find the article's existing `PIN-BATCH-XX.md` and reuse one pin's title
   + description as the headline/caption basis (don't write new copy from
   scratch — stay consistent with what's already been drafted for Pinterest).
2. Build/update the HTML card template (dark title bar + product hero image
   + footer), matching the article's own product image.
3. Render via a local static server + browser screenshot, upload directly
   from the screenshot's imageId to Instagram's post composer.
4. Crop step: select "Original" aspect ratio, skip filters ("Original").
5. Caption: pin description + "link in bio" + hashtags.
6. Leave the Threads cross-post toggle OFF if Threads already has (or will
   get) its own tailored post for the same article — avoids duplicate/
   mismatched content across the two surfaces.
7. Update this table, commit/push.
