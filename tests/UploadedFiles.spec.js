const {test, expect}=require('@playwright/test')
test('Upload single file', async ({page})=>{

    await page.goto('https://www.foundit.in/');

    await page.waitForSelector('.mqfihd-upload');

    await page.click('.mqfihd-upload');

    await page.locator('#file-upload').setInputFiles('tests/uploadFiles/text1.txt');

    await page.waitForTimeout(2000);
})

test.only('Upload multiple file', async ({page})=>{

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

    // for multiple elements we should set input files with an array
    await page.locator('#filesToUpload')
                .setInputFiles(['tests/uploadFiles/text1.txt','tests/uploadFiles/text2.txt'])

    const fileList = await page.locator('#fileList');

    await expect(fileList).toContainText('text1.txt');
    await expect(fileList).toContainText('text2.txt');
    
    await page.waitForTimeout(2000); 
})