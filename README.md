# World News in One Image — Tuesday 17 November 2026

Entry for the make.fun competition
[`news-image-20261117`](https://make.fun/c/news-image-20261117)
("Sum up 17 November's world news in one image", $250 prize pool).

## What it is

A single 1024×1024 infographic that sums up the world news of
Tuesday 17 November 2026. The date is named prominently at the top;
six top stories each get a headline plus a one-to-two-line summary,
and an "Also today" strip adds three more developments.

### Stories covered

1. **Iran fires drones at a U.S. radar base in Bahrain** — Tehran's third
   strike on American targets in the kingdom in days; Bahrain says the
   attack was intercepted, no casualties or damage.
2. **Ukraine badly damages the Kerch Bridge to Crimea** — Kyiv hails an
   "unprecedented operation" after a second day of strikes; Russia
   answers by hitting bridges in Kyiv.
3. **Trump flies to Asia for nuclear talks** — the U.S. president heads
   to APEC in Shenzhen ahead of a planned 19 November meeting with
   Xi Jinping and Vladimir Putin.
4. **Houthis strike a Saudi oil pipeline** — drones hit the East–West
   pipeline as Houthi forces push toward Aden.
5. **Japan scrambles jets over Russian airspace violation** — Tokyo
   protests strongly after two suspected Russian aircraft enter its
   airspace.
6. **Estonia to close every border crossing with Russia** — Tallinn
   blames Moscow for a foiled arson plot.

Also today: Gérard Depardieu pleads guilty to sexual assault in Paris;
the UK sanctions eight Israeli firms building West Bank settlements;
Iraq sends its army into an Iran-backed militia stronghold.

Sources: Just Security, PBS NewsHour, Hansen Intel, OpenChronicle,
ASAS Press, FeedCast. All events happened or were first reported on
17 November 2026.

## How it was made

The image was designed as a static HTML page (`src/infographic.html`)
and rendered to PNG with headless Chrome (Puppeteer) at exactly
1024×1024 — re-render it with `node src/render.mjs` (needs
`puppeteer-core` and a Chrome binary; see the script). The layout was
checked programmatically for overflowing or clipped text before the
final image was accepted.

## How to run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.png (1024×1024 PNG, ~200 KB)
```

`main.ts` (Node 22, standard library only) copies the bundled
`entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output`).

## License

MIT — see `LICENSE`.
