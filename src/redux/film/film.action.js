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
    const {data} = yield call(fetchFilm, {
      name: action.payload,
    });

    yield put(
      setFilmCard({
        film: data[0],
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
      Authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiNjBhNjZiMTIwNDBjZDgwMDIyMDQ2Y2Y5IiwiaWF0IjoxNjIyMTkwOTA5LCJleHAiOjE2MjIyNzczMDl9.a8IdVABYBAFS_gjYR3Zp-LgE7N09Ymk41gp_-3qxYjA',
    });

    if (data.message) {
      const userData = yield call(fetchRemoveFilmFromFav, {
        userId: action.payload.userId,
        filmId: action.payload.filmId,
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiNjBhNjZiMTIwNDBjZDgwMDIyMDQ2Y2Y5IiwiaWF0IjoxNjIyMTkwOTA5LCJleHAiOjE2MjIyNzczMDl9.a8IdVABYBAFS_gjYR3Zp-LgE7N09Ymk41gp_-3qxYjA',
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
