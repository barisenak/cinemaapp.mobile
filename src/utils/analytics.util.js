// REVIEW: Unneeded import
import React from 'react';

import analytics from '@react-native-firebase/analytics';

// REVIEW: Let's change the func name
// `logAnalyticsEvent` for example
export const makeLogOnEvent = (event, screen) => {
  analytics().logEvent(event, {
    screenName: screen,
  });
};
