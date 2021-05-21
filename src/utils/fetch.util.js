import {stringify} from 'query-string';

import {API_URL} from '../../env';

export function fetchJSON(
  endpoint,
  {query, headers, method = 'GET', body, ...opt} = {},
) {
  const path = `${API_URL}/${endpoint}`;
  const args = query ? `?${stringify(query)}` : '';

  return fetch(`${path}${args}`, {
    method,
    headers: {...headers, ['Content-Type']: 'application/json'},
    body: body ? JSON.stringify(body) : undefined,
    ...opt,
  }).then(res => res.json());
}
