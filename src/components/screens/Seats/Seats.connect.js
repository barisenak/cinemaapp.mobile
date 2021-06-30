import {connect} from 'react-redux';

import {filmCardSelector} from 'app/redux/film/film.selector';

import Seats from './Seats.component';
import {userDataSelector} from 'app/redux/user/user.selector';
import {
  cinemaCardSelector,
  totalPriceSelector,
  dateSelector,
  choosenTimeSelector,
  selectedSeatsSelector,
  timeSelector,
} from 'app/redux/cinema/cinema.selector';
import {
  removeSelectedSeat,
  setDate,
  setSelectedSeat,
  setTime,
  setChoosenTime,
  clearState,
  clearSelectedSeats,
} from 'app/redux/cinema/cinema.action';
import {
  clearBookedSeats,
  getBookings,
  setBooking,
  setDateTime,
} from 'app/redux/booking/booking.action';
import {
  bookedSeatsSelector,
  bookingOfUserSelector,
  dateTimeSelector,
} from 'app/redux/booking/booking.selector';

export default connect(
  st => ({
    film: filmCardSelector(st),
    cinema: cinemaCardSelector(st),
    user: userDataSelector(st),
    selectedSeats: selectedSeatsSelector(st),
    totalPrice: totalPriceSelector(st),
    date: dateSelector(st),
    booking: bookingOfUserSelector(st),
    time: timeSelector(st),
    choosenTime: choosenTimeSelector(st),
    bookedSeats: bookedSeatsSelector(st),
    dateTime: dateTimeSelector(st),
  }),
  {
    setSelectedSeat: setSelectedSeat,
    removeSelectedSeat: removeSelectedSeat,
    setDate: setDate,
    setBooking: setBooking,
    setTime: setTime,
    setChoosenTime: setChoosenTime,
    getBookings: getBookings,
    clearState: clearState,
    setDateTime: setDateTime,
    clearSelectedSeats: clearSelectedSeats,
    clearBookedSeats: clearBookedSeats,
  },
)(Seats);
