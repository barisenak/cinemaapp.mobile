import {StyleSheet} from 'react-native';
import {white} from 'app/styles/colors.style';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: white,
  },

  screenBackground: {
    backgroundColor: white,
  },

  text: {
    marginBottom: 20,
  },

  marginLocation: {
    marginTop: 30,
  },

  map: {
    width: '100%',
    height: '100%',
  },

  icon: {
    marginRight: 10,
  },

  img: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },

  pointContainer: {
    padding: 30,
  },
});
