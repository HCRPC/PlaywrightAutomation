const { test,  expect} = require ('@playwright/test');

test('Locating Multiple Elements', async({page}) => {

   await page.goto ('https://www.demoblaze.com/index.html')
 // çoklu element locate etmet için '$$' metodu kullanılır 
  /* const links = await page.$$('//a') ;
   for (const link of links)
   {
     const linktext = await link.textContent();
       console.log(linktext) ;
   }
   */
   await page.waitForSelector('//div[@id="tbodyid"]//div//h4/a');
   const products = await page.$$('//div[@id="tbodyid"]//div//h4/a');

   for (const product of products){

    const productName = product.textContent();
    console.log(productName);
   }
})