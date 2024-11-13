import { Page } from '@playwright/test';
import { BasePage } from './base.page';

export class ProductsPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  firstBuyNowBttn() {
    return this.page
      .locator('.package-list-wrapper [data-testid="esim-button"]')
      .first();
  }

  async selectFirstESimElement() {
    await this.firstBuyNowBttn().click();
  }
}
