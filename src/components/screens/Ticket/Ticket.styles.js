import {StyleSheet} from 'react-native';
// REVIEW: import
import {white, blue, black} from '../../../styles/colors.style';
import {gutter} from 'app/styles/structure.style';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: white,
    paddingHorizontal: gutter,
    paddingBottom: gutter * 2,
    paddingTop: 30,
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
    height: 300,
  },
});
