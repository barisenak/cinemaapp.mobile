import {all} from 'redux-saga/effects';

import {sagaWatcher as films} from './films/films.action';
import {sagaWatcher as auth} from './auth/auth.action';
import {sagaWatcher as register} from './register/register.action';
import {sagaWatcher as film} from './film/film.action';

export function* rootSagaWatcher() {
  yield all([
    // All saga watchers
    films(),
    auth(),
    register(),
    film(),
  ]);
}
