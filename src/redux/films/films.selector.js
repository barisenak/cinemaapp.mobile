import {createSelector} from 'reselect';

export const filmsSelector = st => st.films;

export const stateSelector = createSelector(
  filmsSelector,
  films => films.state,
);

export const pageSelector = createSelector(filmsSelector, films => films.page);

export const filmListSelector = createSelector(filmsSelector, films =>
  films.films.sort(
    (a, b) => Date.parse(b.releaseDate) - Date.parse(a.releaseDate),
  ),
);
