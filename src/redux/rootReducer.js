import {combineReducers} from 'redux';

import {filmsReducer as films} from './films/films.reducer';

export const rootReducer = combineReducers({
  films,
});
