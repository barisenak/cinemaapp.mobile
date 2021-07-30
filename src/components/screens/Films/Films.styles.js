import {StyleSheet} from 'react-native';

export const getStyles = theme =>
  StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: theme.white,
    },

    screenBackground: {
      backgroundColor: theme.white,
    },

    text: {
      color: theme.black,
    },

    category: {
      width: '100%',
      paddingVertical: 8.5,
      paddingLeft: 10,
      fontWeight: 'bold',
      justifyContent: 'center',
      fontSize: 17,
      marginTop: 10,
      color: theme.black,
    },

    card: {
      width: 120,
      height: 170,
      marginRight: 7,
      marginTop: 10,
    },

    sectionContainer: {
      marginBottom: 20,
    },

    emptySection: {
      marginLeft: 10,
    },

    icon: {
      marginRight: 10,
    },

    indicatorContainer: {
      paddingTop: 50,
    },
  });
