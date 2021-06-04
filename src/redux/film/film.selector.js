import {createSelector} from 'reselect';

export const filmSelector = st => st.film;

export const filmCardSelector = createSelector(filmSelector, film => {
  return film.film;
});

export const cinemasWithFilmSelector = createSelector(filmSelector, film => {
  return film.cinemas;
});
