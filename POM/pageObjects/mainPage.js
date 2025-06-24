// @ts-check

class MainPage {
    constructor(page) {
        this.page = page;
    }

    locators = {

    }

    async loadMainPage() {
        await this.page.goto("/");
    }
}

export default MainPage;