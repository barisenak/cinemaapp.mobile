import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import Language from './Language.component';

import {languageSelector} from 'app/redux/settings/settings.selector';

import {setLanguage} from 'app/redux/settings/settings.action';

export default connect(
  createStructuredSelector({
    language: languageSelector,
  }),
  {
    setLanguage,
  },
  (stateProps, dispatchProps, ownProps) => {
    return {
      ...stateProps,
      ...dispatchProps,
      ...ownProps,

      onChangeLanguage: lang => {
        dispatchProps.setLanguage(lang);
      },
    };
  },
)(Language);
