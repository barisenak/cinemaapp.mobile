import {connect} from 'react-redux';

import {getUser} from 'app/redux/auth/auth.action';

import {TokenProvider} from './TokenProvider.provider';

export default connect(st => ({}), {
  getUser,
})(TokenProvider);
