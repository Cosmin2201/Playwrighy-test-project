import { expect, Locator, Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly cartTable: Locator;
  readonly placeOrderButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartTable = page.locator('#tbodyid');
    this.placeOrderButton = page.getByRole('button', { name: 'Place Order' });
  }

  async openFromNav() {
    await this.page.getByRole('link', { name: 'Cart' }).click();
  }

  async assertProductInCart(productName: string) {
    await expect(this.cartTable.getByText(productName)).toBeVisible();
  }

  async deleteProduct(productName: string) {
    const row = this.cartTable.getByRole('row', { name: productName });
    await row.getByText('Delete').click();
  }

  async assertProductNotInCart(productName: string) {
    await expect(this.cartTable.getByText(productName)).toHaveCount(0);
  }

  async placeOrder(
    name: string,
    country: string,
    city: string,
    card: string,
    month: string,
    year: string,
  ) {
    await this.placeOrderButton.click();

    await this.page.locator('#name').fill(name);
    await this.page.locator('#country').fill(country);
    await this.page.locator('#city').fill(city);
    await this.page.locator('#card').fill(card);
    await this.page.locator('#month').fill(month);
    await this.page.locator('#year').fill(year);

    await this.page.getByRole('button', { name: 'Purchase' }).click();

    await expect(
      this.page.getByText('Thank you for your purchase!'),
    ).toBeVisible();

    await this.page.getByRole('button', { name: 'OK' }).click();
  }
}
