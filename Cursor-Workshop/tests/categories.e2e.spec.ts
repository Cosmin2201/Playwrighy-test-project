import { test } from '@playwright/test';
import { HomePage } from '../page-objects/HomePage';

let homePage: HomePage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  await homePage.goto();
});

test('user can navigate between categories from the home page', async () => {
  await homePage.goToCategory('Phones');
  await homePage.assertProductStoreVisible();

  await homePage.goToCategory('Laptops');
  await homePage.assertProductStoreVisible();

  await homePage.goToCategory('Monitors');
  await homePage.assertProductStoreVisible();
});

