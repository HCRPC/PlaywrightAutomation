const {test, expect}=require('@playwright/test')
test('Page ScreenShot view port', async ({ page }) => {
    await page.goto("https://demo.opencart.com/");

    const path = 'tests/screenshots/'+Date.now();
    await page.screenshot({path:path+'HomePageViewPort.png'});// this will take screenshot inside viewport
});

test.only('Page ScreenShots full page', async ({ page }) => {
    await page.goto("https://demo.opencart.com/");

    const path = 'tests/screenshots/'+Date.now();
    await page.screenshot({path:path+'HomePageFull.png',fullPage:true});
});

test('Page ScreenShot of element', async ({ page }) => {
    await page.goto("https://demo.opencart.com/");

    const path = 'tests/screenshots/'+Date.now();

    await page.locator("//a[text()='iPhone']/ancestor::form").screenshot({path:path+'iPhone.png'}); // ihpne a dan ancestor form a gidiyor

});

// Eğer test execution sonunda sonuçtan bağımsız olarak screenshot almak istersek
// playwright.config.js dosyasında; use{} nesnesi içine screenshot : 'on' attribute ını ekliyoruz
// sadece fail olduğunda alsın derseniz screenshot : 'only-on-failure' ı ekliyoruz.
// alınan ekran resmi test-results klasörüne kaydedilir