import { test, expect } from "@playwright/test";
import MainPage from "../POM/pageObjects/mainPage";
import Header from "../POM/pageObjects/header";
import { userData } from "../POM/helpers/testData";
import LoginPage from "../POM/pageObjects/loginPage";

test.describe("User Account – Registration, Login and Logout", () => {
    test.beforeEach(async ({ page }) => {
        const mainPage = new MainPage(page);
        await mainPage.loadMainPage();
    });

    test("Logs in an existing user", async ({ page }) => {
        const header = new Header(page);
        await header.clickSingupLoginLink();

        const loginPage = new LoginPage(page);
        await loginPage.enterLoginEmail(userData.email);
        await loginPage.enterLoginPassword(userData.pass);
        await loginPage.clickLoginButton();
    
        await expect(header.locators.getLoggedLink()).toContainText("Logged in as");
    });

    test("Logs out the current user", async ({ page }) => {
        const header = new Header(page);
        await header.clickSingupLoginLink();

        const loginPage = new LoginPage(page);
        await loginPage.enterLoginEmail(userData.email);
        await loginPage.enterLoginPassword(userData.pass);
        await loginPage.clickLoginButton();
        
        await header.clickLogoutLink();
        
        await expect(header.locators.getSingupLoginLink()).toBeVisible();
    });
});