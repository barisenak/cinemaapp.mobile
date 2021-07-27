import {StyleSheet} from 'react-native';
import {white} from 'app/styles/colors.style';

export const getStyles = theme =>
  StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: theme.white,
      position: 'relative',
    },

    screenBackground: {
      backgroundColor: theme.white,
    },

    textName: {
      fontWeight: '600',
      color: theme.black,
      marginBottom: 7,
      fontSize: 17,
    },

    text: {
      fontWeight: '300',
      color: theme.black,
    },

    marginLocation: {
      marginTop: 30,
    },

    map: {
      width: 400,
      height: 400,
    },

    icon: {
      marginRight: 10,
    },

    img: {
      width: 60,
      height: 60,
      borderRadius: 50,
    },

    imgInAnimation: {
      width: 73,
      height: 73,
    },

    pointContainer: {
      padding: 30,
    },

    myClusterStyle: {
      backgroundColor: 'orange',
      borderRadius: 50,
      width: 40,
      height: 40,
      justifyContent: 'center',
    },

    myClusterTextStyle: {
      textAlign: 'center',
    },

    fadingContainer: {
      position: 'absolute',
      transform: [{translateY: -100}],
      left: 0,
      height: 90,
    },

    fadingText: {
      fontSize: 28,
    },

    markerWrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      backgroundColor: theme.white,
      borderWidth: 0.3,
      borderColor: theme.black,
      width: 385,
      height: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 10,
      paddingRight: 10,
      marginHorizontal: 7,
    },
  });
