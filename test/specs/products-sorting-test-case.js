import loginPage from "../pageobjects/login.page.js";
import menuPage from "../pageobjects/menu.page.js";

describe("Sorting functionality", () => {
  it("should select different sorting methods sequentially", async () => {
    await loginPage.open();
    await loginPage.login("standard_user", "secret_sauce");

    // Checking the availability of a block with products
    const inventoryContainer = await $("#inventory_container");
    await expect(inventoryContainer).toBeDisplayed();

    //To sort products
    await menuPage.clickSortBtn();

    const sortDropdown = await $(".product_sort_container");
    await expect(sortDropdown).toBeDisplayed();

    const sortingMethods = ["az", "za", "lohi", "hilo"];

    for (const method of sortingMethods) {
      await menuPage.clickSortBtn();
      await sortDropdown.selectByAttribute("value", method);
    }
  });
});
