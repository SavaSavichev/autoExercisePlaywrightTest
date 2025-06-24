// @ts-check

class CartPage {
     /**
   * @param {import('@playwright/test').Page} page
   */

     constructor(page) {
        this.page = page;
    }

    locators = {
        getQuantity: () => this.page.locator(".cart_quantity button")
    } 

}

export default CartPage;