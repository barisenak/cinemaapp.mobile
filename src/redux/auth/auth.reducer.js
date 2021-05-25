import {createReducer} from 'app/utils/redux.util';

import {SET_USER_DATA} from './auth.action';

const initialState = {
  email: '',
  accessToken: '',
  refreshToken: '',
};

export const authReducer = createReducer(initialState, {
  [SET_USER_DATA]: (st, email, accessToken, refreshToken) => ({
    ...st,
    email,
    accessToken,
    refreshToken,
  }),
});
