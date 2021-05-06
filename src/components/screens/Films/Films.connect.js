import {connect} from 'react-redux';

import {stateSelector, filmListSelector} from 'app/redux/films/films.selector';
import {getFilms} from 'app/redux/films/films.action';

import Films from './Films.component';

export default connect(
  st => ({
    state: stateSelector(st),
    films: filmListSelector(st),
  }),
  {
    loadFilms: getFilms,
  },
)(Films);
