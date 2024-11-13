import { Page, Locator } from '@playwright/test';

export abstract class BasePage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
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

  pushNotificationsBanner(): Locator {
    return this.page.locator('.wzrk-alert wiz-show-animate');
  }

  async acceptCookies() {
    if (!this.cookieBanner()) {
      return;
    } else {
      await this.acceptCookiesBttn().click();

      if(await this.pushNotificationsBanner().isVisible()){
        await this.pushNotificationsDontAllow().click()
      }
    }
  }
}
