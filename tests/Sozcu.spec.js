import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.locator('body').click();
  await page.goto('https://www.sozcu.com.tr/');
  await page.getByLabel('Sözcü Logo').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Akşener’den ‘yüzde 50+1’ mesajı: Günaydın Sayın Erdoğan!' }).first().click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: 'Reklamı Geç AdMatic' }).click();
  await page1.getByRole('link', { name: 'YAZARLAR' }).click();
  await page1.frameLocator('iframe[name="google_ads_iframe_\\/66738120\\/sozcu_popup_0"]').locator('#dfp-modal-popup-close').getByRole('link').click();
  await page1.getByRole('link', { name: 'Emin Çölaşan Emin Çölaşan emincolasan@sozcum.com Meral Ablamızın başına gelenler! 22 Kasım 2023' }).click();
});