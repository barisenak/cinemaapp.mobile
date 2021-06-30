import {StyleSheet} from 'react-native';
import {white} from 'app/styles/colors.style';
import {gutter} from 'app/styles/structure.style';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: white,
    paddingHorizontal: gutter,
    paddingBottom: gutter * 2,
    paddingTop: 30,
    alignItems: 'center',
  },

  screenBackground: {
    backgroundColor: white,
  },

  listContainer: {
    width: '100%',
    marginTop: 10,
  },

  cardWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f0f7f4',
    marginBottom: 7,
  },

  card: {
    width: 60,
    height: 90,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5,
  },
});
