import {call, put, takeEvery} from 'redux-saga/effects';

export const getFilms = value => {
  return {
    type: 'GET_FILMS',
  };
};

export const saveFilms = films => {
  return {
    type: 'SAVE_FILMS',
    payload: films.data.json(),
  };
};

export const fetchFilms = async () => {
  const data = await fetch('https://cinemaapp-api.herokuapp.com/films/all');
  const result = await data.json();

  return result;
};
// fetch mdn

function* getAllFilms() {
  const films = yield call(fetchFilms);
  console.log(films);
  yield put(saveFilms(films.data));
}

export function* sagaWatcher() {
  yield takeEvery(getFilms, getAllFilms);
}
