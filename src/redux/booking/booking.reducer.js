import {createReducer} from 'app/utils/redux.util';

import {
  PUT_BOOKING,
  PUT_BOOKED_SEATS,
  SET_DATE_TIME,
  PUT_ACTUAL_USER_BOOKINGS,
  PUT_OLD_USER_BOOKINGS,
  CLEAR_BOOKED_SEATS,
  SET_BOOKING_STATE,
} from './booking.action';

import {STATE_INITIAL} from 'app/enum/state.enum';

const initialState = {
  booking: null,
  allBookings: [],
  dateTime: new Date(),
  state: STATE_INITIAL,
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

  [SET_BOOKING_STATE]: (st, state) => {
    console.log('now');
    return {...st, state};
  },

  [SET_DATE_TIME]: (st, dateTime) => ({
    ...st,
    dateTime,
  }),

  [PUT_ACTUAL_USER_BOOKINGS]: (st, data) => ({
    ...st,
    allBookings: {
      ...st.allBookings,
      actual: data,
    },
  }),

  [PUT_OLD_USER_BOOKINGS]: (st, data) => ({
    ...st,
    allBookings: {
      ...st.allBookings,
      old: data,
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
