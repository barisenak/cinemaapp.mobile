import {fetchJSON} from 'app/utils/fetch.util';

export const fetchRegister = ({username = '', password = ''} = {}) => {
  return fetchJSON('users/register', {
    body: {
      username,
      password,
    },
    method: 'POST',
  });
};
