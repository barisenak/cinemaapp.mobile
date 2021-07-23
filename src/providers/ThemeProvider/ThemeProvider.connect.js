import {connect} from 'react-redux';

import {ThemeProvider} from './ThemeProvider.provider';

import {themeSelector} from 'app/redux/settings/settings.selector';
import {createStructuredSelector} from 'reselect';
import {setTheme} from 'app/redux/settings/settings.action';

export default connect(
  createStructuredSelector({
    appTheme: themeSelector,
  }),
  {
    setTheme: setTheme,
  },
  (stateProps, dispatchProps, ownProps) => {
    return {
      ...stateProps,
      ...dispatchProps,
      ...ownProps,
      onChangeTheme: theme => {
        dispatchProps.setTheme(theme);
      },
    };
  },
)(ThemeProvider);
