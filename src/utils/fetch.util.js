import {stringify} from 'query-string';

import {API_URL} from '../../env';

let accessToken = null;

export function setAccessToken(token) {
  accessToken = token;
}

export function fetchJSON(
  endpoint,
  {query, headers, method = 'GET', body, ...opt} = {},
) {
  const path = `${API_URL}/${endpoint}`;
  const args = query ? `?${stringify(query)}` : '';

  // TODO: implement refreshToken

  return fetch(`${path}${args}`, {
    method,
    headers: {
      ...headers,
      ['Content-Type']: 'application/json',
      Authorization: accessToken,
    },
    body: body ? JSON.stringify(body) : undefined,
    ...opt,
  }).then(res => res.json());
}
