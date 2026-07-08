const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://wizzgeeks.com/solutions', { waitUntil: 'networkidle2' });
  const content = await page.content();
  console.log(content);
  await browser.close();
})();
