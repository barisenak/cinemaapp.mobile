import {StyleSheet} from 'react-native';
import {white, blue, black} from 'app/styles/colors.style';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },

  card: {
    width: 110,
    height: 150,
    marginRight: 7,
    marginTop: 10,
  },
  buttonContainer: {
    backgroundColor: blue,
    width: '50%',
    height: 50,
    borderWidth: 0.2,
    marginTop: 10,
  },
  buttonText: {
    color: black,
    textTransform: 'uppercase',
    textAlign: 'center',
    padding: 15,
  },
});
