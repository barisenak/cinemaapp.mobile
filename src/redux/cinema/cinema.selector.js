import {createSelector} from 'reselect';
import get from 'lodash/fp/get';

export const cinemaSelector = get('cinema');

export const cinemaCardSelector = createSelector(cinemaSelector, get('cinema'));

export const selectedSeatsSelector = createSelector(
  cinemaSelector,
  get('selectedSeats'),
);

export const totalPriceSelector = createSelector(
  cinemaSelector,
  get('totalPrice'),
);

export const dateSelector = createSelector(cinemaSelector, get('date'));

export const timeSelector = createSelector(cinemaSelector, get('time'));

export const choosenTimeSelector = createSelector(
  cinemaSelector,
  get('choosenTime'),
);
