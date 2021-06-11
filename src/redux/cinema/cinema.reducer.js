import {createReducer} from 'app/utils/redux.util';
import {SET_SELECTED_SEAT, REMOVE_SELECTED_SEAT} from '../seat/seat.action';

import {SET_CINEMA_CARD} from './cinema.action';

const initialState = {
  cinema: {},
  selectedSeats: [],
  totalPrice: 0,
};

export const cinemaReducer = createReducer(initialState, {
  [SET_CINEMA_CARD]: (st, cinema) => ({
    ...st,
    cinema,
    selectedSeats: [],
    totalPrice: 0,
  }),

  [SET_SELECTED_SEAT]: (st, {seatNumber, price}) => ({
    ...st,
    selectedSeats: [...st.selectedSeats].concat([seatNumber]),
    totalPrice: st.totalPrice + price,
  }),

  [REMOVE_SELECTED_SEAT]: (st, {seatToRemove, price}) => ({
    ...st,
    selectedSeats: [...st.selectedSeats].filter(
      (el, id) => id !== seatToRemove,
    ),
    totalPrice: st.totalPrice - price,
  }),
});
