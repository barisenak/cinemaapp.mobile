import {connect} from 'react-redux';

import {LocaleProvider} from './LocaleProvider.provider';

import {languageSelector} from 'app/redux/settings/settings.selector';
import {createStructuredSelector} from 'reselect';

export default connect(
  createStructuredSelector({
    language: languageSelector,
  }),
  {},
  (stateProps, dispatchProps, ownProps) => {
    return {
      ...stateProps,
      ...dispatchProps,
      ...ownProps,
    };
  },
)(LocaleProvider);
