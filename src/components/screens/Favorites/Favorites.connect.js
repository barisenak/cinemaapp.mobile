import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectedTabSelector} from 'app/redux/favorites/favorites.selector';
import {userDataSelector} from 'app/redux/user/user.selector';

import {setSelectedTab} from 'app/redux/favorites/favorites.action';
import {getFilmCard} from 'app/redux/film/film.action';
import {getCinemaCard} from 'app/redux/cinema/cinema.action';

import Favorites from './Favorites.component';

export default connect(
  createStructuredSelector({
    selectedTab: selectedTabSelector,
    userData: userDataSelector,
  }),
  {
    setSelectedTab,
    getFilmCard,
    getCinemaCard,
  },
)(Favorites);
