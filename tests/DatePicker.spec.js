const {test, expect}=require('@playwright/test')
test('Date Picker', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
   // await page.fill('#datepicker', '03/30/2024')


   //datepicker
   const year = "2024";
   const month = "March";
   const date = "20";

   await page.click('#datepicker'); // open calender

   while(true)
   {
     const currentMonth = await page.locator('.ui-datepicker-month').textContent();
     const currentYear = await page.locator('.ui-datepicker-year').textContent();

     if(currentYear == year && currentMonth == month)
        {
            break;
        }
        await page.locator('[title="Next"]').click(); // next month
   }
    /*    const dates = await page.$$('.ui-state-default');

      for (const dt of dates) 
      {

          if(await dt.textContent()== date)  
          {
            await dt.click();
          }

      } 
*/

// date selection without loop  basit olanı bu loop cok iş
await page.click(`//a[@class='ui-state-default'][text()='${date}']`)
    await page.waitForTimeout(5000);
})