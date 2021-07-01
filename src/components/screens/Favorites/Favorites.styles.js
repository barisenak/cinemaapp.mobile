import {white} from 'app/styles/colors.style';
import {gutter} from 'app/styles/structure.style';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 10,
    flexGrow: 1,
    backgroundColor: white,
    paddingHorizontal: gutter,
    paddingBottom: gutter * 2,
  },

  signInContainer: {
    marginTop: -67,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  card: {
    width: 124,
    height: 173,
    marginTop: gutter / 2,
  },

  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  emptyText: {
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
    justifyContent: 'space-between',
  },
});
