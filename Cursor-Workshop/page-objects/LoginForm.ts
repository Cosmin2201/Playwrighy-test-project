import { expect, Locator, Page } from '@playwright/test';

export class LoginForm {
  readonly page: Page;
  readonly loginNavLink: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly loggedInUser: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginNavLink = page.getByRole('link', { name: 'Log in' });
    this.usernameInput = page.locator('#loginusername');
    this.passwordInput = page.locator('#loginpassword');
    this.loginButton = page.getByRole('button', { name: 'Log in' });
    this.loggedInUser = page.locator('#nameofuser');
    this.logoutButton = page.getByRole('link', { name: 'Log out' });
  }

  async open() {
    await this.loginNavLink.click();
  }

  async assertVisible() {
    await expect(this.usernameInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
    await expect(this.loginButton).toBeVisible();
  }

  async fillCredentials(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
  }

  async submit() {
    await this.loginButton.click();
  }

  async login(username: string, password: string) {
    await this.open();
    await this.assertVisible();
    await this.fillCredentials(username, password);
    await this.submit();
    await expect(this.loggedInUser).toBeVisible();
  }

  async logout() {
    await this.logoutButton.click();
    await expect(this.loggedInUser).toBeHidden();
  }
}
