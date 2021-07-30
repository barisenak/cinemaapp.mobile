import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import Settings from './Settings.component';

import {userDataSelector} from 'app/redux/user/user.selector';
import {removeUserInfo} from 'app/redux/user/user.action';
import {languageSelector} from 'app/redux/settings/settings.selector';

export default connect(
  createStructuredSelector({
    user: userDataSelector,
    language: languageSelector,
  }),
  {
    removeUserInfo,
  },
  (stateProps, dispatchProps, ownProps) => {
    return {
      ...stateProps,
      ...dispatchProps,
      ...ownProps,

      onPressLogOut: () => {
        dispatchProps.removeUserInfo();
      },
    };
  },
)(Settings);
