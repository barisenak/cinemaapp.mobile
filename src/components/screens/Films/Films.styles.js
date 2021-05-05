import {StyleSheet} from 'react-native';
import {white} from '../../../styles/colors.style';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: white,
  },
  category: {
    flex: 0,
    width: '100%',
    height: 40,
    paddingVertical: 8.5,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#000000',
    borderWidth: 0.2,
    backgroundColor: '#C3E8FA',
    margin: 10,
    fontSize: 17,
  },
});
