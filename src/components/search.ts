import { Page, Locator } from '@playwright/test';

export class SearchComponent {
    page: Page;

    constructor(page: Page) {
      this.page = page;
    }

    searchInput(): Locator {
    return this.page.locator('data-testid=search-input');
  }

  searchResultsDropdown(country: string): Locator {
    return this.page.locator("ul.countries-list")
    .getByTestId(`${country}-name`);
  }
}