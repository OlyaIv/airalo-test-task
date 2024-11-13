import { test, expect } from '@playwright/test';
import { MainPage } from '../../src/pages/main.page';
import { ProductsPage } from '../../src/pages/products.page';
import { CookieBanner } from '../../src/pages/cookie-banner.page';
import { ProductDetailsPage } from '../../src/pages/product-details.page';

test.describe('Japan e-Sim details', () => {

  test.beforeEach(async ({ page }) => {
    const landingPage = new MainPage(page);

    await page.goto('');
    await landingPage.acceptCookies()
  });

  test('Verify details of the first esim plan from the product offer', async ({
    page,
  }) => {
    const landingPage = new MainPage(page);
    const productsPage = new ProductsPage(page)
    const productDetailsPage = new ProductDetailsPage(page);

    const japan = "Japan"
    const productVerificationData = {
      title: "Moshi Moshi",
      coverage: "Japan",
      data: "1 GB",
      validity: "7 days",
      price: "$4.50"
    }

    await landingPage.populateSearch(japan)
    await landingPage.clickResults(japan)

    await productsPage.selectFirstESimElement()

    const actualProductData = {
      title: await productDetailsPage.getTitleValue(),
      coverage: await productDetailsPage.getCoverageValue(),
      data: await productDetailsPage.getDataValue(),
      validity: await productDetailsPage.getValidityValue(),
      price: await productDetailsPage.getPriceValue(),
    };

    actualProductData.price = actualProductData.price.replace(" USD", "")
    actualProductData.validity = actualProductData.validity.toLocaleLowerCase()

    expect(actualProductData).toEqual(productVerificationData);

  });
});
