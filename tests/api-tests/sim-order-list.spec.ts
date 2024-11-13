import { test, expect } from '@playwright/test';
import { authConstants } from './consts';
import { getAccessToken } from './get-access-token';
import { getSimsList } from './get-esims-list';
import { postOrder } from './post-submit-order';

test.describe('ESim order list', () => {
  let token: string;

  test.beforeAll(async () => {
    token = await getAccessToken(
      authConstants.client_id,
      authConstants.client_secret
    );
  });

  test.only('Post order for eSIm and check its retrieved from orders list', async () => {
    const requestBody = {
      quantity: '6',
      package_id: 'merhaba-7days-1gb',
      type: 'sim',
    };

    const responsePostOrder = await postOrder(token, requestBody);
    expect(responsePostOrder.status).toBe(200);

    const responseGetOrderList = await getSimsList(token);
    expect(responseGetOrderList.status).toBe(200);

    const order = responseGetOrderList.data.data.find(
      (order) => order.simable.id === responsePostOrder.data.data.id
    );
    expect(order).toBeTruthy();
  });
});
