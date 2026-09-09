# Vonguul Clarity — X (Twitter) Tracker

Account: **@OffbahrV** on X — same real personal account as Threads' @offbahr.
Bio is tied to a separate "Community USA Vonguul" movement project; by
decision (2026-09-08), Picks/Clarity content on X ignores that framing and
matches the Threads voice instead: first-person, skeptical-but-engaged,
direct — not neutral marketing copy, not the movement/reciprocity framing.

## Tracking ID status

X does not have a dedicated Amazon Associates tracking ID, and per decision
(2026-09-08) it isn't getting one for now — registering `vgclarityx-20` via
Associates Central failed 5+ times across two sessions with "Error occurred
while creating tracking id. Please try again later." (consistent server-side
error, not a validation issue). Rather than keep retrying, links posted to
X use each site's **default** tag (`vgclarity-20`, no `?src=` param) going
forward, indefinitely — this is the settled approach, not a temporary
placeholder.

**If a tracking ID ever does get created** (e.g. the user registers it
manually on Amazon's side and asks to wire it up): add `x: 'vgclarityx-20'`
to `TAG_MAP` in `src/layouts/BaseLayout.astro` (mirrors the pinterest/reddit/
instagram entries already there), update this file, and use `?src=x` on
links in new posts from that point on. Don't attempt this unprompted — the
user closed this out; only revisit if they raise it again.

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
| human-design-101-free-chart.md | opinion | posted 2026-09-08 |
| astral-projection-getting-started.md | opinion | posted 2026-09-08 |
| hermetic-principles-the-kybalion.md | opinion | posted 2026-09-08 |
| lucid-dreaming-getting-started.md | linked | posted 2026-09-08 |
| pendulum-dowsing-for-beginners.md | opinion | posted 2026-09-08 |
| magical-herbs-for-beginners.md | opinion | posted 2026-09-08 |
| meditation-for-beginners.md | opinion | posted 2026-09-08 |
| manifestation-law-of-attraction-for-beginners.md | opinion | posted 2026-09-08 |
| moon-phases-lunar-rituals-for-beginners.md | linked | posted 2026-09-08 |

All 11 Clarity articles now have X coverage (8 opinion, 3 linked).
