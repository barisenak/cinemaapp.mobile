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
import {createStructuredSelector} from 'reselect';
import {useCallback} from 'react';
import {SEATS_CARD, TICKET} from 'app/enum/navigation.enum';

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
