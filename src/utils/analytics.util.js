import React from 'react';

import analytics from '@react-native-firebase/analytics';

export const makeLogOnEvent = (event, screen) => {
  analytics().logEvent(event, {
    screenName: screen,
  });
};
