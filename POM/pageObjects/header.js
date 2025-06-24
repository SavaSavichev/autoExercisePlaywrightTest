// @ts-check

import LoginPage from "./loginPage";
import MainPage from "./mainPage";

class Header {

    constructor(page) {
        this.page = page;
    }

    locators = {
        getSingupLoginLink: () => this.page.locator("a[href='/login']"),
        getLogoIcon: () => this.page.locator(".logo"),
        getHomeLink: () =>this.page.locator(".navbar-nav a[href='/']")

    }

    async clickSingupLoginLink() {
        await this.locators.getSingupLoginLink().click();

        return new LoginPage(this.page);
    }

    async clickLogo() {
        await this.locators.getLogoIcon().click();

        return new MainPage(this.page);
    }
}

export default Header;