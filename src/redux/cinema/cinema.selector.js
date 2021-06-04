import {createSelector} from 'reselect';

export const cinemaSelector = st => st.cinema;

export const cinemaCardSelector = createSelector(cinemaSelector, cinema => {
  return cinema.cinema;
});
