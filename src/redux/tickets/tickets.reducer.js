import {createReducer} from 'app/utils/redux.util';

import {SELECTED_TAB_ACTUAL} from 'app/enum/tickets.enum';

import {SET_SELECTED_TAB} from './tickets.action';

const initialState = {
  selectedTab: SELECTED_TAB_ACTUAL,
};

export const ticketsReducer = createReducer(initialState, {
  [SET_SELECTED_TAB]: (st, selectedTab) => ({...st, selectedTab}),
});
