// @ts-check

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
        getInputNameField: () => this.page.getByPlaceholder("Name"),
        getInputEmailField: () => this.page.locator("input[data-qa='signup-email']"),
        getSubmitButton: () => this.page.locator("button[data-qa='signup-button']")
    }

    async inputName(name) {
        await this.locators.getInputNameField().fill(name);

        return this;
    }

    async inputEmail(email) {
        await this.locators.getInputEmailField().fill(email);

        return this;
    }

    async clickSubmitButton() {
        await this.locators.getSubmitButton().click();

        return new SignupPage(this.page);
    }

}

export default LoginPage;