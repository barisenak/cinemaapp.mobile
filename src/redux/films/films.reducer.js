import {createReducer} from 'app/utils/redux.util';

import {STATE_INITIAL} from 'app/enum/state.enum';

import {SET_STATE, SET_FILMS, SET_PAGE} from './films.action';

const initialState = {
  state: STATE_INITIAL,
  films: [],
  page: 1,
};

export const filmsReducer = createReducer(initialState, {
  [SET_STATE]: (st, state) => ({...st, state}),
  [SET_FILMS]: (st, newFilms) => ({
    ...st,
    films: [...st.films].concat(newFilms),
  }),
  [SET_PAGE]: (st, page) => ({...st, page}),
});
