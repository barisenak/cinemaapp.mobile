import {createAction} from 'app/utils/redux.util';
import {call, put, takeEvery} from '@redux-saga/core/effects';
import {fetchAllCinemas} from 'app/api/cinema.api';
import {getUserLocationCity} from 'app/utils/cinemaLocation.util';

export const GET_LOCATION = 'MAP/GET_LOCATION';
export const PUT_LOCATION = 'MAP/PUT_LOCATION';
export const GET_ALL_CINEMAS = 'MAP/GET_ALL_CINEMAS';
export const PUT_CINEMAS = 'MAP/PUT_CINEMAS';
export const PUT_MARKERS = 'MAP/PUT_MARKERS';

export const getLocation = createAction(GET_LOCATION);
export const putLocation = createAction(PUT_LOCATION);
export const getAllCinemas = createAction(GET_ALL_CINEMAS);
export const putCinemas = createAction(PUT_CINEMAS);
export const putMarkers = createAction(PUT_MARKERS);

function* getUserLocation(action) {
  try {
    const city = yield getUserLocationCity({
      lat: action.payload.lat,
      lng: action.payload.lng,
    });

    yield put(
      putLocation({
        lat: action.payload.lat,
        lng: action.payload.lng,
        city,
      }),
    );

    const {data} = yield call(fetchAllCinemas, {city});

    console.tron(data);

    if (data) {
      yield put(putCinemas(data));
    }
  } catch (ex) {
    console.warn(ex);
  }
}

export function* sagaWatcher() {
  yield takeEvery(GET_LOCATION, getUserLocation);
}
