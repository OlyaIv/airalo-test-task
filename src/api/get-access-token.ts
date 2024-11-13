import axios from 'axios';
import { API_BASE_URL } from '../../consts';

export async function getAccessToken(client_Id: string, client_secret: string) {
  let access_token;

  await axios
    .post(
      `${API_BASE_URL}/v2/token`,
      {
        client_id: client_Id,
        client_secret: client_secret,
        grant_type: 'client_credentials',
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    .then(function (response) {
      access_token = response.data.data.access_token;

      if (!access_token) {
        throw new Error('No access token');
      }
    })
    .catch(function (error) {
      throw new Error(error);
    });

  return access_token;
}
