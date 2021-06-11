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

export const fetchRefreshToken = ({refreshToken = ''} = {}) => {
  return fetchJSON('refreshToken/', {
    body: {
      refreshToken,
    },
    method: 'POST',
  });
};
