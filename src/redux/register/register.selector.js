import {createSelector} from 'reselect';
import get from 'lodash/fp/get';

export const registerSelector = get('register');

export const typedEmailSelector = createSelector(
  registerSelector,
  get('typedEmail'),
);

export const typedPasswordSelector = createSelector(
  registerSelector,
  get('typedPassword'),
);

export const errorTextSelector = createSelector(
  registerSelector,
  get('errorText'),
);
