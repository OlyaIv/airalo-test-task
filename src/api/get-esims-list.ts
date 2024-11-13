import axios from 'axios';
import { API_BASE_URL } from '../../consts';

export async function getSimsList(accessToken: string) {
  let response;

  await axios
    .get(`${API_BASE_URL}/v2/sims?include=order`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/json',
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
