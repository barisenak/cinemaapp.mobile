import {createSelector} from 'reselect';
import get from 'lodash/fp/get';

export const filmSelector = get('film');

export const filmCardSelector = createSelector(filmSelector, get('film'));

export const cinemasWithFilmSelector = createSelector(
  filmSelector,
  get('cinemas'),
);
