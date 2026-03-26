import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1080, deviceScaleFactor: 2 });
  
  const urls = [
    { name: 'research', url: 'https://aimindset.org/research' },
    { name: 'non-profit', url: 'https://aimindset.org/non-profit' },
    { name: 'community', url: 'https://aimindset.org/ai-mindset-community' },
    { name: 'consulting', url: 'https://aimindset.org/ai-mindset-consulting' }
  ];

  for (const { name, url } of urls) {
    console.log(`Taking screenshot of ${url}...`);
    try {
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
      await new Promise(r => setTimeout(r, 3000));
      const path = join(__dirname, `${name}_live_screenshot.jpg`);
      await page.screenshot({ path, fullPage: false, quality: 90 });
      console.log(`Saved screenshot to ${path}`);
    } catch (e) {
      console.error(`Failed ${name}:`, e.message);
    }
  }

  await browser.close();
})();
