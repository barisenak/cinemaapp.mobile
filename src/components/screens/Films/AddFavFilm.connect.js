import {connect} from 'react-redux';

import {userDataSelector} from 'app/redux/user/user.selector';

import {addFavoriteFilm} from 'app/redux/film/film.action';

import AddFavFilm from './AddFavFilm.component';

export default connect(
  st => ({
    user: userDataSelector(st),
  }),
  {
    addFavoriteFilm: addFavoriteFilm,
  },
)(AddFavFilm);
