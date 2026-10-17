const {test} = require('@playwright/test');

test('Browser Fixture Playwright test', async ({browser}) => {
    const context = await browser.newContext();
    const page =await context.newPage();
    await page.goto('https://www.google.com/');
});

test('Page Fixture Playwright test', async ({page}) => {
    await page.goto('https://www.google.com/');
});