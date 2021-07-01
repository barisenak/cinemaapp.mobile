import {connect} from 'react-redux';

import Settings from './Settings.component';

import {userDataSelector} from 'app/redux/user/user.selector';
import {clearUser} from 'app/redux/user/user.action';

export default connect(
  st => ({
    user: userDataSelector(st),
  }),
  {
    clearUser: clearUser,
  },
  (stateProps, dispatchProps, ownProps) => {
    return {
      ...stateProps,
      ...dispatchProps,
      ...ownProps,

      onPressLogOut: () => {
        dispatchProps.clearUser();
      },
    };
  },
)(Settings);
