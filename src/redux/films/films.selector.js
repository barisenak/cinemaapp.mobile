import {createSelector} from 'reselect';
import get from 'lodash/fp/get';

export const filmsSelector = get('films');

export const stateSelector = createSelector(filmsSelector, get('state'));

export const nextBatchStateSelector = createSelector(
  filmsSelector,
  get('nextBatchState'),
);

export const pageSelector = createSelector(filmsSelector, get('page'));

export const totalPagesSelector = createSelector(
  filmsSelector,
  get('totalPages'),
);

export const filmListSelector = createSelector(filmsSelector, get('films'));
