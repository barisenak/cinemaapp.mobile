import AsyncStorage from '@react-native-async-storage/async-storage';

import {call, put, takeEvery} from 'redux-saga/effects';

import {createAction} from 'app/utils/redux.util';
import {fetchToken} from 'app/api/token.api';
import {setUser} from '../user/user.action';

export const SET_USER_DATA = 'AUTH/SET_USER_DATA';

export const setUserData = createAction(SET_USER_DATA);

function* setData(action) {
  try {
    const data = yield call(fetchToken, {
      username: action.payload.email,
      password: action.payload.password,
    });

    if (data.accessToken) {
      AsyncStorage.setItem('accessToken', data.accessToken);
      yield put(setUser(true));
    }

    // AsyncStorage.getItem('accessToken', (err, result) => console.log(result));

    // yield put(setFilms(data));
    // yield put(setState(STATE_SUCCESS));
  } catch (ex) {
    console.warn(ex);
  }
}

export function* sagaWatcher() {
  yield takeEvery(SET_USER_DATA, setData);
}
