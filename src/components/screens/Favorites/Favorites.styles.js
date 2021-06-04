import {StyleSheet} from 'react-native';
import {white, blue, black} from 'app/styles/colors.style';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
  },

  signInContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  card: {
    width: 120,
    height: 170,
    marginRight: 7,
    marginTop: 7,
  },

  emptySection: {
    marginLeft: '15%',
    marginTop: 270,
    color: 'grey',
  },

  navTabWrapper: {
    justifyContent: 'center',
    flexDirection: 'row',
    textAlign: 'center',
  },

  sectionContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    marginLeft: 14,
  },
});
