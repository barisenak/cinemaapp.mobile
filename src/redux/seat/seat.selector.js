import {createSelector} from 'reselect';

export const seatSelector = st => st.seat;

export const selectedSeatsSelector = createSelector(
  seatSelector,
  seat => seat.selectedSeats,
);
