import { test, expect } from '@playwright/test';
import{LoginPage} from '../pages/loginPage';
import{ProductPage} from '../pages/productPage';
import { remove } from 'fs-extra';

let url='https://www.saucedemo.com/'
let user_id ="standard_user"
let cred="secret_sauce"
let filePath = 'productDetails.txt'
let productPrice
let productText

test('TC01', async ({ page },testInfo) => {
  
const login= new LoginPage(page);
const inventory= new ProductPage(page);
const fs = require('fs');
  await test.step('Step 1. Navigate to the site Saucedemo.com', async () => {
    await login.openPage(url);
  });
  await test.step('Step 2. Login to the site (credentials are provided on the home page)', async () => {
    await login.setUserName(user_id)
    await login.setPassword(cred)
    await login.clickLoginButton()
    
  });
  const screenshot = await page.screenshot();
  await testInfo.attach('TC01_Step3', {
  body: screenshot,
  contentType: 'image/png',
  });

  await test.step('Step 3. Verify that successful login will land the user on Products page ', async () => {
      const productPageTitle = await inventory.getTitle()
      await expect(productPageTitle).toBe('Products');
  
  });
  
  await test.step('Step 4. Get the first product item name and price, store it in a text file', async () => {
    productPrice = await inventory.getProductPrice()
    productText = await inventory.getProductText()
    await writeToFile(productPrice,productText)

  });


  await test.step('Step 5. Click on the add cart', async () => {
    await inventory.clickFirstAddToCartButton()
  });

  await test.step('Step 6. Navigate to add cart and verify that cart page contains the product which was added in the above step', async () => {
    await inventory.clickCartButton()
    const cartProductText = await inventory.getCartProductText()
    await expect(cartProductText).toBe(productText);
    await inventory.clickRemoveButton()
  });
  const screenshot1 = await page.screenshot();
  await testInfo.attach('TC01_Step6', {
  body: screenshot1,
  contentType: 'image/png',
});

  await test.step('Step 7. Logout from the site', async () => {
    await inventory.clickMenuButton()
    await inventory.clickLogoutButton()
  });

const screenshot2 = await page.screenshot();
await testInfo.attach('TC01_Step7', {
  body: screenshot2,
  contentType: 'image/png',
});

async function writeToFile(productPrice,productText){   
  const data = `Product Price: ${productPrice} , Product Text: ${productText}`;
  fs.writeFile(filePath, data, (err) => {
    console.log('Data written to file:', filePath);
    if (err) throw err;
  });
}
});