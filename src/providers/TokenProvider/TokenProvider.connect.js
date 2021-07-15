import {connect} from 'react-redux';

import {getUser} from 'app/redux/auth/auth.action';

import {TokenProvider} from './TokenProvider.provider';
import {setLanguage} from 'app/redux/settings/settings.action';

export default connect(st => ({}), {
  getUser: getUser,
  setLanguage: setLanguage,
})(TokenProvider);
