import {StyleSheet} from 'react-native';
import {white, blue, black} from '../../../styles/colors.style';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: white,
  },

  screenBackground: {
    backgroundColor: 'white',
  },

  textBlock: {
    marginTop: 20,
  },

  image: {
    width: '100%',
    height: 560,
  },

  icon: {
    marginRight: 12,
  },

  card: {
    width: 120,
    height: 170,
    marginRight: 7,
    marginTop: 7,
  },

  sectionContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    marginLeft: 7,
  },
});
