import { test, expect } from "@playwright/test";
import AddedToCartModal from "../pageObjects/addedToCartModal";
import CartPage from "../pageObjects/cartPage";
import CatalogPage from "../pageObjects/catalogPage";
import Header from "../pageObjects/header";
import MainPage from "../pageObjects/mainPage";
import ProductPage from "../pageObjects/productPage";
import { productData } from "../helpers/testData";

test.describe("Product Page – Interactions and Validations", () => {
    test.beforeEach(async ({ page }) => {
        const mainPage = new MainPage(page);
        await mainPage.loadMainPage();
    });

    test("Displays New label on product page", async ({ page }) => {
        const mainPage = new MainPage(page);
        await mainPage.clickMenTshirtViewProductButton();

        const productPage = new ProductPage(page);
        await expect(productPage.locators.getNewArrivalLable()).toBeVisible();
    });

    test("Returns to main page after clicking the logo", async ({ page }) => {
        const mainPage = new MainPage(page);
        await mainPage.clickMenTshirtViewProductButton();

        const header = new Header(page);
        await header.clickLogo();
        
        await expect(header.locators.getHomeLink()).toHaveCSS("color", "rgb(255, 165, 0)");
    });

    test("Sets jeans quantity and verifies it in the cart", async ({ page }) => {
        const mainPage = new MainPage(page);
        await mainPage.clickMenButtonFromCategory();
        await mainPage.clickJeansLinkFromMenCategory();

        const catalogPage = new CatalogPage(page);
        await catalogPage.clickJeansViewProductButton();

        const productPage = new ProductPage(page);
        await productPage.setQuantity(productData.quantity);
        await productPage.clickAddToCartButton();

        const addedToCartModal = new AddedToCartModal(page);
        await addedToCartModal.clickViewCartLink();

        const cartPage = new CartPage(page);
        
        await expect(cartPage.locators.getQuantity()).toHaveText(productData.quantity);
    });

    test("Adds a product review and verifies success message", async ({ page }) => {
        const mainPage = new MainPage(page);
        await mainPage.clickMenTshirtViewProductButton();

        const productPage = new ProductPage(page);
        await productPage.enterName(productData.name);
        await productPage.enterEmail(productData.email);
        await productPage.enterReviewText(productData.text);
        await productPage.clickSubmitButton();

        await expect(productPage.locators.getSuccessAddedReviewAlert()).toHaveText(productData.successAddReviewMessage);
    });
});