// @ts-check

import ProductPage from './productPage';

class CatalogPage {
    /**
   * @param {import('@playwright/test').Page} page
   */

    constructor(page) {
        this.page = page;
    }

    locators = {
        getJeansViewProductButton: () => this.page.locator("a[href='/product_details/33']"),
        getSareeBlueViewProductButton: () => this.page.locator("a[href='/product_details/41']")
    }

    async clickJeansViewProductButton() {
        await this.locators.getJeansViewProductButton().click();

        return new ProductPage(this.page);
    }

    async clickSareeViewProductButton() {
        await this.locators.getSareeBlueViewProductButton().click();

        return new ProductPage(this.page);
    }
}

export default CatalogPage;