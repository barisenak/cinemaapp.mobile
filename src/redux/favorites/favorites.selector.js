import {createSelector} from 'reselect';

export const favoritesSelector = st => st.favorites;

export const selectedTabSelector = createSelector(
  favoritesSelector,
  favorites => favorites.selectedTab,
);
