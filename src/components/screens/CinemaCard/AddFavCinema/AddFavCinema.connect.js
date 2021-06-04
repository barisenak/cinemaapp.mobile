import {connect} from 'react-redux';

import {userDataSelector} from 'app/redux/user/user.selector';

import {addFavoriteCinema} from 'app/redux/cinema/cinema.action';

import AddFavCinema from './AddFavCinema.component';

export default connect(
  st => ({
    user: userDataSelector(st),
  }),
  {
    addFavoriteCinema: addFavoriteCinema,
  },
)(AddFavCinema);
