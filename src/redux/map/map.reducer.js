import {createReducer} from 'app/utils/redux.util';

import {SET_LOCATION, PUT_CINEMAS, PUT_MARKERS} from './map.action';

const initialState = {
  location: {},
  cinemas: [],
  markers: [],
};

export const mapReducer = createReducer(initialState, {
  [SET_LOCATION]: (st, location) => ({...st, location}),

  [PUT_MARKERS]: (st, markers) => ({...st, markers}),

  [PUT_CINEMAS]: (st, cinemas) => ({...st, cinemas}),
});
