import loginPage from "../pageobjects/login.page.js";
import menuPage from "../pageobjects/menu.page.js";

// TestCase 1. Login with valid username and password
describe("Login functionality", () => {
  it("should not fail after clicking the submit button", async () => {
    await loginPage.open();
    await loginPage.login("standard_user", "secret_sauce");
    await menuPage.isInventoryDisplayed();
  });

  // TestCase 2. Login with valid username and invalid password
  it("should fail because password is invalid", async () => {
    await loginPage.open();
    await loginPage.login("standard_user", ".................");
    expect(browser).toHaveUrl("https://www.saucedemo.com/");

    const errorMessage = $('[data-test="error"]');
    expect(errorMessage).toBeDisplayed(
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  // TestCase 3. Login with invalid username and valid password
  it("should fail because login is invalid", async () => {
    await loginPage.open();
    await loginPage.login("standarD_user", "secret_sauce");

    expect(browser).toHaveUrl("https://www.saucedemo.com/");

    const errorMessage = $('[data-test="error"]');
    expect(errorMessage).toBeDisplayed(
      "Epic sadface: Username and password do not match any user in this service"
    );
  });
});
