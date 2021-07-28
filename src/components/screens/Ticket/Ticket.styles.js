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

    text: {
      color: theme.black,
      marginBottom: 20,
    },

    marginLocation: {
      marginTop: 30,
    },

    map: {
      width: '100%',
      height: 300,
    },
  });
