import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {filmCardSelector} from 'app/redux/film/film.selector';
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
  bookedSeatsSelector,
  bookingOfUserSelector,
  dateTimeSelector,
} from 'app/redux/booking/booking.selector';

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

import {SEATS_CARD, TICKET} from 'app/enum/navigation.enum';

import Seats from './Seats.component';

export default connect(
  createStructuredSelector({
    film: filmCardSelector,
    cinema: cinemaCardSelector,
    user: userDataSelector,
    selectedSeats: selectedSeatsSelector,
    totalPrice: totalPriceSelector,
    date: dateSelector,
    booking: bookingOfUserSelector,
    time: timeSelector,
    choosenTime: choosenTimeSelector,
    bookedSeats: bookedSeatsSelector,
    dateTime: dateTimeSelector,
  }),
  {
    setSelectedSeat,
    removeSelectedSeat,
    setDate,
    setBooking,
    setTime,
    setChoosenTime,
    getBookings,
    clearState,
    setDateTime,
    clearSelectedSeats,
    clearBookedSeats,
  },
  (stateProps, dispatchProps, ownProps) => {
    return {
      ...stateProps,
      ...dispatchProps,
      ...ownProps,

      onPayPress: () => {
        ownProps.navigation.navigate(TICKET, {
          ticketDate: new Date(stateProps.date).setHours(
            stateProps.choosenTime,
            0,
            0,
            0,
          ),
          placeNumber: stateProps.selectedSeats,
          prevScreen: SEATS_CARD,
        });
        dispatchProps.setBooking({
          userId: stateProps.user.id,
          cinemaId: stateProps.cinema.id,
          filmId: stateProps.film.id,
          bookingDate: Date.now(),
          filmDate: new Date(stateProps.date).setHours(
            stateProps.choosenTime + 3,
            0,
            0,
            0,
          ),
          ticketDate: new Date(stateProps.date).setHours(
            stateProps.choosenTime,
            0,
            0,
            0,
          ),
          placeNumber: stateProps.selectedSeats,
        });
      },
    };
  },
)(Seats);
