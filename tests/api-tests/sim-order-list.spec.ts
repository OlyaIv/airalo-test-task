import { test, expect } from '@playwright/test'
import { getAccessToken } from '../../src/api/get-access-token'
import { getSimsList } from '../../src/api/get-esims-list'
import { postOrder } from '../../src/api/post-submit-order'
import { CLIENT_ID, CLIENT_SECRET } from '../../consts'

test.describe('ESim order list', () => {
  let token: string

  test.beforeAll(async () => {
    token = await getAccessToken(CLIENT_ID as string, CLIENT_SECRET as string)
  })

  test('Post order for eSIm and check its retrieved from orders list', async () => {
    const requestBody = {
      quantity: '6',
      package_id: 'merhaba-7days-1gb',
      type: 'sim',
    }

    const responsePostOrder = await postOrder(token, requestBody)
    expect(responsePostOrder.status).toBe(200)

    const responseGetOrderList = await getSimsList(token)
    expect(responseGetOrderList.status).toBe(200)

    const order = responseGetOrderList.data.data.find(
      (order) => order.simable.id === responsePostOrder.data.data.id
    )
    expect(order).toBeTruthy()
  })
})
