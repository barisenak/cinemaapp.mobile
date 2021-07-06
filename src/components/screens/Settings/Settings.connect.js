import {connect} from 'react-redux';

import Settings from './Settings.component';

import {userDataSelector} from 'app/redux/user/user.selector';
import {removeUserInfo} from 'app/redux/user/user.action';
import {languageSelector} from 'app/redux/settings/settings.selector';

export default connect(
  st => ({
    user: userDataSelector(st),
    language: languageSelector(st),
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
