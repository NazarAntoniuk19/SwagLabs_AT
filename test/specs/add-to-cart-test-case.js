import loginPage from "../pageobjects/login.page.js";
import menuPage from "../pageobjects/menu.page.js";

describe("Badge value stays the same after relogin", () => {
  it("the value should stays the same after relogin", async () => {
    await loginPage.open();
    await loginPage.login("standard_user", "secret_sauce");

    // Checking the availability of a block with products
    const inventoryContainer = await $("#inventory_container");
    expect(inventoryContainer).toBeDisplayed();

    //Add to cart
    await menuPage.clickAddToCardBtn();

    const badgeValue = await menuPage.badgeShoppingCard.getText();
    console.log(`Badge value: ${badgeValue}`);
    expect(badgeValue).toBe("1"); // Using `toBe` to compare strings

    // Sidebar
    await menuPage.clickBurgerBtn();

    const SideBar = await $(".bm-menu");
    expect(SideBar).toBeDisplayed(".bm-item-list");

    // Logout function
    await menuPage.clickLogoutBtn();

    const mainPage = await $(".login_container");
    expect(mainPage).toBeDisplayed();

    // Login again
    await loginPage.login("standard_user", "secret_sauce");

    // To check product availability in the cart again
    const newBadgeValue = await menuPage.badgeShoppingCard.getText();
    const newTrimmedBadgeValue = newBadgeValue.trim();
    console.log(`Badge value after re-login: ${newTrimmedBadgeValue}`);
    expect(newTrimmedBadgeValue).toBe("1");

    // Click on the cart
    await menuPage.clickCartBtn();

    const cartItemText = await menuPage.cartItemName.getText();
    const trimmedCartItemText = cartItemText.trim();
    console.log(`Product in the cart: ${trimmedCartItemText}`);
    expect(trimmedCartItemText).toBe("Sauce Labs Backpack");
  });
});
