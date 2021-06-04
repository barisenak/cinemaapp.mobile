import {connect} from 'react-redux';

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

import Films from './Films.component';
import {getFilmCard} from 'app/redux/film/film.action';
import {getAccessToken} from 'app/redux/auth/auth.action';

export default connect(
  st => ({
    state: stateSelector(st),
    films: filmListSelector(st),
    film: filmCardSelector(st),
    page: pageSelector(st),
    totalPages: totalPagesSelector(st),
    nextBatchState: nextBatchStateSelector(st),
    user: userDataSelector(st),
  }),
  {
    loadFilms: getFilms,
    loadComedyFilms: getComedyFilms,
    loadNewFilms: getNewFilms,
    setPage: setPage,
    getFilmCard: getFilmCard,
    getAccessToken: getAccessToken,
  },
)(Films);
