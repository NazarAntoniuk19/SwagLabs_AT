import loginPage from "../pageobjects/login.page.js";

// TestCase 1. Login with valid username and password
describe("Login functionality", () => {
  it("should not fail after clicking the submit button", async () => {
    await loginPage.open();
    await loginPage.login("standard_user", "secret_sauce");

    // Checking the availability of a block with products
    const inventoryContainer = $("#inventory_container");
    expect(inventoryContainer).toBeDisplayed();
  });

  // TestCase 2. Login with valid username and invalid password
  it("should fail because password is invalid", async () => {
    await loginPage.open();
    await loginPage.login("standard_user", ".................");

    // Checking that the user remains on the login page
    expect(browser).toHaveUrl("https://www.saucedemo.com/");

    // Check the error message
    const errorMessage = $('[data-test="error"]');
    expect(errorMessage).toBeDisplayed(
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  // TestCase 3. Login with invalid username and valid password
  it("should fail because login is invalid", async () => {
    await loginPage.open();
    await loginPage.login("standarD_user", "secret_sauce");

    // Checking that the user remains on the login page
    expect(browser).toHaveUrl("https://www.saucedemo.com/");
    // Check the error message
    const errorMessage = $('[data-test="error"]');
    expect(errorMessage).toBeDisplayed(
      "Epic sadface: Username and password do not match any user in this service"
    );
  });
});
