import {createReducer} from 'app/utils/redux.util';

import {SET_SELECTED_SEAT, REMOVE_SELECTED_SEAT} from './seat.action';

const initialState = {
  selectedSeats: [],
};

export const seatsReducer = createReducer(initialState, {});
