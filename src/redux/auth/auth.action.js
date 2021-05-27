import AsyncStorage from '@react-native-async-storage/async-storage';

import {call, put, takeEvery} from 'redux-saga/effects';

import {createAction} from 'app/utils/redux.util';
import {fetchToken} from 'app/api/token.api';
import {fetchUser} from 'app/api/user.api';

import {setUser} from '../user/user.action';

export const SET_USER_DATA = 'AUTH/SET_USER_DATA';
export const SET_AUTH_TYPED_EMAIL = 'AUTH/SET_AUTH_TYPED_EMAIL';
export const SET_AUTH_TYPED_PASSWORD = 'AUTH/SET_AUTH_TYPED_PASSWORD';
export const SET_AUTH_ERROR_TEXT = 'AUTH/SET_AUTH_ERROR_TEXT';

export const setUserData = createAction(SET_USER_DATA);
export const setAuthTypedEmail = createAction(SET_AUTH_TYPED_EMAIL);
export const setAuthTypedPassword = createAction(SET_AUTH_TYPED_PASSWORD);
export const setAuthErrorText = createAction(SET_AUTH_ERROR_TEXT);

function* setData(action) {
  try {
    const data = yield call(fetchToken, {
      username: action.payload.email,
      password: action.payload.password,
    });

    if (data.accessToken) {
      AsyncStorage.setItem('accessToken', data.accessToken);

      const profileData = yield call(fetchUser, {
        userId: data.userId,

        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiNjBhNjZiMTIwNDBjZDgwMDIyMDQ2Y2Y5IiwiaWF0IjoxNjIyMTA4ODQ2LCJleHAiOjE2MjIxOTUyNDZ9.yN3cfe1WbYIuOVPsTQZXp3cRg9VIdAc3WRpXZfXe2Ys',
      });

      yield put(setUser(profileData));
    } else {
      yield put(setAuthErrorText(data.message));
    }

    // AsyncStorage.getItem('accessToken', (err, result) => result);

    // yield put(setFilms(data));
    // yield put(setState(STATE_SUCCESS));
  } catch (ex) {
    console.warn(ex);
  }
}

export function* sagaWatcher() {
  yield takeEvery(SET_USER_DATA, setData);
}
