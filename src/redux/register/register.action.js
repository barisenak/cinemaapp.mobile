import {call, put, takeEvery} from 'redux-saga/effects';

import {createAction} from 'app/utils/redux.util';
import {fetchRegister} from 'app/api/register.api';
import {setUserData} from '../auth/auth.action';

export const SET_REGISTER_DATA = 'REGISTER/SET_REGISTER_DATA';
export const SET_REGISTER_ERROR_TEXT = 'REGISTER/SET_REGISTER_ERROR_TEXT';
export const SET_REGISTER_TYPED_EMAIL = 'REGISTER/SET_REGISTER_TYPED_EMAIL';
export const SET_REGISTER_TYPED_PASSWORD =
  'REGISTER/SET_REGISTER_TYPED_PASSWORD';

export const setRegisterTypedEmail = createAction(SET_REGISTER_TYPED_EMAIL);
export const setRegisterTypedPassword = createAction(
  SET_REGISTER_TYPED_PASSWORD,
);
export const setRegisterData = createAction(SET_REGISTER_DATA);
export const setRegisterErrorText = createAction(SET_REGISTER_ERROR_TEXT);

function* setData(action) {
  try {
    const data = yield call(fetchRegister, {
      username: action.payload.email,
      password: action.payload.password,
    });

    if (data.username) {
      yield put(setUserData(action.payload));
    } else {
      yield put(setRegisterErrorText(data.message));
    }
    yield put(setRegisterTypedEmail(''));
  } catch (ex) {
    console.warn(ex);
  }
}

export function* sagaWatcher() {
  yield takeEvery(SET_REGISTER_DATA, setData);
}
