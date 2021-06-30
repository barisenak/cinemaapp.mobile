import {call, put, select, takeEvery, takeLatest} from 'redux-saga/effects';

import {createAction} from 'app/utils/redux.util';
import {
  fetchBooking,
  fetchBookings,
  fetchActualBookings,
  fetchOldBookings,
} from 'app/api/booking.api';
import {bookedSeatsSelector} from './booking.selector';
import {STATE_LOADING, STATE_SUCCESS} from 'app/enum/state.enum';

export const SET_BOOKING = 'BOOKING/SET_BOOKING';
export const PUT_BOOKING = 'BOOKING/PUT_BOOKING';
export const GET_BOOKINGS = 'BOOKING/GET_BOOKINGS';
export const PUT_BOOKED_SEATS = 'BOOKING/PUT_BOOKED_SEATS';
export const SET_DATE_TIME = 'BOOKING/SET_DATE_TIME';
export const GET_ACTUAL_USER_BOOKINGS = 'BOOKING/GET_ACTUAL_USER_BOOKINGS';
export const GET_OLD_USER_BOOKINGS = 'BOOKING/GET_OLD_USER_BOOKINGS';
export const PUT_OLD_USER_BOOKINGS = 'BOOKING/PUT_OLD_USER_BOOKINGS';
export const PUT_ACTUAL_USER_BOOKINGS = 'BOOKING/PUT_ACTUAL_USER_BOOKINGS';
export const SET_BOOKING_STATE = 'TICKETS/SET_BOOKING_STATE';

export const setBooking = createAction(SET_BOOKING);
export const putBooking = createAction(PUT_BOOKING);
export const getBookings = createAction(GET_BOOKINGS);
export const putBookedSeats = createAction(PUT_BOOKED_SEATS);
export const setDateTime = createAction(SET_DATE_TIME);
export const getActualUserBookings = createAction(GET_ACTUAL_USER_BOOKINGS);
export const getOldUserBookings = createAction(GET_OLD_USER_BOOKINGS);
export const putOldUserBookings = createAction(PUT_OLD_USER_BOOKINGS);
export const putActualUserBookings = createAction(PUT_ACTUAL_USER_BOOKINGS);
export const setBookingState = createAction(SET_BOOKING_STATE);

function* addBooking(action) {
  try {
    const info = yield call(fetchBooking, {
      userId: action.payload.userId,
      filmId: action.payload.filmId,
      cinemaId: action.payload.cinemaId,
      bookingDate: action.payload.bookingDate,
      filmDate: action.payload.filmDate,
      ticketDate: action.payload.ticketDate,
      placeNumber: action.payload.placeNumber,
    });

    yield put(putBooking(info));

    const {data} = yield call(fetchBookings, {
      filmId: action.payload.filmId,
      cinemaId: action.payload.cinemaId,
      dateTime: new Date(info.filmDate).getTime(),
    });

    yield put(
      putBookedSeats({
        bookedSeats: data,
        dateTime: new Date(info.filmDate).getTime(),
      }),
    );
  } catch (ex) {
    console.warn(ex);
  }
}

function* getBookingData(action) {
  const bookedSeats = yield select(bookedSeatsSelector);
  if (bookedSeats) {
    return;
  }

  try {
    const {data} = yield call(fetchBookings, {
      filmId: action.payload.filmId,
      cinemaId: action.payload.cinemaId,
      dateTime: action.payload.dateTime,
    });

    yield put(
      putBookedSeats({bookedSeats: data, dateTime: action.payload.dateTime}),
    );
  } catch (ex) {
    console.warn(ex);
  }
}

function* getActualUserBookingsData(action) {
  try {
    yield put(setBookingState(STATE_LOADING));

    const {data} = yield call(fetchActualBookings, {
      userId: action.payload.userId,
      presentDateTime: action.payload.presentDateTime,
    });

    yield put(putActualUserBookings(data));
    yield put(setBookingState(STATE_SUCCESS));
  } catch (ex) {
    console.warn(ex);
  }
}

function* getOldUserBookingsData(action) {
  yield put(setBookingState(STATE_LOADING));

  try {
    const {oldData} = yield call(fetchOldBookings, {
      userId: action.payload.userId,
      presentDateTime: action.payload.presentDateTime,
    });

    yield put(putOldUserBookings(oldData));
    yield put(setBookingState(STATE_SUCCESS));
  } catch (ex) {
    console.warn(ex);
  }
}

export function* sagaWatcher() {
  yield takeEvery(SET_BOOKING, addBooking);
  yield takeLatest(GET_BOOKINGS, getBookingData);
  yield takeEvery(GET_ACTUAL_USER_BOOKINGS, getActualUserBookingsData);
  yield takeEvery(GET_OLD_USER_BOOKINGS, getOldUserBookingsData);
}
