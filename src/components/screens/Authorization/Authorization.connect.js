import {connect} from 'react-redux';

import {stateSelector} from 'app/redux/films/films.selector';
import {setUserData} from 'app/redux/auth/auth.action';

import Authorization from './Authorization.component';

export default connect(
  st => ({
    state: stateSelector(st),
  }),
  {
    setUserData: setUserData,
  },
)(Authorization);
