import { Page } from '@playwright/test';
import { BasePage } from './base.page';

export class ProductsPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  buyNowBttn() {
    return this.page.locator('.package-list-wrapper [data-testid="esim-button"]');
  }

  firstBuyNowBttn() {
    return this.buyNowBttn().first();
  }

  secondBuyNowBttn(){
    return this.buyNowBttn().nth(1);
  }

  async selectSecondeESimElement() {
    await this.secondBuyNowBttn().click();
  }

  async selectFirstESimElement() {
    await this.firstBuyNowBttn().click();
  }
}
