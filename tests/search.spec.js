import { test, expect } from "@playwright/test";
import { searchData } from "../POM/helpers/testData";
import CatalogPage from "../POM/pageObjects/catalogPage";
import Header from "../POM/pageObjects/header";
import MainPage from "../POM/pageObjects/mainPage";

test.describe("Search Page – User Interactions and Validations", () => {
    test.beforeEach(async ({ page }) => {
        const mainPage = new MainPage(page);
        await mainPage.loadMainPage();
    });

    test("Searchs existing item with full name", async ({ page }) => {
        const header = new Header(page);
        header.clickProductsLink();

        const catalogPage = new CatalogPage(page);
        await catalogPage.enterItemNameSearchField(searchData.existingItemName);
        await catalogPage.clickSubmitSearch();
    
        await expect(catalogPage.locators.getSearchedItemName()).toHaveText(searchData.existingItemName);
    });

    // test("Searchs existing item with part of the name", async ({ page }) => {
    //     const header = new Header(page);
    //     header.clickProductsLink();

    //     const catalogPage = new CatalogPage(page);
    //     await catalogPage.enterItemNameSearchField(searchData.partOfItemName);
    //     await catalogPage.clickSubmitSearch();
    
    //     await expect(catalogPage.locators.getSearchedItemName()).toHaveText(searchData.existingItemName);
    // });

    test("Searchs existing item with non-existent name", async ({ page }) => {
        const header = new Header(page);
        header.clickProductsLink();

        const catalogPage = new CatalogPage(page);
        await catalogPage.enterItemNameSearchField("fgsgsa");
        await catalogPage.clickSubmitSearch();
    
        await expect(catalogPage.locators.getSearchResult()).toBeHidden();
    });
});