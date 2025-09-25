// @ts-check

import CartPage from "./cartPage";
import CatalogPage from "./catalogPage";
import LoginPage from "./loginPage";
import MainPage from "./mainPage";

class Header {
  /**
   * @param {import('@playwright/test').Page} page
   */

  constructor(page) {
    this.page = page;
  }

  locators = {
    getSingupLoginLink: () => this.page.locator("a[href='/login']"),
    getLogoIcon: () => this.page.locator(".logo"),
    getHomeLink: () => this.page.locator(".navbar-nav a[href='/']"),
    getProductsLink: () => this.page.locator("a[href='/products']"),
    getLoggedLink: () => this.page.locator("li:nth-child(10) a:nth-child(1)"),
    getLogoutLink: () => this.page.locator("a[href='/logout']"),
    getCartLink: () => this.page.locator("li a[href='/view_cart']")
  };

  async clickSingupLoginLink() {
    await this.locators.getSingupLoginLink().click();

    return new LoginPage(this.page);
  }

  async clickLogo() {
    await this.locators.getLogoIcon().click();

    return new MainPage(this.page);
  }

  async clickLogoutLink() {
    await this.locators.getLogoutLink().click();

    return new LoginPage(this.page);
  }

  async clickProductsLink() {
    await this.locators.getProductsLink().click();

    return new CatalogPage(this.page);
  }

  async clickCartLink() {
    await this.locators.getCartLink().click();

    return new CartPage(this.page);
  }
}

export default Header;
