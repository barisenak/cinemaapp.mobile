import {connect} from 'react-redux';

import {isLoggedInSelector} from 'app/redux/user/user.selector';
import {setTypedEmail, setTypedPassword} from 'app/redux/auth/auth.action';
import {setRegisterData} from 'app/redux/register/register.action';

import Registration from './Registration.component';

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
    setRegisterData: setRegisterData,
    setTypedEmail: setTypedEmail,
    setTypedPassword: setTypedPassword,
  },
)(Registration);
