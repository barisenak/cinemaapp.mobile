import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {
  setRegisterTypedEmail,
  setRegisterTypedPassword,
  setRegisterData,
  setRegisterErrorText,
} from 'app/redux/register/register.action';

import {
  typedEmailSelector,
  typedPasswordSelector,
  errorTextSelector,
} from 'app/redux/register/register.selector';
import {userDataSelector} from 'app/redux/user/user.selector';

import Registration from './Registration.component';

export default connect(
  createStructuredSelector({
    userData: userDataSelector,
    typedEmail: typedEmailSelector,
    typedPassword: typedPasswordSelector,
    errorText: errorTextSelector,
  }),

  {
    setRegisterData,
    setTypedEmail: setRegisterTypedEmail,
    setTypedPassword: setRegisterTypedPassword,
    setRegisterErrorText,
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
