import {createSelector} from 'reselect';

export const searchSelector = st => st.search;

export const typedFilmSelector = createSelector(
  searchSelector,
  search => search.typedFilm,
);

export const typedCinemaSelector = createSelector(
  searchSelector,
  search => search.typedCinema,
);

export const filmsSelector = createSelector(
  searchSelector,
  search => search.films,
);

export const cinemasSelector = createSelector(
  searchSelector,
  search => search.cinemas,
);
