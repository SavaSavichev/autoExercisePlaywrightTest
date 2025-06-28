# autoExercisePlaywrightTest

Automated testing pet project using JavaScript and Playwright for end-to-end testing of a web application.

---

## About the project

This is a personal project created to practice and learn automation testing with Playwright. The project contains both positive and negative test cases covering key functionality of the tested web app.

---

## Technologies used

- JavaScript
- Playwright — for browser automation and writing tests

---

## Quick start

### 1. Clone the repository

```bash
git clone https://github.com/SavaSavichev/autoExercisePlaywrightTest.git
cd autoExercisePlaywrightTest
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run tests

```bash
npx playwright test
```

By default, tests run in headless mode. To run tests with the browser UI visible, use:

```bash
npx playwright test --headed
```

---

## Project structure

- `tests/` — folder containing test files  
- `POM/pageObjects/` — Page Object Model files  
- `POM/helpers/` — contains shared test data (`testData.js`) for user, product, cart, and search information, as well as utility functions (`utils.js`) such as dynamic email generation

---

Thank you for your attention!
