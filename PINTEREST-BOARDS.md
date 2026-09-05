# Vonguul Clarity — Pinterest Board & Pin Tracker

Pinterest account: **Vonguul Clarity** (@vonguulian), https://www.pinterest.com/vonguulian/
Profile, bio, website, and domain claim are already set up.

Each row maps one article to one board. `Board status` tracks whether the board
exists yet on Pinterest itself (done manually, in an interactive session).
`Pins status` tracks pin copy/posting progress: `not drafted` (nothing written
yet) → `drafted` (PIN-BATCH-XX.md exists in this repo, written by the daily
drafting routine, but not yet live on Pinterest) → `posted` (all 3 pin variants
confirmed live on the actual Pinterest board, done manually in an interactive
session with Claude in Chrome — the drafting routine never sets this itself).

Posting the actual pins to Pinterest always happens in an interactive session
with Claude in Chrome — the drafting routine only prepares the copy and notifies.

| # | Article | Board name | Board status | Pins status |
|---|---------|-----------|--------------|-------------|
| 1 | human-design-101-free-chart.md | Human Design for Beginners | created | posted |
| 2 | astral-projection-getting-started.md | Astral Projection | created | posted |
| 3 | hermetic-principles-the-kybalion.md | Hermetic Principles & The Kybalion | created | not drafted |
| 4 | lucid-dreaming-getting-started.md | Lucid Dreaming | created | not drafted |
| 5 | tarot-for-beginners.md | Tarot for Beginners | not created | not drafted |
| 6 | pendulum-dowsing-for-beginners.md | Pendulum Dowsing | not created | not drafted |
| 7 | crystals-for-beginners.md | Crystals for Beginners | not created | not drafted |
| 8 | magical-herbs-for-beginners.md | Magical Herbs & Correspondences | not created | not drafted |

## How the daily routine uses this file

1. Re-scan `src/content/articles/` for any `.md` file not yet listed above (a
   newly published article) and append it as a new row: board name derived
   from the article title, both statuses `not created` / `not drafted`.
2. Pick exactly ONE row per run where `Pins status` is `not drafted`, in table
   order (top to bottom).
3. Write `PIN-BATCH-XX.md` for that row (next unused number) with: the board
   name, the article's live URL with `?src=pinterest` appended (e.g.
   `https://vonguulian-clarity.vercel.app/articles/<slug>/?src=pinterest`) —
   this lets Amazon Associates attribute affiliate clicks on that page to
   Pinterest specifically, via the site's per-channel tracking IDs — and 3
   pin variants (title + keyword-rich description each, following the same
   style as the Vonguul Picks PIN-BATCH files) linking to that tagged URL.
4. Flip that row's `Pins status` to `drafted`.
5. Commit and push both the new PIN-BATCH file and this updated table.
6. Send one push notification naming the board and whether it still needs to
   be created on Pinterest first (`Board status: not created`) or just needs
   pins added (`Board status: created`).
7. If no row has `Pins status: not drafted` (every row is already `drafted` or
   `posted`), send a notification saying so and stop — don't draft anything
   that run.
