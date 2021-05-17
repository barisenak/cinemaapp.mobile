import {connect} from 'react-redux';

import {
  stateSelector,
  filmListSelector,
  pageSelector,
} from 'app/redux/films/films.selector';
import {getFilms, setPage} from 'app/redux/films/films.action';

import Films from './Films.component';

export default connect(
  st => ({
    state: stateSelector(st),
    films: filmListSelector(st),
    page: pageSelector(st),
  }),
  {
    loadFilms: getFilms,
    setPage: setPage,
  },
)(Films);
