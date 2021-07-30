import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {
  setAuthTypedEmail,
  setAuthTypedPassword,
  setUserData,
} from 'app/redux/auth/auth.action';

import {
  typedEmailSelector,
  typedPasswordSelector,
  errorTextSelector,
} from 'app/redux/auth/auth.selector';

import {REGISTRATION} from 'app/enum/navigation.enum';

import Authorization from './Authorization.component';

export default connect(
  createStructuredSelector({
    typedEmail: typedEmailSelector,
    typedPassword: typedPasswordSelector,
    errorText: errorTextSelector,
  }),
  {
    setUserData,
    setTypedEmail: setAuthTypedEmail,
    setTypedPassword: setAuthTypedPassword,
  },
  (stateProps, dispatchProps, ownProps) => {
    return {
      ...stateProps,
      ...dispatchProps,
      ...ownProps,

      onPressRegister: () => {
        dispatchProps.setTypedPassword('');
        ownProps.navigation.navigate(REGISTRATION, {
          prevScreen: ownProps.route.params.prevScreen,
        });
      },

      onPressSignIn: () => {
        dispatchProps.setUserData({
          email: stateProps.typedEmail,
          password: stateProps.typedPassword,
        });
      },
    };
  },
)(Authorization);
