import AsyncStorage from '@react-native-async-storage/async-storage';

import {call, put, takeEvery} from 'redux-saga/effects';

import {createAction} from 'app/utils/redux.util';

export const SET_USER_DATA = 'AUTH/SET_USER_DATA';

export const setUserData = createAction(SET_USER_DATA);

async function* setData(action) {
  yield console.log(action.payload.password);
  try {
    await AsyncStorage.setItem('accessToken', action.payload.accessToken);
    // const {data} = yield call(fetchFilms, {pageNumber: action.payload});

    // yield put(setFilms(data));
    // yield put(setState(STATE_SUCCESS));
  } catch (ex) {
    console.warn(ex);
  }
}

export function* sagaWatcher() {
  yield takeEvery(SET_USER_DATA, setData);
}
