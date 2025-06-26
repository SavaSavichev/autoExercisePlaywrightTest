// @ts-check

class CartPage {
     /**
   * @param {import('@playwright/test').Page} page
   */

     constructor(page) {
        this.page = page;
    }

    locators = {
        getQuantity: () => this.page.locator(".cart_quantity button"),
        getItemDescription: () => this.page.locator(".cart_description a"),
        getPrice: () => this.page.locator(".cart_price"),
        getTotalPrice: () => this.page.locator(".cart_total_price"),
        getDeleteButton: () => this.page.locator(".fa.fa-times"),
        getEmptyCartMessage: () => this.page.locator("#empty_cart")
    }
    
    async getPrice() {
      const priceText = await this.locators.getPrice().textContent();
    
      if (!priceText) {
        throw new Error('Price text is null');
      }
    
      return parseInt(priceText.replace(/\D/g, ''), 10);
    }

    async getTotalPrice() {
      const totalPriceText = await this.locators.getTotalPrice().textContent();
    
      if (!totalPriceText) {
        throw new Error('Price text is null');
      }
    
      return parseInt(totalPriceText.replace(/\D/g, ''), 10);
    }

    async clickDeleteButton() {
      await this.locators.getDeleteButton().click();

      return this;
    }
}

export default CartPage;