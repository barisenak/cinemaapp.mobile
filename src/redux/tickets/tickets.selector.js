import {createSelector} from 'reselect';
import get from 'lodash/fp/get';

export const ticketsSelector = get('tickets');

export const selectedTabSelector = createSelector(
  ticketsSelector,
  get('selectedTab'),
);
