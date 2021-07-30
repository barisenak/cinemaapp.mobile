import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import Ticket from './Ticket.component';

import {filmCardSelector} from 'app/redux/film/film.selector';
import {userDataSelector} from 'app/redux/user/user.selector';
import {
  cinemaCardSelector,
  totalPriceSelector,
} from 'app/redux/cinema/cinema.selector';
import {bookingOfUserSelector} from 'app/redux/booking/booking.selector';

export default connect(
  createStructuredSelector({
    film: filmCardSelector,
    cinema: cinemaCardSelector,
    user: userDataSelector,
    totalPrice: totalPriceSelector,
    booking: bookingOfUserSelector,
  }),
  {},
)(Ticket);
