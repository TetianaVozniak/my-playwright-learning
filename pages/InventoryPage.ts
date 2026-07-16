import { type Locator, type Page } from "@playwright/test";

export class InventoryPage {
  readonly page: Page;
  readonly cartBadge: Locator;
  readonly cartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartBadge = page.getByTestId("shopping-cart-badge");
    this.cartLink = page.locator(".shopping_cart_link");
  }

  async addProductToCart(productName: string) {
    const testId = `add-to-cart-${productName.toLowerCase().replace(/ /g, "-")}`;
    await this.page.getByTestId(testId).click();
  }

  async removeProductFromCart(productName: string) {
    const testId = `remove-${productName.toLowerCase().replace(/ /g, "-")}`;
    await this.page.getByTestId(testId).click();
  }

  async openCart() {
    await this.cartLink.click();
  }
}