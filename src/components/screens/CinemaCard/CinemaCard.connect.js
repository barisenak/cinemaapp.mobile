import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {cinemaCardSelector} from 'app/redux/cinema/cinema.selector';
import {userDataSelector} from 'app/redux/user/user.selector';

import {getFilmCard} from 'app/redux/film/film.action';

import CinemaCard from './CinemaCard.component';

export default connect(
  createStructuredSelector({
    cinema: cinemaCardSelector,
    user: userDataSelector,
  }),
  {
    getFilmCard,
  },
)(CinemaCard);
