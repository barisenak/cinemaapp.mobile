import {combineReducers} from 'redux';

import {favoritesReducer as favorites} from './favorites/favorites.reducer';
import {filmsReducer as films} from './films/films.reducer';
import {userReducer as user} from './user/user.reducer';
import {authReducer as auth} from './auth/auth.reducer';
import {filmReducer as film} from './film/film.reducer';

export const rootReducer = combineReducers({
  favorites,
  films,
  user,
  auth,
  film,
});
