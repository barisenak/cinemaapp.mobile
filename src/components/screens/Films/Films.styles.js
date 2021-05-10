import {StyleSheet} from 'react-native';
import {white} from '../../../styles/colors.style';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  category: {
    width: '100%',
    paddingVertical: 8.5,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#000000',
    borderWidth: 0.2,
    backgroundColor: '#5BA6FF',
    fontSize: 17,
    marginTop: 10,
  },
  card: {
    width: 110,
    height: 150,
    marginRight: 7,
    marginTop: 10,
  },
});
