import {fetchJSON} from 'app/utils/fetch.util';

export const fetchToken = ({username = '', password = ''} = {}, method) => {
  console.log(method);
  fetchJSON('users/login', {
    body: {
      username,
      password,
    },
    method,
  });
};
