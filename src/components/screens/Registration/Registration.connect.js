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
import {createStructuredSelector} from 'reselect';

export default connect(
  createStructuredSelector({
    userData: userDataSelector,
    typedEmail: typedEmailSelector,
    typedPassword: typedPasswordSelector,
    errorText: errorTextSelector,
  }),

  {
    setRegisterData: setRegisterData,
    setTypedEmail: setRegisterTypedEmail,
    setTypedPassword: setRegisterTypedPassword,
  },

  (stateProps, dispatchProps, ownProps) => {
    return {
      ...stateProps,
      ...dispatchProps,
      ...ownProps,
      onPressSignUp: () => {
        dispatchProps.setRegisterData({
          email: stateProps.typedEmail,
          password: stateProps.typedPassword,
        });
      },
    };
  },
)(Registration);
