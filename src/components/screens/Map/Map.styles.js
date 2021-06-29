import {StyleSheet} from 'react-native';
import {white, blue, black} from '../../../styles/colors.style';
import {gutter} from 'app/styles/structure.style';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: white,
  },

  screenBackground: {
    backgroundColor: 'white',
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
});
