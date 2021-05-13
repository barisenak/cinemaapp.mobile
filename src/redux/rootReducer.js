import {combineReducers} from 'redux';

import {favoritesReducer as favorites} from './favorites/favorites.reducer';
import {filmsReducer as films} from './films/films.reducer';
import {userReducer as user} from './user/user.reducer';

export const rootReducer = combineReducers({
  favorites,
  films,
  user,
});
