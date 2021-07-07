import {StyleSheet} from 'react-native';
import {white} from 'app/styles/colors.style';
import {gutter} from 'app/styles/structure.style';
import {fontSize} from 'app/styles/font.style';

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

  settingsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  languageContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
  },

  languageText: {
    marginRight: 60,
  },
});
