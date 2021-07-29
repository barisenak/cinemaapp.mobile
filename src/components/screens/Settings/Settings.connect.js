import {connect} from 'react-redux';

import Settings from './Settings.component';

import {userDataSelector} from 'app/redux/user/user.selector';
import {removeUserInfo} from 'app/redux/user/user.action';
import {languageSelector} from 'app/redux/settings/settings.selector';
import {createStructuredSelector} from 'reselect';

export default connect(
  createStructuredSelector({
    user: userDataSelector,
    language: languageSelector,
  }),
  {
    removeUserInfo: removeUserInfo,
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
