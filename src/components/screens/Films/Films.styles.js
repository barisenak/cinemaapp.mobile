import {StyleSheet} from 'react-native';
import {white} from 'app/styles/colors.style';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: white,
  },

  screenBackground: {
    backgroundColor: 'white',
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
    width: 120,
    height: 170,
    marginRight: 7,
    marginTop: 10,
  },

  sectionContainer: {
    marginBottom: 20,
  },

  emptySection: {
    marginLeft: 10,
  },

  icon: {
    marginRight: 10,
  },

  indicatorContainer: {
    paddingTop: 50,
  },
});
