import loginPage from "../pageobjects/login.page.js";
import menuPage from "../pageobjects/menu.page.js";

describe("Logout functionality", () => {
  it("should redirect to the Login page", async () => {
    await loginPage.open();
    await loginPage.login("standard_user", "secret_sauce");

    // Checking the availability of a block with products
    const inventoryContainer = $("#inventory_container");
    expect(inventoryContainer).toBeDisplayed();

    // To click on the "Burger" btn
    await menuPage.clickBurgerBtn();

    const SideBar = $(".bm-menu");
    expect(SideBar).toBeDisplayed(".bm-item-list");

    // Logout function
    await menuPage.clickLogoutBtn();

    const mainPage = $(".login_container");
    expect(mainPage).toBeDisplayed();
  });
});
