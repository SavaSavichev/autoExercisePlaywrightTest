// @ts-check

class AccountCreatedPage {
        /**
   * @param {import('@playwright/test').Page} page
   */

    constructor(page) {
        this.page = page;
    }
    
    locators = {
        getHeaderText: () => this.page.locator("h2[class='title text-center'] b")
    }
}

export default AccountCreatedPage;