import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";

test.describe("Cart", () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);

    await loginPage.open();
    await loginPage.login("standard_user", "secret_sauce");
  });

  test("adding product shows cart badge with 1", async () => {
    await inventoryPage.addProductToCart("Sauce Labs Backpack");
    await expect(inventoryPage.cartBadge).toHaveText("1");
  });

  test("removing product removes cart badge", async () => {
    await inventoryPage.addProductToCart("Sauce Labs Backpack");
    await inventoryPage.removeProductFromCart("Sauce Labs Backpack");
    await expect(inventoryPage.cartBadge).not.toBeVisible();
  });

  test("adding two products shows cart badge with 2", async () => {
    await inventoryPage.addProductToCart("Sauce Labs Backpack");
    await inventoryPage.addProductToCart("Sauce Labs Bike Light");
    await expect(inventoryPage.cartBadge).toHaveText("2");
  });
});