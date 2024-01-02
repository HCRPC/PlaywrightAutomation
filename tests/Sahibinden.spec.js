import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://secure.sahibinden.com/cs/checkLoading?returnUrl=https%3A%2F%2Fwww.sahibinden.com%2F');
  await page.goto('https://secure.sahibinden.com/cs/checkLoading?returnUrl=https%3A%2F%2Fwww.sahibinden.com%2F&__cf_chl_rt_tk=SUQUmOm6_yXvojj131DtdRrSKJ7naFgPwuVU8x7nzIk-1700595295-0-gaNycGzNElA');
  await page.goto('https://secure.sahibinden.com/cs/checkLoading?returnUrl=https%3A%2F%2Fwww.sahibinden.com%2F');
  await page.frameLocator('iframe[title="Widget containing a Cloudflare security challenge"]').getByLabel('Verify you are human').check();
  await page.frameLocator('iframe[title="Widget containing a Cloudflare security challenge"]').getByLabel('Verify you are human').check();
  await page.goto('https://secure.sahibinden.com/cs/checkLoading?returnUrl=https%3A%2F%2Fwww.sahibinden.com%2F');
  await page.goto('https://secure.sahibinden.com/cs/checkLoading?returnUrl=https%3A%2F%2Fwww.sahibinden.com%2F&__cf_chl_rt_tk=4oqfFYFZw9ptqTSkFV4PwuxskpVxEuWXl0Og0J6bfTA-1700595322-0-gaNycGzNEWU');
  await page.goto('https://secure.sahibinden.com/cs/checkLoading?returnUrl=https%3A%2F%2Fwww.sahibinden.com%2F');
});