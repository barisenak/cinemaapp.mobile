import {createSelector} from 'reselect';

export const bookingSelector = st => st.bookings;

export const bookingOfUserSelector = createSelector(
  bookingSelector,
  bookings => {
    return bookings.booking;
  },
);

export const allBookingsOfUserSelector = createSelector(
  bookingSelector,
  bookings => {
    return bookings.allBookings;
  },
);

export const dateTimeSelector = createSelector(bookingSelector, bookings => {
  return bookings.dateTime;
});

export const stateSelector = createSelector(bookingSelector, bookings => {
  return bookings.state;
});

export const bookedSeatsSelector = createSelector(
  [bookingSelector, dateTimeSelector],
  (bookings, dateTime) => {
    return bookings.bookedSeats && bookings.bookedSeats[dateTime]
      ? bookings.bookedSeats[dateTime]
      : null;
  },
);
