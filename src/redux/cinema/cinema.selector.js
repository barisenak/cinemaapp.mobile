import {createSelector} from 'reselect';

export const cinemaSelector = st => st.cinema;

export const cinemaCardSelector = createSelector(cinemaSelector, cinema => {
  return cinema.cinema;
});

export const selectedSeatsSelector = createSelector(cinemaSelector, cinema => {
  return cinema.selectedSeats;
});

export const totalPriceSelector = createSelector(cinemaSelector, cinema => {
  return cinema.totalPrice;
});

export const dateSelector = createSelector(cinemaSelector, cinema => {
  return cinema.date;
});

export const timeSelector = createSelector(cinemaSelector, cinema => {
  return cinema.time;
});

export const choosenTimeSelector = createSelector(cinemaSelector, cinema => {
  return cinema.choosenTime;
});
