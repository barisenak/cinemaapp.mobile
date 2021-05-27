import {call, put, takeEvery} from 'redux-saga/effects';

import {createAction} from 'app/utils/redux.util';
import {fetchFilm} from 'app/api/film.api';

export const GET_FILM_CARD = 'FILMS/GET_FILM_CARD';
export const SET_FILM_CARD = 'FILMS/SET_FILM_CARD';

export const getFilmCard = createAction(GET_FILM_CARD);
export const setFilmCard = createAction(SET_FILM_CARD);

function* getFilmData(action) {
  try {
    const {data} = yield call(fetchFilm, {
      name: action.payload,
      Authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiNjBhNjZiMTIwNDBjZDgwMDIyMDQ2Y2Y5IiwiaWF0IjoxNjIyMTA4ODQ2LCJleHAiOjE2MjIxOTUyNDZ9.yN3cfe1WbYIuOVPsTQZXp3cRg9VIdAc3WRpXZfXe2Ys',
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

export function* sagaWatcher() {
  yield takeEvery(GET_FILM_CARD, getFilmData);
}
