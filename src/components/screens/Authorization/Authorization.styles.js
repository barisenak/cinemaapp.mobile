import {StyleSheet} from 'react-native';
import {white, blue, black} from 'app/styles/colors.style';

export const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: black,
    height: 30,
    width: '95%',
  },

  signInContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: white,
  },

  registerContainer: {
    marginTop: 35,
    backgroundColor: white,
  },
  button: {
    width: 100,
  },
});
