const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 375, height: 812, isMobile: true, hasTouch: true });
  
  // Try port 3001
  await page.goto('http://localhost:3001/test-page', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: '/Users/viola/.gemini/antigravity/brain/33c08bb6-1849-4db7-bc2c-af80feb19aca/mobile_showcase_3001.webp', fullPage: true });

  await browser.close();
  console.log('Screenshot saved');
})();
