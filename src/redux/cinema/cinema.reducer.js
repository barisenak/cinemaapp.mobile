import {createReducer} from 'app/utils/redux.util';

import {
  SET_CINEMA_CARD,
  SET_DATE,
  SET_TIME,
  SET_CHOOSEN_TIME,
  CLEAR_STATE,
  SET_SELECTED_SEAT,
  REMOVE_SELECTED_SEAT,
  CLEAR_SELECTED_SEATS,
} from './cinema.action';

const initialState = {
  cinema: {},
  selectedSeats: [],
  totalPrice: 0,
  date: new Date(),
  time: 0,
  choosenTime: 0,
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

  [CLEAR_SELECTED_SEATS]: st => ({
    ...st,
    selectedSeats: [],
    totalPrice: 0,
  }),

  [CLEAR_STATE]: st => ({
    ...st,
    selectedSeats: [],
    totalPrice: 0,
    time: 0,
    choosenTime: 0,
    date: new Date(),
  }),

  [REMOVE_SELECTED_SEAT]: (st, {seatToRemove, price}) => ({
    ...st,
    selectedSeats: [...st.selectedSeats].filter(
      (el, id) => id !== seatToRemove,
    ),
    totalPrice: st.totalPrice - price,
  }),

  [SET_DATE]: (st, date) => ({
    ...st,
    date,
  }),

  [SET_TIME]: (st, time) => ({
    ...st,
    time,
  }),

  [SET_CHOOSEN_TIME]: (st, choosenTime) => ({
    ...st,
    choosenTime,
  }),
});
