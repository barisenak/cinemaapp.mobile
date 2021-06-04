import {connect} from 'react-redux';

import {cinemaCardSelector} from 'app/redux/cinema/cinema.selector';

import CinemaCard from './CinemaCard.component';
import {getFilmCard} from 'app/redux/film/film.action';
import {userDataSelector} from 'app/redux/user/user.selector';

export default connect(
  st => ({
    cinema: cinemaCardSelector(st),
    user: userDataSelector(st),
  }),
  {
    getFilmCard: getFilmCard,
  },
)(CinemaCard);
