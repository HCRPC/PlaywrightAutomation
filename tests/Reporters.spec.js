const {test, expect}=require('@playwright/test')

test('Reporters Test 1', async ({ page }) => {
    
    await page.goto('https://www.google.com');

    await expect(page).toHaveTitle("Google");

    /*
     * Built-in Reporters:
        * İlgili reporter'ı çağırmak için 'playwright.config.js' dosyasının içine aşağıdaki gibi attribute ekliyoruz.

        export default defineConfig({
            reporter: '<reporterTag>',
        });

        * Hazır reporterlar ve reporterTag'leri şu şekilde;
            * list ya da ['list', { printSteps: true }]
            * line
            * dot (her test için '.' gösterimi yapar. Başarısız ise 'F' yazar)
            * ['html', { outputFolder: 'my-report' }]
            * ['blob', { outputDir: 'my-report' }]
            * [['json', { outputFile: 'results.json' }]] --> doğru olan yazım bu 
            * ['junit', { outputFile: 'results.xml' }]
     
        -- terminaleden değiştirmek için --reporter=line,html,list yazıyoruz bu komut testi kosup reportu gösteriyor
        -- birden cok reporter çesitini aynı anda kullanabilirz [] içinde arada virgül olacak sekilde configde yazmamız gerekir    
     * Custom Reports:
        Bu konu ve tüm detaylar için "https://playwright.dev/docs/test-reporters"
     */
});
test('Reporters Test2', async ({ page }) => {
    
    await page.goto('https://www.youtube.com');

    await expect(page).toHaveTitle("YouTube");
});