import {fetchJSON} from 'app/utils/fetch.util';

export const fetchFilm = ({name = '', Authorization = ''} = {}) =>
  fetchJSON('films/filmCard', {
    query: {
      name,
    },
    headers: {
      Authorization,
    },
  });
