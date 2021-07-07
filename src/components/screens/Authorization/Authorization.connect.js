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
import {REGISTRATION} from 'app/enum/navigation.enum';
import {createStructuredSelector} from 'reselect';
import {languageSelector} from 'app/redux/settings/settings.selector';

export default connect(
  createStructuredSelector({
    typedEmail: typedEmailSelector,
    typedPassword: typedPasswordSelector,
    errorText: errorTextSelector,
    language: languageSelector,
  }),
  {
    setUserData: setUserData,
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
