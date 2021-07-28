import {connect} from 'react-redux';

import {selectedTabSelector} from 'app/redux/favorites/favorites.selector';
import {userDataSelector} from 'app/redux/user/user.selector';
import {setSelectedTab} from 'app/redux/favorites/favorites.action';
import {getFilmCard} from 'app/redux/film/film.action';

import Favorites from './Favorites.component';
import {getCinemaCard} from 'app/redux/cinema/cinema.action';
import {createStructuredSelector} from 'reselect';

export default connect(
  createStructuredSelector({
    selectedTab: selectedTabSelector,
    userData: userDataSelector,
  }),
  {
    setSelectedTab: setSelectedTab,
    getFilmCard: getFilmCard,
    getCinemaCard: getCinemaCard,
  },
)(Favorites);
