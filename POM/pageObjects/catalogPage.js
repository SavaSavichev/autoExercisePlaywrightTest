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
        getSareeBlueViewProductButton: () => this.page.locator("a[href='/product_details/41']"),
        getSearchInputField: () => this.page.getByPlaceholder("Search Product"),
        getSubmitSearchButton: () => this.page.locator("#submit_search"),
        getSearchedItemName: () => this.page.locator("div[class='productinfo text-center'] p"),
        getSearchedListOfItemsName: () => this.page.locator(".productinfo p"),
        getSearchResult: () => this.page.locator(".product-image-wrapper")
    }

    async clickJeansViewProductButton() {
        await this.locators.getJeansViewProductButton().click();

        return new ProductPage(this.page);
    }

    async clickSareeViewProductButton() {
        await this.locators.getSareeBlueViewProductButton().click();

        return new ProductPage(this.page);
    }

    async enterItemNameSearchField(itemName) {
        await this.locators.getSearchInputField().fill(itemName);

        return this;
    } 

    async clickSubmitSearch() {
        await this.locators.getSubmitSearchButton().click();

        return this;
    }
}

export default CatalogPage;