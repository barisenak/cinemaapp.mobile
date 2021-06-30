import {gutter} from 'app/styles/structure.style';
import {StyleSheet} from 'react-native';
import {white} from 'app/styles/colors.style';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: white,
    paddingHorizontal: gutter,
    paddingBottom: gutter * 2,
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
    marginBottom: gutter,
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

  infoContainer: {
    marginVertical: gutter / 2,
  },

  intoTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  infoIcon: {marginRight: gutter / 2},
  infoTitle: {fontWeight: 'bold'},
  infoValue: {marginTop: gutter / 4},
});
