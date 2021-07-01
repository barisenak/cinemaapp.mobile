import {createAction} from 'app/utils/redux.util';

export const SET_USER = 'AUTH/SET_USER';
export const CLEAR_USER = 'AUTH/CLEAR_USER';

export const setUser = createAction(SET_USER);
export const clearUser = createAction(CLEAR_USER);
