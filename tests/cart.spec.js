import { test, expect } from "@playwright/test";
import AddedToCartModal from "../POM/pageObjects/addedToCartModal";
import CartPage from "../POM/pageObjects/cartPage";
import MainPage from "../POM/pageObjects/mainPage";

test.describe("Cart Page – User Interactions and Validations", () => {
    test.beforeEach(async ({ page }) => {
        const mainPage = new MainPage(page);
        await mainPage.loadMainPage();
    });

    test("Adds laptop to cart from the main page", async ({ page }) => {
        const mainPage = new MainPage(page);
        await mainPage.clickAddToCartBlueTop();
        
        const addedToCartModal = new AddedToCartModal(page);
        await addedToCartModal.clickViewCartLink();

        const cartPage = new CartPage(page);

        await expect(cartPage.locators.getItemDescription()).toHaveText("Blue Top");
    });
});