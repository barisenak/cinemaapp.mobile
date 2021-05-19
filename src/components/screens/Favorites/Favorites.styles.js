import {StyleSheet} from 'react-native';
import {white, blue, black} from 'app/styles/colors.style';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  signInContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  card: {
    width: 110,
    height: 150,
    marginRight: 7,
    marginTop: 10,
  },
  button: {
    width: 100,
  },

  navTabWrapper: {
    justifyContent: 'center',
    flexDirection: 'row',
    textAlign: 'center',
  },
});
