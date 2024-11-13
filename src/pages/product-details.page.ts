import { Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class ProductDetailsPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  simDetailsInfoList(): Locator {
    return this.page.getByTestId('sim-detail-info-list');
  }

  simDetailsOperatorTitle(): Locator {
    return this.page.getByTestId('sim-detail-operator-title');
  }

  simDetailsCoverage(): Locator {
    return this.simDetailsInfoList().getByTestId('COVERAGE-value');
  }

  simDetailsData(): Locator {
    return this.simDetailsInfoList().getByTestId('DATA-value');
  }

  simDetailsPrice(): Locator {
    return this.simDetailsInfoList().getByTestId('PRICE-value');
  }

  simDetailsValidity(): Locator {
    return this.simDetailsInfoList().getByTestId('VALIDITY-value');
  }

  async getTitleValue(): Promise<string> {
    return await this.simDetailsOperatorTitle().innerText();
  }

  async getCoverageValue(): Promise<string> {
    return await this.simDetailsCoverage().innerText();
  }

  async getDataValue(): Promise<string> {
    return await this.simDetailsData().innerText();
  }

  async getPriceValue(): Promise<string> {
    return await this.simDetailsPrice().innerText();
  }

  async getValidityValue(): Promise<string> {
    return await this.simDetailsValidity().innerText();
  }
}
