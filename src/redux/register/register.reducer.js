import {createReducer} from 'app/utils/redux.util';

import {
  SET_REGISTER_ERROR_TEXT,
  SET_REGISTER_TYPED_EMAIL,
  SET_REGISTER_TYPED_PASSWORD,
} from './register.action';

const initialState = {
  typedEmail: '',
  typedPassword: '',
  errorText: '',
};

export const registerReducer = createReducer(initialState, {
  [SET_REGISTER_TYPED_EMAIL]: (st, typedEmail) => ({
    ...st,
    typedEmail,
  }),
  [SET_REGISTER_TYPED_PASSWORD]: (st, typedPassword) => ({
    ...st,
    typedPassword,
  }),
  [SET_REGISTER_ERROR_TEXT]: (st, errorText) => ({
    ...st,
    errorText,
  }),
});
