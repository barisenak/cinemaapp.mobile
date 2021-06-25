import {createReducer} from 'app/utils/redux.util';

import {
  PUT_BOOKING,
  PUT_BOOKED_SEATS,
  SET_DATE_TIME,
  PUT_ALL_USER_BOOKINGS,
  CLEAR_BOOKED_SEATS,
} from './booking.action';

const initialState = {
  booking: null,
  allBookings: [],
  dateTime: new Date(),
  bookedSeats: {
    old: null,
    actual: null,
  },
};

export const bookingsReducer = createReducer(initialState, {
  [PUT_BOOKING]: (st, booking) => ({
    ...st,
    booking: booking,
  }),

  [SET_DATE_TIME]: (st, dateTime) => ({
    ...st,
    dateTime,
  }),

  [PUT_ALL_USER_BOOKINGS]: (st, {data, oldData}) => ({
    ...st,
    allBookings: {
      old: oldData,
      actual: data,
    },
  }),

  // [CLEAR_BOOKED_SEATS]: (st, {dateTime}) => ({
  //   ...st,
  //   bookedSeats: {
  //     ...st.bookedSeats,
  //     [dateTime]: bookedSeats,
  //   },
  // }),

  [PUT_BOOKED_SEATS]: (st, {dateTime, bookedSeats}) => ({
    ...st,
    bookedSeats: {
      ...st.bookedSeats,
      [dateTime]: bookedSeats,
    },
  }),
});
