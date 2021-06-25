import {call, put, select, takeEvery, takeLatest} from 'redux-saga/effects';

import {createAction} from 'app/utils/redux.util';
import {
  fetchBooking,
  fetchBookings,
  fetchAllBookings,
} from 'app/api/booking.api';
import {bookedSeatsSelector} from './booking.selector';

export const SET_BOOKING = 'BOOKING/SET_BOOKING';
export const PUT_BOOKING = 'BOOKING/PUT_BOOKING';
export const GET_BOOKINGS = 'BOOKING/GET_BOOKINGS';
export const PUT_BOOKED_SEATS = 'BOOKING/PUT_BOOKED_SEATS';
export const SET_DATE_TIME = 'BOOKING/SET_DATE_TIME';
export const GET_ALL_USER_BOOKINGS = 'BOOKING/GET_ALL_USER_BOOKINGS';
export const PUT_ALL_USER_BOOKINGS = 'BOOKING/PUT_ALL_USER_BOOKINGS';
export const CLEAR_BOOKED_SEATS = 'BOOKING/CLEAR_BOOKED_SEATS';

export const setBooking = createAction(SET_BOOKING);
export const putBooking = createAction(PUT_BOOKING);
export const getBookings = createAction(GET_BOOKINGS);
export const putBookedSeats = createAction(PUT_BOOKED_SEATS);
export const setDateTime = createAction(SET_DATE_TIME);
export const getAllUserBookings = createAction(GET_ALL_USER_BOOKINGS);
export const putAllUserBookings = createAction(PUT_ALL_USER_BOOKINGS);
export const clearBookedSeats = createAction(CLEAR_BOOKED_SEATS);

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

function* getAllUserBookingsData(action) {
  try {
    const {data, oldData} = yield call(fetchAllBookings, {
      userId: action.payload.userId,
      presentDateTime: action.payload.presentDateTime,
    });

    yield put(putAllUserBookings({data, oldData}));
  } catch (ex) {
    console.warn(ex);
  }
}

export function* sagaWatcher() {
  yield takeEvery(SET_BOOKING, addBooking);
  yield takeLatest(GET_BOOKINGS, getBookingData);
  yield takeEvery(GET_ALL_USER_BOOKINGS, getAllUserBookingsData);
}
