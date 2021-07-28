import {StyleSheet} from 'react-native';
import {gutter} from 'app/styles/structure.style';

export const getStyle = theme =>
  StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: theme.white,
      paddingHorizontal: gutter,
      paddingBottom: gutter * 2,
      paddingTop: 30,
    },

    screenBackground: {
      backgroundColor: theme.white,
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

    text: {
      color: theme.black,
      marginRight: 60,
    },
  });
