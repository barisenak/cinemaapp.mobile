import {createSelector} from 'reselect';
import get from 'lodash/fp/get';

export const authSelector = get('auth');

export const typedEmailSelector = createSelector(
  authSelector,
  get('typedEmail'),
);

export const typedPasswordSelector = createSelector(
  authSelector,
  get('typedPassword'),
);

export const errorTextSelector = createSelector(authSelector, get('errorText'));
