const {test, expect}=require('@playwright/test');
test("Handle multi select dropdown",async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //Select multiple options from multi select dropdown

    await page.selectOption('#colors',['Blue', 'Red', 'Yellow'])
    

    //Assertions
    //1 check number of options on dropdown
    const options = await page.locator('#colors option');
    await expect(options).toHaveCount(5);
    
    //2 check number of options i dropdown using JS array
    const options2 = await page.$$('#colors option');
    console.log("number of options", options2.length);

    await expect(options2.length).toBe(5);

    // 3 presence of value in dropdown
    const content = await page.locator('#colors').textContent();
    await expect(content.includes('Blue')).toBeTruthy();

    await page.waitForTimeout(5000);


})