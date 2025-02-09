import loginPage from "../pageobjects/login.page.js";
import menuPage from "../pageobjects/menu.page.js";

describe("Logout functionality", () => {
  it("should redirect to the Login page", async () => {
    await loginPage.open();
    await loginPage.login("standard_user", "secret_sauce");
    await menuPage.isInventoryDisplayed();
    await menuPage.clickBurgerBtn();
    await menuPage.isSideBarDisplayed();
    await menuPage.clickLogoutBtn();
    await menuPage.isMainPageDisplayed();
  });
});
