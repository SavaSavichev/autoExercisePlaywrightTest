// @ts-check

import AddedToCartModal from './addedToCartModal';
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
        getWomenButtonFromCategory: () => this.page.locator(".panel-title a[href='#Women']"),
        getSareeLinkFromWomenCategory: () => this.page.locator("a[href='/category_products/7']"),
        getJeansLinkFromMenCategory: () => this.page.locator("a[href='/category_products/6']"),
        getBlueTopImage: () => this.page.locator(".productinfo").nth(0),
        getAddToCartButtonBlueTop: () => this.page.locator(".add-to-cart").nth(1)
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

    async clickAddToCartBlueTop() {
        await this.locators.getBlueTopImage().hover();
        await this.locators.getAddToCartButtonBlueTop().click();

        return new AddedToCartModal(this.page);
    }

    async clickWomenButtonFromCategory() {
        await this.locators.getWomenButtonFromCategory().click();

        return this;
    }

    async clickSareeLinkFromWomenCategory() {
        await this.locators.getSareeLinkFromWomenCategory().click();

        return new CatalogPage(this.page);
    }
}

export default MainPage;