import {call, put, takeEvery, all} from 'redux-saga/effects';

import {createAction} from 'app/utils/redux.util';
import {fetchToken, fetchRefreshToken} from 'app/api/token.api';
import {fetchUser} from 'app/api/user.api';

import {setUser} from '../user/user.action';

import {setAccessToken} from 'app/utils/fetch.util';
import {setItem} from 'app/utils/storage.util';

export const SET_USER_DATA = 'AUTH/SET_USER_DATA';
export const SET_AUTH_TYPED_EMAIL = 'AUTH/SET_AUTH_TYPED_EMAIL';
export const SET_AUTH_TYPED_PASSWORD = 'AUTH/SET_AUTH_TYPED_PASSWORD';
export const SET_AUTH_ERROR_TEXT = 'AUTH/SET_AUTH_ERROR_TEXT';
export const GET_USER = 'AUTH/GET_USER';

export const setUserData = createAction(SET_USER_DATA);
export const setAuthTypedEmail = createAction(SET_AUTH_TYPED_EMAIL);
export const setAuthTypedPassword = createAction(SET_AUTH_TYPED_PASSWORD);
export const setAuthErrorText = createAction(SET_AUTH_ERROR_TEXT);
export const getUser = createAction(GET_USER);

function* setData(action) {
  try {
    const data = yield call(fetchToken, {
      username: action.payload.email,
      password: action.payload.password,
    });
    if (data.accessToken) {
      yield all([
        call(setItem, 'accessToken', data.accessToken),
        call(setItem, 'refreshToken', data.refreshToken),
      ]);

      setAccessToken(data.accessToken);

      const profileData = yield call(fetchUser, {
        params: {userId: data.userId},
      });

      yield put(setUser(profileData));
    } else {
      yield put(setAuthErrorText(data.message));
    }
    yield put(setAuthTypedEmail(''));
  } catch (ex) {
    console.warn(ex);
  }
}

function* loadUser(action) {
  try {
    const profileData = yield call(fetchUser, {
      params: {userId: 'me'},
    });

    if (profileData.message) {
      const {accessToken, refreshToken} = yield call(fetchRefreshToken, {
        refreshToken: action.payload,
      });
      if (accessToken) {
        yield call(setItem, 'accessToken', accessToken);
        setAccessToken(accessToken);
        const profile = yield call(fetchUser, {
          params: {userId: 'me'},
        });

        yield put(setUser(profile));
      }
      if (refreshToken) {
        yield call(setItem, 'refreshToken', refreshToken);
      }
    } else {
      yield put(setUser(profileData));
    }
  } catch (ex) {
    console.warn(ex);
  }
}

export function* sagaWatcher() {
  yield takeEvery(SET_USER_DATA, setData);
  yield takeEvery(GET_USER, loadUser);
}
