import {StyleSheet} from 'react-native';
import {white, blue, black, gutter} from 'app/styles/colors.style';

export const styles = StyleSheet.create({
  signInContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 250,
    backgroundColor: white,
  },

  registerContainer: {
    // REVIEW: You can find {gutter} variable in "styles/structure.style".
    // It's better to create all indents based on shared variable.
    // For example:
    //
    // marginTop: gutter * 2,
    //
    marginTop: 35,
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
