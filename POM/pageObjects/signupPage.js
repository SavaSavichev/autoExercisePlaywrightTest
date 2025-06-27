// @ts-check

import AccountCreatedPage from './accountCreatedPage';

class SignupPage {
    /**
   * @param {import('@playwright/test').Page} page
   */

    constructor(page) {
        this.page = page;
    }

    locators = {
        getHeaderText: () => this.page.getByText("Enter Account Information"),
        getMrRadioButton: () => this.page.locator("#uniform-id_gender1"),
        getInputNameField: () => this.page.locator("#name"),
        getInputPasswordField: () => this.page.locator("#password"),
        getInputFirstNameField: () => this.page.locator("#first_name"),
        getInputLastNameField: () => this.page.locator("#last_name"),
        getInputAdressField: () => this.page.locator("#address1"),
        getSelectCountry: () => this.page.locator("country"),
        getInputStateField: () => this.page.locator("#state"),
        getInputCityField: () => this.page.locator("#city"),
        getInputZipField: () => this.page.locator("#zipcode"),
        getInputPhoneField: () => this.page.locator("#mobile_number"),
        getSubmitButton: () => this.page.locator("button[data-qa='create-account']")
    }

    async clickMaleRadioButton() {
        await this.locators.getMrRadioButton().click();

        return this;
    }

    async enterName(name) {
        await this.locators.getInputNameField().fill(name);

        return this;
    }

    async enterPassword(pass) {
        await this.locators.getInputPasswordField().fill(pass);

        return this;
    }

    async enterFirstName(firstName) {
        await this.locators.getInputFirstNameField().fill(firstName);

        return this;
    }

    async enterLastName(lastName) {
        await this.locators.getInputLastNameField().fill(lastName);

        return this;
    }

    async enterAdress(adress) {
        await this.locators.getInputAdressField().fill(adress);

        return this;
    }

    async chooseCountry(country) {
        await this.locators.getSelectCountry().selectOption(country);

        return this;
    }

    async enterState(state) {
        await this.locators.getInputStateField().fill(state);

        return this;
    }

    async enterCity(city) {
        await this.locators.getInputCityField().fill(city);

        return this;
    }

    async enterZip(zipCode) {
        await this.locators.getInputZipField().fill(zipCode);

        return this;
    }

    async enterPhone(phoneNumber) {
        await this.locators.getInputPhoneField().fill(phoneNumber);

        return this;
    }

    async clickSubmitButton() {
        await this.locators.getSubmitButton().click();

        return new AccountCreatedPage(this.page);
    }
}

export default SignupPage;