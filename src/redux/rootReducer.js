import {combineReducers} from 'redux';

import {favoritesReducer as favorites} from './favorites/favorites.reducer';
import {filmsReducer as films} from './films/films.reducer';
import {userReducer as user} from './user/user.reducer';
import {authReducer as auth} from './auth/auth.reducer';
import {filmReducer as film} from './film/film.reducer';
import {registerReducer as register} from './register/register.reducer';
import {cinemaReducer as cinema} from './cinema/cinema.reducer';
import {seatsReducer as seat} from './seat/seat.reducer';

export const rootReducer = combineReducers({
  favorites,
  films,
  user,
  auth,
  film,
  register,
  cinema,
  seat,
});
