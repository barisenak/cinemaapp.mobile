import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {filmCardSelector} from 'app/redux/film/film.selector';
import {userDataSelector} from 'app/redux/user/user.selector';
import {
  cinemaCardSelector,
  totalPriceSelector,
  dateSelector,
  choosenTimeSelector,
  timeSelector,
  selectedSeatsSelector,
} from 'app/redux/cinema/cinema.selector';
import {
  bookingOfUserSelector,
  dateTimeSelector,
} from 'app/redux/booking/booking.selector';

import {
  setDate,
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
    totalPrice: totalPriceSelector,
    date: dateSelector,
    booking: bookingOfUserSelector,
    time: timeSelector,
    choosenTime: choosenTimeSelector,
    dateTime: dateTimeSelector,
    selectedSeats: selectedSeatsSelector,
  }),
  {
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

      setInitTimeParams: () => {
        const lastTimeToday = new Date(Date.now()).setHours(24 + 3, 0, 59, 0);

        if (stateProps.date.getTime() - lastTimeToday > 0) {
          dispatchProps.setTime(stateProps.cinema.workingTime.start - 2);

          dispatchProps.setChoosenTime(stateProps.cinema.workingTime.start);
        } else {
          dispatchProps.setTime(new Date().getHours());

          const presentTime = new Date().getHours();

          presentTime % 2 === 0
            ? dispatchProps.setChoosenTime(presentTime + 2)
            : dispatchProps.setChoosenTime(presentTime + 1);
        }
      },

      onChangeTimeOrDate: () => {
        dispatchProps.clearSelectedSeats();
        dispatchProps.setDateTime(
          new Date(stateProps.date).setHours(
            stateProps.choosenTime + 3,
            0,
            0,
            0,
          ),
        );
        'id' in stateProps.cinema &&
          dispatchProps.getBookings({
            filmId: stateProps.film.id,
            cinemaId: stateProps.cinema.id,
            dateTime: new Date(stateProps.date).setHours(
              stateProps.choosenTime + 3,
              0,
              0,
              0,
            ),
          });
      },

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
