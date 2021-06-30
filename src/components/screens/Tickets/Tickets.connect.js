import {connect} from 'react-redux';

import Tickets from './Tickets.component';

import {filmCardSelector} from 'app/redux/film/film.selector';
import {userDataSelector} from 'app/redux/user/user.selector';
import {
  cinemaCardSelector,
  selectedSeatsSelector,
  totalPriceSelector,
} from 'app/redux/cinema/cinema.selector';

import {
  bookingOfUserSelector,
  dateTimeSelector,
  allBookingsOfUserSelector,
} from 'app/redux/booking/booking.selector';
import {
  getActualUserBookings,
  getOldUserBookings,
  setState,
} from 'app/redux/booking/booking.action';
import {getFilmCard} from 'app/redux/film/film.action';
import {getCinemaCard} from 'app/redux/cinema/cinema.action';
import {selectedTabSelector} from 'app/redux/tickets/tickets.selector';
import {setSelectedTab} from 'app/redux/tickets/tickets.action';
import {stateSelector} from 'app/redux/booking/booking.selector';

export default connect(
  st => ({
    film: filmCardSelector(st),
    cinema: cinemaCardSelector(st),
    user: userDataSelector(st),
    totalPrice: totalPriceSelector(st),
    selectedSeats: selectedSeatsSelector(st),
    date: dateTimeSelector(st),
    booking: bookingOfUserSelector(st),
    allBookings: allBookingsOfUserSelector(st),
    userData: userDataSelector(st),
    selectedTab: selectedTabSelector(st),
    state: stateSelector(st),
  }),
  {
    getActualUserBookings: getActualUserBookings,
    getOldUserBookings: getOldUserBookings,
    getFilmCard: getFilmCard,
    getCinemaCard: getCinemaCard,
    setSelectedTab: setSelectedTab,
    setState: setState,
  },
)(Tickets);
