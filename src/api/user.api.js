import {fetchJSON} from 'app/utils/fetch.util';

export const fetchUser = ({Authorization = '', userId = ''} = {}) =>
  fetchJSON('users/me', {
    headers: {
      Authorization,
    },
    method: 'POST',
    body: {
      userId,
    },
  });
