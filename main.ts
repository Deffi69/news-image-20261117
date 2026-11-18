// news-image-20261117 entry (Node 22, standard library only).
//
// The entry image is the entry.png beside this file: a one-page infographic
// summing up the world news of Tuesday 17 November 2026 (six top stories plus
// an "Also today" strip), rendered from infographic.html with headless Chrome.
// The program copies it to /output/entry.png. The gate takes a whole PNG or
// JPEG of at most 1 MiB and 1024 by 1024 pixels.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
