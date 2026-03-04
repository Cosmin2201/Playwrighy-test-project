import { test, expect } from "@playwright/test";
import { HomePage } from "../../page-objects/HomePage";

test.describe("Search results", () => {
  let homePage: HomePage;
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    //await page.goto("http://zero.webappsecurity.com/index.html");
  });

  //Positive way - existing search results
  test("Should find search result", async ({ page }) => {
    await homePage.visit();
    await homePage.searchFor("bank");
    //await page.goto("http://zero.webappsecurity.com/index.html");
    // await page.type("#searchTerm", "bank");
    // await page.keyboard.press("Enter");
    const numberOfLinks = await page.locator("li > a");
    await expect(numberOfLinks).toHaveCount(2);
  });

  //Negative way - no existing search results
  test("Should NOT find search result", async ({ page }) => {
    await homePage.visit();
    await homePage.searchFor("something");
    //await page.goto("http://zero.webappsecurity.com/index.html");
    // await page.type("#searchTerm", "something");
    // await page.keyboard.press("Enter");
    const numberOfLinks = await page.locator("li > a");
    await expect(numberOfLinks).toHaveCount(0);
  });
});
