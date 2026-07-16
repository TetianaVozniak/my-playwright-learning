import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";

test.describe("Checkout", () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;
  let cartPage: CartPage;
  let checkoutPage: CheckoutPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);

    await loginPage.open();
    await loginPage.login("standard_user", "secret_sauce");
  });

  test("user can complete checkout successfully", async ({ page }) => {
    await test.step("Add product to cart", async () => {
      await inventoryPage.addProductToCart("Sauce Labs Backpack");
      await expect(inventoryPage.cartBadge).toHaveText("1");
    });

    await test.step("Open cart and start checkout", async () => {
      await inventoryPage.openCart();
      await cartPage.checkout();
    });

    await test.step("Fill checkout information", async () => {
      await checkoutPage.fillInfo("John", "Smith", "12345");
    });

    await test.step("Finish checkout and verify success", async () => {
      await checkoutPage.finish();
      await expect(checkoutPage.successMessage).toContainText("Thank you for your order");
    });
  });
});