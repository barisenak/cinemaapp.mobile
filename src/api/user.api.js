import {fetchJSON} from 'app/utils/fetch.util';

export const fetchUser = ({userId = '', params = {}} = {}) => {
  return fetchJSON(`users/${params.userId}`, {
    params: {userId},
  });
};
