import {createReducer} from 'app/utils/redux.util';

import {SET_FILM_CARD} from './film.action';

const initialState = {
  // name: '',
  // description: '',
  // duration: 0,
  // image: '',
  // category: '',
  // releaseDate: '',

  film: {},
};

export const filmReducer = createReducer(initialState, {
  [SET_FILM_CARD]: (st, film) => ({
    ...st,
    film: film.film,
  }),
});
