import { $ } from "@wdio/globals";
import Page from "./page.js";

class MenuPage extends Page {
  get btnBurger() {
    return $("#react-burger-menu-btn");
  }

  get btnLogout() {
    return $("#logout_sidebar_link");
  }

  get btnAddToCard() {
    return $("#add-to-cart-sauce-labs-backpack");
  }

  get badgeShoppingCard() {
    return $(".shopping_cart_badge");
  }

  get btnCart() {
    return $(".shopping_cart_link");
  }

  get cartItemName() {
    return $(".inventory_item_name");
  }

  get btnSort() {
    return $(".product_sort_container");
  }

  get btnCheckout() {
    return $("#checkout");
  }

  get inputValidFirstName() {
    return $("#first-name");
  }

  get inputValidLastName() {
    return $("#last-name");
  }

  get inputPostalCode() {
    return $("#postal-code");
  }

  get btnContinue() {
    return $("#continue");
  }

  get btnFinish() {
    return $("#finish");
  }

  get btnBackHome() {
    return $("#back-to-products");
  }

  open() {
    return super.open("inventory.html");
  }
}

export default new MenuPage();
