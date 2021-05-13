import {createReducer} from 'app/utils/redux.util';

import {STATE_INITIAL} from 'app/enum/state.enum';
import {
  SELECTED_TAB_CINEMAS,
  SELECTED_TAB_FILMS,
} from 'app/enum/favorites.enum';

import {SET_SELECTED_TAB} from './favorites.action';

const initialState = {
  selectedTab: SELECTED_TAB_FILMS,
};

export const favoritesReducer = createReducer(initialState, {
  [SET_SELECTED_TAB]: (st, selectedTab) => ({...st, selectedTab}),
});
