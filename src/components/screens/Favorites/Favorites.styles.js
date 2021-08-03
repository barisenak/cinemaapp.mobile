import {StyleSheet} from 'react-native';

import {gutter} from 'app/styles/structure.style';

export const getStyles = theme =>
  StyleSheet.create({
    screenBackground: {
      backgroundColor: theme.white,
      alignItems: 'center',
      paddingTop: 10,
      flexGrow: 1,
      paddingHorizontal: gutter,
      paddingBottom: gutter * 2,
    },

    signInContainer: {
      marginTop: -67,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

    card: {
      width: 123,
      height: 170,
      marginTop: gutter / 2,
      marginRight: 2,
      marginLeft: 1,
    },

    emptyContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },

    emptyText: {
      color: 'grey',
    },

    navTabWrapper: {
      justifyContent: 'center',
      flexDirection: 'row',
      textAlign: 'center',
    },

    sectionContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      width: '100%',
      height: '100%',
    },

    cardsContainer: {
      display: 'flex',
      width: '100%',

      justifyContent: 'flex-start',
    },

    text: {
      color: theme.black,
    },

    flatList: {
      height: '100%',
    },
  });
