import loginPage from "../pageobjects/login.page.js";
import menuPage from "../pageobjects/menu.page.js";

describe("Checkout without products functionality", () => {
  it("cart should be empty", async () => {
    await loginPage.open();
    await loginPage.login("standard_user", "secret_sauce");

    // Checking the availability of a block with products
    const inventoryContainer = await $("#inventory_container");
    await expect(inventoryContainer).toBeDisplayed();

    // To click on the "Cart" button
    await menuPage.clickCartBtn();

    const cartTitle = await $(".title=Your Cart");
    await expect(cartTitle).toBeDisplayed();

    const cartItem = await $(".cart_item");
    await expect(cartItem).not.toBeDisplayed();

    // To click on the "Checkout" button
    const CheckoutButton = await $("#checkout");
    await expect(CheckoutButton).toBeDisplayed();
    await expect(CheckoutButton).toBeClickable();

    await menuPage.clickCheckoutBtn();

    // Check if the message "Cart is empty" appears
    const emptyCartMessage = await $('//*[text()="Cart is empty"]');
    await expect(emptyCartMessage).toBeDisplayed();
  });
});
