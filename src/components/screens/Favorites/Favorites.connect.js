import {connect} from 'react-redux';

import {selectedTabSelector} from 'app/redux/favorites/favorites.selector';
import {userDataSelector} from 'app/redux/user/user.selector';
import {setSelectedTab} from 'app/redux/favorites/favorites.action';

import Favorites from './Favorites.component';

export default connect(
  st => ({
    selectedTab: selectedTabSelector(st),
    userData: userDataSelector(st),
  }),
  {
    setSelectedTab: setSelectedTab,
  },
)(Favorites);
