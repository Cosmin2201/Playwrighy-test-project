import { test, expect } from "@playwright/test";
import { getRandomNumber, getRandomString } from "../../utils/data-helpers";

test.describe.only("Tips & Tricks Section", () => {
  test.only("TestInfo Object", async ({ page }, testInfo) => {
    await page.goto("https://www.example.com");
    //console.log(testInfo.title);
    let newNumber = await getRandomNumber();
    let newString = await getRandomString();
    console.log(newNumber);
    console.log(newString);
  });

  test("Test skip browser", async ({ page, browserName }) => {
    test.skip(
      browserName === "chromium",
      "Feature not ready in chrome browser",
    );
    await page.goto("http://www.example.com");
  });

  test("Test FixMe annptation", async ({ page, browserName }) => {
    test.fixme(browserName === "chromium", "Test is not stable, need revision");
    await page.goto("http://www.example.com");
  });

  const people = ["Mike", "Judy", "Peter"];
  for (const name of people) {
    test(`Running test for ${name}`, async ({ page }) => {
      await page.goto("http://zero.webappsecurity.com/index.html");
      await page.type("#searchTerm", `${name}`);
      await page.waitForTimeout(3000);
    });
  }

  test("Mouse Movement Simulation", async ({ page }) => {
    await page.goto("https://www.example.com");
    await page.waitForTimeout(1000);
    await page.mouse.move(0, 0);
    await page.waitForTimeout(1000);
    await page.mouse.down();
    await page.waitForTimeout(1000);
    await page.mouse.move(0, 100);
    await page.waitForTimeout(1000);
    await page.mouse.up();
    await page.waitForTimeout(1000);
  });

  test("Multiple Browser Tabs inside 1 browser", async ({ browser }) => {
    const context = await browser.newContext();
    const page1 = await context.newPage();
    const page2 = await context.newPage();
    const page3 = await context.newPage();

    await page1.goto("http://www.example.com");
    await page2.goto("http://www.example.com");
    await page3.goto("http://www.example.com");
    await page1.waitForTimeout(1000);
  });
});
