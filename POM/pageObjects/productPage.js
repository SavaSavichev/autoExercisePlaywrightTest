// @ts-check

import { expect } from "@playwright/test";
import AddedToCartModal from "./addedToCartModal";

class ProductPage {
  /**
   * @param {import('@playwright/test').Page} page
   */

  constructor(page) {
    this.page = page;
  }

  locators = {
    getNewArrivalLable: () => this.page.locator(".newarrival"),
    getQuantityInput: () => this.page.locator("#quantity"),
    getAddToCartButton: () => this.page.locator(".cart"),
    getNameInputField: () => this.page.getByPlaceholder("Your Name"),
    getEmailInputField: () => this.page.locator("#email"),
    getReviewInputField: () => this.page.getByPlaceholder("Add Review Here!"),
    getSubmitButton: () => this.page.locator("#button-review"),
    getSuccessAddedReviewAlert: () => this.page.locator(".alert-success span"),
  };

  async setQuantity(quantity) {
    await this.locators.getQuantityInput().fill(quantity);

    return this;
  }

  async clickAddToCartButton() {
    await this.locators.getAddToCartButton().click();

    return new AddedToCartModal(this.page);
  }

  async enterName(name) {
    await this.locators.getNameInputField().fill(name);

    return this;
  }

  async enterEmail(email) {
    await this.locators.getEmailInputField().fill(email);

    return this;
  }

  async enterReviewText(text) {
    await this.locators.getReviewInputField().fill(text);

    return this;
  }

  async clickSubmitButton() {
    await this.locators.getSubmitButton().click();

    return this;
  }

  async expectOnProductPage() {
    await expect(this.page).toHaveURL(/\/products(?:\/)?$/);
  }
}

export default ProductPage;
