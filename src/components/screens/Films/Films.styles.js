import {StyleSheet} from 'react-native';
import {white, blue, black} from '../../../styles/colors.style';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: white,
  },
  category: {
    width: '100%',
    paddingVertical: 8.5,
    paddingLeft: 10,
    fontWeight: 'bold',
    justifyContent: 'center',
    fontSize: 17,
    marginTop: 10,
  },
  card: {
    width: 110,
    height: 150,
    marginRight: 7,
    marginTop: 10,
  },
  sectionContainer: {
    marginBottom: 20,
  },
});
