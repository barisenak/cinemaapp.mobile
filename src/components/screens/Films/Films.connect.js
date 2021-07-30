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
)(Films);
