import { test, expect } from "@playwright/test";
import { LoginPage } from "../../page-objects/LoginPage";
import { HomePage } from "../../page-objects/HomePage";

test.describe.parallel("Login / logout flow", () => {
  let loginPage: LoginPage;
  let homePage: HomePage;
  //before hook
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    //wait page.goto("http://zero.webappsecurity.com/index.html");
    await homePage.visit();
  });
  //negative scenario
  test("Negative scenario for login", async ({ page }) => {
    await homePage.clickOnSignIn();
    //await page.click("#signin_button");
    await loginPage.login("invalid username", "invalid password");
    await loginPage.assertionErrorMessage();
    // const errorMessage = await page.locator(".alert-error");
    // await expect(errorMessage).toContainText(
    //   "Login and/or password are wrong.",
    // );
  });
  //positive scenario + logout
  test("Positive scenario for login + logout", async ({ page }) => {
    await homePage.clickOnSignIn();
    //await page.click("#signin_button");
    await loginPage.login("username", "password");

    // await page.type("#user_login", "username");
    // await page.type("#user_password", "password");
    // await page.click("text=Sign in");
    await page.waitForTimeout(1000);
    await page.goto("http://zero.webappsecurity.com/bank/account-summary.html");
    await page.waitForTimeout(1000);
    //await page.pause();
    const accountSummaryTab = await page.locator("#account_summary_tab");
    await expect(accountSummaryTab).toBeVisible();

    //await page.waitForTimeout(1000);
    await page.goto("http://zero.webappsecurity.com/logout.html");
    await expect(page).toHaveURL("http://zero.webappsecurity.com/index.html");
  });
});
