import {createAction} from 'app/utils/redux.util';
import {call, put, takeEvery} from '@redux-saga/core/effects';
import {fetchAllCinemas} from 'app/api/cinema.api';

export const SET_LOCATION = 'MAP/SET_LOCATION';
export const GET_ALL_CINEMAS = 'MAP/GET_ALL_CINEMAS';
export const PUT_CINEMAS = 'MAP/PUT_CINEMAS';

export const setLocation = createAction(SET_LOCATION);
export const getAllCinemas = createAction(GET_ALL_CINEMAS);
export const putCinemas = createAction(PUT_CINEMAS);

function* getCinemas() {
  try {
    const {data} = yield call(fetchAllCinemas);
    if (data) {
      yield put(putCinemas(data));
    }
  } catch (ex) {
    console.warn(ex);
  }
}

export function* sagaWatcher() {
  yield takeEvery(SET_LOCATION, getCinemas);
}
