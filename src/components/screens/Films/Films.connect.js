import {connect} from 'react-redux';

import {
  stateSelector,
  filmListSelector,
  pageSelector,
  totalPagesSelector,
  nextBatchStateSelector,
} from 'app/redux/films/films.selector';

import {getFilms, setPage, getNewFilms} from 'app/redux/films/films.action';

import Films from './Films.component';

export default connect(
  st => ({
    state: stateSelector(st),
    films: filmListSelector(st),
    page: pageSelector(st),
    totalPages: totalPagesSelector(st),
    nextBatchState: nextBatchStateSelector(st),
  }),
  {
    loadFilms: getFilms,
    loadNewFilms: getNewFilms,
    setPage: setPage,
  },
)(Films);
