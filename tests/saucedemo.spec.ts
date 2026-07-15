// SauceDemo tests - branch version
import {test, expect} from "@playwright/test";

test.describe ("SauceDemo", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    });

    test("Task 1 - successful login", async ({ page}) => {
        await page.getByPlaceholder("Username").fill("standard_user");
        await page.getByPlaceholder("Password").fill("secret_sauce");
        await page.getByRole("button", { name: "Login" }).click();

        await expect(
        page, 
        "User should be redirected to the inventory page after successful login"
    ).toHaveURL(/inventory/);
    });

    // Practice branch - adding a test comment

test("Test 2 - Negative login shows error", async ({ page }) => {
await page.getByPlaceholder("Username").fill("standard_user");
await page.getByPlaceholder("Password").fill("wrong_password");
await page.getByRole("button", { name: "Login" }).click();

await expect(page.getByTestId("error"),
"Error should appear for wrong credentials"
).toBeVisible();
});

test("Test - Locked out user cannot login", async ({ page }) => {
    // 1. Заповнити username - locked_out_user
    await page.getByPlaceholder("Username").fill("locked_out_user");
    // 2. Заповнити password - secret_sauce
    await page.getByPlaceholder("Password").fill("secret_sauce");
    // 3. Клікнути Login
    await page.getByRole("button", {name: "Login"}).click();
    // 4. Перевірити помилку - точний текст
    await expect(page.getByTestId("error"),
"Error should appear for locked out user")
    .toHaveText("Epic sadface: Sorry, this user has been locked out.");
});

test('Test 5 - Empty form validation', async ({ page }) => {
    await page.getByRole("button", {name: "Login"}).click();

await expect (
    page.getByTestId("error"),
    "Error should be shown when the credentials are nor filled")
    .toBeVisible();
});

test("Cannot access inventory without login", async ({ page }) => {
await page.goto("/inventory.html");

await expect(
    page,
    "User should not be on inventory page when not logged in")
    .not.toHaveURL(/inventory/);

await expect(
    page.getByRole("button", {name: "Login"}),
    "Login button should be visible after redirect")
    .toBeVisible();
});

test.describe("Authenticated user", () => {
test.beforeEach(async ({ page }) => {
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button", { name: "Login" }).click();
});

test("Test 3 - Add inventory item to cart", async ({ page }) => {
await page.getByTestId("add-to-cart-sauce-labs-backpack").click();

await expect(
    page.getByTestId("shopping-cart-badge"),
    "Cart badge should show 1 after adding an item to the cart"
).toHaveText("1");
});

test('Test 4 - Remove product from cart', async ({ page }) => {
    await page.getByTestId("add-to-cart-sauce-labs-backpack").click();
    await page.getByTestId("remove-sauce-labs-backpack").click();
    
    await expect(
        page.getByTestId("shopping-cart-badge"),
        "Cart badge should be removed after removing the cart item")
        .not.toBeVisible();
});
});
});

// End of test suite
