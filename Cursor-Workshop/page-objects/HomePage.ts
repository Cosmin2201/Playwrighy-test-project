import { expect, Locator, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly productStoreBrand: Locator;
  readonly homeNavLink: Locator;
  readonly contactNavLink: Locator;
  readonly aboutUsNavLink: Locator;
  readonly cartNavLink: Locator;
  readonly loginNavLink: Locator;
  readonly signupNavLink: Locator;
  readonly categoriesSection: Locator;
  readonly phonesCategory: Locator;
  readonly laptopsCategory: Locator;
  readonly monitorsCategory: Locator;
  readonly url: string;
  readonly contactEmailInput: Locator;
  readonly contactNameInput: Locator;
  readonly contactMessageTextarea: Locator;
  readonly aboutUsModal: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productStoreBrand = page.getByRole('link', { name: 'PRODUCT STORE' });
    this.homeNavLink = page.getByRole('link', { name: 'Home (current)' });
    this.contactNavLink = page.getByRole('link', { name: 'Contact' });
    this.aboutUsNavLink = page.getByRole('link', { name: 'About us' });
    this.cartNavLink = page.getByRole('link', { name: 'Cart' });
    this.loginNavLink = page.getByRole('link', { name: 'Log in' });
    this.signupNavLink = page.getByRole('link', { name: 'Sign up' });
    this.categoriesSection = page.getByText('CATEGORIES');
    this.phonesCategory = page.getByRole('link', { name: 'Phones' });
    this.laptopsCategory = page.getByRole('link', { name: 'Laptops' });
    this.monitorsCategory = page.getByRole('link', { name: 'Monitors' });
    this.contactEmailInput = page.locator('#recipient-email');
    this.contactNameInput = page.locator('#recipient-name');
    this.contactMessageTextarea = page.locator('#message-text');
    this.aboutUsModal = page.locator('#videoModal');
    this.url = 'https://demoblaze.com/index.html';
  }

  async goto() {
    await this.page.goto(this.url);
  }

  async assertProductStoreVisible() {
    await expect(this.productStoreBrand).toBeVisible();
  }

  async assertCoreNavItemsVisible() {
    await expect(this.homeNavLink).toBeVisible();
    await expect(this.contactNavLink).toBeVisible();
    await expect(this.aboutUsNavLink).toBeVisible();
    await expect(this.cartNavLink).toBeVisible();
    await expect(this.loginNavLink).toBeVisible();
    await expect(this.signupNavLink).toBeVisible();
  }

  async assertCategoriesVisible() {
    await expect(this.categoriesSection).toBeVisible();
    await expect(this.phonesCategory).toBeVisible();
    await expect(this.laptopsCategory).toBeVisible();
    await expect(this.monitorsCategory).toBeVisible();
  }

  async goToCategory(category: 'Phones' | 'Laptops' | 'Monitors') {
    if (category === 'Phones') {
      await this.phonesCategory.click();
    } else if (category === 'Laptops') {
      await this.laptopsCategory.click();
    } else {
      await this.monitorsCategory.click();
    }
  }

  async openProduct(productName: string) {
    await this.page.getByRole('link', { name: productName }).click();
  }

  async assertProductsVisible() {
    await expect(this.page.locator('.hrefch')).toHaveCountGreaterThan(0);
  }

  async openContactModal() {
    await this.contactNavLink.click();
  }

  async assertContactModalVisible() {
    await expect(this.contactEmailInput).toBeVisible();
    await expect(this.contactNameInput).toBeVisible();
    await expect(this.contactMessageTextarea).toBeVisible();
  }

  async openAboutUsModal() {
    await this.aboutUsNavLink.click();
  }

  async assertAboutUsModalVisible() {
    await expect(this.aboutUsModal).toBeVisible();
  }
}
