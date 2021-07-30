import {StyleSheet} from 'react-native';
import {gutter} from 'app/styles/structure.style';

export const getStyle = theme =>
  StyleSheet.create({
    signInContainer: {
      flex: 1,
      alignItems: 'center',
      paddingTop: 250,
      backgroundColor: theme.white,
    },

    registerContainer: {
      marginTop: gutter * 2,
      backgroundColor: theme.white,
    },

    text: {
      color: theme.black,
    },

    error: {
      color: 'red',
      marginTop: 30,
    },

    input: {
      borderWidth: 1,
      borderColor: theme.black,
      color: theme.black,
    },
  });
