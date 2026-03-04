import { test, expect } from "@playwright/test";
import { HomePage } from "../../page-objects/HomePage";
import { LoginPage } from "../../page-objects/LoginPage";

test.describe("Transfer Funds and Make Payments", () => {
  let homePage: HomePage;
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    homePage.visit();
    homePage.clickOnSignIn();
    loginPage.login("username", "password");

    // await page.goto("http://zero.webappsecurity.com/index.html");
    // await page.click("#signin_button");
    // await page.type("#user_login", "username");
    // await page.type("#user_password", "password");
    // await page.click("text=Sign in");
    // await page.waitForTimeout(1000);
    // await page.goto("http://zero.webappsecurity.com/index.html");
    // await page.waitForTimeout(1000);
  });

  test("Verify the results for each account", async ({ page }) => {
    await page.waitForTimeout(1000);
    await page.goto("http://zero.webappsecurity.com/index.html");
    await page.waitForTimeout(1000);
    await page.goto(
      "http://zero.webappsecurity.com/bank/account-activity.html",
    );

    await page.selectOption("#aa_accountId", "2");
    const checkingAccount = await page.locator(
      "#all_transactions_for_account tbody tr",
    );
    await expect(checkingAccount).toHaveCount(3);

    await page.selectOption("#aa_accountId", "4");
    const checkingLoan = await page.locator(
      "#all_transactions_for_account tbody tr",
    );
    await expect(checkingLoan).toHaveCount(2);

    await page.selectOption("#aa_accountId", "6");
    const checkingBrokerage = await page.locator(".well");
    await expect(checkingBrokerage).toBeVisible();
  });
});
