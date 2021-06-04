import {createReducer} from 'app/utils/redux.util';

import {SET_CINEMA_CARD} from './cinema.action';

const initialState = {
  cinema: {},
};

export const cinemaReducer = createReducer(initialState, {
  [SET_CINEMA_CARD]: (st, cinema) => ({...st, cinema: cinema.cinema}),
});
