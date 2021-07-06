import {call, put, takeEvery} from 'redux-saga/effects';

import {createAction} from 'app/utils/redux.util';
import {
  fetchFilm,
  fetchFilmToFav,
  fetchRemoveFilmFromFav,
} from 'app/api/film.api';
import {setUser} from '../user/user.action';

export const GET_FILM_CARD = 'FILMS/GET_FILM_CARD';
export const SET_FILM_CARD = 'FILMS/SET_FILM_CARD';
export const ADD_FAVORITE_FILM = 'FILM/ADD_FAVORITE_FILM';

export const getFilmCard = createAction(GET_FILM_CARD);
export const setFilmCard = createAction(SET_FILM_CARD);
export const addFavoriteFilm = createAction(ADD_FAVORITE_FILM);

function* getFilmData(action) {
  try {
    const {data, cinemas} = yield call(fetchFilm, {
      id: action.payload,
    });

    yield put(
      setFilmCard({
        film: data[0],
        cinemas,
      }),
    );
  } catch (ex) {
    console.warn(ex);
  }
}

function* setFavoriteFilm(action) {
  try {
    const data = yield call(fetchFilmToFav, {
      userId: action.payload.userId,
      filmId: action.payload.filmId,
    });

    if (data.message) {
      const userData = yield call(fetchRemoveFilmFromFav, {
        userId: action.payload.userId,
        filmId: action.payload.filmId,
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
  yield takeEvery(GET_FILM_CARD, getFilmData);
  yield takeEvery(ADD_FAVORITE_FILM, setFavoriteFilm);
}
