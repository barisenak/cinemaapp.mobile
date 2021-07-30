import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {
  cinemasWithFilmSelector,
  filmCardSelector,
} from 'app/redux/film/film.selector';
import {userDataSelector} from 'app/redux/user/user.selector';
import {languageSelector} from 'app/redux/settings/settings.selector';

import {getCinemaCard} from 'app/redux/cinema/cinema.action';

import FilmCard from './FilmCard.component';

export default connect(
  createStructuredSelector({
    film: filmCardSelector,
    cinemas: cinemasWithFilmSelector,
    user: userDataSelector,
    language: languageSelector,
  }),
  {
    getCinemaCard,
  },
)(FilmCard);
