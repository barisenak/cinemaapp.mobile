import {connect} from 'react-redux';

import Ticket from './Ticket.component';

import {filmCardSelector} from 'app/redux/film/film.selector';
import {userDataSelector} from 'app/redux/user/user.selector';
import {
  cinemaCardSelector,
  selectedSeatsSelector,
  totalPriceSelector,
  dateSelector,
} from 'app/redux/cinema/cinema.selector';

import {
  bookingOfUserSelector,
  dateTimeSelector,
} from 'app/redux/booking/booking.selector';

export default connect(
  st => ({
    film: filmCardSelector(st),
    cinema: cinemaCardSelector(st),
    user: userDataSelector(st),
    totalPrice: totalPriceSelector(st),
    selectedSeats: selectedSeatsSelector(st),
    date: dateTimeSelector(st),
    booking: bookingOfUserSelector(st),
  }),
  {},
)(Ticket);
