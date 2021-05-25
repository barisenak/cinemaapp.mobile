import {connect} from 'react-redux';

import {selectedTabSelector} from 'app/redux/favorites/favorites.selector';
import {isLoggedInSelector} from 'app/redux/user/user.selector';
import {setSelectedTab} from 'app/redux/favorites/favorites.action';

import Favorites from './Favorites.component';

export default connect(
  st => ({
    selectedTab: selectedTabSelector(st),
    isLoggedIn: isLoggedInSelector(st),
  }),
  {
    setSelectedTab: setSelectedTab,
  },
)(Favorites);
