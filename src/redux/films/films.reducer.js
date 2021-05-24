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
  // films: [],
  films: {
    [CATEGORY_COMEDY]: [],
    [CATEGORY_DRAMA]: [],
    [CATEGORY_BIOGRAPHY]: [],
    [CATEGORY_RECENTLY_RELEASED]: [],
  },
  page: {
    [CATEGORY_COMEDY]: 1,
    [CATEGORY_DRAMA]: 1,
    [CATEGORY_BIOGRAPHY]: 1,
    [CATEGORY_RECENTLY_RELEASED]: 1,
  },
  totalPages: {
    [CATEGORY_COMEDY]: 0,
    [CATEGORY_DRAMA]: 0,
    [CATEGORY_BIOGRAPHY]: 0,
    [CATEGORY_RECENTLY_RELEASED]: 0,
  },
  nextBatchState: STATE_INITIAL,
};

export const filmsReducer = createReducer(initialState, {
  [SET_STATE]: (st, state) => ({...st, state}),

  [SET_FILMS]: (st, {data, category}) => ({
    ...st,
    films: {
      ...st.films,
      [category]: [...st.films[category]].concat(data),
    },
  }),

  [SET_PAGE]: (st, {page, category}) => ({
    ...st,
    page: {
      ...st.page,
      [category]: page,
    },
  }),

  [SET_TOTAL_PAGES]: (st, {totalPages, category}) => ({
    ...st,
    totalPages: {
      ...st.totalPages,
      [category]: totalPages,
    },
  }),

  [SET_NEXT_BATCH_STATE]: (st, nextBatchState) => ({...st, nextBatchState}),
});
