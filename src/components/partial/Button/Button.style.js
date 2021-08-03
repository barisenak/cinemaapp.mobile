import {StyleSheet} from 'react-native';

import {gutter} from 'app/styles/structure.style';
import {active, black, gray, white} from 'app/styles/colors.style';

export const styles = StyleSheet.create({
  container: {
    minWidth: 100,
    backgroundColor: gray.light,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: gutter / 4,
    paddingHorizontal: gutter,
    borderRadius: 3,
    marginVertical: gutter / 4,
  },
  text: {
    textAlign: 'center',
  },
  disabledContainer: {
    opacity: 0.6,
  },

  primaryContainer: {
    backgroundColor: active,
  },

  heightContainer: {
    height: 40,
  },

  simpleContainer: {
    minWidth: 20,
    backgroundColor: 'transparent',
  },

  simpleText: {
    color: '#a3a3a3',
    fontSize: 25,
  },

  primaryText: {
    color: white,
  },

  linkContainer: {
    backgroundColor: 'transparent',
  },
  linkText: {
    textDecorationLine: 'underline',
  },
});
