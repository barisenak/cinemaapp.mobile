import {createReducer} from 'app/utils/redux.util';

import {SET_LANGUAGE} from 'app/redux/settings/settings.action';
import {ENGLISH, RUSSIAN} from 'app/enum/settings.enum';

const initialState = {
  language: ENGLISH,
};

export const settingsReducer = createReducer(initialState, {
  [SET_LANGUAGE]: (st, language) => ({
    ...st,
    language,
  }),
});
