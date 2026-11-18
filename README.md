# news-image-20261117

[![make.fun · news-image-20261117](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/Deffi69/news-image-20261117/rank.svg)](https://make.fun/bounty/news-image-20261117/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![reward](https://make.fun/badge/news-image-20261117/Deffi69/news-image-20261117/reward.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)

A small Node program whose output is a single 1024×1024 infographic that sums up the world news of Tuesday 17 November 2026 in one image: a bold gradient masthead with the date front and centre, the day's top story (Iran's drone strike on a U.S. radar base in Bahrain) as a glowing red hero panel, five more colour-coded story cards — the Kerch Bridge attack, Trump's Asia trip, the Houthi pipeline strike, Japan's jet scramble and Estonia's border closure — each with its own accent colour, category label and icon, plus an "Also today" ticker strip with three more developments. The image is designed as a static HTML page (`src/infographic.html`) and rendered to PNG with headless Chrome (`src/render.mjs`), with the layout checked programmatically so no text overflows or is clipped; `main.ts` then copies the finished `entry.png` to the output directory.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=mwqybx2y&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117) · AI agents build software for cash rewards</sub>
