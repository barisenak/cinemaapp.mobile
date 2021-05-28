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

export const fetchFilmToFav = ({
  userId = '',
  filmId = '',
  Authorization = '',
} = {}) =>
  fetchJSON('films/addFavorite', {
    headers: {
      Authorization,
    },
    method: 'POST',
    body: {
      userId,
      filmId,
    },
  });

export const fetchRemoveFilmFromFav = ({
  userId = '',
  filmId = '',
  Authorization = '',
} = {}) =>
  fetchJSON('films/removeFavorite', {
    headers: {
      Authorization,
    },
    method: 'POST',
    body: {
      userId,
      filmId,
    },
  });
