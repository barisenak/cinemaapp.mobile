import {StyleSheet} from 'react-native';

import {black} from 'app/styles/colors.style';
import {gutter} from 'app/styles/structure.style';

export const getStyle = theme =>
  StyleSheet.create({
    screenBackground: {
      flexGrow: 1,
      backgroundColor: theme.white,
      paddingHorizontal: gutter,
      paddingBottom: gutter * 2,
      paddingTop: 10,
    },

    ticketsContainer: {
      width: '100%',
      marginBottom: 27,
      borderColor: black,
      borderWidth: 2,
      height: 170,
      justifyContent: 'center',
      opacity: 0.8,
    },

    ticketText: {
      fontSize: 19.5,
      color: '#e3e3e3',
      paddingBottom: 5,
      paddingTop: 5,
      marginLeft: 15,
    },

    textContainer: {
      width: '100%',
      backgroundColor: black,
      height: 115,
      marginTop: 5,
      justifyContent: 'center',
    },

    indicatorContainer: {
      paddingTop: 50,
    },

    navTabWrapper: {
      justifyContent: 'center',
      flexDirection: 'row',
      textAlign: 'center',
    },

    signInContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

    emptyContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },

    emptyText: {
      color: 'grey',
    },

    text: {
      color: theme.black,
    },

    sectionContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      width: '100%',
      height: '100%',
      justifyContent: 'space-between',
      textAlign: 'center',
    },

    flatList: {
      flexGrow: 1,
      height: '95%',
    },
  });
