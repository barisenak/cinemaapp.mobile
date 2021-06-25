import {fetchJSON} from 'app/utils/fetch.util';

export const fetchBooking = ({
  userId = '',
  filmId = '',
  cinemaId = '',
  bookingDate = '',
  filmDate = '',
  ticketDate = '',
  placeNumber = '',
} = {}) => {
  return fetchJSON('users/addBooking', {
    body: {
      userId,
      filmId,
      cinemaId,
      bookingDate,
      filmDate,
      ticketDate,
      placeNumber,
    },
    method: 'POST',
  });
};

export const fetchBookings = ({
  filmId = '',
  cinemaId = '',
  dateTime = '',
} = {}) => {
  return fetchJSON('users/bookings', {
    body: {
      filmId,
      cinemaId,
      dateTime,
    },
    method: 'POST',
  });
};

export const fetchAllBookings = ({userId = '', presentDateTime = ''} = {}) => {
  return fetchJSON('users/bookings/all', {
    body: {
      userId,
      presentDateTime,
    },
    method: 'POST',
  });
};
