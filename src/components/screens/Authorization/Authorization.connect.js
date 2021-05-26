import {connect} from 'react-redux';

import {isLoggedInSelector} from 'app/redux/user/user.selector';
import {
  setTypedEmail,
  setTypedPassword,
  setUserData,
} from 'app/redux/auth/auth.action';

import Authorization from './Authorization.component';
import {
  typedEmailSelector,
  typedPasswordSelector,
} from 'app/redux/auth/auth.selector';

export default connect(
  st => ({
    isLoggedIn: isLoggedInSelector(st),
    typedEmail: typedEmailSelector(st),
    typedPassword: typedPasswordSelector(st),
  }),
  {
    setUserData: setUserData,
    setTypedEmail: setTypedEmail,
    setTypedPassword: setTypedPassword,
  },
)(Authorization);
