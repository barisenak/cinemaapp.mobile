import {compose, createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import {rootSagaWatcher} from './rootSaga';
import {rootReducer} from './rootReducer';

const saga = createSagaMiddleware();

const store = createStore(rootReducer, compose(applyMiddleware(saga)));

saga.run(rootSagaWatcher);

export default store;
