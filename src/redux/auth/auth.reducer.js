import {createReducer} from 'app/utils/redux.util';
import {SET_AUTH_ERROR_TEXT} from '../auth/auth.action';

import {SET_AUTH_TYPED_EMAIL, SET_AUTH_TYPED_PASSWORD} from './auth.action';

const initialState = {
  typedEmail: '',
  typedPassword: '',
  errorText: '',
};

export const authReducer = createReducer(initialState, {
  [SET_AUTH_TYPED_EMAIL]: (st, typedEmail) => ({
    ...st,
    typedEmail,
  }),
  [SET_AUTH_TYPED_PASSWORD]: (st, typedPassword) => ({
    ...st,
    typedPassword,
  }),
  [SET_AUTH_ERROR_TEXT]: (st, errorText) => ({
    ...st,
    errorText,
  }),
});
