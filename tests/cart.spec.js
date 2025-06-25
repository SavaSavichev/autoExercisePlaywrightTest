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
        await expect(cartPage.locators.getItemDescription()).toHaveText(cartData.blueTopText);
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
        await expect(cartPage.locators.getItemDescription()).toHaveText(cartData.sareeText);
    });
});