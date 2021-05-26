import {createSelector} from 'reselect';

export const authSelector = st => st.auth;

export const typedEmailSelector = createSelector(
  authSelector,
  auth => auth.typedEmail,
);

export const typedPasswordSelector = createSelector(
  authSelector,
  auth => auth.typedPassword,
);
