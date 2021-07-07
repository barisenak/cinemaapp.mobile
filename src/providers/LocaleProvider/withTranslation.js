import React from 'react';

import LocaleProvider from './LocaleProvider.connect';

export function withTranslation(namespace) {
  return Component => {
    return props => {
      return (
        <LocaleProvider>
          {({ts}) => (
            <Component
              {...props}
              ts={(key, options) => ts(`${namespace}.${key}`, options)}
            />
          )}
        </LocaleProvider>
      );
    };
  };
}
