import {createReducer} from 'app/utils/redux.util';

import {
  SET_TYPED_EMAIL,
  SET_TYPED_PASSWORD,
  SET_USER_DATA,
} from './register.action';

const initialState = {
  email: '',
  accessToken: '',
  refreshToken: '',
  typedEmail: '',
  typedPassword: '',
};

export const authReducer = createReducer(initialState, {
  [SET_USER_DATA]: (st, email, accessToken, refreshToken) => ({
    ...st,
    email,
    accessToken,
    refreshToken,
  }),
  [SET_TYPED_EMAIL]: (st, typedEmail) => ({
    ...st,
    typedEmail,
  }),
  [SET_TYPED_PASSWORD]: (st, typedPassword) => ({
    ...st,
    typedPassword,
  }),
});
