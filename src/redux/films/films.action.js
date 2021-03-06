import {call, put, takeEvery, takeLeading} from 'redux-saga/effects';

import {createAction} from 'app/utils/redux.util';
import {fetchFilms} from 'app/api/films.api';
import {STATE_LOADING, STATE_SUCCESS, STATE_FAILURE} from 'app/enum/state.enum';

export const SET_STATE = 'FILMS/SET_STATE';
export const GET_FILMS = 'FILMS/GET';
export const SET_FILMS = 'FILMS/SET';
export const SET_PAGE = 'FILMS/SET_PAGE';
export const GET_NEW_FILMS = 'FILMS/GET_NEW_FILMS';
export const GET_CATEGORY_FILMS = 'FILMS/GET_CATEGORY_FILMS';
export const SET_NEXT_BATCH_STATE = 'FILMS/SET_NEXT_BATCH_STATE';
export const SET_TOTAL_PAGES = 'FILMS/SET_TOTAL_PAGES';

export const setState = createAction(SET_STATE);
export const getFilms = createAction(GET_FILMS);
export const getCategoryFilms = createAction(GET_CATEGORY_FILMS);
export const setFilms = createAction(SET_FILMS);
export const setPage = createAction(SET_PAGE);
export const getNewFilms = createAction(GET_NEW_FILMS);
export const setNextBatchState = createAction(SET_NEXT_BATCH_STATE);
export const setTotalPages = createAction(SET_TOTAL_PAGES);

function* getAllFilms(action) {
  yield put(setState(STATE_LOADING));

  try {
    const {data, totalPages} = yield call(fetchFilms, {
      pageNumber: action.payload.page,
      category: action.payload.category,
    });

    yield put(setTotalPages({totalPages, category: action.payload.category}));

    yield put(setFilms({data, category: action.payload.category}));
    yield put(setState(STATE_SUCCESS));
  } catch (ex) {
    console.warn(ex);

    yield put(setState(STATE_FAILURE));
  }
}

function* getSomeFilms(action) {
  yield put(setNextBatchState(STATE_LOADING));

  try {
    const {data} = yield call(fetchFilms, {
      pageNumber: action.payload.page + 1,
      category: action.payload.category,
    });

    yield put(setFilms({data, category: action.payload.category}));
    yield put(
      setPage({
        page: action.payload.page + 1,
        category: action.payload.category,
      }),
    );

    yield put(setNextBatchState(STATE_SUCCESS));
  } catch (ex) {
    console.warn(ex);

    yield put(setNextBatchState(STATE_FAILURE));
  }
}

export function* sagaWatcher() {
  yield takeEvery(GET_FILMS, getAllFilms);
  yield takeLeading(GET_NEW_FILMS, getSomeFilms);
}
