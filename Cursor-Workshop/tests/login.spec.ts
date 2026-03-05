import { test } from '@playwright/test';
import { HomePage } from '../page-objects/HomePage';
import { LoginForm } from '../page-objects/LoginForm';

let homePage: HomePage;
let loginForm: LoginForm;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  loginForm = new LoginForm(page);

  await homePage.goto();
});

test.afterEach(async () => {
  await loginForm.logout();
});

test('user can log in with valid credentials', async () => {
  await loginForm.open();
  await loginForm.assertVisible();
  await loginForm.fillCredentials('test', 'test');
  await loginForm.submit();
});
