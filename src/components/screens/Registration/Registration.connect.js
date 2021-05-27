import {connect} from 'react-redux';

import {userDataSelector} from 'app/redux/user/user.selector';
import {errorTextSelector} from 'app/redux/register/register.selector';

import {
  setRegisterTypedEmail,
  setRegisterTypedPassword,
  setRegisterData,
} from 'app/redux/register/register.action';

import Registration from './Registration.component';

import {
  typedEmailSelector,
  typedPasswordSelector,
} from 'app/redux/register/register.selector';

export default connect(
  st => ({
    userData: userDataSelector(st),
    typedEmail: typedEmailSelector(st),
    typedPassword: typedPasswordSelector(st),
    errorText: errorTextSelector(st),
  }),
  {
    setRegisterData: setRegisterData,
    setTypedEmail: setRegisterTypedEmail,
    setTypedPassword: setRegisterTypedPassword,
  },
)(Registration);
