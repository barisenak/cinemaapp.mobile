import {createReducer} from 'app/utils/redux.util';

import {REHYDRATE} from 'redux-persist';

import {SET_LANGUAGE} from 'app/redux/settings/settings.action';
import {ENGLISH} from 'app/enum/settings.enum';

const initialState = {
  language: ENGLISH,
};

export const settingsReducer = createReducer(initialState, {
  [SET_LANGUAGE]: (st, language) => ({
    ...st,
    language,
  }),

  [REHYDRATE]: (st, {settings}) => {
    return settings
      ? {
          ...st,
          ...settings,
        }
      : st;
  },
});
