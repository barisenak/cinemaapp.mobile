import {fetchJSON} from 'app/utils/fetch.util';

export const fetchFilm = ({id = ''} = {}) =>
  fetchJSON('films/filmCard', {
    query: {
      id,
    },
  });

export const fetchFilmToFav = ({userId = '', filmId = ''} = {}) =>
  fetchJSON('films/addFavorite', {
    method: 'POST',
    body: {
      userId,
      filmId,
    },
  });

export const fetchRemoveFilmFromFav = ({userId = '', filmId = ''} = {}) =>
  fetchJSON('films/removeFavorite', {
    method: 'POST',
    body: {
      userId,
      filmId,
    },
  });
