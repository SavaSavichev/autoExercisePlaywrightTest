// @ts-check

import LoginPage from "./loginPage";

class Header {

    constructor(page) {
        this.page = page;
    }

    locators = {
        getSingupLoginLink: () => this.page.locator("a[href='/login']"),

    }

    async clickSingupLoginLink() {
        await this.locators.getSingupLoginLink().click();

        return new LoginPage(this.page);
    }

}

export default Header;