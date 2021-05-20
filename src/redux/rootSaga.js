import {all} from 'redux-saga/effects';

import {sagaWatcher as films} from './films/films.action';
import {sagaWatcher as auth} from './auth/auth.action';

export function* rootSagaWatcher() {
  yield all([
    // All saga watchers
    films(),
    auth(),
  ]);
}
