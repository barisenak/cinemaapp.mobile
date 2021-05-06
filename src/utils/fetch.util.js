import {stringify} from 'query-string';

import {API_URL} from '../../env';

export function fetchJSON(endpoint, {query, headers, ...opt} = {}) {
  const path = `${API_URL}/${endpoint}`;
  const args = query ? `?${stringify(query)}` : '';

  return fetch(`${path}${args}`, {
    method: 'GET',
    headers: {...headers},
    ...opt,
  }).then(res => res.json());
}
