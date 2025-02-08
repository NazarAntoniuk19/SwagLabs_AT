import loginPage from "../pageobjects/login.page.js";
import menuPage from "../pageobjects/menu.page.js";

describe("Badge value stays the same after relogin", () => {
  it("the value should stays the same after relogin", async () => {
    await loginPage.open();
    await loginPage.login("standard_user", "secret_sauce");
    await menuPage.isInventoryDisplayed();
    await menuPage.clickAddToCardBtn();

    const badgeValue = await menuPage.badgeShoppingCard.getText();
    console.log(`Badge value: ${badgeValue}`);
    expect(badgeValue).toBe("1");

    await menuPage.clickBurgerBtn();
    await menuPage.isSideBarDisplayed();
    await menuPage.clickLogoutBtn();
    await menuPage.isMainPageDisplayed();

    await loginPage.login("standard_user", "secret_sauce");

    const newBadgeValue = await menuPage.badgeShoppingCard.getText();
    const newTrimmedBadgeValue = newBadgeValue.trim();
    console.log(`Badge value after re-login: ${newTrimmedBadgeValue}`);
    expect(newTrimmedBadgeValue).toBe("1");

    await menuPage.clickCartBtn();

    const cartItemText = await menuPage.cartItemName.getText();
    const trimmedCartItemText = cartItemText.trim();
    console.log(`Product in the cart: ${trimmedCartItemText}`);
    expect(trimmedCartItemText).toBe("Sauce Labs Backpack");
  });
});
