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
  },

  screenBackground: {
    backgroundColor: white,
  },

  btnContainer: {
    width: 100,
  },

  settingsContainer: {
    alignItems: 'center',
  },
});
