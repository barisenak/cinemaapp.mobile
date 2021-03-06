import {createAction} from 'app/utils/redux.util';
import {put, takeEvery, call, all} from '@redux-saga/core/effects';
import AsyncStorage from '@react-native-community/async-storage';

export const SET_USER = 'AUTH/SET_USER';
export const CLEAR_USER = 'AUTH/CLEAR_USER';
export const REMOVE_USER_INFO = 'AUTH/REMOVE_USER_INFO';

export const setUser = createAction(SET_USER);
export const clearUser = createAction(CLEAR_USER);
export const removeUserInfo = createAction(REMOVE_USER_INFO);

function* removeUserData() {
  try {
    yield all([
      call(AsyncStorage.removeItem, 'accessToken'),
      call(AsyncStorage.removeItem, 'refreshToken'),
    ]);

    yield put(clearUser());
  } catch (ex) {
    console.warn(ex);
  }
}

export function* sagaWatcher() {
  yield takeEvery(REMOVE_USER_INFO, removeUserData);
}
