import {createSelector} from 'reselect';

export const filmsSelector = st => st.films;

export const stateSelector = createSelector(
  filmsSelector,
  films => films.state,
);

export const nextBatchStateSelector = createSelector(
  filmsSelector,
  films => films.nextBatchState,
);

export const pageSelector = createSelector(filmsSelector, films => films.page);

export const totalPagesSelector = createSelector(
  filmsSelector,
  films => films.totalPages,
);

export const filmListSelector = createSelector(
  filmsSelector,
  films => films.films,
);
