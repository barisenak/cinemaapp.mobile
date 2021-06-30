import {connect} from 'react-redux';

import Ticket from './Ticket.component';

import {filmCardSelector} from 'app/redux/film/film.selector';
import {userDataSelector} from 'app/redux/user/user.selector';
import {
  cinemaCardSelector,
  totalPriceSelector,
} from 'app/redux/cinema/cinema.selector';

import {bookingOfUserSelector} from 'app/redux/booking/booking.selector';

export default connect(
  st => ({
    film: filmCardSelector(st),
    cinema: cinemaCardSelector(st),
    user: userDataSelector(st),
    totalPrice: totalPriceSelector(st),
    booking: bookingOfUserSelector(st),
  }),
  {},
)(Ticket);
