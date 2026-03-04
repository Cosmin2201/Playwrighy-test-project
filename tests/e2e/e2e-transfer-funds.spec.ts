import { test, expect } from "@playwright/test";
import { HomePage } from "../../page-objects/HomePage";
import { LoginPage } from "../../page-objects/LoginPage";

test.describe.only("Transfer Funds and Make Payments", () => {
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
    //await page.waitForTimeout(1000);
    //await page.goto("http://zero.webappsecurity.com/bank/account-summary.html");
    //await page.waitForTimeout(1000);
    //await page.pause();
    //const accountSummaryTab = await page.locator("#account_summary_tab");
    //await expect(accountSummaryTab).toBeVisible();

    //await page.waitForTimeout(1000);
    //await page.goto("http://zero.webappsecurity.com/logout.html");
    //await expect(page).toHaveURL("http://zero.webappsecurity.com/index.html");
  });
  test("Transfer funds", async ({ page }) => {
    await page.waitForTimeout(1000);
    await page.goto("http://zero.webappsecurity.com/index.html");
    await page.waitForTimeout(1000);
    await page.goto("http://zero.webappsecurity.com/bank/transfer-funds.html");
    await page.click("#transfer_funds_tab");
    await page.selectOption("#tf_fromAccountId", "2");
    await page.selectOption("#tf_toAccountId", "3");
    await page.type("#tf_amount", "500");
    await page.type("#tf_description", "Some description");
    await page.click("#btn_submit");

    const boardReader = await page.locator("h2.board-header");
    await expect(boardReader).toContainText("Verify");
    await page.click("#btn_submit");
    const succesMessage = await page.locator(".alert-success");
    await expect(succesMessage).toContainText(
      "You successfully submitted your transaction.",
    );
  });
});
