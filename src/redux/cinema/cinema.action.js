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
export const SET_SELECTED_SEAT = 'SEAT/SET_SELECTED_SEAT';
export const CLEAR_STATE = 'SEAT/CLEAR_STATE';
export const REMOVE_SELECTED_SEAT = 'SEAT/REMOVE_SELECTED_SEAT';
export const SET_DATE = 'CINEMA/SET_DATE';
export const SET_TIME = 'CINEMA/SET_TIME';
export const SET_CHOOSEN_TIME = 'CINEMA/SET_CHOOSEN_TIME';
export const CLEAR_SELECTED_SEATS = 'CINEMA/CLEAR_SELECTED_SEATS';

export const setSelectedSeat = createAction(SET_SELECTED_SEAT);
export const clearState = createAction(CLEAR_STATE);
export const removeSelectedSeat = createAction(REMOVE_SELECTED_SEAT);
export const getCinemaCard = createAction(GET_CINEMA_CARD);
export const setCinemaCard = createAction(SET_CINEMA_CARD);
export const addFavoriteCinema = createAction(ADD_FAVORITE_CINEMA);
export const setDate = createAction(SET_DATE);
export const setTime = createAction(SET_TIME);
export const setChoosenTime = createAction(SET_CHOOSEN_TIME);
export const clearSelectedSeats = createAction(CLEAR_SELECTED_SEATS);

function* getCinemaData(action) {
  try {
    const {data} = yield call(fetchCinema, {
      id: action.payload,
    });

    yield put(setCinemaCard(data[0]));
  } catch (ex) {
    console.warn(ex);
  }
}

// function* setTimeslot(action) {
//   try {
//     const {data} = yield call(fetchCinema, {
//       id: action.payload,
//     });

//     yield put(setCinemaCard(data[0]));
//   } catch (ex) {
//     console.warn(ex);
//   }
// }

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
  // yield takeEvery(SET_CHOOSEN_TIME, setTimeslot);
}
