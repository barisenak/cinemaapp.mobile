import {createReducer} from 'app/utils/redux.util';

import {SET_USER} from './user.action';

const initialState = {
  userData: null,
};

export const userReducer = createReducer(initialState, {
  [SET_USER]: (st, userData) => ({...st, userData}),
});
