import {connect} from 'react-redux';

import {cinemaCardSelector} from 'app/redux/cinema/cinema.selector';

import CinemaCard from './CinemaCard.component';
import {getFilmCard} from 'app/redux/film/film.action';
import {userDataSelector} from 'app/redux/user/user.selector';
import {createStructuredSelector} from 'reselect';

export default connect(
  st =>
    createStructuredSelector({
      cinema: cinemaCardSelector,
      user: userDataSelector,
    }),
  {
    getFilmCard: getFilmCard,
  },
)(CinemaCard);
