import {compose, createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import {Reactotron} from '../../reactotron.config';
import {rootSagaWatcher} from './rootSaga';
import {rootReducer} from './rootReducer';

const saga = createSagaMiddleware();
const args = [applyMiddleware(saga)];

if (__DEV__) {
  args.push(Reactotron.createEnhancer());
}

const store = createStore(rootReducer, compose(...args));

saga.run(rootSagaWatcher);

export default store;
