import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import Tickets from './Tickets.component';

import {filmCardSelector} from 'app/redux/film/film.selector';
import {selectedTabSelector} from 'app/redux/tickets/tickets.selector';
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
  stateSelector,
} from 'app/redux/booking/booking.selector';

import {
  getActualUserBookings,
  getOldUserBookings,
  setState,
} from 'app/redux/booking/booking.action';
import {getFilmCard} from 'app/redux/film/film.action';
import {getCinemaCard} from 'app/redux/cinema/cinema.action';
import {setSelectedTab} from 'app/redux/tickets/tickets.action';

export default connect(
  createStructuredSelector({
    film: filmCardSelector,
    cinema: cinemaCardSelector,
    user: userDataSelector,
    totalPrice: totalPriceSelector,
    selectedSeats: selectedSeatsSelector,
    date: dateTimeSelector,
    booking: bookingOfUserSelector,
    allBookings: allBookingsOfUserSelector,
    userData: userDataSelector,
    selectedTab: selectedTabSelector,
    state: stateSelector,
  }),
  {
    getActualUserBookings,
    getOldUserBookings,
    getFilmCard,
    getCinemaCard,
    setSelectedTab,
    setState,
  },
)(Tickets);
