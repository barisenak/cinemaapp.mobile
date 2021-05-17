import {call, put, takeEvery} from 'redux-saga/effects';

import {createAction} from 'app/utils/redux.util';
import {fetchFilms} from 'app/api/films.api';
import {STATE_LOADING, STATE_SUCCESS, STATE_FAILURE} from 'app/enum/state.enum';

export const SET_STATE = 'FILMS/SET_STATE';
export const GET_FILMS = 'FILMS/GET';
export const SET_FILMS = 'FILMS/SET';
export const SET_PAGE = 'FILMS/SET_PAGE';

export const setState = createAction(SET_STATE);
export const getFilms = createAction(GET_FILMS);
export const setFilms = createAction(SET_FILMS);
export const setPage = createAction(SET_PAGE);

function* getAllFilms(action) {
  yield put(setState(STATE_LOADING));

  try {
    const {data} = yield call(fetchFilms, {pageNumber: action.payload});

    yield put(setFilms(data));
    yield put(setState(STATE_SUCCESS));
  } catch (ex) {
    console.warn(ex);

    yield put(setState(STATE_FAILURE));
  }
}

export function* sagaWatcher() {
  yield takeEvery(GET_FILMS, getAllFilms);
}
