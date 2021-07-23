import {connect} from 'react-redux';

import Settings from './Settings.component';

import {userDataSelector} from 'app/redux/user/user.selector';
import {removeUserInfo} from 'app/redux/user/user.action';
import {
  languageSelector,
  themeSelector,
} from 'app/redux/settings/settings.selector';
import {createStructuredSelector} from 'reselect';
import {setLanguage, setTheme} from 'app/redux/settings/settings.action';

export default connect(
  st =>
    createStructuredSelector({
      user: userDataSelector,
      language: languageSelector,
      theme: themeSelector,
    }),
  {
    removeUserInfo: removeUserInfo,
    setLanguage: setLanguage,
    setTheme: setTheme,
  },
  (stateProps, dispatchProps, ownProps) => {
    return {
      ...stateProps,
      ...dispatchProps,
      ...ownProps,

      onPressLogOut: () => {
        dispatchProps.removeUserInfo();
      },

      onChangeLanguage: lang => {
        dispatchProps.setLanguage(lang);
      },

      onChangeTheme: theme => {
        dispatchProps.setTheme(theme);
      },
    };
  },
)(Settings);
