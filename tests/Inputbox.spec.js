const {test, expect}=require('@playwright/test')

test('Handle inputbox', async({page})=>{

    await page.goto('https://itera-qa.azurewebsites.net/home/automation');

    const nameInput = page.locator("#name");
     
    await expect(nameInput).toBeVisible();
    await expect(nameInput).toBeEmpty();
    await expect(nameInput).toBeEditable();
    await expect(nameInput).toBeEnabled();

     // inputbox -> firstname
     await page.locator('#name').fill('John');
    //await page.fill('#name','John');


})