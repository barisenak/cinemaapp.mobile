import {createSelector} from 'reselect';

export const userSelector = st => st.user;

export const isLoggedInSelector = createSelector(
  userSelector,
  user => user.isLoggedIn,
);
