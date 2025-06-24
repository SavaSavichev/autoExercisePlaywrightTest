// import { test, expect } from "@playwright/test";
// import AccountCreatedPage from "../pageObjects/accountCreatedPage";
// import Header from "../pageObjects/header";
// import LoginPage from "../pageObjects/loginPage";
// import MainPage from "../pageObjects/mainPage";
// import SignupPage from "../pageObjects/signupPage";

// test.describe("Auth tests", () => {
//     test.beforeEach(async ({ page }) => {
//         const mainPage = new MainPage(page);
//         await mainPage.loadMainPage();
//     });

//     test("Success register new user", async ({ page }) => {
//         const header = new Header(page);

//         await header.clickSingupLoginLink();

//         const loginPage = new LoginPage(page);

//         await loginPage.inputName("art");
//         await loginPage.inputEmail("test12@ss.cc");
//         await loginPage.clickSubmitButton();

//         const signupPage = new SignupPage(page);

//         await signupPage.clickMrRadioButton();
//         await signupPage.enterName("Artem");
//         await signupPage.enterPassword("123456");
//         await signupPage.enterFirstName("Artem");
//         await signupPage.enterLastName("Ooooooo");
//         await signupPage.enterAdress("1 Pushkina str");
//         await signupPage.enterState("Provincia");
//         await signupPage.enterCity("Melboorne");
//         await signupPage.enterZip("0000");
//         await signupPage.enterPhone("+00021212000");
//         await signupPage.clickSubmitButton();

//         const accountCreatedPage = new AccountCreatedPage(page);
        
//         await expect(accountCreatedPage.locators.getHeaderText()).toHaveText("Account Created!");
//     });

// });