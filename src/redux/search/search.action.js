import {call, put, takeEvery} from 'redux-saga/effects';

import {createAction} from 'app/utils/redux.util';
import {fetchSearchCinemaData, fetchSearchFilmData} from 'app/api/search.api';

export const SET_TYPED_FILM = 'SEARCH/SET_TYPED_FILM';
export const SET_TYPED_CINEMA = 'SEARCH/SET_TYPED_CINEMA';
export const MAKE_SEARCH = 'SEARCH/MAKE_SEARCH';
export const SET_FILM_DATA = 'SEARCH/SET_FILM_DATA';
export const SET_CINEMA_DATA = 'SEARCH/SET_CINEMA_DATA';
export const CLEAR_SEARCHED_DATA = 'SEARCH/CLEAR_SEARCHED_DATA';

export const setTypedCinema = createAction(SET_TYPED_CINEMA);
export const setTypedFilm = createAction(SET_TYPED_FILM);
export const makeSearch = createAction(MAKE_SEARCH);
export const setFilmData = createAction(SET_FILM_DATA);
export const setCinemaData = createAction(SET_CINEMA_DATA);
export const clearSearchedData = createAction(CLEAR_SEARCHED_DATA);

function* getSearchData(action) {
  try {
    if (action.payload.film) {
      const {filmData} = yield call(fetchSearchFilmData, {
        name: action.payload.film,
      });
      yield put(setFilmData(filmData));
    } else {
      const {cinemaData} = yield call(fetchSearchCinemaData, {
        name: action.payload.cinema,
      });
      yield put(setCinemaData(cinemaData));
    }
  } catch (ex) {
    console.warn(ex);
  }
}

export function* sagaWatcher() {
  yield takeEvery(MAKE_SEARCH, getSearchData);
}
