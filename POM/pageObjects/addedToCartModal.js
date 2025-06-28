// @ts-check

import CartPage from "./cartPage";
import ProductPage from "./productPage";

class AddedToCartModal {
  /**
   * @param {import('@playwright/test').Page} page
   */

  constructor(page) {
    this.page = page;
  }

  locators = {
    getViewCartLink: () => this.page.locator("p a[href='/view_cart']"),
    getContinueShoppingButton: () => this.page.locator(".modal-footer button"),
  };

  async clickViewCartLink() {
    await this.locators.getViewCartLink().click();

    return new CartPage(this.page);
  }

  async clickContinueShoppingButton() {
    await this.locators.getContinueShoppingButton().click();

    return new ProductPage(this.page);
  }
}

export default AddedToCartModal;
