import {compose, createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import createSagaMiddleware from 'redux-saga';

import {Reactotron} from '../../reactotron.config';
import {rootSagaWatcher} from './rootSaga';
import {rootReducer} from './rootReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const saga = createSagaMiddleware();
const args = [applyMiddleware(saga)];

if (__DEV__) {
  args.push(Reactotron.createEnhancer());
}

const store = createStore(persistedReducer, compose(...args));
let persistor = persistStore(store);

saga.run(rootSagaWatcher);

export default {
  store,
  persistor,
};
