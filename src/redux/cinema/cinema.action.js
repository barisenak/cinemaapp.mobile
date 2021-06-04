import {call, put, takeEvery} from 'redux-saga/effects';

import {createAction} from 'app/utils/redux.util';
import {
  fetchCinema,
  fetchCinemaToFav,
  fetchRemoveCinemaFromFav,
} from 'app/api/cinema.api';
import {setUser} from '../user/user.action';

export const GET_CINEMA_CARD = 'CINEMAS/GET_CINEMA_CARD';
export const SET_CINEMA_CARD = 'CINEMAS/SET_CINEMA_CARD';
export const ADD_FAVORITE_CINEMA = 'CINEMA/ADD_FAVORITE_CINEMA';

export const getCinemaCard = createAction(GET_CINEMA_CARD);
export const setCinemaCard = createAction(SET_CINEMA_CARD);
export const addFavoriteCinema = createAction(ADD_FAVORITE_CINEMA);

function* getCinemaData(action) {
  try {
    const {data} = yield call(fetchCinema, {
      id: action.payload,
    });

    yield put(
      setCinemaCard({
        cinema: data[0],
      }),
    );
  } catch (ex) {
    console.warn(ex);
  }
}

function* setFavoriteCinema(action) {
  try {
    const data = yield call(fetchCinemaToFav, {
      userId: action.payload.userId,
      cinemaId: action.payload.cinemaId,
      Authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiNjBiNjQ0Yjg4NjY3MzcwMDIyZDVlNWZjIiwiaWF0IjoxNjIyNjE4ODQzLCJleHAiOjE2MjI3MDUyNDN9.HCofLqNmNdkMmSWbm0Tn1RQ49_2R9VGH5nk2uwr5q0Q',
    });

    if (data.message) {
      const userData = yield call(fetchRemoveCinemaFromFav, {
        userId: action.payload.userId,
        cinemaId: action.payload.cinemaId,
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiNjBiNjQ0Yjg4NjY3MzcwMDIyZDVlNWZjIiwiaWF0IjoxNjIyNjE4ODQzLCJleHAiOjE2MjI3MDUyNDN9.HCofLqNmNdkMmSWbm0Tn1RQ49_2R9VGH5nk2uwr5q0Q',
      });
      yield put(setUser(userData));
    } else {
      yield put(setUser(data));
    }
  } catch (ex) {
    console.warn(ex);
  }
}

export function* sagaWatcher() {
  yield takeEvery(GET_CINEMA_CARD, getCinemaData);
  yield takeEvery(ADD_FAVORITE_CINEMA, setFavoriteCinema);
}
