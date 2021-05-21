import {fetchJSON} from 'app/utils/fetch.util';

export const fetchToken = ({username = '', password = ''} = {}) => {
  return fetchJSON('users/login', {
    body: {
      username,
      password,
    },
    method: 'POST',
  });
};
