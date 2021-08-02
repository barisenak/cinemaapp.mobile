import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {
  stateSelector,
  filmListSelector,
  pageSelector,
  totalPagesSelector,
  nextBatchStateSelector,
} from 'app/redux/films/films.selector';
import {filmCardSelector} from 'app/redux/film/film.selector';
import {userDataSelector} from 'app/redux/user/user.selector';

import {
  getFilms,
  setPage,
  getNewFilms,
  getComedyFilms,
} from 'app/redux/films/films.action';
import {getFilmCard} from 'app/redux/film/film.action';
import {getAccessToken} from 'app/redux/auth/auth.action';

import Films from './Films.component';
import {
  CATEGORY_BIOGRAPHY,
  CATEGORY_COMEDY,
  CATEGORY_DRAMA,
  CATEGORY_RECENTLY_RELEASED,
} from 'app/enum/category.enum';

export default connect(
  createStructuredSelector({
    state: stateSelector,
    films: filmListSelector,
    film: filmCardSelector,
    page: pageSelector,
    totalPages: totalPagesSelector,
    nextBatchState: nextBatchStateSelector,
    user: userDataSelector,
  }),
  {
    loadFilms: getFilms,
    loadComedyFilms: getComedyFilms,
    loadNewFilms: getNewFilms,
    setPage,
    getFilmCard,
    getAccessToken,
  },
  (stateProps, dispatchProps, ownProps) => {
    return {
      ...stateProps,
      ...dispatchProps,
      ...ownProps,
      loadAllFilms: () => {
        dispatchProps.loadFilms({
          page: stateProps.page[CATEGORY_RECENTLY_RELEASED],
          category: CATEGORY_RECENTLY_RELEASED,
        });
        dispatchProps.loadFilms({
          page: stateProps.page[CATEGORY_COMEDY],
          category: CATEGORY_COMEDY,
        });
        dispatchProps.loadFilms({
          page: stateProps.page[CATEGORY_DRAMA],
          category: CATEGORY_DRAMA,
        });
        dispatchProps.loadFilms({
          page: stateProps.page[CATEGORY_BIOGRAPHY],
          category: CATEGORY_BIOGRAPHY,
        });
      },
    };
  },
)(Films);
