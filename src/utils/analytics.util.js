import analytics from '@react-native-firebase/analytics';

export const logAnalyticsEvent = (event, screen) => {
  analytics().logEvent(event, {
    screenName: screen,
  });
};
