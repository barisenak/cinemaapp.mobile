import {connect} from 'react-redux';

import Search from './Search.component';

import {
  typedCinemaSelector,
  typedFilmSelector,
  filmsSelector,
  cinemasSelector,
} from 'app/redux/search/search.selector';
import {
  setTypedCinema,
  setTypedFilm,
  makeSearch,
} from 'app/redux/search/search.action';

// import {filmCardSelector} from 'app/redux/film/film.selector';
// import {userDataSelector} from 'app/redux/user/user.selector';
// import {
//   cinemaCardSelector,
//   selectedSeatsSelector,
//   totalPriceSelector,
//   dateSelector,
// } from 'app/redux/cinema/cinema.selector';

// import {
//   bookingOfUserSelector,
//   dateTimeSelector,
// } from 'app/redux/booking/booking.selector';

export default connect(
  st => ({
    // film: filmCardSelector(st),
    // cinema: cinemaCardSelector(st),
    // user: userDataSelector(st),
    // totalPrice: totalPriceSelector(st),
    // selectedSeats: selectedSeatsSelector(st),
    // date: dateTimeSelector(st),
    // booking: bookingOfUserSelector(st),
    typedCinema: typedCinemaSelector(st),
    typedFilm: typedFilmSelector(st),
    films: filmsSelector(st),
    cinemas: cinemasSelector(st),
  }),
  {
    setTypedFilm: setTypedFilm,
    setTypedCinema: setTypedCinema,
    makeSearch: makeSearch,
  },
)(Search);
