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
import {createStructuredSelector} from 'reselect';

createStructuredSelector;

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
    getActualUserBookings: getActualUserBookings,
    getOldUserBookings: getOldUserBookings,
    getFilmCard: getFilmCard,
    getCinemaCard: getCinemaCard,
    setSelectedTab: setSelectedTab,
    setState: setState,
  },
)(Tickets);
