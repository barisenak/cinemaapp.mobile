import {createReducer} from 'app/utils/redux.util';

import {STATE_INITIAL} from 'app/enum/state.enum';
import {
  CATEGORY_COMEDY,
  CATEGORY_DRAMA,
  CATEGORY_BIOGRAPHY,
  CATEGORY_RECENTLY_RELEASED,
} from 'app/enum/category.enum';

import {
  SET_STATE,
  SET_FILMS,
  SET_PAGE,
  SET_TOTAL_PAGES,
  SET_NEXT_BATCH_STATE,
} from './films.action';

const initialState = {
  state: STATE_INITIAL,
  films: {
    [CATEGORY_COMEDY]: [],
    [CATEGORY_DRAMA]: [],
    [CATEGORY_BIOGRAPHY]: [],
    [CATEGORY_RECENTLY_RELEASED]: [],
  },
  page: 1,
  totalPages: 0,
  nextBatchState: STATE_INITIAL,
};

export const filmsReducer = createReducer(initialState, {
  [SET_STATE]: (st, state) => ({...st, state}),
  [SET_FILMS]: (st, newFilms) => ({
    ...st,
    films: [...st.films].concat(newFilms),
  }),
  [SET_PAGE]: (st, page) => ({...st, page}),
  [SET_TOTAL_PAGES]: (st, totalPages) => ({...st, totalPages}),
  [SET_NEXT_BATCH_STATE]: (st, nextBatchState) => ({...st, nextBatchState}),
});
