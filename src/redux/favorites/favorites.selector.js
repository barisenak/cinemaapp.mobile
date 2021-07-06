import {createSelector} from 'reselect';
import get from 'lodash/fp/get';

export const favoritesSelector = st => st.favorites;

export const selectedTabSelector = createSelector(
  favoritesSelector,
  get('selectedTab'),
);
