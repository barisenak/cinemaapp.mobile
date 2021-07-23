import React from 'react';

import ThemeProvider from './ThemeProvider.connect';

export function withTheme(getStyle) {
  return Component => {
    return props => {
      return (
        <ThemeProvider>
          {({th, theme}) => (
            <Component
              {...props}
              th={(key, options) => th(`${theme}`, options)}
              styles={getStyle(theme)}
            />
          )}
        </ThemeProvider>
      );
    };
  };
}
