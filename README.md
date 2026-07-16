# Final Project — Playwright Test Suite

## Test target
SauceDemo (https://www.saucedemo.com)

## Covered user journey
Login → product selection → cart → checkout

## Test cases

### Login tests (tests/login.spec.ts)
- Standard user can log in
- Locked user sees error message
- Wrong password shows error

### Cart tests (tests/cart.spec.ts)
- Adding product shows cart badge with 1
- Removing product removes cart badge
- Adding two products shows cart badge with 2

### Checkout test (tests/checkout.spec.ts)
- User can complete checkout successfully

## Project structure
- `pages/` — Page Object classes (LoginPage, InventoryPage, CartPage, CheckoutPage)
- `tests/` — test specs (*.spec.ts)
- `playwright.config.ts` — Playwright configuration

## How to run

\`\`\`bash
npm install
npx playwright install
npx playwright test
npx playwright show-report
\`\`\`

## Notes
- No hard waits (`waitForTimeout`) are used
- Tests use semantic locators (`getByRole`, `getByTestId`, `getByPlaceholder`)
- All assertions include failure messages for easier debugging
- Test structure follows Page Object Model pattern

## Known limitations
- This suite covers only the main user journey (login → cart → checkout)
- It does not cover all possible edge cases (e.g. all user types, all products)
