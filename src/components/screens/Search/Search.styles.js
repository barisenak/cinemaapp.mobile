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
      alignItems: 'center',
      height: 1000,
    },

    screenBackground: {
      backgroundColor: theme.white,
    },

    listContainer: {
      width: '100%',
      marginTop: 10,
    },

    input: {
      borderWidth: 1,
      borderColor: theme.black,
      color: theme.black,
      height: 40,
    },

    cardWrapper: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: theme.lightGreen,
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
