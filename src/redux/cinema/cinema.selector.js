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
