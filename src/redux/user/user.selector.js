import {createSelector} from 'reselect';

export const userSelector = st => st.user;

export const userDataSelector = createSelector(
  userSelector,
  user => user.userData,
);
