import { test } from '@playwright/test';
import { HomePage } from '../page-objects/HomePage';

let homePage: HomePage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  await homePage.goto();
});

test('user can open the About us modal', async () => {
  await homePage.openAboutUsModal();
  await homePage.assertAboutUsModalVisible();
});

