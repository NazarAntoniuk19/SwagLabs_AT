import loginPage from "../pageobjects/login.page.js";
import menuPage from "../pageobjects/menu.page.js";

describe("Checkout functionality", () => {
  it("should checkout order", async () => {
    await loginPage.open();
    await loginPage.login("standard_user", "secret_sauce");

    const inventoryContainer = await $("#inventory_container");
    await expect(inventoryContainer).toBeDisplayed();

    await menuPage.clickAddToCardBtn();

    const badgeValue = await menuPage.badgeShoppingCard.getText();
    console.log(`Badge value: ${badgeValue}`);
    expect(badgeValue).toBe("1");

    await menuPage.clickCartBtn();

    const cartItemText = await menuPage.cartItemName.getText();
    const trimmedCartItemText = cartItemText.trim();
    console.log(`Product in the cart: ${trimmedCartItemText}`);
    expect(trimmedCartItemText).toBe("Sauce Labs Backpack");

    await menuPage.clickCheckoutBtn();

    const checkoutTitle = await $(".title=Checkout: Your Information");
    await expect(checkoutTitle).toBeDisplayed();

    await menuPage.setValueInputValidFirstName();

    await menuPage.setValueInputValidLastName();

    await menuPage.setValueInputPostalCode();

    await menuPage.clickContinueBtn();

    const overviewTitle = await $(".title=Checkout: Overview");
    await expect(overviewTitle).toBeDisplayed();

    await menuPage.clickFinishBtn();

    const thankYouMessage = await $(".complete-header");
    await expect(thankYouMessage).toHaveText("Thank you for your order!");

    await menuPage.clickBackHomeBtn();

    const inventoryTitle = await $(".title=Products");
    await expect(inventoryTitle).toBeDisplayed();
  });
});
