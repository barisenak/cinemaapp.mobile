import {connect} from 'react-redux';

import {userDataSelector} from 'app/redux/user/user.selector';
import {errorTextSelector} from 'app/redux/auth/auth.selector';

import {
  setAuthTypedEmail,
  setAuthTypedPassword,
  setUserData,
} from 'app/redux/auth/auth.action';

import Authorization from './Authorization.component';
import {
  typedEmailSelector,
  typedPasswordSelector,
} from 'app/redux/auth/auth.selector';

export default connect(
  st => ({
    userData: userDataSelector(st),
    typedEmail: typedEmailSelector(st),
    typedPassword: typedPasswordSelector(st),
    errorText: errorTextSelector(st),
  }),
  {
    setUserData: setUserData,
    setTypedEmail: setAuthTypedEmail,
    setTypedPassword: setAuthTypedPassword,
  },
)(Authorization);
