import LoginPage from "../pageobjects/login.page.js";
import MenuPage from "../pageobjects/menu.page.js";

async function login(username, password) {
  await LoginPage.open();
  await LoginPage.inputUsername.setValue(username);
  await LoginPage.inputPassword.setValue(password);
  await LoginPage.btnSubmit.click();
}

describe("Checkout without products functionality", () => {
  it("cart should be empty", async () => {
    await login("standard_user", "secret_sauce");

    // Checking the availability of a block with products
    const inventoryContainer = await $("#inventory_container");
    await expect(inventoryContainer).toBeDisplayed();

    // To click on the "Cart" button
    await MenuPage.btnCart.click();
    await browser.pause(4000);

    const cartTitle = await $(".title=Your Cart");
    await expect(cartTitle).toBeDisplayed();

    const cartItem = await $(".cart_item");
    await expect(cartItem).not.toBeDisplayed();

    // To click on the "Checkout" button
    const checkoutButton = await $("#checkout");
    await expect(checkoutButton).toBeDisplayed();
    await expect(checkoutButton).toBeClickable();

    await checkoutButton.click();

    // Check if the message "Cart is empty" appears
    const emptyCartMessage = await $('//*[text()="Cart is empty"]');
    await expect(emptyCartMessage).toBeDisplayed();
  });
});
