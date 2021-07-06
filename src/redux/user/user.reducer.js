import {createReducer} from 'app/utils/redux.util';

import {CLEAR_USER, SET_USER} from './user.action';

const initialState = {
  userData: null,
};

export const userReducer = createReducer(initialState, {
  [SET_USER]: (st, userData) => ({...st, userData}),

  [CLEAR_USER]: st => ({...st, userData: null}),
});
