import {createSelector} from 'reselect';
import get from 'lodash/fp/get';

export const searchSelector = get('search');

export const typedFilmSelector = createSelector(
  searchSelector,
  get('typedFilm'),
);

export const typedCinemaSelector = createSelector(
  searchSelector,
  get('typedCinema'),
);

export const filmsSelector = createSelector(searchSelector, get('films'));

export const cinemasSelector = createSelector(searchSelector, get('cinemas'));
