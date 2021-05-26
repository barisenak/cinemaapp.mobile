import {connect} from 'react-redux';

import {filmCardSelector} from 'app/redux/film/film.selector';

import FilmCard from './FilmCard.component';

export default connect(st => ({
  film: filmCardSelector(st),
}))(FilmCard);
