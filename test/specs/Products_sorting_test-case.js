import LoginPage from "../pageobjects/login.page.js";
import MenuPage from "../pageobjects/menu.page.js";

async function login(username, password) {
  await LoginPage.open();
  await LoginPage.inputUsername.setValue(username);
  await LoginPage.inputPassword.setValue(password);
  await LoginPage.btnSubmit.click();
}

describe("Sorting functionality", () => {
  it("should select different sorting methods sequentially", async () => {
    await login("standard_user", "secret_sauce");

    // Checking the availability of a block with products
    const inventoryContainer = await $("#inventory_container");
    await expect(inventoryContainer).toBeDisplayed();

    //To sort products
    await MenuPage.btnSort.click();

    const sortDropdown = await $(".product_sort_container");
    await expect(sortDropdown).toBeDisplayed();

    const sortingMethods = ["az", "za", "lohi", "hilo"];

    for (const method of sortingMethods) {
      await MenuPage.btnSort.click();
      await sortDropdown.selectByAttribute("value", method);
    }
  });
});
