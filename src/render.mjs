// Re-render entry.png from src/infographic.html with headless Chrome.
// Usage: node src/render.mjs [output-path]
// Needs puppeteer-core installed and a Chrome binary: set CHROME_PATH,
// or place a Chrome build under ~/workspace/tools/cft/browsers/chrome/
// (the layout used while building this entry). Not used by main.ts — the
// entry image is bundled in the repo and main.ts just copies it.
import puppeteer from 'puppeteer-core';
import { readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const out = process.argv[2] || join(root, 'entry.png');

let executablePath = process.env.CHROME_PATH;
if (!executablePath) {
  const base = join(process.env.HOME ?? '', 'workspace/tools/cft/browsers/chrome');
  if (existsSync(base)) {
    const dir = readdirSync(base).sort().pop();
    executablePath = join(base, dir, 'chrome-linux64/chrome');
  }
}
if (!executablePath) throw new Error('no Chrome found: set CHROME_PATH');

const browser = await puppeteer.launch({
  executablePath, headless: 'new',
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--force-device-scale-factor=1'],
  defaultViewport: { width: 1024, height: 1024 },
});
const page = await browser.newPage();
page.on('pageerror', (e) => console.log('PAGE ERROR:', e.message));
await page.goto('file://' + join(root, 'src/infographic.html'), { waitUntil: 'load', timeout: 30000 });
await new Promise((r) => setTimeout(r, 400));
const check = await page.evaluate(() => {
  const bad = [];
  document.querySelectorAll('.card, .also, header, footer').forEach((el) => {
    if (el.scrollHeight > el.clientHeight + 1 || el.scrollWidth > el.clientWidth + 1) {
      bad.push(`${el.className || el.tagName}: scroll ${el.scrollWidth}x${el.scrollHeight} vs client ${el.clientWidth}x${el.clientHeight}`);
    }
  });
  return { overflow: bad, bodyScroll: [document.body.scrollWidth, document.body.scrollHeight] };
});
console.log('overflow check:', JSON.stringify(check));
if (check.overflow.length > 0) throw new Error('layout overflow — fix infographic.html first');
await page.screenshot({ path: out });
await browser.close();
console.log('saved', out);
