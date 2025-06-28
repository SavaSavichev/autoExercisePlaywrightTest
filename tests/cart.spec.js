import { test, expect } from "@playwright/test";
import AddedToCartModal from "../POM/pageObjects/addedToCartModal";
import CartPage from "../POM/pageObjects/cartPage";
import CatalogPage from "../POM/pageObjects/catalogPage";
import MainPage from "../POM/pageObjects/mainPage";
import ProductPage from "../POM/pageObjects/productPage";
import { cartData } from "../POM/helpers/testData";

test.describe("Cart Page – User Interactions and Validations", () => {
  test.beforeEach(async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.loadMainPage();
  });

  test("Adds blue top to cart from the main page", async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.clickAddToCartBlueTop();

    const addedToCartModal = new AddedToCartModal(page);
    await addedToCartModal.clickViewCartLink();

    const cartPage = new CartPage(page);
    await expect(cartPage.locators.getItemDescription()).toHaveText(
      cartData.blueTopText,
    );
  });

  test("Adds saree to cart from the product page", async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.clickWomenButtonFromCategory();
    await mainPage.clickSareeLinkFromWomenCategory();

    const catalogPage = new CatalogPage(page);
    await catalogPage.clickSareeViewProductButton();

    const productPage = new ProductPage(page);
    productPage.clickAddToCartButton();

    const addedToCartModal = new AddedToCartModal(page);
    addedToCartModal.clickViewCartLink();

    const cartPage = new CartPage(page);
    await expect(cartPage.locators.getItemDescription()).toHaveText(
      cartData.sareeText,
    );
  });

  test("Updates total price according to quantity", async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.clickMenButtonFromCategory();
    await mainPage.clickJeansLinkFromMenCategory();

    const catalogPage = new CatalogPage(page);
    catalogPage.clickJeansViewProductButton();

    const productPage = new ProductPage(page);
    productPage.setQuantity(cartData.quantity);
    productPage.clickAddToCartButton();

    const addedToCartModal = new AddedToCartModal(page);
    await addedToCartModal.clickViewCartLink();

    const cartPage = new CartPage(page);
    const price = await cartPage.getPrice();
    const totalPrice = await cartPage.getTotalPrice();
    const quantity = Number(cartData.quantity);
    expect(totalPrice).toBe(price * quantity);
  });

  test("Deletes item from the cart", async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.clickAddToCartBlueTop();

    const addedToCartModal = new AddedToCartModal(page);
    await addedToCartModal.clickViewCartLink();

    const cartPage = new CartPage(page);
    cartPage.clickDeleteButton();

    await expect(cartPage.locators.getEmptyCartMessage()).toHaveText(
      cartData.emptyCartMessage,
    );
  });
});
