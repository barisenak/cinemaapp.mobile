import {createReducer} from 'app/utils/redux.util';

import {
  SET_FILM_DATA,
  SET_TYPED_CINEMA,
  SET_TYPED_FILM,
  SET_CINEMA_DATA,
  CLEAR_SEARCHED_DATA,
} from './search.action';

const initialState = {
  typedCinema: '',
  typedFilm: '',
  films: [],
  cinemas: [],
};

export const searchReducer = createReducer(initialState, {
  [SET_TYPED_CINEMA]: (st, typedCinema) => ({
    ...st,
    typedCinema,
  }),

  [SET_TYPED_FILM]: (st, typedFilm) => ({
    ...st,
    typedFilm,
  }),

  [SET_FILM_DATA]: (st, filmData) => ({
    ...st,
    films: filmData,
  }),

  [SET_CINEMA_DATA]: (st, cinemaData) => ({
    ...st,
    cinemas: cinemaData,
  }),

  [CLEAR_SEARCHED_DATA]: st => ({
    ...st,
    cinemas: [],
    films: [],
  }),
});
