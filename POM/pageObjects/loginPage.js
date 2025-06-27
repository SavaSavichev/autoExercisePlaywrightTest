// @ts-check

import MainPage from './mainPage';
import SignupPage from './signupPage';

class LoginPage {

    /**
   * @param {import('@playwright/test').Page} page
   */

    constructor(page) {
        this.page = page;
    }

    locators = {
        getText: () => this.page.locator("div[class='login-form'] h2"),
        getLoginEmailInputField: () => this.page.getByPlaceholder("Email Address").nth(0),
        getLoginPasswordInputField: () => this.page.getByPlaceholder("Password"),
        getLoginButton: () => this.page.locator("button[data-qa='login-button']"),
        getSingupInputNameField: () => this.page.getByPlaceholder("Name"),
        getSungupInputEmailField: () => this.page.locator("input[data-qa='signup-email']"),
        getSubmitButton: () => this.page.locator("button[data-qa='signup-button']"),
        getLoginErrorMessage: () => this.page.locator("p:nth-child(4)").nth(0),
        getRegisterErrorMessage: () => this.page.locator("p:nth-child(5)")
    }

    async enterLoginEmail(email) {
        await this.locators.getLoginEmailInputField().clear();
        await this.locators.getLoginEmailInputField().fill(email);

        return this;
    }

    async enterLoginPassword(password) {
        await this.locators.getLoginPasswordInputField().fill(password);

        return this;
    }

    async clickLoginButton() {
        await this.locators.getLoginButton().click();

        return new MainPage(this.page);
    }

    async enterSignupName(name) {
        await this.locators.getSingupInputNameField().clear();
        await this.locators.getSingupInputNameField().fill(name);

        return this;
    }

    async enterSignupEmail(email) {
        await this.locators.getSungupInputEmailField().clear();
        await this.locators.getSungupInputEmailField().fill(email);

        return this;
    }

    async clickSubmitButton() {
        await this.locators.getSubmitButton().click();

        return new SignupPage(this.page);
    }

}

export default LoginPage;