import {createReducer} from 'app/utils/redux.util';

import {STATE_INITIAL} from 'app/enum/state.enum';

import {SET_STATE, SET_FILMS} from './films.action';

const initialState = {
  state: STATE_INITIAL,
  films: [],
};

export const filmsReducer = createReducer(initialState, {
  [SET_STATE]: (st, state) => ({...st, state}),
  [SET_FILMS]: (st, films) => ({...st, films}),
});
