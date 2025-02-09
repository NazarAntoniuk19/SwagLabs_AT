import loginPage from "../pageobjects/login.page.js";
import menuPage from "../pageobjects/menu.page.js";

describe("Checkout functionality", () => {
  it("should checkout order", async () => {
    await loginPage.open();
    await loginPage.login("standard_user", "secret_sauce");

    // Checking the availability of a block with products
    const inventoryContainer = await $("#inventory_container");
    await expect(inventoryContainer).toBeDisplayed();

    // To click on the "Add to cart" button
    await menuPage.clickAddToCardBtn();

    const badgeValue = await menuPage.badgeShoppingCard.getText();
    console.log(`Badge value: ${badgeValue}`);
    expect(badgeValue).toBe("1");

    // To click on the "Cart" button
    await menuPage.clickCartBtn();

    const cartItemText = await menuPage.cartItemName.getText();
    const trimmedCartItemText = cartItemText.trim();
    console.log(`Product in the cart: ${trimmedCartItemText}`);
    expect(trimmedCartItemText).toBe("Sauce Labs Backpack");

    // Open the Checkout page
    await menuPage.clickCheckoutBtn();

    const checkoutTitle = await $(".title=Checkout: Your Information");
    await expect(checkoutTitle).toBeDisplayed();

    // To fill the "First Name" field
    await menuPage.setValueInputValidFirstName();

    // To fill the "Last Name" field
    await menuPage.setValueInputValidLastName();

    // To fill the "Postal Code" field
    await menuPage.setValueInputPostalCode();

    // To click on the "Continue" button
    await menuPage.clickContinueBtn();

    const overviewTitle = await $(".title=Checkout: Overview");
    await expect(overviewTitle).toBeDisplayed();

    // To finish the order
    await menuPage.clickFinishBtn();

    const thankYouMessage = await $(".complete-header");
    await expect(thankYouMessage).toHaveText("Thank you for your order!");

    // To click on the "Back Home" button
    await menuPage.clickBackHomeBtn();

    const inventoryTitle = await $(".title=Products");
    await expect(inventoryTitle).toBeDisplayed();
  });
});
