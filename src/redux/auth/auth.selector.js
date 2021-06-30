import {createSelector} from 'reselect';
import get from 'lodash/fp/get';

// st => st.auth;
export const authSelector = get('auth');

export const typedEmailSelector = createSelector(
  authSelector,
  // REVIEW: Let's use {get} from 'lodash/fp/get',
  // so we can reduce duplication.
  get('typedEmail'),
  // auth => auth.typedEmail,
);

export const typedPasswordSelector = createSelector(
  authSelector,
  // auth => auth.typedPassword,
  get('typedPassword'),
);

export const errorTextSelector = createSelector(
  authSelector,
  // auth => auth.errorText,
  get('errorText'),
);
