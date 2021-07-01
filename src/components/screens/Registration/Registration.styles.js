import {StyleSheet} from 'react-native';
import {white} from 'app/styles/colors.style';
import {gutter} from 'app/styles/structure.style';

export const styles = StyleSheet.create({
  signInContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 250,
    backgroundColor: white,
  },

  registerContainer: {
    marginTop: gutter * 2,
    backgroundColor: white,
  },

  button: {
    width: 100,
  },

  error: {
    color: 'red',
    marginTop: 30,
  },
});
