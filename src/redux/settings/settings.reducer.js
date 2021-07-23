import {createReducer} from 'app/utils/redux.util';

import {REHYDRATE} from 'redux-persist';

import {SET_LANGUAGE, SET_THEME} from 'app/redux/settings/settings.action';
import {ENGLISH, RUSSIAN} from 'app/enum/settings.enum';
import {LIGHT} from 'app/enum/theme.enum';

const initialState = {
  language: ENGLISH,
  theme: LIGHT,
};

export const settingsReducer = createReducer(initialState, {
  [SET_LANGUAGE]: (st, language) => ({
    ...st,
    language,
  }),

  [SET_THEME]: (st, theme) => ({
    ...st,
    theme,
  }),

  [REHYDRATE]: (st, {settings}) => ({
    ...st,
    ...settings,
  }),
});
