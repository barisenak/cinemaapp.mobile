import {createSelector} from 'reselect';
import get from 'lodash/fp/get';

export const settingsSelector = get('settings');

export const languageSelector = createSelector(
  settingsSelector,
  get('language'),
);

export const themeSelector = createSelector(settingsSelector, get('theme'));
