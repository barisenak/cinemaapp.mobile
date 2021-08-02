import {connect} from 'react-redux';

import {getFilmCard} from 'app/redux/film/film.action';
import {getCinemaCard} from 'app/redux/cinema/cinema.action';

import LittleTicketComponent from './LittleTicket.component';

export default connect(st => ({}), {
  getFilmCard,
  getCinemaCard,
})(LittleTicketComponent);
