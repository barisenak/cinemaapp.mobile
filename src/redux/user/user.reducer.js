import {createReducer} from 'app/utils/redux.util';

import {SET_USER} from './user.action';

const initialState = {
  isLoggedIn: false,
};

export const userReducer = createReducer(initialState, {
  [SET_USER]: (st, isLoggedIn) => ({...st, isLoggedIn}),
});
