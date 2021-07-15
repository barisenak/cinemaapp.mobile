import {fetchJSON} from 'app/utils/fetch.util';

export const fetchCinema = ({id = ''} = {}) =>
  fetchJSON('cinemas/cinemaCard', {
    query: {
      id,
    },
  });

export const fetchAllCinemas = ({city = ''} = {}) =>
  fetchJSON('cinemas/', {
    query: {city},
  });

export const fetchCinemaToFav = ({userId = '', cinemaId = ''} = {}) =>
  fetchJSON('cinemas/addFavorite', {
    method: 'POST',
    body: {
      userId,
      cinemaId,
    },
  });

export const fetchRemoveCinemaFromFav = ({userId = '', cinemaId = ''} = {}) =>
  fetchJSON('cinemas/removeFavorite', {
    method: 'POST',
    body: {
      userId,
      cinemaId,
    },
  });
