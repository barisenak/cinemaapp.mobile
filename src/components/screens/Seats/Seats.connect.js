import {connect} from 'react-redux';

import {filmCardSelector} from 'app/redux/film/film.selector';

import Seats from './Seats.component';
import {userDataSelector} from 'app/redux/user/user.selector';
import {
  cinemaCardSelector,
  totalPriceSelector,
} from 'app/redux/cinema/cinema.selector';
import {removeSelectedSeat, setSelectedSeat} from 'app/redux/seat/seat.action';
import {selectedSeatsSelector} from 'app/redux/cinema/cinema.selector';

export default connect(
  st => ({
    film: filmCardSelector(st),
    cinema: cinemaCardSelector(st),
    user: userDataSelector(st),
    selectedSeats: selectedSeatsSelector(st),
    totalPrice: totalPriceSelector(st),
  }),
  {
    setSelectedSeat: setSelectedSeat,
    removeSelectedSeat: removeSelectedSeat,
  },
)(Seats);
