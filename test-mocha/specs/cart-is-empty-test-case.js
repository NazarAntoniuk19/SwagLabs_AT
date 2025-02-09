import loginPage from "../pageobjects/login.page.js";
import menuPage from "../pageobjects/menu.page.js";

describe("Checkout without products functionality", () => {
  it("cart should be empty", async () => {
    await loginPage.open();
    await loginPage.login("standard_user", "secret_sauce");
    await menuPage.isInventoryDisplayed();
    await menuPage.clickCartBtn();
    await menuPage.isCartTitleDisplayed();
    await menuPage.isCartItemDisplayed();
    await menuPage.isCheckoutBtnDisplayed();
    await menuPage.clickCheckoutBtn();
    await menuPage.isEmptyCartMessageDisplayed();
  });
});
