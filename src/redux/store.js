import reducer from './reducer';
import {compose, createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {sagaWatcher} from './films/films.action';

const saga = createSagaMiddleware();

const store = createStore(reducer, compose(applyMiddleware(saga)));

saga.run(sagaWatcher);

export default store;
