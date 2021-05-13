import {call, put, takeEvery} from 'redux-saga/effects';

import {createAction} from 'app/utils/redux.util';

export const SET_SELECTED_TAB = 'FAVORITES/SET_SELECTED_TAB';

export const setSelectedTab = createAction(SET_SELECTED_TAB);
