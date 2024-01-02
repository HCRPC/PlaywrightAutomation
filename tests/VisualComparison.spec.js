import { test, expect } from '@playwright/test';

test('example test', async ({ page }) => {
  await page.goto('https://youtube.com');
 // await expect(page).toHaveScreenshot();

  expect (await page.screenshot()).toMatchSnapshot("index1.png");
});
/* önce testi reun ediyoruz index1.png için bir screen shot alıyor ve test kalıyor
sonra testi tekrar calsıtırıdığımızda yeni screenshot önceki cekilen SS le aynımı ona bakıp match ediyor
*/
