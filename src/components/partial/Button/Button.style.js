import {StyleSheet} from 'react-native';

import {gutter} from 'app/styles/structure.style';
import {active, gray, white} from 'app/styles/colors.style';

export const styles = StyleSheet.create({
  container: {
    minWidth: 120,
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
