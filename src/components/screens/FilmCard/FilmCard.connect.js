import {connect} from 'react-redux';

import {
  cinemasWithFilmSelector,
  filmCardSelector,
} from 'app/redux/film/film.selector';

import FilmCard from './FilmCard.component';
import {getCinemaCard} from 'app/redux/cinema/cinema.action';
import {userDataSelector} from 'app/redux/user/user.selector';
import {languageSelector} from 'app/redux/settings/settings.selector';
import {createStructuredSelector} from 'reselect';

export default connect(
  createStructuredSelector({
    film: filmCardSelector,
    cinemas: cinemasWithFilmSelector,
    user: userDataSelector,
    language: languageSelector,
  }),
  {
    getCinemaCard: getCinemaCard,
  },
)(FilmCard);
