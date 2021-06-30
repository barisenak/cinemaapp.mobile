import {fetchJSON} from 'app/utils/fetch.util';

export const fetchCinema = ({id = '', Authorization = ''} = {}) =>
  fetchJSON('cinemas/cinemaCard', {
    query: {
      id,
    },
    headers: {
      Authorization,
    },
  });

export const fetchCinemaToFav = ({
  userId = '',
  cinemaId = '',
  Authorization = '',
} = {}) =>
  fetchJSON('cinemas/addFavorite', {
    headers: {
      // REVIEW: Why should we explicitly attach access token
      Authorization,
    },
    method: 'POST',
    body: {
      userId,
      cinemaId,
    },
  });

export const fetchRemoveCinemaFromFav = ({
  userId = '',
  cinemaId = '',
  Authorization = '',
} = {}) =>
  fetchJSON('cinemas/removeFavorite', {
    headers: {
      Authorization,
    },
    method: 'POST',
    body: {
      userId,
      cinemaId,
    },
  });
