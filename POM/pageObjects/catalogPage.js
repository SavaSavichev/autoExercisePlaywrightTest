// @ts-check

import ProductPage from "./productPage";
import AddedToCartModal from "./addedToCartModal";

class CatalogPage {
  /**
   * @param {import('@playwright/test').Page} page
   */

  constructor(page) {
    this.page = page;
  }

  locators = {
    getJeansViewProductButton: () =>
      this.page.locator("a[href='/product_details/33']"),
    getSareeBlueViewProductButton: () =>
      this.page.locator("a[href='/product_details/41']"),
    getSearchInputField: () => this.page.getByPlaceholder("Search Product"),
    getSubmitSearchButton: () => this.page.locator("#submit_search"),
    getSearchedItemName: () =>
      this.page.locator("div[class='productinfo text-center'] p"),
    getSearchedListOfItemsName: () => this.page.locator(".productinfo p"),
    getSearchResult: () => this.page.locator(".product-image-wrapper"),
    getListOfItems: () => this.page.locator("div.single-products > div > p"),
    getJeansImage: () => this.page.locator(".productinfo").nth(0),
    getAddToCartButtonJeans: () => this.page.locator(".add-to-cart").nth(1)
  };

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

  async getListOfSeatchItems() {
    return await this.locators.getListOfItems().allTextContents();
  }

  async clickAddToCartLink() {
    await this.locators.getJeansImage().hover();
    await this.locators.getAddToCartButtonJeans().click();

    return new AddedToCartModal(this.page);
  }
}

export default CatalogPage;
