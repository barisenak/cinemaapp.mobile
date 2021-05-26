import {connect} from 'react-redux';

import {
  stateSelector,
  filmListSelector,
  pageSelector,
  totalPagesSelector,
  nextBatchStateSelector,
} from 'app/redux/films/films.selector';

import {filmCardSelector} from 'app/redux/film/film.selector';

import {
  getFilms,
  setPage,
  getNewFilms,
  getComedyFilms,
} from 'app/redux/films/films.action';

import Films from './Films.component';
import {getFilmCard} from 'app/redux/film/film.action';

export default connect(
  st => ({
    state: stateSelector(st),
    films: filmListSelector(st),
    film: filmCardSelector(st),
    page: pageSelector(st),
    totalPages: totalPagesSelector(st),
    nextBatchState: nextBatchStateSelector(st),
  }),
  {
    loadFilms: getFilms,
    loadComedyFilms: getComedyFilms,
    loadNewFilms: getNewFilms,
    setPage: setPage,
    getFilmCard: getFilmCard,
  },
)(Films);
