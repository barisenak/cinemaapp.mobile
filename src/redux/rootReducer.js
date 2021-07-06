import {combineReducers} from 'redux';

import {favoritesReducer as favorites} from './favorites/favorites.reducer';
import {filmsReducer as films} from './films/films.reducer';
import {userReducer as user} from './user/user.reducer';
import {authReducer as auth} from './auth/auth.reducer';
import {filmReducer as film} from './film/film.reducer';
import {registerReducer as register} from './register/register.reducer';
import {cinemaReducer as cinema} from './cinema/cinema.reducer';
import {bookingsReducer as bookings} from './booking/booking.reducer';
import {ticketsReducer as tickets} from './tickets/tickets.reducer';
import {searchReducer as search} from './search/search.reducer';
import {mapReducer as map} from './map/map.reducer';
import {settingsReducer as settings} from './settings/settings.reducer';

export const rootReducer = combineReducers({
  favorites,
  films,
  user,
  auth,
  film,
  register,
  cinema,
  bookings,
  tickets,
  search,
  map,
  settings,
});
