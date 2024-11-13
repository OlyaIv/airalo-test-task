import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class CookieBanner extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  cookieBanner(): Locator {
    return this.page.locator('#onetrust-group-container');
  }

  acceptCookiesBttn(): Locator {
    return this.page.locator('#onetrust-accept-btn-handler');
  }

  pushNotificationsDontAllow(): Locator {
    return this.page.locator('#wzrk-cancel');
  }

  async acceptCookies() {
    if (!this.cookieBanner()) {
      return;
    } else {
      await this.acceptCookiesBttn().click();
      await this.pushNotificationsDontAllow().click();
    }
  }
}
