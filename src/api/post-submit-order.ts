import axios from 'axios';
import { API_BASE_URL } from '../../consts';

type OrderRequestBody = {
  quantity: string;
  package_id: string;
  type: string;
};

export async function postOrder(accessToken: string, input: OrderRequestBody) {
  let response;

  const params = new FormData();
  params.append('quantity', input.quantity);
  params.append('package_id', input.package_id);
  params.append('type', input.type);

  await axios
    .post<OrderRequestBody>(`${API_BASE_URL}/v2/orders`, params, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(function (resp) {
      response = resp;
    })
    .catch(function (error) {
      throw new Error(error);
    });
  return response;
}
