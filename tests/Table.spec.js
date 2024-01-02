const {test, expect}=require('@playwright/test')


test('Handling table', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = await page.locator('#productTable');

    //total number of raws and colums
    const colums = await table.locator('thead tr th')
    console.log(' number of colums: ', await colums.count());

    const raws = await table.locator('tbody tr');
    console.log('number of rows: ', await raws.count());
    expect(await colums.count()).toBe(4);

    // select checkbox for product 4 

   /* const matchedRaw = raws.filter({ // burda product 4 ü içeren rawu filtreliyor elimizde
        // product 4 e ait raw var
        has: page.locator('td'),
        hasText: '$7.99'
    })
    await matchedRaw.locator('input').check(); // o raw daki locatorı input olan yani check box elementine gidip check yapıyor
*/

    // select multiple product be reusable function
  

    //3 select multiple product be reusable function 
   // await selectProduct(raws, page, 'Product 1')
    //await selectProduct(raws, page, 'Product 3')
    //await selectProduct(raws, page, 'Product 5')

   

    //4 print all product details loop
    for(let i = 0; i<await raws.count(); i++){

        const row = raws.nth(i);
        const tds = row.locator('td');
        for(let j =0 ; j<tds.count()-1; j++){
         console.log(await tds.nth(j).textContent());       

        }
    }

    
    await page.waitForTimeout(5000);
})

async function selectProduct(raws, page, name){ // test bloğu dısına koyduk

    const matchedRaw = raws.filter({ // burda product 4 ü içeren rawu filtreliyor elimizde
        // product 4 e ait raw var
        has: page.locator('td'),
        hasText: name
    })
    await matchedRaw.locator('input').check(); //await kırmızı olursa functionun basına async koy!
}