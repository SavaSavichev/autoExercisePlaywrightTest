import { test, expect } from "@playwright/test";
import MainPage from "../POM/pageObjects/mainPage";
import Header from "../POM/pageObjects/header";
import { userData } from "../POM/helpers/testData";
import { generateEmail } from "../POM/helpers/utils";
import LoginPage from "../POM/pageObjects/loginPage";
import SignupPage from "../POM/pageObjects/signupPage";
import AccountCreatedPage from "../POM/pageObjects/accountCreatedPage";

test.describe("User Account – Registration, Login and Logout", () => {
    test.beforeEach(async ({ page }) => {
        const mainPage = new MainPage(page);
        await mainPage.loadMainPage();
    });

    test("Logs in an existing user", async ({ page }) => {
        const header = new Header(page);
        await header.clickSingupLoginLink();

        const loginPage = new LoginPage(page);
        await loginPage.enterLoginEmail(userData.email)
        await loginPage.enterLoginPassword(userData.pass);
        await loginPage.clickLoginButton();
    
        await expect(header.locators.getLoggedLink()).toContainText(userData.loggedLinkText);
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

    test("Registers a new user successfully", async ({ page }) => {
        const header = new Header(page);

        await header.clickSingupLoginLink();

        const loginPage = new LoginPage(page);

        await loginPage.enterSignupName(userData.name);
        await loginPage.enterSignupEmail(generateEmail());
        await loginPage.clickSubmitButton();

        const signupPage = new SignupPage(page);

        await signupPage.clickMaleRadioButton();
        await signupPage.enterPassword(userData.pass);
        await signupPage.enterFirstName(userData.firstName);
        await signupPage.enterLastName(userData.lastName);
        await signupPage.enterAdress(userData.adress);
        await signupPage.enterState(userData.state);
        await signupPage.enterCity(userData.city);
        await signupPage.enterZip(userData.zip);
        await signupPage.enterPhone(userData.mobile);
        await signupPage.clickSubmitButton();

        const accountCreatedPage = new AccountCreatedPage(page);
        
        await expect(accountCreatedPage.locators.getHeaderText()).toHaveText(userData.successRegisterMessage);
    });

    test("Logs in an existing user with incorrect password", async ({ page }) => {
        const header = new Header(page);
        await header.clickSingupLoginLink();

        const loginPage = new LoginPage(page);
        await loginPage.enterLoginEmail(userData.email);
        await loginPage.enterLoginPassword(userData.incorrectPass);
        await loginPage.clickLoginButton();
    
        await expect(loginPage.locators.getLoginErrorMessage()).toContainText(userData.loginErrorMessage);
    });

    test("Registers a new user with existing email", async ({ page }) => {
        const header = new Header(page);

        await header.clickSingupLoginLink();

        const loginPage = new LoginPage(page);

        await loginPage.enterSignupName(userData.name);
        await loginPage.enterSignupEmail(userData.email);
        await loginPage.clickSubmitButton();
    
        await expect(loginPage.locators.getRegisterErrorMessage()).toContainText(userData.registerErrorMessage);
    });
});