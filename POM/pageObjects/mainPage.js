// @ts-check

import CatalogPage from './catalogPage';
import ProductPage from './productPage';

class MainPage {
    /**
   * @param {import('@playwright/test').Page} page
   */

    constructor(page) {
        this.page = page;
    }

    locators = {
        getMenTshirtViewProductButton: () => this.page.locator("a[href='/product_details/2']"),
        getMenButtonFromCategory: () => this.page.locator(".panel-title a[href='#Men']"),
        getJeansLinkFromMenCategory: () => this.page.locator("a[href='/category_products/6']")
    }

    async loadMainPage() {
        await this.page.goto("/");
    }

    async clickMenTshirtViewProductButton() {
        await this.locators.getMenTshirtViewProductButton().click();

        return new ProductPage(this.page);
    }

    async clickMenButtonFromCategory() {
        await this.locators.getMenButtonFromCategory().click();

        return this;
    }

    async clickJeansLinkFromMenCategory() {
        await this.locators.getJeansLinkFromMenCategory().click();

        return new CatalogPage(this.page);
    }
}

export default MainPage;