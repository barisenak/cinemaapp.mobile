import {connect} from 'react-redux';

import {
  cinemasWithFilmSelector,
  filmCardSelector,
} from 'app/redux/film/film.selector';

import FilmCard from './FilmCard.component';
import {getCinemaCard} from 'app/redux/cinema/cinema.action';
import {userDataSelector} from 'app/redux/user/user.selector';
import {languageSelector} from 'app/redux/settings/settings.selector';

export default connect(
  st => ({
    film: filmCardSelector(st),
    cinemas: cinemasWithFilmSelector(st),
    user: userDataSelector(st),
    language: languageSelector(st),
  }),
  {
    getCinemaCard: getCinemaCard,
  },
)(FilmCard);
