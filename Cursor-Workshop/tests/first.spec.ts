import { test } from '@playwright/test';
import { HomePage } from '../page-objects/HomePage';

let homePage: HomePage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  await homePage.goto();
});

test('homepage core elements are visible', async () => {
  await homePage.assertProductStoreVisible();
  await homePage.assertCoreNavItemsVisible();
  await homePage.assertCategoriesVisible();
});
