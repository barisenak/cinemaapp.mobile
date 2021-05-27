import {createSelector} from 'reselect';

export const registerSelector = st => st.register;

export const typedEmailSelector = createSelector(
  registerSelector,
  register => register.typedEmail,
);

export const typedPasswordSelector = createSelector(
  registerSelector,
  register => register.typedPassword,
);

export const errorTextSelector = createSelector(
  registerSelector,
  register => register.errorText,
);
