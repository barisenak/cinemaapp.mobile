import {StyleSheet} from 'react-native';
import {gutter} from 'app/styles/structure.style';

export const getStyle = theme =>
  StyleSheet.create({
    screenBackground: {
      backgroundColor: theme.white,
      flexGrow: 1,
      paddingHorizontal: gutter,
      paddingBottom: gutter * 2,
      paddingTop: 30,
      alignItems: 'center',
      // height: 1000,
    },

    listContainer: {
      width: '100%',
      marginTop: 10,
    },

    input: {
      width: '80%',
      borderWidth: 1,
      borderColor: theme.black,
      color: theme.black,
      height: 40,
    },

    wrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
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

    flatList: {
      flexGrow: 1,
      height: '95%',
    },
  });
