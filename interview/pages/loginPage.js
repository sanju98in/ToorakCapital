exports.LoginPage = class LoginPage{

    constructor(page){

        this.page=page;
        this.title=page.getByText('Prijavi se na Tinel Workshop')
        this.loginButton=page.locator('[data-test="login-button"]')
        this.userName = page.locator('[data-test="username"]')
        this.password = page.locator('[data-test="password"]')  
    }
    async openPage(url){
        await this.page.goto(url);
        await this.page.pause();
    }

    async setUserName(username){
        await this.userName.fill(username);
    }
    async setPassword(password){
        await this.password.fill(password);
    }   
    async clickLoginButton(){
        await this.loginButton.click();
    }
    async clickCreateAccountLink(){
        this.clickCreateAccountLink.click();
    }
}