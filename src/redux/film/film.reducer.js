import {createReducer} from 'app/utils/redux.util';

import {SET_FILM_CARD} from './film.action';

const initialState = {
  film: {},
  cinemas: [],
};

export const filmReducer = createReducer(initialState, {
  [SET_FILM_CARD]: (st, data) => ({
    ...st,
    film: data.film,
    cinemas: data.cinemas,
  }),
});
