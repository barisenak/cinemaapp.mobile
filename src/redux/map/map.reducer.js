import {createReducer} from 'app/utils/redux.util';

import {SET_LOCATION, PUT_CINEMAS} from './map.action';

const initialState = {
  location: {lat: 0, lng: 0},
  cinemas: [],
};

export const mapReducer = createReducer(initialState, {
  [SET_LOCATION]: (st, location) => ({...st, location}),

  [PUT_CINEMAS]: (st, cinemas) => ({...st, cinemas}),
});
