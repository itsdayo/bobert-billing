import axios from 'axios';

export const API_URL = 'https://challenge.mothership.com';

/**
 * Requests a URL
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to the request
 *
 * @return {object}           The response data
 */
export default function request(url, options) {
  return axios(url, options).then(response => response.data);
}
