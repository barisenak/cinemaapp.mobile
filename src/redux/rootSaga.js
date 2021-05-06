import {all} from 'redux-saga/effects';

import {sagaWatcher as films} from './films/films.action';

export function* rootSagaWatcher() {
  yield all([
    // All saga watchers
    films(),
  ]);
}
