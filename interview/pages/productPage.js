exports.ProductPage = class ProductPage{

    constructor(page){

        this.page=page;
        this.title=page.locator()
        this.productPageTitle=page.locator('[data-test="title"]')
        this.firstProductPrice=page.locator('.inventory_item_price').nth(0)
        this.firstItemName=page.locator('.inventory_item_name').nth(0)
        this.firstAddToCartButton=page.locator('.btn_primary').nth(0)
        this.shoppingCartButton=page.locator('.shopping_cart_link') 
        this.cartProductText=page.locator('.inventory_item_name').nth(0)
        this.firstRemoveButton=page.locator('.btn_secondary').nth(0)
        this.menuButton=page.locator('.bm-burger-button')
        this.logoutButton=page.locator('#logout_sidebar_link')
    }
    async getTitle(){
        return await this.productPageTitle.innerText();
    }

    async getProductPrice(){
        const productPrice = await this.firstProductPrice.innerText();
        return productPrice;    
    }

    async getProductText(){
        const productText = await this.firstItemName.innerText();
        return productText;
    }

    async clickFirstAddToCartButton(){
        await this.firstAddToCartButton.click();
    }

    async clickCartButton(){
        await this.shoppingCartButton.click();
    }

    async getCartProductText(){
        const cartProductText = await this.cartProductText.innerText();
        return cartProductText;
    }

    async clickRemoveButton(){
        await this.firstRemoveButton.click;
    }

    async clickMenuButton(){
        await this.menuButton.click();
    }

    async clickLogoutButton()
    {
        await this.logoutButton.click();
    }

}