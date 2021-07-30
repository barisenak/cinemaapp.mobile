import React from 'react';

import {ThemeProvider} from './ThemeProvider.provider';

export function withTheme(getStyle) {
  return Component => {
    return props => {
      return (
        <ThemeProvider>
          {({theme}) => {
            return <Component {...props} styles={getStyle(theme)} />;
          }}
        </ThemeProvider>
      );
    };
  };
}
