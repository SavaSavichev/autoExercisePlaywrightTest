import { test, expect } from "@playwright/test";
import AddedToCartModal from "../POM/pageObjects/addedToCartModal";
import CartPage from "../POM/pageObjects/cartPage";
import CatalogPage from "../POM/pageObjects/catalogPage";
import MainPage from "../POM/pageObjects/mainPage";
import Header from "../POM/pageObjects/header";
import ProductPage from "../POM/pageObjects/productPage";
import { cartData, productData } from "../POM/helpers/testData";

test.describe("Cart Page – User Interactions and Validations", () => {
  test.beforeEach(async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.loadMainPage();
  });

  test("Empty cart link navigates to product page", async ({ page }) => {
    const header = new Header(page);
    await header.clickCartLink();

    const cartPage = new CartPage(page);
    await cartPage.clickEmptyCartLink();

    const productPage = new ProductPage(page);
    await productPage.expectOnProductPage();
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
    await productPage.clickAddToCartButton();

    const addedToCartModal = new AddedToCartModal(page);
    await addedToCartModal.clickViewCartLink();

    const cartPage = new CartPage(page);
    await expect(cartPage.locators.getItemDescription()).toHaveText(
      cartData.sareeText,
    );
  });

  test("Adds jeans to cart from the search page", async ({ page }) => {
    const header = new Header(page);
    await header.clickProductsLink();

    const catalogPage = new CatalogPage(page);
    await catalogPage.enterItemNameSearchField(cartData.jeansForSearch);
    await catalogPage.clickSubmitSearch();
    await catalogPage.clickAddToCartLink();

    const addedToCartModal = new AddedToCartModal(page);
    await addedToCartModal.clickViewCartLink();

    const cartPage = new CartPage(page);
    await expect(cartPage.locators.getItemDescription()).toHaveText(
      cartData.jeansForSearch,
    );
  });

  test("Updates total price according to quantity", async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.clickMenButtonFromCategory();
    await mainPage.clickJeansLinkFromMenCategory();

    const catalogPage = new CatalogPage(page);
    await catalogPage.clickJeansViewProductButton();

    const productPage = new ProductPage(page);
    await productPage.setQuantity(cartData.quantity);
    await productPage.clickAddToCartButton();

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
    await cartPage.clickDeleteButton();

    await expect(cartPage.locators.getEmptyCartMessage()).toHaveText(
      cartData.emptyCartMessage);
  });

  test("Continue shopping keeps user on product page", async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.clickMenTshirtViewProductButton();

    const productPage = new ProductPage(page);
    await productPage.clickAddToCartButton();
    
    const addedToCartModal = new AddedToCartModal(page);
    await addedToCartModal.clickContinueShoppingButton();

    await expect(productPage.locators.getProductName()).toHaveText(
      productData.productName);
  });

  test("Empty cart shows empty state", async ({ page }) => {
    const header = new Header(page);
    await header.clickCartLink();

    const cartPage = new CartPage(page);
    await cartPage.deleteAllIfAny();

    await expect(cartPage.locators.getItemDescription()).toHaveCount(0);
    await expect(cartPage.locators.getEmptyCartMessage()).toHaveText(cartData.emptyCartMessage);
    await expect(cartPage.locators.getEmptyCartMessage()).toBeVisible();
    await expect(cartPage.locators.getEmptyCartLink()).toHaveAttribute('href', '/products');
  });
});
