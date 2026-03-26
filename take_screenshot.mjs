import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 1000, deviceScaleFactor: 2 });
    
    // Screenshot Desktop
    await page.goto('http://localhost:3001/', { waitUntil: 'networkidle2' });
    await page.screenshot({ path: '/Users/viola/.gemini/antigravity/brain/9c30b575-6998-4202-bde2-eda8d131308b/desktop_morph.webp' });

    console.log('Morph Desktop Screenshot saved');

    // Screenshot Mobile
    await page.setViewport({ width: 375, height: 812, isMobile: true, hasTouch: true, deviceScaleFactor: 2 });
    await page.goto('http://localhost:3001/', { waitUntil: 'networkidle2' });
    await page.screenshot({ path: '/Users/viola/.gemini/antigravity/brain/9c30b575-6998-4202-bde2-eda8d131308b/mobile_morph.webp', fullPage: true });

    console.log('Morph Mobile Screenshot saved');

    await browser.close();
})();
